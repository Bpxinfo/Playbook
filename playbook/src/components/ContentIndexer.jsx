// src/components/ContentIndexer.jsx
import React from 'react';
import useContentSearch from '../hooks/useContentSearch';

const ContentIndexer = () => {
  useContentSearch(); // Just use the hook to index content
  return null; // This component doesn't render anything
};

export default ContentIndexer;