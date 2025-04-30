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
        'playbook-overview': {
          title: 'Playbook Overview',
        },
        'ccc-overview': {
          title: 'CCC Overview',
          items: [
            'Strategic Pillars',
            'Key Messaging',
            'Internal Stakeholders',
            'Patient Impact'
          ]
        },
        'project-archetype': {
          title: 'Projects Archetypes',
          items: [
            'CCC Project Lifecycle',
            'Collaborative Studies',
            'ISRs',
            'Fee For Service',
            'Sponsorships',
            'Grants',
          ]
        },
        'processes': {
          title: 'Processes & Governance',
          items: [
            'Processes and Governance',
            'SOPs and Resources'
          ]
        },
        'communications': {
          title: 'Communications',
          items: [
            'Channels',
            'Cadence',
            'CCC Stakeholders',
          ]
        },
        'internal-onboarding': {
          title: 'Internal Onboarding',
          items: [],
          subsections: [
            {
              id: 'ccc-core',
              title: 'CCC Core',
              items: [
                { title: 'Onboarding Checklist', path: '/internal-onboarding/ccc-core#onboarding-checklist' },
                { title: 'Welcome Orientation', path: '/internal-onboarding/ccc-core#welcome-orientation' },
                { title: 'Immerse, Contribute', path: '/internal-onboarding/ccc-core#immerse-contribute' },
                { title: 'Deepen Engagement', path: '/internal-onboarding/ccc-core#deepen-engagement' },
                { title: 'Full Integration', path: '/internal-onboarding/ccc-core#full-integration' },
                { title: 'Ongoing Support', path: '/internal-onboarding/ccc-core#ongoing-support' },
              ]
            },
            {
              id: 'ccc-extended',
              title: 'CCC Extended',
              items: [
                { title: 'Onboarding Checklist', path: '/internal-onboarding/ccc-extended#onboarding-checklist' },
                { title: 'Welcome Orientation', path: '/internal-onboarding/ccc-extended#welcome-orientation' },
                { title: 'Ongoing Support', path: '/internal-onboarding/ccc-extended#ongoing-support' },
              ]
            },
            {
              id: 'ccc-leadership-steerco',
              title: 'CCC Leadership SteerCo',
              items: [
                { title: 'Onboarding Checklist', path: '/internal-onboarding/ccc-leadership-steerco#onboarding-checklist' },
                { title: 'Welcome Orientation', path: '/internal-onboarding/ccc-leadership-steerco#welcome-orientation' },
                { title: 'Ongoing Support', path: '/internal-onboarding/ccc-leadership-steerco#ongoing-support' },
              ]
            },
            {
              id: 'field-team',
              title: 'Field Team',
              items: [
                { title: 'Onboarding Checklist', path: '/internal-onboarding/field-team#onboarding-checklist' },
                { title: 'Welcome Orientation', path: '/internal-onboarding/field-team#welcome-orientation' },
                { title: 'Ongoing Support', path: '/internal-onboarding/field-team#ongoing-support' },
              ]
            },
            {
              id: 'project-leads',
              title: 'Project Leads',
              items: [
                { title: 'Onboarding Checklist', path: '/internal-onboarding/project-leads#onboarding-checklist' },
                { title: 'Welcome Orientation', path: '/internal-onboarding/project-leads#welcome-orientation' },
                { title: 'Immerse, Contribute', path: '/internal-onboarding/project-leads#immerse-contribute' },
                { title: 'Deepen Engagement', path: '/internal-onboarding/project-leads#deepen-engagement' },
                { title: 'Full Integration', path: '/internal-onboarding/project-leads#full-integration' },
                { title: 'Ongoing Support', path: '/internal-onboarding/project-leads#ongoing-support' },
              ]
            }
          ]
        },
        'compliance': {
          title: 'Legal & Compliance'
        },
        'systems': {
          title: 'Systems'
        },
        'glossary': {
          title: 'Glossary of Terms'
        },
        'faqs': {
          title: 'FAQs'
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