class SearchIndex {
  constructor() {
    this.index = new Map();
    this.pages = new Map();
    this.contentIndex = new Map();
  }

  // Index a single page's content
  indexPageContent(path, content) {
    this.contentIndex.set(path, {
      content: content.toLowerCase(),
      timestamp: new Date().toISOString()
    });
  }

  // Extract text content from HTML string
  extractTextContent(html) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  }

  // Process content into searchable terms
  processContent(text) {
    return text.toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(word => word.length > 1);
  }

  // Index a single page component
  indexPage(path, data, content = '') {
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
    this.indexPageContent(pageId, content);

    // Process content into searchable terms
    const terms = this.processContent(`${title} ${content}`);
    
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
  }

  // Search the index
  search(query, maxResults = 5) {
    const terms = this.processContent(query);
    if (!terms.length) return [];
    
    const scores = new Map();
    const contentMatches = new Map();
    
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

    // Search through content index
    this.contentIndex.forEach((indexData, pageId) => {
      const normalizedQuery = query.toLowerCase();
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

    // Combine and sort results
    const results = new Map([...scores, ...contentMatches]);
    
    return Array.from(results.entries())
      .sort((a, b) => b[1].score - a[1].score)
      .slice(0, maxResults)
      .map(([pageId, scoreData]) => {
        const doc = this.pages.get(pageId);
        return {
          ...doc,
          score: scoreData.score,
          excerpt: scoreData.excerpt || this.generateExcerpt(doc.content, query)
        };
      });
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
    return path
      .split('/')
      .filter(Boolean)
      .map(segment => segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      )
      .join(' > ');
  }
}

export const searchIndex = new SearchIndex();

// Initialize search index with all pages
export function initializeSearch(pages) {
  Object.entries(pages).forEach(([path, component]) => {
    searchIndex.indexPage(path, component);
  });
}