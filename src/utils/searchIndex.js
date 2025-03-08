class SearchIndex {
  constructor() {
    this.index = new Map();
    this.pages = new Map();
    this.contentIndex = new Map();
    console.log('SearchIndex: Initialized');
  }

  // Index a single page's content
  indexPageContent(path, content) {
    if (!path) {
      console.warn('SearchIndex: Cannot index page content - invalid path');
      return;
    }
    
    this.contentIndex.set(path, {
      content: content?.toLowerCase() || '',
      timestamp: new Date().toISOString()
    });
    
    console.log(`SearchIndex: Indexed content for ${path}, length: ${content?.length || 0}`);
  }

  // Extract text content from HTML string
  extractTextContent(html) {
    if (!html) return '';
    
    try {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      return tempDiv.textContent || tempDiv.innerText || '';
    } catch (error) {
      console.error('SearchIndex: Error extracting text content', error);
      return '';
    }
  }

  // Extract content and metadata from component data
  extractContent(data) {
    // Default values
    let title = '';
    let metadata = '';

    // Try to extract title from data if it's an object with properties
    if (data && typeof data === 'object') {
      // Try to get title from common properties
      title = data.title || data.name || '';
      
      // Try to extract metadata from description or summary
      metadata = data.description || data.summary || data.content || '';
      
      // If no metadata found but data has a type property, use that
      if (!metadata && data.type) {
        metadata = `${data.type} component`;
      }
    }

    // If data is a string, use it as title
    if (typeof data === 'string') {
      title = data;
    }

    // If we still don't have a title, extract from path
    if (!title && data.path) {
      title = this.generateBreadcrumb(data.path).split('>').pop().trim();
    }

    return { title, metadata };
  }

  // Process content into searchable terms
  processContent(text) {
    if (!text) return [];
    
    try {
      return text.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(word => word.length > 1);
    } catch (error) {
      console.error('SearchIndex: Error processing content', error);
      return [];
    }
  }

  // Index a single page component
  indexPage(path, data, content = '') {
    if (!path) {
      console.warn('SearchIndex: Cannot index page - missing path');
      return;
    }
    
    console.log(`SearchIndex: Indexing page ${path}`);
    
    try {
      const { title, metadata } = this.extractContent(data);
      const pageId = path.toLowerCase();
      
      // Create document record
      const doc = {
        id: pageId,
        path,
        title,
        content: content || metadata,
        breadcrumb: this.generateBreadcrumb(path)
      };
      
      this.pages.set(pageId, doc);
      this.indexPageContent(pageId, content || metadata);

      // Process content into searchable terms
      const terms = this.processContent(`${title} ${content || metadata}`);
      console.log(`SearchIndex: Extracted ${terms.length} terms for ${path}`);
      
      // Index each term
      terms.forEach((term, position) => {
        if (!this.index.has(term)) {
          this.index.set(term, new Map());
        }
        
        const termIndex = this.index.get(term);
        if (!termIndex.has(pageId)) {
          termIndex.set(pageId, {
            positions: [],
            titleMatch: position < title.length
          });
        }
        
        termIndex.get(pageId).positions.push(position);
      });
      
      console.log(`SearchIndex: Successfully indexed page ${path}`);
    } catch (error) {
      console.error(`SearchIndex: Error indexing page ${path}`, error);
    }
  }

  // Search the index
  search(query, maxResults = 10) {
    console.log(`SearchIndex: Searching for "${query}" (max results: ${maxResults})`);
    
    const terms = this.processContent(query);
    if (!terms.length) {
      console.log('SearchIndex: No valid search terms');
      return [];
    }
    
    console.log(`SearchIndex: Processed search query into ${terms.length} terms`);
    
    const scores = new Map();
    const contentMatches = new Map();
    const normalizedQuery = query.toLowerCase();
    
    // Search through term index
    terms.forEach(term => {
      const termDocs = this.index.get(term) || new Map();
      
      termDocs.forEach((termData, pageId) => {
        const doc = this.pages.get(pageId);
        if (!doc) return;
        
        const score = this.calculateScore(term, termData, doc);
        scores.set(pageId, (scores.get(pageId) || 0) + score);
      });
    });

    // Search through content index directly
    this.contentIndex.forEach((indexData, pageId) => {
      if (indexData.content.includes(normalizedQuery)) {
        const doc = this.pages.get(pageId);
        if (doc) {
          contentMatches.set(pageId, {
            excerpt: this.generateExcerpt(indexData.content, normalizedQuery),
            score: 1
          });
        }
      }
    });
    
    // NEW: Also search local storage for content
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
                  const pageId = key.substring(8);
                  
                  // Create a simple doc if we don't have one
                  if (!this.pages.has(pageId)) {
                    this.pages.set(pageId, {
                      id: pageId,
                      path: pageId,
                      title: parsedContent.title || pageId,
                      content: parsedContent.content,
                      breadcrumb: this.generateBreadcrumb(pageId)
                    });
                  }
                  
                  // Add to content matches with a high score for direct matches
                  contentMatches.set(pageId, {
                    excerpt: this.generateExcerpt(parsedContent.content, normalizedQuery),
                    score: 2 // Higher score for localStorage matches since they are more reliable
                  });
                  
                  console.log(`Found match in localStorage for "${normalizedQuery}" in ${pageId}`);
                }
              }
            } catch (e) {
              // Ignore errors in parsing individual items
            }
          }
        }
      }
    } catch (e) {
      console.error('Error searching localStorage:', e);
    }

    // Combine and sort results
    const results = new Map([...scores, ...contentMatches]);
    console.log(`SearchIndex: Found ${results.size} raw matches`);
    
    const finalResults = Array.from(results.entries())
      .sort((a, b) => b[1].score - a[1].score)
      .slice(0, maxResults)
      .map(([pageId, scoreData]) => {
        const doc = this.pages.get(pageId);
        return {
          ...doc,
          score: scoreData.score,
          excerpt: scoreData.excerpt || this.generateExcerpt(doc.content, query),
          relevance: scoreData.score // Add relevance for compatibility with new search
        };
      });
      
    console.log(`SearchIndex: Returning ${finalResults.length} processed results`);
    return finalResults;
  }

  // Calculate relevance score
  calculateScore(term, termData, doc) {
    let score = 0;
    
    // Title matches worth more
    if (termData.titleMatch) {
      score += 10;
    }
    
    // More occurrences increase score
    score += Math.log(termData.positions.length + 1);
    
    // Content matches
    const contentIndexData = this.contentIndex.get(doc.id);
    if (contentIndexData && contentIndexData.content.includes(term)) {
      score += 2;
    }
    
    return score;
  }

  // Generate search result excerpt
  generateExcerpt(content, query, length = 160) {
    if (!content || !query) return '';
    
    const normalizedContent = content.toLowerCase();
    const normalizedQuery = query.toLowerCase();
    const index = normalizedContent.indexOf(normalizedQuery);
    
    if (index === -1) return '';
    
    const start = Math.max(0, index - 60);
    const end = Math.min(content.length, index + query.length + 60);
    
    return (start > 0 ? '...' : '') + 
           content.slice(start, end).trim() + 
           (end < content.length ? '...' : '');
  }

  // Generate breadcrumb from path
  generateBreadcrumb(path) {
    if (!path) return '';
    
    try {
      return path
        .split('/')
        .filter(Boolean)
        .map(segment => segment
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        )
        .join(' > ');
    } catch (error) {
      console.error('SearchIndex: Error generating breadcrumb', error);
      return path;
    }
  }

  // Get statistics about the search index
  getIndexStats() {
    return {
      termCount: this.index.size,
      pageCount: this.pages.size,
      contentIndexCount: this.contentIndex.size
    };
  }
  
  // Clear the search index (useful for testing/debugging)
  clearIndex() {
    this.index.clear();
    this.pages.clear();
    this.contentIndex.clear();
    console.log('SearchIndex: Index cleared');
  }
}

export const searchIndex = new SearchIndex();

// Initialize search index with all pages
export function initializeSearch(pages) {
  console.log(`SearchIndex: Initializing search index with ${Object.keys(pages).length} pages`);
  
  if (!pages || typeof pages !== 'object') {
    console.error('SearchIndex: Invalid pages object for initialization');
    return searchIndex;
  }
  
  try {
    Object.entries(pages).forEach(([path, component]) => {
      try {
        searchIndex.indexPage(path, component);
      } catch (error) {
        console.warn(`Error indexing page ${path}:`, error);
        // Fallback: Try to index with minimal data
        if (error.toString().includes('extractContent is not a function')) {
          console.log('Using fallback indexing for:', path);
          const title = component.title || path.split('/').pop();
          const metadata = component.metadata || '';
          searchIndex.indexPageContent(path.toLowerCase(), `${title} ${metadata}`);
        }
      }
    });

    console.log('Search index initialized with stats:', searchIndex.getIndexStats());
    return searchIndex;
  } catch (error) {
    console.error('Error initializing search index:', error);
    return searchIndex;
  }
}