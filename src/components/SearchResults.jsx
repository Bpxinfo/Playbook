import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, ArrowRight, Loader, Hash, FileTextIcon, ListIcon } from 'lucide-react';

// Helper function to highlight matched text
const HighlightedText = ({ text, searchTerm }) => {
  if (!searchTerm || !text) return <span>{text}</span>;
  
  const normalizedSearchTerm = searchTerm.toLowerCase();
  const normalizedText = text.toLowerCase();
  const index = normalizedText.indexOf(normalizedSearchTerm);
  
  if (index === -1) return <span>{text}</span>;
  
  const before = text.substring(0, index);
  const match = text.substring(index, index + searchTerm.length);
  const after = text.substring(index + searchTerm.length);
  
  return (
    <span>
      {before}
      <span className="bg-yellow-200 text-black font-medium">{match}</span>
      {after}
    </span>
  );
};

// Get appropriate icon for result type
const getResultIcon = (result) => {
  // Check if the path contains a fragment identifier (heading)
  if (result.path.includes('#')) {
    return <Hash className="w-6 h-6 text-red-800" />;
  }
  
  // Check if the excerpt mentions a list
  if (result.excerpt && result.excerpt.toLowerCase().includes('list')) {
    return <ListIcon className="w-6 h-6 text-red-800" />;
  }
  
  // Default to document icon
  return <FileText className="w-6 h-6 text-red-800" />;
};

// Helper to extract a more descriptive title from the path
const getDescriptiveTitle = (result) => {
  // If we have a meaningful title that's not just "CCC Playbook", use it
  if (result.title && 
     !result.title.includes("CCC Playbook") && 
     !result.title.toLowerCase().includes("playbook")) {
    return result.title;
  }
  
  // Otherwise extract from path
  if (result.path) {
    // Get the last segment of the path after removing any trailing slash
    const pathWithoutTrailingSlash = result.path.endsWith('/') 
      ? result.path.slice(0, -1) 
      : result.path;
    
    // Split path and get the last meaningful segment
    const pathParts = pathWithoutTrailingSlash
      .split('/')
      .filter(Boolean);
    
    if (pathParts.length > 0) {
      // Get the last path segment and format it
      const lastSegment = pathParts[pathParts.length - 1];
      
      // Handle fragment identifiers (e.g., #section-name)
      if (lastSegment.startsWith('#')) {
        return lastSegment.substring(1)
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      }
      
      // Format the path segment into a readable title
      return lastSegment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  }
  
  // Fallback to original title or a default
  return result.title || "Page";
};

const SearchResults = ({ results, searchTerm, isLoading }) => {
  const navigate = useNavigate();

  const handleResultClick = (path) => {
    if (path) {
      console.log('Navigating to:', path);
      
      // Make sure path starts with a slash
      const normalizedPath = path.startsWith('/') ? path : `/${path}`;
      
      // Remove any search parameters if present
      const cleanPath = normalizedPath.split('?')[0];
      
      // Navigate to the cleaned path
      navigate(cleanPath);
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
    <div className="bg-white rounded-lg shadow-md p-6">
      <h1 className="text-4xl font-light text-red-800 mb-8">Search Results</h1>
      <p className="text-gray-700 mb-6">
        Found {results.length} results for "{searchTerm}"
      </p>
      
      <div className="space-y-6">
        {results.map((result, index) => (
          <button 
            key={index}
            onClick={() => handleResultClick(result.path)}
            className="w-full text-left bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getResultIcon(result)}
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-semibold text-red-800 mb-2">
                  <HighlightedText text={getDescriptiveTitle(result)} searchTerm={searchTerm} />
                </h2>
                {result.excerpt && (
                  <p className="text-gray-600 text-sm mb-2">
                    <HighlightedText text={result.excerpt} searchTerm={searchTerm} />
                  </p>
                )}
                {result.breadcrumb && (
                  <div className="flex items-center mt-2 text-sm text-gray-400">
                    <span>{result.breadcrumb}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                )}
                {/* Show the path for debugging - can be removed in production */}
                <div className="text-xs text-gray-400 mt-1 truncate">
                  {result.path}
                </div>
              </div>
            </div>
          </button>
        ))}
        
        {results.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-2">
              No results found for "{searchTerm}".
            </p>
            <p className="text-gray-500 text-sm">
              Try different keywords, check your spelling, or use more general terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;