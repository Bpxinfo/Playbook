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
  const { searchContent } = useContentSearch();
  const location = useLocation();

  useEffect(() => { 
    const performSearch = async () => {
      if (location.pathname === '/search' && searchTerm) {
        setIsLoading(true);
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

          console.log('Performing search for:', searchTerm); // Debug log
          const searchResults = await performGlobalSearch(searchTerm, navigationItems, searchContent);
          console.log('Search results:', searchResults); // Debug log
          setResults(searchResults);
        } catch (error) {
          console.error('Search error:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      }
    };

    performSearch();
  }, [searchTerm, location.pathname]);

  // Add debug output
  useEffect(() => {
    console.log('Current results:', results);
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