// src/utils/searchUtils.js
export const performGlobalSearch = (query, navigationItems, searchContent) => {
    if (!query?.trim()) return [];
    
    const normalizedQuery = query.toLowerCase().trim();
    
    // Search through navigation structure
    const navigationResults = searchThroughNavigation(query, navigationItems);
    
    // Search through content
    const contentResults = searchContent ? searchContent(query) : [];
    
    // Combine and deduplicate results
    const combinedResults = [...navigationResults, ...(contentResults || [])];
    const uniqueResults = Array.from(
      new Map(combinedResults.map(item => [item.path, item])).values()
    );
    
    // Sort by relevance
    return uniqueResults.sort((a, b) => {
      // Calculate total score based on multiple factors
      const getScore = (result) => {
        let score = result.score || result.relevance || 0;
        
        // Boost exact matches
        if (result.title.toLowerCase().includes(normalizedQuery)) {
          score += 5;
        }
        
        // Boost matches in content
        if (result.content?.toLowerCase().includes(normalizedQuery)) {
          score += 3;
        }
        
        return score;
      };
      
      return getScore(b) - getScore(a);
    });
  };
  
  const searchThroughNavigation = (query, navigationItems) => {
    const normalizedQuery = query.toLowerCase().trim();
    const results = [];
    
    if (!navigationItems) return results;
    
    Object.entries(navigationItems).forEach(([key, section]) => {
      // Search in section title
      if (section.title.toLowerCase().includes(normalizedQuery)) {
        results.push({
          title: section.title,
          path: `/${key}`,
          excerpt: `Section: ${section.title}`,
          score: 3
        });
      }
  
      // Process items
      if (section.items) {
        processItems(section.items, key, section.title, normalizedQuery, results);
      }
  
      // Process subsections
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          if (subsection.title.toLowerCase().includes(normalizedQuery)) {
            results.push({
              title: subsection.title,
              path: `/${key}/${subsection.id}`,
              excerpt: `${section.title} > ${subsection.title}`,
              score: 2
            });
          }
  
          if (subsection.items) {
            processItems(subsection.items, key, section.title, normalizedQuery, results, subsection);
          }
        });
      }
    });
  
    return results;
  };
  
  const processItems = (items, key, sectionTitle, query, results, subsection = null) => {
    items.forEach(item => {
      if (item.toLowerCase().includes(query)) {
        const path = subsection
          ? `/${key}/${subsection.id}/${item.toLowerCase().replace(/\s+/g, '-')}`
          : `/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`;
        
        const excerpt = subsection
          ? `${sectionTitle} > ${subsection.title} > ${item}`
          : `${sectionTitle} > ${item}`;
  
        results.push({
          title: item,
          path,
          excerpt,
          score: 1
        });
      }
    });
  };