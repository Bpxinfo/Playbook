// src/pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [error, setError] = useState(null);
  const searchTerm = searchParams.get('q') || '';
  const { searchContent, indexAllContent } = useContentSearch();
  const location = useLocation();

  // Ensure content is indexed when the search page loads
  useEffect(() => {
    const initializeSearch = async () => {
      try {
        console.log('SearchPage: Starting content indexing');
        const indexedPages = await indexAllContent();
        console.log(`SearchPage: Indexed ${indexedPages} pages`);
        
        // If we have a search term, perform the search immediately
        if (searchTerm && searchTerm.trim().length > 1) {
          await performSearch();
        } else {
          setIsLoading(false);
        }
      } catch (err) {
        console.error('SearchPage: Error during initialization:', err);
        setError('Failed to initialize search. Please try again.');
        setIsLoading(false);
      }
    };

    initializeSearch();
  }, [indexAllContent, searchTerm]);

  const performSearch = async () => {
    if (!searchTerm || searchTerm.trim().length <= 1) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);
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
            'Internal Stakeholders'
          ]
        }
      };

      // Ensure searchContent is available
      if (typeof searchContent !== 'function') {
        throw new Error('Search functionality not properly initialized');
      }

      // Use our enhanced search functionality with no result limit for the search page
      console.log('SearchPage: Calling performGlobalSearch');
      const searchResults = performGlobalSearch(searchTerm, navigationItems, searchContent, 50);
      
      console.log('SearchPage: Search results', searchResults);
      
      if (Array.isArray(searchResults)) {
        setResults(searchResults);
      } else {
        console.error('SearchPage: Search results are not an array', searchResults);
        setResults([]);
      }
    } catch (error) {
      console.error('SearchPage: Search error:', error);
      setError('An error occurred while performing the search. Please try again.');
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Perform search when search term changes
  useEffect(() => {
    if (searchTerm && searchTerm.trim().length > 1) {
      performSearch();
    }
  }, [searchTerm]);

  if (error) {
    return (
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Search Results</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
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