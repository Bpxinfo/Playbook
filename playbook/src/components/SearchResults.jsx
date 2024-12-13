import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';

const SearchResults = ({ results, searchTerm }) => {
  if (!searchTerm) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
        <p className="text-gray-700">Please enter a search term to begin.</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
        <p className="text-gray-700">No results found for "{searchTerm}"</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
      <p className="text-gray-700 mb-6">Found {results.length} results for "{searchTerm}"</p>
      
      <div className="space-y-6">
        {results.map((result, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <Link 
              to={result.path}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                <FileText className="w-6 h-6 text-red-800" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-red-800 mb-2">{result.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-2">{result.excerpt}</p>
                <p className="text-sm text-gray-400 mt-2">{result.breadcrumb}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;