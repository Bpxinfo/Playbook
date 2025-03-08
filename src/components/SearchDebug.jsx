import React, { useState, useEffect } from 'react';
import useContentSearch from '../hooks/useContentSearch';

const SearchDebug = () => {
  const { searchContent, indexAllContent } = useContentSearch();
  const [debugInfo, setDebugInfo] = useState({
    indexSize: 0,
    searchTestResults: []
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const runIndexingDiagnostics = () => {
    console.log('Running indexing diagnostics');
    
    try {
      // Force re-index all content
      const pageCount = indexAllContent();
      
      // Get index info from localStorage
      const storedPages = localStorage.getItem('pagesToIndex');
      const parsedPages = storedPages ? JSON.parse(storedPages) : [];
      
      // Get content from localStorage by directly scanning for content_ keys
      const contentSample = [];
      const contentKeys = [];
      
      // Look for all content items in localStorage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('content_')) {
          contentKeys.push(key);
        }
      }
      
      console.log(`Found ${contentKeys.length} content items in localStorage`);
      
      // Process a sample of the content items
      const contentSampleKeys = contentKeys.slice(0, 10); // Limit to 10 samples
      
      contentSampleKeys.forEach(key => {
        try {
          const contentItem = localStorage.getItem(key);
          if (contentItem) {
            const parsedContent = JSON.parse(contentItem);
            // Extract path from key (remove 'content_' prefix)
            const path = key.substring(8);
            
            contentSample.push({
              path,
              title: parsedContent.title || path,
              contentPreview: parsedContent.content?.substring(0, 100) + '...',
              contentLength: parsedContent.content?.length || 0,
              timestamp: parsedContent.timestamp
            });
          }
        } catch (e) {
          console.error('Error parsing content item:', e);
        }
      });
      
      // Try also getting contentIndex directly if available
      let contentIndexStats = { count: 0, averageLength: 0, paths: [] };
      try {
        const contentIndexData = localStorage.getItem('contentIndex');
        if (contentIndexData) {
          const parsedContentIndex = JSON.parse(contentIndexData);
          const paths = Object.keys(parsedContentIndex);
          
          if (paths.length > 0) {
            // Calculate average content length
            let totalLength = 0;
            paths.forEach(path => {
              totalLength += parsedContentIndex[path]?.length || 0;
            });
            
            contentIndexStats = {
              count: paths.length,
              averageLength: totalLength / paths.length,
              paths: paths.slice(0, 5) // Just sample the first few
            };
          }
        }
      } catch (e) {
        console.error('Error getting contentIndex stats:', e);
      }
      
      // Also check content directly from searchIndex if available
      if (contentIndexStats.count === 0) {
        contentIndexStats.count = contentKeys.length;
      }
      
      // Check for important pages containing key terms
      const importantTerms = ['system', 'framework', 'north', 'compliance', 'playbook', 'ccc', 'initiative', 'governance'];
      const termMatches = {};
      
      // Check both page paths and content
      importantTerms.forEach(term => {
        // Check paths
        const pathMatches = parsedPages.filter(path => 
          path && path.toLowerCase().includes(term)
        );
        
        // Check content
        const contentMatches = [];
        contentKeys.forEach(key => {
          try {
            const content = localStorage.getItem(key);
            if (content && content.toLowerCase().includes(term)) {
              // Extract path from key (remove 'content_' prefix)
              contentMatches.push(key.substring(8));
            }
          } catch (e) {
            // Ignore errors in checking content
          }
        });
        
        // Combine unique matches
        const allMatches = [...new Set([...pathMatches, ...contentMatches])];
        termMatches[term] = allMatches;
      });
      
      setDebugInfo(prev => ({
        ...prev,
        indexSize: pageCount || parsedPages.length,
        storedPages: parsedPages,
        contentKeys,
        contentSample,
        contentIndexStats,
        termMatches,
        indexingStatus: 'Indexing completed successfully',
        lastRun: new Date().toLocaleTimeString()
      }));
      
      console.log('Search diagnostics completed', {
        pageCount,
        storedPagesCount: parsedPages.length,
        contentSampleCount: contentSample.length,
        contentKeysCount: contentKeys.length,
        termMatches
      });
    } catch (error) {
      console.error('Error in diagnostics:', error);
      setDebugInfo(prev => ({
        ...prev,
        indexingStatus: `Error: ${error.message}`,
        lastRun: new Date().toLocaleTimeString(),
        error: error.toString()
      }));
    }
  };

  const testSearch = () => {
    if (!searchTerm.trim() || typeof searchContent !== 'function') {
      setDebugInfo(prev => ({
        ...prev,
        searchTestResults: [],
        searchStatus: 'Error: Empty search term or search function not available',
        lastSearch: new Date().toLocaleTimeString()
      }));
      return;
    }
    
    console.log(`Testing search for: "${searchTerm}"`);
    setDebugInfo(prev => ({
      ...prev,
      searchStatus: 'Searching...',
      lastSearch: new Date().toLocaleTimeString()
    }));
    
    try {
      const results = searchContent(searchTerm);
      console.log('Search results:', results);
      
      // Enhanced logging of content for each result
      if (results && results.length > 0) {
        results.forEach((result, index) => {
          if (result.path) {
            // Log content for the found path
            const contentKey = `content_${result.path.split('#')[0]}`; // Remove any fragment
            const contentItem = localStorage.getItem(contentKey);
            
            if (contentItem) {
              try {
                const parsedContent = JSON.parse(contentItem);
                console.log(`Result ${index + 1} content sample:`, 
                  parsedContent.content?.substring(0, 100) + '...');
                
                // Also log if the search term actually appears in the content
                if (parsedContent.content) {
                  const lowerContent = parsedContent.content.toLowerCase();
                  const lowerSearchTerm = searchTerm.toLowerCase();
                  
                  if (lowerContent.includes(lowerSearchTerm)) {
                    console.log(`Search term "${searchTerm}" FOUND in content for ${result.path}`);
                    
                    // Show surrounding context of the search term
                    const termIndex = lowerContent.indexOf(lowerSearchTerm);
                    const start = Math.max(0, termIndex - 40);
                    const end = Math.min(lowerContent.length, termIndex + searchTerm.length + 40);
                    const context = parsedContent.content.substring(start, end);
                    console.log(`Context: ...${context}...`);
                  } else {
                    console.warn(`Search term "${searchTerm}" NOT FOUND in content for ${result.path}`);
                  }
                }
              } catch (e) {
                console.error('Error parsing content for search result:', e);
              }
            } else {
              console.warn(`No content found for search result path: ${result.path}`);
            }
          }
        });
      }
      
      setDebugInfo(prev => ({
        ...prev,
        searchTestResults: results || [],
        searchStatus: `Found ${results.length} results`,
        lastSearch: new Date().toLocaleTimeString()
      }));
    } catch (error) {
      console.error('Search error:', error);
      setDebugInfo(prev => ({
        ...prev,
        searchTestResults: [],
        searchStatus: `Error: ${error.message}`,
        lastSearch: new Date().toLocaleTimeString(),
        searchError: error.toString()
      }));
    }
  };

  return (
    <>
      {/* Always visible toggle button */}
      <button
        onClick={() => setIsVisible(prev => !prev)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 9999,
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          fontSize: '20px'
        }}
        title="Toggle Search Debug Panel"
      >
        🔍
      </button>
      
      {/* Debug panel */}
      {isVisible && (
        <div 
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '500px',
            maxHeight: '80vh',
            overflow: 'auto',
            background: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            zIndex: 9999,
            boxShadow: '0 0 10px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h3 style={{ margin: 0 }}>Search Debug Panel</h3>
            <button 
              onClick={() => setIsVisible(false)}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>
          
          <div>
            <button 
              onClick={runIndexingDiagnostics}
              style={{
                background: '#007bff',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: '3px',
                marginRight: '10px',
                cursor: 'pointer'
              }}
            >
              Run Indexing Diagnostics
            </button>
            
            <div style={{ marginTop: '10px' }}>
              <h4>Index Information</h4>
              <p>Index size: {debugInfo.indexSize} pages</p>
              {debugInfo.indexingStatus && (
                <p style={{ 
                  color: debugInfo.indexingStatus.includes('Error') ? 'red' : 'green',
                  fontWeight: 'bold'
                }}>
                  Status: {debugInfo.indexingStatus}
                </p>
              )}
              {debugInfo.lastRun && (
                <p>Last run: {debugInfo.lastRun}</p>
              )}
              
              {/* Content Index Stats */}
              {debugInfo.contentIndexStats && (
                <div style={{ margin: '10px 0', padding: '10px', background: '#f8f9fa', borderRadius: '5px' }}>
                  <h4>Content Index Stats</h4>
                  <p>Pages with content: {debugInfo.contentIndexStats.count}</p>
                  <p>Average content length: {Math.round(debugInfo.contentIndexStats.averageLength)} characters</p>
                  {debugInfo.contentIndexStats.paths && debugInfo.contentIndexStats.paths.length > 0 && (
                    <details>
                      <summary>Sample indexed paths</summary>
                      <ul style={{ fontSize: '12px', maxHeight: '100px', overflow: 'auto', padding: '0 0 0 20px' }}>
                        {debugInfo.contentIndexStats.paths.map((path, i) => (
                          <li key={i}>{path}</li>
                        ))}
                      </ul>
                    </details>
                  )}
                </div>
              )}
              
              {/* Content Samples */}
              {debugInfo.contentSample && debugInfo.contentSample.length > 0 && (
                <div style={{ margin: '10px 0', padding: '10px', background: '#f8f9fa', borderRadius: '5px' }}>
                  <h4>Content Samples ({debugInfo.contentSample.length})</h4>
                  <details>
                    <summary>View indexed content samples</summary>
                    <ul style={{ fontSize: '12px', maxHeight: '200px', overflow: 'auto', padding: '0 0 0 20px' }}>
                      {debugInfo.contentSample.map((sample, i) => (
                        <li key={i} style={{ marginBottom: '5px' }}>
                          <strong>{sample.title}</strong> ({sample.path})
                          <br />
                          <small>Length: {sample.contentLength} chars, Indexed: {new Date(sample.timestamp).toLocaleTimeString()}</small>
                          <br />
                          <small style={{ color: '#666' }}>{sample.contentPreview}</small>
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              )}
              
              {/* Important Term Matches */}
              {debugInfo.termMatches && Object.keys(debugInfo.termMatches).length > 0 && (
                <div style={{ margin: '10px 0', padding: '10px', background: '#f8f9fa', borderRadius: '5px' }}>
                  <h4>Important Term Matches</h4>
                  {Object.entries(debugInfo.termMatches).map(([term, paths]) => (
                    <details key={term} style={{ marginBottom: '5px' }}>
                      <summary>{term}: {paths.length} pages</summary>
                      {paths.length > 0 && (
                        <ul style={{ fontSize: '12px', maxHeight: '100px', overflow: 'auto', padding: '0 0 0 20px' }}>
                          {paths.map((path, i) => (
                            <li key={i}>{path}</li>
                          ))}
                        </ul>
                      )}
                    </details>
                  ))}
                </div>
              )}
              
              {debugInfo.error && (
                <p style={{ color: 'red' }}>Error: {debugInfo.error}</p>
              )}
            </div>
            
            <div style={{ marginTop: '15px' }}>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Test search term"
                style={{ width: '100%', padding: '5px', marginBottom: '5px' }}
              />
              <button
                onClick={testSearch}
                style={{
                  background: '#28a745',
                  color: 'white',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Test Search
              </button>
            </div>
            
            <div style={{ marginTop: '15px' }}>
              <h4>Search Results:</h4>
              {debugInfo.searchStatus && (
                <p style={{ 
                  color: debugInfo.searchStatus.includes('Error') ? 'red' : 
                         debugInfo.searchStatus === 'Searching...' ? 'blue' : 'green',
                  fontWeight: 'bold'
                }}>
                  Status: {debugInfo.searchStatus}
                </p>
              )}
              {debugInfo.lastSearch && (
                <p>Last search: {debugInfo.lastSearch}</p>
              )}
              {debugInfo.searchError && (
                <p style={{ color: 'red' }}>Error: {debugInfo.searchError}</p>
              )}
              {debugInfo.searchTestResults.length > 0 ? (
                <ul style={{ maxHeight: '200px', overflow: 'auto', padding: '0 0 0 20px' }}>
                  {debugInfo.searchTestResults.map((result, index) => (
                    <li key={index} style={{ marginBottom: '5px' }}>
                      <strong>{result.title}</strong>
                      <br />
                      <small>Path: {result.path}</small>
                      <br />
                      <small>Score: {result.score?.toFixed(2) || 'N/A'}</small>
                      {result.excerpt && (
                        <p style={{ marginTop: '2px', fontSize: '12px' }}>
                          {result.excerpt}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              ) : debugInfo.searchStatus && !debugInfo.searchStatus.includes('Error') ? (
                <p>No results found</p>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchDebug;
