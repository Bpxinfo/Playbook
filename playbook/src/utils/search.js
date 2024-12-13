// Helper function to normalize text for searching
const normalizeText = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9\s]/g, '');
  };
  
  // Helper function to extract text content from a component
  const extractTextContent = (component) => {
    const textContent = [];
    
    // Extract text from paragraphs
    const paragraphs = component.match(/<p[^>]*>(.*?)<\/p>/g) || [];
    paragraphs.forEach(p => {
      const text = p.replace(/<[^>]+>/g, '');
      if (text.trim()) textContent.push(text);
    });
    
    // Extract text from list items
    const listItems = component.match(/<li[^>]*>(.*?)<\/li>/g) || [];
    listItems.forEach(li => {
      const text = li.replace(/<[^>]+>/g, '');
      if (text.trim()) textContent.push(text);
    });
    
    return textContent.join(' ');
  };
  
  // Function to get page title from path
  const getPageTitle = (path) => {
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];
    return lastPart
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Function to get breadcrumb from path
  const getBreadcrumb = (path) => {
    return path
      .split('/')
      .filter(Boolean)
      .map(part => 
        part
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(' > ');
  };
  
  // Main search function
  export const searchPages = (pages, searchTerm) => {
    const normalizedSearchTerm = normalizeText(searchTerm);
    
    const results = [];
    
    for (const [path, content] of Object.entries(pages)) {
      const textContent = extractTextContent(content);
      const normalizedContent = normalizeText(textContent);
      
      if (normalizedContent.includes(normalizedSearchTerm)) {
        // Find the position of the search term in the content
        const index = normalizedContent.indexOf(normalizedSearchTerm);
        const start = Math.max(0, index - 50);
        const end = Math.min(normalizedContent.length, index + 150);
        const excerpt = textContent.slice(start, end) + '...';
        
        results.push({
          path,
          title: getPageTitle(path),
          excerpt,
          breadcrumb: getBreadcrumb(path)
        });
      }
    }
    
    return results;
  };