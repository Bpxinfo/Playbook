import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useContentSearch = () => {
  const [pageContent, setPageContent] = useState({});
  const location = useLocation();

  const extractContent = (element) => {
    if (!element) return '';
    
    // Create a document fragment to avoid modifying the actual DOM
    const fragment = document.createElement('div');
    fragment.innerHTML = element.innerHTML;

    // Remove script and style tags
    const scripts = fragment.getElementsByTagName('script');
    const styles = fragment.getElementsByTagName('style');
    while (scripts.length > 0) scripts[0].remove();
    while (styles.length > 0) styles[0].remove();

    // Get text content
    return fragment.textContent || fragment.innerText || '';
  };

  const indexCurrentPage = () => {
    // Wait for content to be rendered
    setTimeout(() => {
      const mainContent = document.querySelector('main');
      if (!mainContent) return;

      const content = extractContent(mainContent);
      const title = document.title;
      const path = location.pathname;
      
      console.log('Indexing content for:', path); // Debug log
      
      setPageContent(prev => ({
        ...prev,
        [path]: {
          title,
          content,
          path,
          lastIndexed: new Date().toISOString()
        }
      }));
    }, 100); // Small delay to ensure content is rendered
  };

  const searchContent = (query) => {
    if (!query) return [];
    
    const normalizedQuery = query.toLowerCase();
    const results = [];

    Object.values(pageContent).forEach(page => {
      if (!page.content) return;

      const contentMatch = page.content.toLowerCase().includes(normalizedQuery);
      const titleMatch = page.title.toLowerCase().includes(normalizedQuery);
      
      if (contentMatch || titleMatch) {
        const index = page.content.toLowerCase().indexOf(normalizedQuery);
        let excerpt = '';
        
        if (index !== -1) {
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

    console.log('Search results:', results); // Debug log
    return results.sort((a, b) => b.relevance - a.relevance);
  };

  useEffect(() => {
    indexCurrentPage();
  }, [location.pathname]);

  return {
    searchContent,
    pageContent
  };
};

export default useContentSearch;