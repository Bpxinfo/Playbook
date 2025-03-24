import React, { useState, useEffect } from 'react';

const CheckboxItem = ({ id, text }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  // Generate a unique ID based on the user's session and the checkbox ID
  const getStorageKey = () => {
    // In a real app, you would use a proper user ID from authentication
    // For demo purposes, we'll use a random session ID stored in localStorage
    let sessionId = localStorage.getItem('guestSessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem('guestSessionId', sessionId);
    }
    return `checkbox_${sessionId}_${id}`;
  };
  
  useEffect(() => {
    // Load the checkbox state from localStorage on component mount
    const storedValue = localStorage.getItem(getStorageKey());
    if (storedValue) {
      setIsChecked(JSON.parse(storedValue));
    }
  }, [id]);
  
  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    // Save the new state to localStorage
    localStorage.setItem(getStorageKey(), JSON.stringify(newCheckedState));
  };
  
  return (
    <div className="flex items-start gap-2">
      <div className="relative flex items-center h-5">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          id={`checkbox-${id}`}
          className="appearance-none h-5 w-5 border-2 border-red-800 rounded cursor-pointer checked:bg-red-800 checked:border-red-800 focus:outline-none focus:ring-2 focus:ring-red-800/50 transition-colors"
        />
        <svg 
          className={`absolute w-4 h-4 left-0.5 top-0.5 pointer-events-none ${isChecked ? 'text-white' : 'hidden'}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <label 
        htmlFor={`checkbox-${id}`} 
        className={`cursor-pointer ${isChecked ? 'line-through text-gray-500' : 'text-gray-700'}`}
      >
        {text}
      </label>
    </div>
  );
};

export default CheckboxItem; 