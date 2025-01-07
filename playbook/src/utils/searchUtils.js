export const performGlobalSearch = (query, navigationItems = {}, searchContent) => {
  if (!query?.trim()) return [];
  
  // Search through navigation structure
  const navigationResults = searchThroughNavigation(query, navigationItems);
  
  // Search through content
  const contentResults = searchContent ? searchContent(query) : [];
  
  // Combine results
  const combinedResults = [...navigationResults, ...contentResults];
  
  // Remove duplicates based on path
  const uniqueResults = Array.from(
    new Map(combinedResults.map(item => [item.path, item])).values()
  );
  
  console.log('Combined search results:', uniqueResults); // Debug log
  
  return uniqueResults.sort((a, b) => {
    const scoreA = (a.score || a.relevance || 0) + (a.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 0);
    const scoreB = (b.score || b.relevance || 0) + (b.title.toLowerCase().includes(query.toLowerCase()) ? 2 : 0);
    return scoreB - scoreA;
  });
};

const searchThroughNavigation = (query, navigationItems) => {
  const normalizedQuery = query.toLowerCase().trim();
  const results = [];
  
  Object.entries(navigationItems).forEach(([key, section]) => {
    // Match section title
    if (section.title?.toLowerCase().includes(normalizedQuery)) {
      results.push({
        title: section.title,
        path: `/${key}`,
        excerpt: `Section: ${section.title}`,
        score: 3
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
            score: 2
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
            score: 2
          });
        }

        subsection.items?.forEach(item => {
          if (item.toLowerCase().includes(normalizedQuery)) {
            results.push({
              title: item,
              path: `/${key}/${subsection.id}/${item.toLowerCase().replace(/\s+/g, '-')}`,
              excerpt: `${section.title} > ${subsection.title} > ${item}`,
              score: 1
            });
          }
        });
      });
    }
  });

  return results;
};