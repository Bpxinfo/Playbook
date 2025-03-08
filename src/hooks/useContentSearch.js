import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Fuse from 'fuse.js';
import { searchIndex } from '../utils/searchIndex';

const useContentSearch = () => {
  const [pageContent, setPageContent] = useState({});
  const location = useLocation();
  const searchableContentRef = useRef([]);
  const fuseInstanceRef = useRef(null);
  const searchIndexRef = useRef(searchIndex);

  // Extract all textual content from a DOM element
  const extractContent = useCallback((element) => {
    if (!element) return { headings: [], paragraphs: [], lists: [], fullText: '' };
    
    // Create a document fragment to avoid modifying the actual DOM
    const fragment = document.createElement('div');
    fragment.innerHTML = element.innerHTML;

    // Remove script, style tags, and other non-content elements
    const scripts = fragment.querySelectorAll('script, style, nav, footer, .search-exclude');
    scripts.forEach(el => el.remove());

    // Extract headings
    const headings = Array.from(fragment.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(el => ({
      text: el.textContent.trim(),
      level: parseInt(el.tagName.substring(1)),
      id: el.id || ''
    }));

    // Extract paragraphs
    const paragraphs = Array.from(fragment.querySelectorAll('p')).map(el => 
      el.textContent.trim()
    ).filter(text => text.length > 0);

    // Extract lists
    const lists = Array.from(fragment.querySelectorAll('ul, ol')).map(el => 
      Array.from(el.querySelectorAll('li')).map(li => li.textContent.trim())
    ).flat().filter(text => text.length > 0);

    // Get full text content
    const fullText = fragment.textContent || fragment.innerText || '';

    return {
      headings,
      paragraphs,
      lists,
      fullText: fullText.trim()
    };
  }, []);

  // Update the searchable content and fuse instance
  const updateSearchableContent = useCallback((content) => {
    // Use current pageContent if no content provided
    const contentToProcess = content || pageContent;
    
    // Safety check to avoid errors
    if (!contentToProcess || typeof contentToProcess !== 'object') {
      console.warn('updateSearchableContent: No valid content to process');
      return;
    }
    
    try {
      const searchableContent = Object.entries(contentToProcess)
        .filter(([_, page]) => page && typeof page === 'object')
        .flatMap(([path, page]) => {
          // Handle new content format (without sections)
          if (page.content && !page.sections) {
            return [{
              path,
              title: page.title || path,
              sectionType: 'content',
              sectionText: page.content,
              priority: 5,
              fullText: page.content
            }];
          }
          
          // Handle old content format (with sections)
          if (Array.isArray(page.sections)) {
            return page.sections.map(section => ({
              path: page.path || path,
              title: page.title || path,
              sectionType: section.type,
              sectionText: section.text,
              priority: section.priority,
              id: section.id || undefined,
              fullText: page.fullText || ''
            }));
          }
          
          // If neither format is valid, return empty
          return [];
        });
      
      searchableContentRef.current = searchableContent;
      
      // Initialize or update Fuse instance
      if (searchableContent.length > 0) {
        console.log(`Building search index with ${searchableContent.length} items`);
        
        try {
          fuseInstanceRef.current = new Fuse(searchableContent, {
            keys: [
              { name: 'title', weight: 3 },
              { name: 'sectionText', weight: 2 },
              { name: 'fullText', weight: 1.5 },
              { name: 'sectionType', weight: 0.5 }
            ],
            includeScore: true,
            threshold: 0.3,        // Less permissive threshold (was 0.6)
            ignoreLocation: false, // Consider location for better matches
            useExtendedSearch: true,
            distance: 100,         // Reduced distance between matched terms (was 1000)
            minMatchCharLength: 3  // Require at least 3 characters to match
          });
          console.log("Successfully initialized Fuse search index");
        } catch (error) {
          console.error("Error initializing Fuse search index:", error);
        }
      }
    } catch (error) {
      console.error('Error updating searchable content:', error);
    }
  }, [pageContent]);

  // Helper function to get element path for debugging
  const getElementPath = (element) => {
    const path = [];
    let current = element;
    
    while (current && current !== document.body) {
      let selector = current.tagName.toLowerCase();
      if (current.id) {
        selector += `#${current.id}`;
      } else if (current.className) {
        selector += `.${current.className.replace(/\s+/g, '.')}`;
      }
      path.unshift(selector);
      current = current.parentNode;
    }
    
    return path.join(' > ');
  };

  // Index the current page content
  const indexCurrentPage = useCallback(() => {
    // Add a debug check for main content
    const mainContent = document.querySelector('main');
    if (!mainContent) {
      console.warn('No main content found for indexing current page. Will try again in 1 second.');
      // Try again after a short delay to allow content to load
      setTimeout(indexCurrentPage, 1000);
      return;
    }

    console.log('Indexing current page - DOM structure:', {
      mainContent: mainContent.tagName,
      childrenCount: mainContent.children.length
    });

    // 1. First get ALL text content from the page, including the body
    const bodyText = document.body.innerText || document.body.textContent || '';
    
    // 2. Get text from main content area
    const mainContentText = mainContent.innerText || mainContent.textContent || '';
    
    // 3. Specifically target content areas with common class/role names
    const contentAreas = document.querySelectorAll('article, .content, .article, .post, .page-content, [role="main"], .markdown-body, .page-body, section');
    let contentAreasText = '';
    contentAreas.forEach(area => {
      contentAreasText += ' ' + (area.innerText || area.textContent || '');
      console.log('Found content area:', area.tagName, 'with text length:', (area.innerText || area.textContent || '').length);
    });
    
    // 4. Directly try to extract text from the currently visible section
    // This is crucial for single-page apps where content is dynamically loaded
    const visibleContent = document.querySelectorAll('.active-section, .active-content, .visible-content, .current-section');
    let visibleContentText = '';
    visibleContent.forEach(area => {
      visibleContentText += ' ' + (area.innerText || area.textContent || '');
    });
    
    // 5. Get all visible text from important elements with direct content
    const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, th, dt, dd, figcaption, blockquote, div.content, div[class*="content"], div[class*="text"]');
    let extractedText = '';
    const processedContent = new Set();
    
    textElements.forEach(el => {
      // Skip elements with no direct text, hidden elements, or elements in nav/header/footer
      if (el.closest('nav, header, footer, .navigation, .menu, script, style')) {
        return;
      }
      
      const textContent = el.innerText || el.textContent || '';
      const trimmedText = textContent.trim();
      
      if (trimmedText !== '' && !processedContent.has(trimmedText)) {
        extractedText += ' ' + trimmedText;
        processedContent.add(trimmedText);
        
        // Log content with important terms for debugging
        if (trimmedText.toLowerCase().includes('system') || 
            trimmedText.toLowerCase().includes('framework') ||
            trimmedText.toLowerCase().includes('compliance') ||
            trimmedText.toLowerCase().includes('playbook')) {
          console.log('Found important term in element:', trimmedText);
          console.log('Element path:', getElementPath(el));
        }
      }
    });

    // 6. Extract structured content using extractContent helper
    const extractedContent = extractContent(mainContent);
    const title = document.title;
    
    // Get current page URL
    const currentPathname = window.location.pathname;
    
    // Combine all extracted content - prioritizing the extracted text and visible content
    const combinedContent = [
      extractedText,
      visibleContentText, 
      contentAreasText,
      extractedContent?.fullText || '',
      mainContentText,
      bodyText // Include full body text as a fallback
    ].filter(Boolean).join(' ').trim();
    
    console.log(`Indexed content distribution:`, {
      title,
      bodyTextLength: bodyText.length,
      mainContentLength: mainContentText.length,
      contentAreasLength: contentAreasText.length,
      visibleContentLength: visibleContentText.length,
      extractedTextLength: extractedText.length,
      structuredContentLength: extractedContent?.fullText?.length || 0,
      combinedContentLength: combinedContent.length,
      url: currentPathname
    });
    
    // Check for important terms
    const importantTerms = ['system', 'framework', 'north', 'playbook', 'ccc', 'initiative', 'compliance', 'governance'];
    const lowerContent = combinedContent.toLowerCase();
    let hasImportantTerms = false;
    let importantTermsFound = [];
    
    // Log if any important terms are found
    importantTerms.forEach(term => {
      if (lowerContent.includes(term)) {
        console.log(`Found important term "${term}" on page ${currentPathname}`);
        hasImportantTerms = true;
        importantTermsFound.push(term);
      }
    });
    
    // Only index if we have meaningful content
    if (combinedContent.length > 10 && currentPathname) {
      try {
        // Store in the searchIndex
        if (searchIndexRef.current) {
          // If the page contains important terms, add extra emphasis
          if (hasImportantTerms) {
            const enhancedContent = `${combinedContent} PRIORITY_TERMS:${importantTermsFound.join(',')}`;
            searchIndexRef.current.indexPageContent(currentPathname, enhancedContent);
            console.log('Successfully indexed content with emphasis on important terms:', importantTermsFound);
          } else {
            searchIndexRef.current.indexPageContent(currentPathname, combinedContent);
          }
        }
        
        // Update the local content map
        const contentItem = {
          content: combinedContent,
          title: title || currentPathname,
          timestamp: new Date().toISOString()
        };
        
        // Store in localStorage for persistence across page reloads
        try {
          localStorage.setItem(`content_${currentPathname}`, JSON.stringify(contentItem));
          console.log(`Stored content in localStorage for ${currentPathname}`);
          
          // Also update contentIndex in localStorage
          const contentIndexData = localStorage.getItem('contentIndex') || '{}';
          const contentIndex = JSON.parse(contentIndexData);
          contentIndex[currentPathname] = {
            length: combinedContent.length,
            timestamp: new Date().toISOString()
          };
          localStorage.setItem('contentIndex', JSON.stringify(contentIndex));
        } catch (e) {
          console.error('Error storing content in localStorage:', e);
        }
        
        setPageContent(prev => ({
          ...prev,
          [currentPathname]: contentItem
        }));
        
        console.log(`Indexed content for ${currentPathname} - ${combinedContent.length} characters`);
        
        // Flush updates to SearchableContent
        updateSearchableContent();
      } catch (error) {
        console.error(`Error indexing content for ${currentPathname}:`, error);
      }
    } else {
      console.warn(`Not enough content to index for ${currentPathname} - only ${combinedContent.length} characters`);
    }
  }, [location, updateSearchableContent, extractContent]);

  // Function to attempt indexing all content from all pages
  const indexAllContent = useCallback(() => {
    console.log('Attempting to index all content');
    
    try {
      // Only do this if we have access to document
      if (typeof document === 'undefined') {
        console.warn('indexAllContent: document is not available');
        return 0;
      }
      
      // Step 1: Index the current page thoroughly
      indexCurrentPage();
      
      // Step 2: Create a comprehensive list of pages to index
      // Look for links in navigation, main content, footer, and other areas
      const allLinks = [
        // Navigation links
        ...Array.from(document.querySelectorAll('nav a[href], header a[href], .navigation a[href], .sidebar a[href]')),
        // Main content links
        ...Array.from(document.querySelectorAll('main a[href], article a[href], .content a[href], [role="main"] a[href]')),
        // Footer links
        ...Array.from(document.querySelectorAll('footer a[href]')),
        // Other potentially important links
        ...Array.from(document.querySelectorAll('.menu a[href], .links a[href]'))
      ]
        .map(link => {
          const href = link.getAttribute('href');
          // Extract and log link text for better initial indexing
          const linkText = link.textContent.trim();
          return { href, text: linkText };
        })
        .filter(({href}) => 
          href && 
          href.startsWith('/') && 
          !href.includes('?') && 
          !href.startsWith('/search') &&
          !href.includes('#')
        );
      
      // Remove duplicates while preserving link text
      const seenPaths = new Set();
      const uniqueLinks = [];
      
      allLinks.forEach(link => {
        if (!seenPaths.has(link.href)) {
          seenPaths.add(link.href);
          uniqueLinks.push(link);
        }
      });
      
      console.log(`Found ${uniqueLinks.length} unique pages to index`);
      
      // Step 3: Clear existing search index to force complete re-indexing
      if (searchIndexRef.current) {
        try {
          searchIndexRef.current.clearIndex();
          console.log('Cleared existing search index to force full re-indexing');
        } catch (error) {
          console.error('Error clearing search index:', error);
        }
      } else {
        console.warn('searchIndexRef.current is not available to clear index');
      }
      
      // Step 4: Store these paths in localStorage to index them
      try {
        // Store paths only for localStorage
        const pathsOnly = uniqueLinks.map(link => link.href);
        localStorage.setItem('pagesToIndex', JSON.stringify(pathsOnly));
        localStorage.setItem('indexedTime', new Date().toISOString());
        localStorage.setItem('forceReindex', 'true'); // Flag to force reindexing
        console.log('Stored pages to index in localStorage with force reindex flag');
      } catch (error) {
        console.error('Error storing pages to index:', error);
      }
      
      // Step 5: Create a more detailed initial index entry for each page
      const pageContentUpdates = {};
      
      uniqueLinks.forEach(({href: path, text: linkText}) => {
        // Skip undefined or null paths
        if (!path) {
          console.warn('Skipping undefined or null path in indexAllContent');
          return;
        }
        
        // Extract a more meaningful title from the path
        const pathSegments = path.split('/').filter(Boolean);
        const lastSegment = pathSegments[pathSegments.length - 1] || '';
        let title = linkText;
        
        // If no link text was extracted, generate from path
        if (!title) {
          title = lastSegment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ') || path;
        }
        
        // Generate a more meaningful initial content
        const pathDescription = pathSegments.join(' ');
        const breadcrumb = pathSegments
          .map(segment => segment.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
          .join(' > ');
          
        // Create richer initial content with more meaningful text
        const initialContent = [
          `Page: ${title}`, 
          `Path: ${path}`,
          `Breadcrumb: ${breadcrumb}`,
          `Content area: ${pathDescription}`,
          // Adding common key terms to improve searchability
          `Keywords: ${title.toLowerCase()} ${pathDescription.toLowerCase()} playbook documentation guide reference information`
        ].join('. ');
        
        // Add to updates object
        pageContentUpdates[path] = {
          title,
          content: initialContent,
          timestamp: new Date().toISOString()
        };
        
        // Also add to the searchIndex directly for immediate availability
        if (searchIndexRef.current) {
          searchIndexRef.current.indexPageContent(path, initialContent);
        }
        
        console.log(`Added enhanced initial content for ${path} with title "${title}"`);
      });
      
      // Batch update page content
      setPageContent(prev => ({
        ...prev,
        ...pageContentUpdates
      }));
      
      // Force update of searchable content
      updateSearchableContent({ ...pageContent, ...pageContentUpdates });
      
      return uniqueLinks.length;
    } catch (error) {
      console.error('Error in indexAllContent:', error);
      return 0;
    }
  }, [indexCurrentPage, pageContent, updateSearchableContent]);

  // Effect to update the searchable content when page content changes
  useEffect(() => {
    try {
      // Only run if there's meaningful content
      if (Object.keys(pageContent).length > 0) {
        updateSearchableContent(pageContent);
        console.log(`Content search index contains ${Object.keys(pageContent).length} pages and ${searchableContentRef.current.length} searchable sections`);
      }
    } catch (error) {
      console.error('Error in content update effect:', error);
    }
  }, [pageContent, updateSearchableContent]);

  // Log indexing status for debugging
  useEffect(() => {
    console.log(`Content search index contains ${Object.keys(pageContent).length} pages and ${searchableContentRef.current.length} searchable sections`);
  }, [pageContent]);

  // Search content using Fuse.js
  const searchContent = useCallback((query) => {
    if (!query || query.trim().length < 2) {
      console.log('Search query too short or empty');
      return [];
    }
    
    // First try direct localStorage search for more reliable results
    const directResults = searchContentDirect(query);
    if (directResults.length > 0) {
      console.log(`Found ${directResults.length} direct matches for "${query}" in localStorage`);
      return directResults;
    }
    
    if (!fuseInstanceRef.current || !searchableContentRef.current || searchableContentRef.current.length === 0) {
      console.log('Search index not initialized yet or empty');
      return [];
    }
    
    console.log(`Searching for "${query}" in ${searchableContentRef.current.length} items`);
    
    try {
      const searchResults = fuseInstanceRef.current.search(query);
      console.log(`Found ${searchResults.length} raw results for "${query}"`);
      
      // Process and deduplicate results
      const processedResults = [];
      const seenPaths = new Set();
      
      searchResults.forEach(result => {
        if (!result || !result.item) {
          return; // Skip invalid results
        }
        
        const { item, score } = result;
        const resultPath = item.path;
        
        if (!resultPath) {
          return; // Skip results with no path
        }
        
        // Generate a fragment identifier if we have a heading ID
        const fragment = item.id ? `#${item.id}` : '';
        const fullPath = `${resultPath}${fragment}`;
        
        // Create excerpt from the matched section
        let excerpt = item.sectionText;
        if (excerpt && excerpt.length > 160) {
          excerpt = excerpt.substring(0, 157) + '...';
        }
        
        // Check if we already have this path (deduplicate)
        if (!seenPaths.has(fullPath)) {
          seenPaths.add(fullPath);
          processedResults.push({
            path: fullPath,
            title: item.title || resultPath,
            excerpt,
            score
          });
        }
      });
      
      console.log(`Returning ${processedResults.length} processed results for "${query}"`);
      return processedResults;
    } catch (error) {
      console.error('Error during search:', error);
      return [];
    }
  }, []);
  
  // Direct search in localStorage to catch content that might not be in Fuse index
  const searchContentDirect = useCallback((query) => {
    const normalizedQuery = query.toLowerCase().trim();
    const results = [];
    const seenPaths = new Set();
    
    try {
      // Direct search in localStorage for content matches
      if (typeof localStorage !== 'undefined') {
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && key.startsWith('content_')) {
            try {
              const contentData = localStorage.getItem(key);
              const parsedContent = JSON.parse(contentData);
              
              if (parsedContent && parsedContent.content) {
                const lowerContent = parsedContent.content.toLowerCase();
                
                // Check if query appears in content
                if (lowerContent.includes(normalizedQuery)) {
                  // Extract path from key (remove 'content_' prefix)
                  const path = key.substring(8);
                  
                  if (!seenPaths.has(path)) {
                    seenPaths.add(path);
                    
                    // Generate an excerpt around the matched term
                    const termIndex = lowerContent.indexOf(normalizedQuery);
                    const start = Math.max(0, termIndex - 60);
                    const end = Math.min(parsedContent.content.length, termIndex + normalizedQuery.length + 60);
                    const excerpt = (start > 0 ? '...' : '') + 
                                   parsedContent.content.slice(start, end).trim() + 
                                   (end < parsedContent.content.length ? '...' : '');
                    
                    results.push({
                      path,
                      title: parsedContent.title || path,
                      excerpt,
                      score: 2 // Higher score for direct matches
                    });
                    
                    console.log(`Found direct match for "${normalizedQuery}" in ${path}`);
                  }
                }
              }
            } catch (e) {
              // Ignore errors in parsing individual items
            }
          }
        }
      }
    } catch (e) {
      console.error('Error in direct content search:', e);
    }
    
    return results;
  }, []);

  // Initialize indexing when the hook is first used
  useEffect(() => {
    // Add a delay to ensure the page is fully loaded
    const indexTimer = setTimeout(() => {
      console.log('Initial page indexing with delay');
      indexCurrentPage();
    }, 1000);
    
    return () => clearTimeout(indexTimer);
  }, []);

  return {
    searchContent,
    searchContentDirect,
    pageContent,
    indexCurrentPage,
    indexAllContent
  };
};

export default useContentSearch;