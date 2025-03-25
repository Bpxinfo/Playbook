import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage first
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      return savedMode === 'dark';
    }
    // Fall back to user's system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Update the document's class and store the theme preference
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('themeMode', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const forceLightMode = () => {
    setIsDarkMode(false);
  };

  const forceDarkMode = () => {
    setIsDarkMode(true);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, forceLightMode, forceDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 