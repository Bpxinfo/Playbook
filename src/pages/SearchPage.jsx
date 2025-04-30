// src/pages/SearchPage.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchTerm = searchParams.get('q') || '';
  const { searchContent, indexAllContent } = useContentSearch();
  const location = useLocation();
  const isInitialized = React.useRef(false);

  // Memoize the search function to prevent unnecessary re-renders
  const performSearch = useCallback(async () => {
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
  }, [searchTerm, searchContent]);

  // Initialize search when component mounts
  useEffect(() => {
    if (isInitialized.current) return;
    
    const initializeSearch = async () => {
      try {
        console.log('SearchPage: Starting content indexing');
        const indexedPages = await indexAllContent();
        console.log(`SearchPage: Indexed ${indexedPages} pages`);
        
        // After indexing, perform search if we have a term
        if (searchTerm && searchTerm.trim().length > 1) {
          await performSearch();
        } else {
          setIsLoading(false);
        }
        
        isInitialized.current = true;
      } catch (err) {
        console.error('SearchPage: Error during initialization:', err);
        setError('Failed to initialize search. Please try again.');
        setIsLoading(false);
      }
    };

    initializeSearch();
  }, [indexAllContent, performSearch, searchTerm]);

  // Handle search term changes
  useEffect(() => {
    if (!isInitialized.current) return;
    
    if (searchTerm && searchTerm.trim().length > 1) {
      performSearch();
    } else {
      setResults([]);
      setIsLoading(false);
    }
  }, [searchTerm, performSearch]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      <SearchResults 
        results={results} 
        searchTerm={searchTerm} 
        isLoading={isLoading} 
      />
    </div>
  );
};

export default SearchPage;