// components/SearchResults.jsx

import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FileText, ArrowRight } from 'lucide-react';
import { searchIndex } from '../utils/searchIndex';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') || '';
  const results = searchTerm ? searchIndex.search(searchTerm) : [];

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light text-red-800 mb-4">Search Results</h1>
      
      {searchTerm ? (
        <>
          <p className="text-gray-600 mb-8">
            Found {results.length} results for "{searchTerm}"
          </p>
          
          {results.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">No matches found. Try adjusting your search terms.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.path}
                  className="block bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <FileText className="w-6 h-6 text-red-800 flex-shrink-0" />
                    <div>
                      <h2 className="text-lg font-semibold text-red-800 mb-2">
                        {result.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-2">
                        {result.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-400">
                        <span>{result.breadcrumb}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-700">Enter a search term to begin.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;