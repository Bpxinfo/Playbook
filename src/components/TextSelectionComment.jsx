import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../lib/supabaseClient';
import { X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const TextSelectionComment = () => {
  const { user } = useAuth();
  const [selectedText, setSelectedText] = useState('');
  const [comment, setComment] = useState('');
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const containerRef = useRef(null);
  const location = useLocation();

  const getCurrentSection = () => {
    const path = location.pathname;
    const parts = path.split('/').filter(Boolean);
    
    if (parts.length >= 2) {
      // For paths like /ccc-initiative/objectives-and-ccc-overview
      return `${parts[0]} > ${parts[1].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`;
    } else if (parts.length === 1) {
      // For paths like /ccc-initiative
      return parts[0].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    return 'General';
  };

  const handleMouseUp = () => {
    if (!user) {
      return;
    }

    const selection = window.getSelection();
    const text = selection.toString().trim();

    if (text) {
      const range = selection.getRangeAt(0).getBoundingClientRect();
      setSelectedText(text);
      
      // Calculate position, ensuring the popup stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const popupWidth = 300; // Approximate width of the popup
      const popupHeight = 200; // Approximate height of the popup
      
      let x = range.left + (range.width / 2) - (popupWidth / 2);
      let y = range.top + window.scrollY - popupHeight - 10;
      
      // Adjust if popup would go off screen
      x = Math.max(10, Math.min(x, viewportWidth - popupWidth - 10));
      y = Math.max(10, Math.min(y, viewportHeight - popupHeight - 10));
      
      setPopupPosition({ x, y });
      setShowPopup(true);
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
      // Format the description to include both selected text and comment
      const formattedDescription = `Selected Text: "${selectedText}"\n\nComment: ${comment}`;
      
      // User information
      const userName = user?.user_metadata?.full_name || 
                     user?.email?.split('@')[0] || 
                     'Anonymous User';
      
      const userEmail = user?.email || 'anonymous@feedback.internal';
      const userId = user?.id;

      const feedbackData = {
        name: userName,
        email: userEmail,
        section: getCurrentSection(),
        request_type: 'inline-comment',
        description: formattedDescription,
        submitted_at: new Date().toISOString(),
        status: 'pending',
        source: 'inline-comment-tool',
        user_id: userId
      };
      
      console.log('Attempting to submit feedback:', feedbackData);

      const { data, error: supabaseError } = await supabase
        .from('feedback')
        .insert([feedbackData])
        .select();
        
      if (supabaseError) {
        console.error('Supabase error details:', supabaseError);
        if (supabaseError.message.includes('row-level security')) {
          throw new Error('Permission denied. Please try submitting through the feedback form instead.');
        }
        throw supabaseError;
      }

      console.log('Feedback submitted successfully:', data);
      setSuccess(true);
      setError('');
      setTimeout(() => {
        setShowPopup(false);
        setSuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Full error details:', err);
      setError(`${err.message}`);
      
      // If it's a permissions error, hide the popup after a delay
      if (err.message.includes('Permission denied')) {
        setTimeout(() => {
          setShowPopup(false);
        }, 3000);
      }
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [user]); // Add user to dependencies

  if (!showPopup) return null;
  
  return (
    <div 
      ref={containerRef}
      className="fixed z-50 bg-white rounded-lg shadow-lg p-4"
      style={{
        left: popupPosition.x,
        top: popupPosition.y,
        width: '300px',
      }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-medium text-gray-900">Add Comment</h3>
        <button 
          onClick={() => setShowPopup(false)}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mb-3">
        <p className="text-sm text-gray-500 italic">"{selectedText}"</p>
        <p className="text-xs text-gray-400 mt-1">Section: {getCurrentSection()}</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Enter your comment..."
          className="w-full p-2 border rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-red-800 focus:border-transparent mb-2"
          rows={3}
        />
        
        {error && (
          <p className="text-red-600 text-sm mb-2">{error}</p>
        )}
        
        {success && (
          <p className="text-green-600 text-sm mb-2">Comment submitted successfully!</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-red-800 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-red-500"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
      </form>
    </div>
  );
};

export default TextSelectionComment; 