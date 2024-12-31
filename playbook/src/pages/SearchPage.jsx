import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const searchTerm = searchParams.get('q') || '';
  const { searchContent } = useContentSearch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only perform search if we're actually on the search page
    if (location.pathname === '/search' && searchTerm) {
      const searchResults = performGlobalSearch(searchTerm, {}, searchContent);
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, [searchTerm, searchContent, location.pathname]);

  // Clear results when navigating away from search
  useEffect(() => {
    if (location.pathname !== '/search') {
      setResults([]);
    }
  }, [location.pathname]);

  // If not on search page, don't render search results
  if (location.pathname !== '/search') {
    return null;
  }

  return <SearchResults results={results} searchTerm={searchTerm} />;
};

export default SearchPage;