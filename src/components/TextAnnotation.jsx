import React, { useEffect, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { supabase } from '../lib/supabaseClient';

// Component for text annotation with feedback and question functionality
function TextAnnotation({ pageId, content, currentUser }) {
  const [comments, setComments] = useState([]);
  const [selectionRange, setSelectionRange] = useState(null);
  const [menuPos, setMenuPos] = useState({ top: 0, left: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [expandedCommentId, setExpandedCommentId] = useState(null);
  const [adminAnswer, setAdminAnswer] = useState("");

  // Fetch existing unresolved comments on mount
  useEffect(() => {
    const loadComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("page_id", pageId)
        .neq("status", "resolved");
      
      if (error) {
        console.error("Error fetching comments:", error);
        return;
      }
      
      if (data) {
        setComments(data);
      }
    };

    loadComments();
  }, [pageId]);

  // Handle text selection and menu positioning
  useEffect(() => {
    const handleMouseUp = () => {
      const sel = window.getSelection();
      if (sel && sel.toString().trim().length > 0) {
        const range = sel.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        setSelectionRange(range);
        
        // Position menu at the end of selection
        setMenuPos({
          top: rect.bottom + window.scrollY,
          left: Math.min(rect.right + window.scrollX, window.innerWidth - 100)
        });
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    document.addEventListener("mouseup", handleMouseUp);
    return () => document.removeEventListener("mouseup", handleMouseUp);
  }, []);

  // Create a new comment
  const addComment = async (type) => {
    if (!selectionRange) return;
    
    const selectedText = selectionRange.toString();
    const title = window.prompt(`Enter a short title for your ${type}:`);
    if (!title) return;
    
    const body = window.prompt("Enter the full comment text:");
    if (!body) return;

    const newComment = {
      page_id: pageId,
      selection_text: selectedText,
      title,
      body,
      type,
      status: "open",
      user_id: currentUser.id,
      pos_top: menuPos.top,
      pos_left: menuPos.left,
      created_at: new Date().toISOString()
    };

    const { data, error } = await supabase
      .from("comments")
      .insert(newComment)
      .select()
      .single();

    if (error) {
      console.error("Error creating comment:", error);
      return;
    }

    if (data) {
      setComments(prev => [...prev, data]);
    }

    // Clear selection and hide menu
    window.getSelection().removeAllRanges();
    setShowMenu(false);
    setSelectionRange(null);
  };

  // Resolve a comment and optionally add an admin answer
  const resolveComment = async (commentId, answer = null) => {
    const updateData = {
      status: "resolved",
      ...(answer && { answer }),
      resolved_at: new Date().toISOString(),
      resolved_by: currentUser.id
    };

    const { error } = await supabase
      .from("comments")
      .update(updateData)
      .eq("id", commentId);

    if (error) {
      console.error("Error resolving comment:", error);
      return;
    }

    setComments(prev => prev.filter(c => c.id !== commentId));
    setExpandedCommentId(null);
    setAdminAnswer("");
  };

  return (
    <div className="relative">
      {/* Content container */}
      <div className="prose max-w-none">{content}</div>

      {/* Comment icons */}
      {comments.map(comment => (
        <div key={comment.id}>
          <Tippy
            content={comment.title}
            placement="top"
            arrow={true}
            theme="light"
          >
            <div
              className="absolute cursor-pointer transform -translate-y-1/2"
              style={{
                top: comment.pos_top,
                left: comment.pos_left
              }}
              onClick={() => setExpandedCommentId(comment.id)}
            >
              {comment.type === "question" ? "❓" : "💬"}
            </div>
          </Tippy>

          {/* Expanded comment view */}
          {expandedCommentId === comment.id && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setExpandedCommentId(null)}
            >
              <div
                className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full mx-4"
                onClick={e => e.stopPropagation()}
              >
                <h3 className="font-bold text-lg mb-2">{comment.title}</h3>
                <p className="text-gray-700 mb-4">{comment.body}</p>
                
                {comment.type === "question" && currentUser.role === "admin" && (
                  <div className="mb-4">
                    <textarea
                      className="w-full p-2 border rounded"
                      rows="3"
                      placeholder="Enter your answer..."
                      value={adminAnswer}
                      onChange={e => setAdminAnswer(e.target.value)}
                    />
                    <button
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      onClick={() => resolveComment(comment.id, adminAnswer)}
                      disabled={!adminAnswer.trim()}
                    >
                      Submit Answer & Resolve
                    </button>
                  </div>
                )}

                {currentUser.role === "admin" && (
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                    onClick={() => resolveComment(comment.id)}
                  >
                    Mark as Resolved
                  </button>
                )}

                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  onClick={() => setExpandedCommentId(null)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Selection menu */}
      {showMenu && (
        <div
          className="fixed bg-white shadow-lg rounded-lg p-2 z-50 flex gap-2"
          style={{
            top: menuPos.top,
            left: menuPos.left
          }}
        >
          <button
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => addComment("feedback")}
          >
            💬 Feedback
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded"
            onClick={() => addComment("question")}
          >
            ❓ Question
          </button>
        </div>
      )}
    </div>
  );
}

export default TextAnnotation; 