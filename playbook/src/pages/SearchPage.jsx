import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchIndex } from '../utils/searchIndex';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (searchTerm) {
      const searchResults = searchIndex.search(searchTerm, 20);
      setResults(searchResults);
    }
  }, [searchTerm]);

  return <SearchResults results={results} searchTerm={searchTerm} />;
};

export default SearchPage;