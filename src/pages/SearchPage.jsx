// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchTerm = searchParams.get('q') || '';
  const { searchContent, indexAllContent } = useContentSearch();
  const location = useLocation();

  // Ensure content is indexed when the search page loads
  useEffect(() => {
    console.log('SearchPage: Ensuring content is indexed');
    indexAllContent();
  }, [indexAllContent]);

  useEffect(() => { 
    const performSearch = async () => {
      if (location.pathname === '/search' && searchTerm && searchTerm.trim().length > 1) {
        setIsLoading(true);
        console.log('SearchPage: Performing search for', searchTerm);
        
        try {
          // Get the navigation items from your layout or context
          const navigationItems = {
            'playbook-app-overview': {
              title: 'Playbook App Overview',
              items: ['Objectives']
            },
            'ccc-initiative': {
              title: 'CCC Initiative Overview',
              items: [
                'Objectives and CCC Overview',
                'Strategic Pillars',
                'Key Messaging',
                'Stakeholders'
              ]
            },
            // Add other sections as needed
          };

          // Ensure searchContent is available
          if (typeof searchContent !== 'function') {
            console.error('SearchPage: searchContent is not a function');
            setResults([]);
            setIsLoading(false);
            return;
          }

          // Use our enhanced search functionality with no result limit for the search page
          console.log('SearchPage: Calling performGlobalSearch');
          const searchResults = performGlobalSearch(searchTerm, navigationItems, searchContent, 50);
          
          console.log('SearchPage: Search results', searchResults);
          
          // Special handling for "playbook" searches
          const isPlaybookSearch = searchTerm.toLowerCase().includes('playbook');
          if (isPlaybookSearch && searchResults.length < 5) {
            console.log('SearchPage: Not enough playbook results, doing secondary search');
            
            // Force reindex all content
            indexAllContent();
            
            // Add hardcoded results for common playbook pages that might be missed
            const commonPlaybookPages = [
              { path: '/', title: 'Playbook Home', excerpt: 'Main playbook page' },
              { path: '/playbook-app-overview', title: 'Playbook App Overview', excerpt: 'Overview of the playbook application' },
              { path: '/ccc-initiative', title: 'CCC Initiative', excerpt: 'CCC Initiative playbook information' }
            ];
            
            // Combine original results with common playbook pages
            const enhancedResults = [
              ...searchResults,
              ...commonPlaybookPages.filter(page => 
                !searchResults.some(r => r.path === page.path)
              ).map(page => ({
                ...page,
                relevance: 5
              }))
            ];
            
            console.log('SearchPage: Enhanced results', enhancedResults);
            setResults(enhancedResults);
          } else if (Array.isArray(searchResults)) {
            setResults(searchResults);
          } else {
            console.error('SearchPage: Search results are not an array', searchResults);
            setResults([]);
          }
        } catch (error) {
          console.error('SearchPage: Search error:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        console.log('SearchPage: Not performing search, conditions not met', { 
          path: location.pathname, 
          searchTerm, 
          searchTermLength: searchTerm?.trim().length 
        });
      }
    };

    performSearch();
  }, [searchTerm, location.pathname, searchContent, indexAllContent]);

  // Add debug output
  useEffect(() => {
    console.log('SearchPage: Current results:', results);
  }, [results]);

  if (!searchTerm) {
    return (
      <div className="p-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Search Results</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">Please enter a search term to begin.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Search Results</h1>
        <SearchResults 
          results={results} 
          searchTerm={searchTerm} 
          isLoading={isLoading} 
        />
      </div>
    </div>
  );
};

export default SearchPage;