import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';
import { MessageSquare, X, HelpCircle, Lightbulb, GripVertical } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TextSelectionContextMenu = () => {
  const { user, isGuest } = useAuth();
  const [selectedText, setSelectedText] = useState('');
  const [comment, setComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [commentType, setCommentType] = useState('comment');
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const menuRef = useRef(null);
  const [menuSize, setMenuSize] = useState({ width: 0, height: 0 });

  // --- State for Dragging ---
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  // -------------------------

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

  useLayoutEffect(() => {
    if (isVisible && menuRef.current) {
      setMenuSize({
        width: menuRef.current.offsetWidth,
        height: menuRef.current.offsetHeight,
      });
    } else if (!isVisible) {
       // Reset menu size when hidden
       setMenuSize({ width: 0, height: 0 });
    }
  }, [isVisible]);

  useEffect(() => {
    const handleContextMenu = (event) => {
      if (!user && !isGuest) {
        return;
      }

      const selection = window.getSelection();
      const text = selection.toString().trim();

      if (text) {
        event.preventDefault();
        setSelectedText(text);

        const range = selection.getRangeAt(0);
        const rangeRect = range.getBoundingClientRect();

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const estimatedFormHeight = 250;
        const reliableInitialMenuHeightEstimate = 100;
        const menuWidth = menuSize.width || 384;
        const offset = 5;

        // Default position: below selection, aligned left
        let top = rangeRect.bottom + offset;
        let left = rangeRect.left;

        // Calculate available space
        const spaceBelow = viewportHeight - rangeRect.bottom - offset;
        const spaceRight = viewportWidth - rangeRect.left - offset; // Space right of selection start

        // Decide initial vertical placement (Above or Below)
        if (spaceBelow < estimatedFormHeight) {
          // "Bottom Case": Not enough space below for the form.
          // Place *initial menu* above the selection.
          top = rangeRect.top - reliableInitialMenuHeightEstimate - offset;
          // Place left edge near right edge of selection for this case
          left = rangeRect.right + offset;
          // Boundary check specific to this case (prevent going off right)
          if (left + menuWidth > viewportWidth - offset) {
            left = viewportWidth - menuWidth - offset;
          }
        } else {
          // "Default Case": Enough space below. Place below selection.
          // Check horizontal space based on default left alignment
          if (spaceRight < menuWidth) {
            // Not enough space to the right, align right edge
            left = viewportWidth - menuWidth - offset;
          }
          // 'top' remains rangeRect.bottom + offset (default)
        }
        // --- End Placement Logic ---

        // --- Final Boundary Adjustments ---
        // 1. Prevent overflow at the BOTTOM edge (NEW CHECK)
        // Check if the calculated 'top' position would make the *form* go off bottom
        if (top + estimatedFormHeight + offset > viewportHeight) {
          // Adjust 'top' so the bottom edge aligns with viewport bottom
          top = viewportHeight - estimatedFormHeight - offset;
        }

        // 2. Prevent overflow at the TOP edge (Existing Check)
        top = Math.max(offset, top);

        // 3. Prevent overflow at the LEFT edge (Existing Check)
        left = Math.max(offset, left);
        // --- End Final Boundary Adjustments ---

        // Set position if not dragging
        if (!isDragging) {
            setPosition({ top, left });
        }
        setIsVisible(true);
        setShowCommentForm(false);
        setComment('');
        setError('');
        setSuccess(false);
      } else {
        setIsVisible(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!isDragging && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('mousedown', handleClickOutside);

    // --- Dragging Event Listeners (added in handleDragStart) ---

    // Cleanup function
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [user, isGuest, menuSize, isDragging]);

  // --- Drag Handlers ---
  const handleDragMove = useCallback((event) => {
    if (!isDragging) return;
    // Calculate new position based on mouse movement and initial offset
    const newTop = event.clientY - dragOffset.y;
    const newLeft = event.clientX - dragOffset.x;
    setPosition({ top: newTop, left: newLeft });
  }, [isDragging, dragOffset]);

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return; // Prevent unnecessary state updates/removals
    setIsDragging(false);
  }, [isDragging]);

  const handleDragStart = useCallback((event) => {
    // Prevent initiating drag on buttons/inputs inside the menu
    if (event.target !== event.currentTarget && event.target.closest('button, input, textarea, label')) {
       return;
    }
    // Prevent default text selection behavior during drag
    event.preventDefault();
    event.stopPropagation(); // Prevent triggering handleClickOutside

    // Only handle left mouse button for drag start
    if (event.button !== 0) {
      return;
    }

    setIsDragging(true);
    // Calculate offset from top-left corner of the menu
    const menuRect = menuRef.current.getBoundingClientRect();
    setDragOffset({
      x: event.clientX - menuRect.left,
      y: event.clientY - menuRect.top,
    });
  }, []);
  // --- End Drag Handlers ---

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDragMove);
      document.addEventListener('mouseup', handleDragEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleDragMove);
      document.removeEventListener('mouseup', handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }

    setIsSubmitting(true);
    try {
      const userName = isGuest ? 'Guest User' : 
                      (user?.user_metadata?.full_name || 
                       user?.email?.split('@')[0] || 
                       'Anonymous User');
      
      const userEmail = isGuest ? 'guest@feedback.internal' : user?.email || 'anonymous@feedback.internal';
      const userId = isGuest ? null : user?.id;

      const feedbackData = {
        name: userName,
        email: userEmail,
        section: getCurrentSection(),
        type: commentType,
        description: `Selected Text: "${selectedText}"\n\n${commentType === 'question' ? 'Question' : commentType === 'idea' ? 'Idea' : 'Comment'}: ${comment}`,
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
        setIsVisible(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err.message);
      if (err.message.includes('Permission denied')) {
        setTimeout(() => {
          setShowCommentForm(false);
          setIsVisible(false);
        }, 3000);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className="absolute bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 flex flex-col"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
        position: 'fixed',
        cursor: isDragging ? 'grabbing' : 'default',
      }}
      onMouseDown={handleDragStart}
    >
      <div
        className="text-center py-1 cursor-grab bg-gray-100 dark:bg-gray-700 rounded-t-md"
      >
        <GripVertical className="w-4 h-4 inline-block text-gray-400" />
      </div>

      {!showCommentForm ? (
        <div className="py-1 flex-grow">
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
            Ask Question
          </button>
          <button
            onClick={() => {
              setShowCommentForm(true);
              setCommentType('idea');
            }}
            className="w-full px-4 py-2 text-left text-gray-700 bg-white flex items-center gap-2 hover:bg-gray-50"
          >
            <Lightbulb className="w-4 h-4" />
            Add Idea
          </button>
        </div>
      ) : (
        <div className="p-4 w-96 flex-grow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium bg-white text-gray-900">
              {commentType === 'question' ? 'Add Question' : commentType === 'idea' ? 'Add Idea' : 'Add Comment'}
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
                {commentType === 'question' ? 'Your Question' : commentType === 'idea' ? 'Your Idea' : 'Your Comment'}
              </label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows={2}
                placeholder={commentType === 'question' ? "Enter your question..." : commentType === 'idea' ? "Enter your idea..." : "Enter your comment..."}
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
              {isSubmitting ? 'Submitting...' : `Submit ${commentType === 'question' ? 'Question' : commentType === 'idea' ? 'Idea' : 'Comment'}`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TextSelectionContextMenu; 