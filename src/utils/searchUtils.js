export const performGlobalSearch = (query, navigationItems = {}, searchContent, maxResults = 20) => {
  if (!query?.trim()) return [];
  
  console.log(`[performGlobalSearch] Searching for "${query}" with max results: ${maxResults}`);
  
  // Special handling for common keywords like "playbook"
  const isPlaybookSearch = query.toLowerCase().includes('playbook');
  if (isPlaybookSearch) {
    console.log('[performGlobalSearch] This is a playbook search - ensuring comprehensive results');
  }
  
  // Search through navigation structure
  const navigationResults = searchThroughNavigation(query, navigationItems);
  console.log(`[performGlobalSearch] Found ${navigationResults.length} navigation results`);
  
  // Search through content
  let contentResults = [];
  if (typeof searchContent === 'function') {
    try {
      contentResults = searchContent(query) || [];
      console.log(`[performGlobalSearch] Found ${contentResults.length} content results`);
      
      // For "playbook" searches, ensure playbook appears in title or path
      if (isPlaybookSearch && contentResults.length < 10) {
        console.log('[performGlobalSearch] Adding additional playbook results');
        
        // Try to find all pages that might contain "playbook" in their path
        if (typeof window !== 'undefined') {
          const allLinks = Array.from(document.querySelectorAll('a[href]'))
            .map(link => link.getAttribute('href'))
            .filter(href => 
              href && 
              href.toLowerCase().includes('playbook') && 
              href.startsWith('/') && 
              !href.includes('?') && 
              !href.startsWith('/search')
            );
          
          // Remove duplicates
          const uniquePlaybookLinks = [...new Set(allLinks)];
          
          // Convert to results
          const additionalResults = uniquePlaybookLinks.map(path => {
            // Extract title from path
            const title = path
              .split('/')
              .filter(Boolean)
              .pop()
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
            
            return {
              title: `${title} (Playbook)`,
              path,
              excerpt: `Page containing playbook content: ${path}`,
              relevance: 5
            };
          });
          
          contentResults = [...contentResults, ...additionalResults];
          console.log(`[performGlobalSearch] Added ${additionalResults.length} additional playbook results`);
        }
      }
      
    } catch (error) {
      console.error('[performGlobalSearch] Error searching content:', error);
    }
  } else {
    console.warn('[performGlobalSearch] searchContent is not a function');
  }
  
  // Combine results
  const combinedResults = [...navigationResults, ...contentResults];
  
  // Remove duplicates based on path
  const uniqueResults = deduplicateResults(combinedResults);
  
  // Filter out any results that point to the search page itself
  const filteredResults = uniqueResults.filter(result => {
    if (!result || !result.path) return false;
    
    // Remove any result where the path is exactly '/search' or starts with '/search?'
    return !(result.path === '/search' || result.path.startsWith('/search?'));
  });
  
  console.log(`[performGlobalSearch] Filtered out ${uniqueResults.length - filteredResults.length} search page results`);
  
  // Sort by relevance and limit results if needed
  const finalResults = sortAndLimitResults(filteredResults, query, maxResults);
  console.log(`[performGlobalSearch] Returning ${finalResults.length} final results`);
  
  return finalResults;
};

// Deduplicate search results based on path
const deduplicateResults = (results) => {
  // Group results by path
  const resultsByPath = {};
  
  results.forEach(result => {
    if (!result || !result.path) {
      console.warn('[deduplicateResults] Invalid result found', result);
      return;
    }
    
    // Extract base path without fragment identifiers
    const basePath = result.path.split('#')[0];
    
    if (!resultsByPath[basePath] || resultsByPath[basePath].relevance < result.relevance) {
      resultsByPath[basePath] = result;
    }
  });
  
  return Object.values(resultsByPath);
};

// Sort results by relevance and limit to max results
const sortAndLimitResults = (results, query, maxResults) => {
  return results
    .sort((a, b) => {
      // Calculate final score based on relevance and exact matches
      const scoreA = calculateFinalScore(a, query);
      const scoreB = calculateFinalScore(b, query);
      return scoreB - scoreA;
    })
    .slice(0, maxResults);
};

// Calculate final score for sorting
const calculateFinalScore = (result, query) => {
  if (!result) return 0;
  
  const baseScore = result.score || result.relevance || 0;
  const normalizedQuery = query.toLowerCase();
  
  // Boost score for exact title matches
  const titleBoost = result.title?.toLowerCase().includes(normalizedQuery) ? 3 : 0;
  
  // Boost score for exact excerpt matches
  const excerptBoost = result.excerpt?.toLowerCase().includes(normalizedQuery) ? 1 : 0;
  
  return baseScore + titleBoost + excerptBoost;
};

const searchThroughNavigation = (query, navigationItems) => {
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];
  
  if (!navigationItems || typeof navigationItems !== 'object') {
    console.warn('[searchThroughNavigation] Invalid navigation items');
    return results;
  }
  
  Object.entries(navigationItems).forEach(([key, section]) => {
    // Match section title
    if (section.title?.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: section.title,
        path: `/${key}`,
        excerpt: `Section: ${section.title}`,
        relevance: 3
      });
    }

    // Match section items
    if (section.items) {
      section.items.forEach(item => {
        if (item.toLowerCase().includes(normalizedQuery)) {
          results.push({
            title: item,
            path: `/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`,
            excerpt: `${section.title} > ${item}`,
            relevance: 2
          });
        }
      });
    }

    // Match subsections
    if (section.subsections) {
      section.subsections.forEach(subsection => {
        if (subsection.title?.toLowerCase().includes(normalizedQuery)) {
          results.push({
            title: subsection.title,
            path: `/${key}/${subsection.id}`,
            excerpt: `${section.title} > ${subsection.title}`,
            relevance: 2
          });
        }

        subsection.items?.forEach(item => {
          if (item.toLowerCase().includes(normalizedQuery)) {
            results.push({
              title: item,
              path: `/${key}/${subsection.id}/${item.toLowerCase().replace(/\s+/g, '-')}`,
              excerpt: `${section.title} > ${subsection.title} > ${item}`,
              relevance: 1
            });
          }
        });
      });
    }
  });

  return results;
};