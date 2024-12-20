// src/hooks/useContentSearch.js
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useContentSearch = () => {
  const [pageContent, setPageContent] = useState({});
  const location = useLocation();

  // Function to extract content from DOM elements
  const extractContent = (element) => {
    if (!element) return '';
    
    // Get all text nodes and their content
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let content = '';
    let node;
    
    while ((node = walker.nextNode())) {
      // Skip hidden elements and scripts
      if (node.parentElement.offsetParent !== null && 
          !['SCRIPT', 'STYLE'].includes(node.parentElement.tagName)) {
        content += node.textContent + ' ';
      }
    }
    
    return content.trim();
  };

  // Function to index page content
  const indexCurrentPage = () => {
    const mainContent = document.querySelector('main') || document.body;
    const content = extractContent(mainContent);
    const title = document.title;
    const path = location.pathname;
    
    setPageContent(prev => ({
      ...prev,
      [path]: {
        title,
        content,
        path,
        lastIndexed: new Date().toISOString()
      }
    }));
  };

  // Search function
  const searchContent = (query) => {
    if (!query) return [];
    
    const normalizedQuery = query.toLowerCase();
    const results = [];

    Object.values(pageContent).forEach(page => {
      const contentMatch = page.content.toLowerCase().includes(normalizedQuery);
      const titleMatch = page.title.toLowerCase().includes(normalizedQuery);
      
      if (contentMatch || titleMatch) {
        // Find the context around the match
        let excerpt = '';
        if (contentMatch) {
          const index = page.content.toLowerCase().indexOf(normalizedQuery);
          const start = Math.max(0, index - 100);
          const end = Math.min(page.content.length, index + query.length + 100);
          excerpt = '...' + page.content.slice(start, end).trim() + '...';
        }
        
        results.push({
          title: page.title,
          path: page.path,
          excerpt,
          relevance: titleMatch ? 2 : 1
        });
      }
    });

    // Sort by relevance
    return results.sort((a, b) => b.relevance - a.relevance);
  };

  // Index content when page changes
  useEffect(() => {
    indexCurrentPage();
  }, [location.pathname]);

  return {
    searchContent,
    pageContent
  };
};

export default useContentSearch;