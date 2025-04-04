import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useAuth } from '../contexts/AuthContext';
import { X, MessageSquare, HelpCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const TextSelectionContextMenu = () => {
  const { user } = useAuth();
  const [selectedText, setSelectedText] = useState('');
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [commentType, setCommentType] = useState('comment');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  const getCurrentSection = () => {
    const path = location.pathname;
    const parts = path.split('/').filter(Boolean);
    
    if (parts.length >= 2) {
      // For paths like /project-archetype/collaborative-studies
      return `${parts[0]}/${parts[1]}`;
    } else if (parts.length === 1) {
      return parts[0];
    }
    return 'General';
  };

  const handleContextMenu = (e) => {
    if (!user) {
      return;
    }

    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text) {
      e.preventDefault();
      setSelectedText(text);
      setMenuPosition({ x: e.clientX, y: e.clientY });
      setShowMenu(true);
      setShowCommentForm(false);
      setComment('');
      setError('');
      setSuccess(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }

    setIsSubmitting(true);
    
    // Add timeout to ensure spinner doesn't get stuck
    const timeoutId = setTimeout(() => {
      if (isSubmitting) {
        setIsSubmitting(false);
        setError('Request is taking longer than expected. Please try again.');
      }
    }, 5000);
    
    try {
      // Use a simple approach for guest users
      const userName = user?.user_metadata?.full_name || 
                     user?.email?.split('@')[0] || 
                    'Anonymous User';
      
      const userEmail = user?.email || 'anonymous@feedback.internal';
      const userId = user?.id;

      const feedbackData = {
        name: userName,
        email: userEmail,
        section: getCurrentSection(),
        type: commentType,
        description: `Selected Text: "${selectedText}"\n\n${commentType === 'question' ? 'Question' : 'Comment'}: ${comment}`,
        submitted_at: new Date().toISOString(),
        status: 'pending',
        source: 'context-menu-comment',
        user_id: userId
      };

      const { data, error: supabaseError } = await supabase
        .from('feedback')
        .insert([feedbackData])
        .select();

      if (supabaseError) {
        if (supabaseError.message.includes('row-level security')) {
          throw new Error('Permission denied. Please try submitting through the feedback form instead.');
        }
        throw supabaseError;
      }

      setSuccess(true);
      setError('');
      setTimeout(() => {
        setShowCommentForm(false);
        setShowMenu(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      if (err.message.includes('Permission denied')) {
        setTimeout(() => {
          setShowCommentForm(false);
          setShowMenu(false);
        }, 3000);
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowMenu(false);
      setShowCommentForm(false);
    }
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [user]); // Add user to dependencies

  if (!showMenu) return null;

  return (
    <div
      ref={containerRef}
      className="fixed z-50 bg-white rounded-lg shadow-lg border border-gray-200"
      style={{
        top: menuPosition.y,
        left: menuPosition.x,
        minWidth: '200px'
      }}
    >
      {!showCommentForm ? (
        <div className="py-2">
          <button
            onClick={() => {
              setShowCommentForm(true);
              setCommentType('comment');
            }}
            className="w-full px-4 py-2 text-left text-gray-700 bg-white flex items-center gap-2 hover:bg-gray-50"
          >
            <MessageSquare className="w-4 h-4" />
            Add Comment
          </button>
          <button
            onClick={() => {
              setShowCommentForm(true);
              setCommentType('question');
            }}
            className="w-full px-4 py-2 text-left text-gray-700 bg-white flex items-center gap-2 hover:bg-gray-50"
          >
            <HelpCircle className="w-4 h-4" />
            Add Question
          </button>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium bg-white text-gray-900">
              {commentType === 'question' ? 'Add Question' : 'Add Comment'}
            </h3>
            <button 
              onClick={() => setShowCommentForm(false)}
              className="text-gray-400 bg-white rounded-full p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selected Text
              </label>
              <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                "{selectedText}"
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {commentType === 'question' ? 'Your Question' : 'Your Comment'}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows={3}
                placeholder={commentType === 'question' ? "Enter your question..." : "Enter your comment..."}
              />
            </div>
            {error && (
              <div className="text-sm text-red-600">{error}</div>
            )}
            {success && (
              <div className="text-sm text-green-600">Submitted successfully!</div>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : `Submit ${commentType === 'question' ? 'Question' : 'Comment'}`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TextSelectionContextMenu; 