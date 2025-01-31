import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight, Loader } from 'lucide-react';

const SearchResults = ({ results, searchTerm, isLoading }) => {
  const navigate = useNavigate();

  const handleResultClick = (path) => {
    if (path) {
      navigate(path);
    }
  };

  if (isLoading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <Loader className="w-6 h-6 animate-spin text-red-800 mr-2" />
        <span>Searching...</span>
      </div>
    );
  }

  if (!searchTerm) {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
        <p className="text-gray-700">Please enter a search term to begin.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
      <p className="text-gray-700 mb-6">
        Found {results.length} results for "{searchTerm}"
      </p>
      
      <div className="space-y-6">
        {results.map((result, index) => (
          <button 
            key={index}
            onClick={() => handleResultClick(result.path)}
            className="w-full text-left bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <FileText className="w-6 h-6 text-red-800" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-red-800 mb-2">
                  {result.title}
                </h2>
                {result.excerpt && (
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {result.excerpt}
                  </p>
                )}
                {result.breadcrumb && (
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <span>{result.breadcrumb}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
              </div>
            </div>
          </button>
        ))}
        
        {results.length === 0 && (
          <p className="text-gray-600">
            No results found for "{searchTerm}". Try different keywords or check your spelling.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;