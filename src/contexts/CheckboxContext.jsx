import React, { createContext, useContext } from 'react';
import { useCheckboxState } from '../hooks/useCheckboxState';

// Create context
const CheckboxContext = createContext(null);

/**
 * Provider component for checkbox state management
 * Provides checkbox state and functions to children
 */
export const CheckboxProvider = ({ children }) => {
  const checkboxState = useCheckboxState();
  
  return (
    <CheckboxContext.Provider value={checkboxState}>
      {children}
    </CheckboxContext.Provider>
  );
};

/**
 * Custom hook to use the checkbox context
 * @returns {Object} Checkbox state and management functions
 */
export const useCheckbox = () => {
  const context = useContext(CheckboxContext);
  
  if (context === null) {
    throw new Error('useCheckbox must be used within a CheckboxProvider');
  }
  
  return context;
}; 