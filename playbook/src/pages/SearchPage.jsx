import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchPages } from '../utils/search';
import SearchResults from '../components/SearchResults';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const searchTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (searchTerm) {
      // In a real application, you would import all your page components
      // and their content here. For now, we'll use a mock pages object
      const pages = {
        '/ccc-initiative/objectives': 'Objectives content...',
        '/processes/compliance-guidance': 'Compliance guidance content...',
        // Add more pages here
      };

      const searchResults = searchPages(pages, searchTerm);
      setResults(searchResults);
    }
  }, [searchTerm]);

  return <SearchResults results={results} searchTerm={searchTerm} />;
};

export default SearchPage;