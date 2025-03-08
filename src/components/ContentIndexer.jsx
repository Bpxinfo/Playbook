// src/components/ContentIndexer.jsx
import React, { useEffect } from 'react';
import useContentSearch from '../hooks/useContentSearch';
import { useLocation } from 'react-router-dom';

const ContentIndexer = () => {
  const { indexCurrentPage, indexAllContent } = useContentSearch(); 
  const location = useLocation();
  
  // Index all content on first load
  useEffect(() => {
    console.log('ContentIndexer: Initial indexing of all content');
    indexAllContent();
  }, []);
  
  // Re-index whenever the location changes
  useEffect(() => {
    console.log('ContentIndexer: Indexing for path', location.pathname);
    // Small delay to ensure content is fully rendered
    const indexTimer = setTimeout(() => {
      indexCurrentPage();
    }, 300);
    
    return () => clearTimeout(indexTimer);
  }, [location.pathname, indexCurrentPage]);
  
  return null; // This component doesn't render anything
};

export default ContentIndexer; 