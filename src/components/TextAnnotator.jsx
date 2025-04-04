import React, { useState, useEffect, useCallback } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Tippy } from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// Initialize Supabase client (replace with your actual credentials)
const supabaseUrl = 'your-project-url';
const supabaseKey = 'your-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

const TextAnnotator = ({ pageId, currentUser }) => {
  // State management
  const [selection, setSelection] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [comments, setComments] = useState([]);
  const [expandedComment, setExpandedComment] = useState(null);
  const [adminAnswer, setAdminAnswer] = useState('');

  // Styles for the floating menu and icons
  const styles = {
    floatingMenu: {
      position: 'absolute',
      zIndex: 1000,
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      display: showMenu ? 'flex' : 'none',
      top: `${menuPosition.top}px`,
      left: `${menuPosition.left}px`,
    },
    menuButton: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: '4px 8px',
      fontSize: '16px',
    },
    commentIcon: {
      position: 'absolute',
      cursor: 'pointer',
      fontSize: '16px',
    },
    tooltip: {
      padding: '8px',
      maxWidth: '300px',
    },
    expandedTooltip: {
      padding: '12px',
      background: 'white',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },
  };

  // Fetch comments on component mount
  useEffect(() => {
    fetchComments();
  }, [pageId]);

  const fetchComments = async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('page_id', pageId)
      .eq('status', 'open');

    if (!error) {
      setComments(data);
    }
  };

  // Handle text selection
  const handleSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection.toString().trim()) {
      setShowMenu(false);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    setSelection({
      text: selection.toString(),
      range: range,
    });

    setMenuPosition({
      top: rect.bottom + scrollTop,
      left: rect.right + scrollLeft - 100, // Offset to position menu near selection end
    });

    setShowMenu(true);
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [handleSelection]);

  // Create new comment
  const createComment = async (type) => {
    const title = window.prompt('Enter a short title for your comment:');
    if (!title) return;

    const body = window.prompt('Enter your comment:');
    if (!body) return;

    // Use null for guest users to let database use default UUID
    const userId = currentUser?.id;

    const newComment = {
      page_id: pageId,
      selection_text: selection.text,
      title,
      body,
      type,
      status: 'open',
      user_id: userId,
      pos_top: menuPosition.top,
      pos_left: menuPosition.left
    };

    const { error } = await supabase
      .from('comments')
      .insert([newComment]);

    if (!error) {
      fetchComments();
      window.getSelection().removeAllRanges();
      setShowMenu(false);
    }
  };

  // Handle admin answer submission
  const submitAnswer = async (commentId) => {
    const { error } = await supabase
      .from('comments')
      .update({
        status: 'resolved',
        answer: adminAnswer,
      })
      .eq('id', commentId);

    if (!error) {
      fetchComments();
      setExpandedComment(null);
      setAdminAnswer('');
    }
  };

  // Mark comment as resolved
  const markResolved = async (commentId) => {
    const { error } = await supabase
      .from('comments')
      .update({ status: 'resolved' })
      .eq('id', commentId);

    if (!error) {
      fetchComments();
      setExpandedComment(null);
    }
  };

  return (
    <div>
      {/* Floating Menu */}
      <div style={styles.floatingMenu}>
        <button
          style={styles.menuButton}
          onClick={() => createComment('feedback')}
        >
          💬
        </button>
        <button
          style={styles.menuButton}
          onClick={() => createComment('question')}
        >
          ❓
        </button>
      </div>

      {/* Comment Icons */}
      {comments.map((comment) => (
        <Tippy
          key={comment.id}
          content={
            expandedComment === comment.id ? (
              <div style={styles.expandedTooltip}>
                <h4>{comment.title}</h4>
                <p>{comment.body}</p>
                {comment.type === 'question' && currentUser.role === 'admin' && (
                  <>
                    <textarea
                      value={adminAnswer}
                      onChange={(e) => setAdminAnswer(e.target.value)}
                      placeholder="Enter your answer..."
                    />
                    <button onClick={() => submitAnswer(comment.id)}>
                      Submit Answer & Resolve
                    </button>
                  </>
                )}
                {currentUser.role === 'admin' && (
                  <button onClick={() => markResolved(comment.id)}>
                    Mark as resolved
                  </button>
                )}
              </div>
            ) : (
              <div style={styles.tooltip}>{comment.title}</div>
            )
          }
          interactive={true}
          visible={expandedComment === comment.id}
          onClickOutside={() => setExpandedComment(null)}
        >
          <div
            style={{
              ...styles.commentIcon,
              top: comment.pos_top,
              left: comment.pos_left,
            }}
            onClick={() => setExpandedComment(comment.id)}
          >
            {comment.type === 'feedback' ? '💬' : '❓'}
          </div>
        </Tippy>
      ))}
    </div>
  );
};

export default TextAnnotator; 