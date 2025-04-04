import React, { useEffect, useState } from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import { ThumbsUp, Trash2, Edit, X, Check, MessageSquare, Send, Flag } from 'lucide-react';

// Component for text annotation with feedback and question functionality
function TextAnnotation({ highlight, deleteHighlight, updateHighlight }) {
  const { user } = useAuth();
  const { id } = useParams();
  const [comment, setComment] = useState('');
  const [editedComment, setEditedComment] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [response, setResponse] = useState('');
  const [isUiEnabled, setIsUiEnabled] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [showThanks, setShowThanks] = useState(false);
  const navigate = useNavigate();

  // Prevent running useEffect on components not in the DOM
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    // Load existing comment if it exists
    if (highlight.comment) {
      setComment(highlight.comment.text || '');
    }
    
    // Enable UI elements
    setIsUiEnabled(true);
    
    // Show message confirmation if this was a flagged comment
    if (highlight.comment && highlight.comment.type === 'flag' && user) {
      setShowThanks(true);
      const timer = setTimeout(() => {
        setShowThanks(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    
  }, [user, highlight, isMounted]);

  const handleSaveComment = async (type = 'comment') => {
    if (!user) {
      // If not logged in, redirect to login
      navigate('/login');
      return;
    }
    
    if (!isMounted) return;
    
    if (comment.trim() === '' && type !== 'flag') return;
    
    const userId = user?.id;
    
    try {
      // Set up new comment structure
      const commentData = {
        text: comment,
        type,
        created_at: new Date().toISOString(),
        user_id: userId,
        user_name: user?.user_metadata?.name || user?.email?.split('@')[0] || 'User',
        user_email: user?.email || 'anonymous@feedback.internal',
        highlight_id: highlight.id,
        page_id: id,
        status: 'active'
      };
      
      // Update local state first for immediate feedback
      const updatedHighlight = { 
        ...highlight, 
        comment: commentData,
        hasBeenSaved: true // Mark it as saved to prevent deletion on mouse leave
      };
      
      updateHighlight(updatedHighlight);
      
      // Then save to the database
      const { data, error } = await supabase
        .from('comments')
        .insert([commentData])
        .select();
        
      if (error) throw error;
      
      if (data && data.length > 0) {
        updatedHighlight.comment.id = data[0].id;
        updateHighlight(updatedHighlight);
      }
      
      // Clear input
      setComment('');
      
      // Show thank you message for flags
      if (type === 'flag') {
        setShowThanks(true);
        setTimeout(() => {
          setShowThanks(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };
  
  const handleDeleteHighlight = async () => {
    if (!user) return;
    
    try {
      setIsDeleting(true);
      
      // First delete any comments
      if (highlight.comment && highlight.comment.id) {
        await supabase
          .from('comments')
          .delete()
          .eq('id', highlight.comment.id);
      }
      
      // Then delete the highlight
      if (highlight.id && highlight.id !== 'temp') {
        await supabase
          .from('highlights')
          .delete()
          .eq('id', highlight.id);
      }
      
      // Update UI
      deleteHighlight(highlight.id);
    } catch (error) {
      console.error('Error deleting highlight:', error);
    } finally {
      setIsDeleting(false);
    }
  };
  
  const handleEditComment = async () => {
    if (!user) return;
    if (!highlight.comment || !highlight.comment.id) return;
    
    try {
      // Update local comment first
      const updatedComment = {
        ...highlight.comment,
        text: editedComment,
        updated_at: new Date().toISOString()
      };
      
      const updatedHighlight = {
        ...highlight,
        comment: updatedComment
      };
      
      updateHighlight(updatedHighlight);
      
      // Then update in the database
      await supabase
        .from('comments')
        .update({ text: editedComment, updated_at: new Date().toISOString() })
        .eq('id', highlight.comment.id);
        
      // Exit edit mode
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating comment:', error);
    }
  };
  
  const handleStartEdit = () => {
    setEditedComment(comment);
    setIsEditing(true);
  };
  
  const handleCancelEdit = () => {
    setIsEditing(false);
  };
  
  // Show different UI based on whether there's a comment
  if (highlight.comment && highlight.comment.text) {
    // If there's a flagged comment, just show thanks message
    if (highlight.comment.type === 'flag') {
      return (
        <div 
          className="p-3 text-sm bg-white rounded-md shadow-md border border-gray-200 mt-1 transition-all duration-300"
          onMouseEnter={() => setShowShadow(true)}
          onMouseLeave={() => setShowShadow(false)}
        >
          <div className="flex items-center space-x-2 text-amber-600 mb-1">
            <Flag className="w-4 h-4" />
            <span className="font-medium">Flag submitted</span>
          </div>
          <p className="text-gray-600 text-xs">
            Thank you for flagging this content. Our team will review it.
          </p>
        </div>
      );
    }
  
    return (
      <div 
        className={`p-3 text-sm bg-white rounded-md border border-gray-200 mt-1 transition-all duration-300 ${showShadow ? 'shadow-md' : ''}`}
        onMouseEnter={() => setShowShadow(true)}
        onMouseLeave={() => setShowShadow(false)}
      >
        {isEditing ? (
          <>
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm"
              placeholder="Edit your comment..."
              rows={3}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={handleCancelEdit}
                className="flex items-center text-xs text-gray-600 p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-3 h-3 mr-1" />
                Cancel
              </button>
              <button
                onClick={handleEditComment}
                className="flex items-center text-xs text-blue-600 p-1 hover:bg-blue-50 rounded"
              >
                <Check className="w-3 h-3 mr-1" />
                Save
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-between items-start mb-1">
              <span className="font-medium text-gray-800">
                {highlight.comment.user_name || highlight.comment.user_email.split('@')[0]}
              </span>
              {user && (
                <div className="flex space-x-1">
                  <button
                    onClick={handleStartEdit}
                    className="text-gray-500 hover:text-blue-600"
                  >
                    <Edit className="w-3 h-3" />
                  </button>
                  <button
                    onClick={handleDeleteHighlight}
                    className="text-gray-500 hover:text-red-600"
                    disabled={isDeleting}
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            <p className="text-gray-800 whitespace-pre-wrap">{comment}</p>
            
            {/* Only show response features for authenticated users */}
            {highlight.comment.type === "question" && user && (
              <div className="mt-2 pt-2 border-t border-gray-100">
                <div className="flex items-center mb-1">
                  <MessageSquare className="w-3 h-3 text-gray-500 mr-1" />
                  <span className="text-xs text-gray-500">Reply</span>
                </div>
                <div className="flex items-center">
                  <input 
                    type="text"
                    value={response}
                    onChange={(e) => setResponse(e.target.value)}
                    className="flex-1 p-1 text-xs border border-gray-300 rounded-l-md"
                    placeholder="Write a response..."
                  />
                  <button className="bg-blue-600 text-white p-1 rounded-r-md">
                    <Send className="w-3 h-3" />
                  </button>
                </div>
              </div>
            )}
            
            {/* Bottom action buttons */}
            {user && (
              <div className="mt-2 flex justify-between items-center">
                <button className="flex items-center text-xs text-gray-500 hover:text-blue-600">
                  <ThumbsUp className="w-3 h-3 mr-1" />
                  <span>Helpful</span>
                </button>
                <button 
                  onClick={() => handleSaveComment('flag')}
                  className="flex items-center text-xs text-gray-500 hover:text-amber-600"
                >
                  <Flag className="w-3 h-3 mr-1" />
                  <span>Flag</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    );
  }
  
  // For new comments or highlights without comments
  return (
    <div className="p-3 bg-white rounded-md shadow-md border border-gray-200 mt-1">
      {showThanks ? (
        <div className="text-center text-sm text-green-600 py-2">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md mb-2 text-sm"
            placeholder={user ? "Add a comment or question..." : "Sign in to comment..."}
            rows={3}
            disabled={!user}
          />
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handleSaveComment('comment')}
                disabled={!user || comment.trim() === ''}
                className={`px-2 py-1 rounded-md text-xs ${
                  user && comment.trim() !== ''
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Comment
              </button>
              <button
                onClick={() => handleSaveComment('question')}
                disabled={!user || comment.trim() === ''}
                className={`px-2 py-1 rounded-md text-xs ${
                  user && comment.trim() !== ''
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Question
              </button>
            </div>
            <button
              onClick={() => handleSaveComment('flag')}
              disabled={!user}
              className={`flex items-center px-2 py-1 rounded-md text-xs ${
                user
                  ? 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Flag className="w-3 h-3 mr-1" />
              <span>Flag</span>
            </button>
          </div>
          {!user && (
            <div className="mt-2 text-xs text-center text-gray-500">
              Please <a href="/login" className="text-blue-600 hover:underline">sign in</a> to comment.
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default TextAnnotation; 