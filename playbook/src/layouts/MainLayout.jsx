import React, { useState, useEffect, useRef } from 'react';
import {
  Home,
  Search,
  ChevronUp,
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  MessageSquare,
  Book,
  Building,
  UserPlus,
  Settings,
  Database,
  Layout,
  ArrowUp,
  ArrowDown,
  BookOpen
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { searchIndex } from '../utils/searchIndex';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchContent } = useContentSearch();
  
  const [expandedTopSection, setExpandedTopSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchRef = useRef(null);

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
    'communication-plan': {
      title: 'Communication Plan',
      subsections: [
        {
          id: 'internal',
          title: 'Internal',
          items: [
            'Objectives',
            'CCC Stakeholders',
            'Strategies & Tactics',
            'Timeline',
            'CCC Communications',
            'Communication Streams'
          ]
        },
        {
          id: 'engagement-plan',
          title: 'Engagement Plan',
          items: [
            'Objectives',
            'Communication Path',
            'Internal Engagement Strategies',
            'Internal Feedback',
            'Impact Monitoring'
          ]
        }
      ]
    },
    'internal-onboarding': {
      title: 'Internal Onboarding',
      items: [
        'Objectives',
        'Pre-Integration Prep',
        'Welcome Orientation',
        'Immerse, Contribute',
        'Deepen Engagement',
        'Full Integration',
        'Ongoing Support',
        'External Links'
      ]
    },
    'processes': {
      title: 'Processes, Governance, Ways of working',
      items: [
        'Objectives',
        'Processes & Governance',
        'Compliance Guidance',
        'Link to SOPs, Guidance, Forms, etc.'
      ]
    },
    'projects-archetypes': {
      title: 'Projects Archetypes',
      items: ['Objectives']
    },
    'systems': {
      title: 'Systems',
      items: [
        'Objectives',
        'Internal Platforms',
        'Manual Systems',
        'Links to Process'
      ]
    },
    'glossary': {
      title: 'Glossary of Terms',

    }
  };

   // Map section keys to icons and their default routes
   const sectionConfig = {
    'playbook-app-overview': {
      icon: Book,
      defaultRoute: '/playbook-app-overview'
    },
    'ccc-initiative': {
      icon: Building,
      defaultRoute: '/ccc-initiative'
    },
    'communication-plan': {
      icon: MessageSquare,
      defaultRoute: '/communication-plan'
    },
    'internal-onboarding': {
      icon: UserPlus,
      defaultRoute: '/internal-onboarding'
    },
    'processes': {
      icon: Settings,
      defaultRoute: '/processes'
    },
    'systems': {
      icon: Database,
      defaultRoute: '/systems'
    },
    'projects-archetypes': {
      icon: Layout,
      defaultRoute: '/projects-archetypes'
    },
    'glossary': {
      icon: BookOpen,
      defaultRoute: '/glossary'
    }
  };

  const navigateToSearchResults = (e) => {
    if (e) {
      e.preventDefault();
    }
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowSearchDropdown(false);
      setSearchTerm('');
    }
  };
  
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 1) {
      const results = performLocalSearch(value);
      setSearchResults(results);
      setShowSearchDropdown(true);
    } else {
      setSearchResults([]);
      setShowSearchDropdown(false);
    }
  };
  
  const searchThroughNavigation = (query) => {
    const normalizedQuery = query.toLowerCase().trim();
    const results = [];
    
    Object.entries(navigationItems).forEach(([key, section]) => {
      // Check section title
      if (section.title.toLowerCase().includes(normalizedQuery)) {
        results.push({
          title: section.title,
          path: `/${key}`,
          excerpt: `Section: ${section.title}`,
          score: 3
        });
      }

      // Check items
      if (section.items) {
        section.items.forEach(item => {
          if (item.toLowerCase().includes(normalizedQuery)) {
            results.push({
              title: item,
              path: `/${key}/${item.toLowerCase().replace(/\s+/g, '-')}`,
              excerpt: `${section.title} > ${item}`,
              score: 2
            });
          }
        });
      }

      // Check subsections
      if (section.subsections) {
        section.subsections.forEach(subsection => {
          if (subsection.title.toLowerCase().includes(normalizedQuery)) {
            results.push({
              title: subsection.title,
              path: `/${key}/${subsection.id}`,
              excerpt: `${section.title} > ${subsection.title}`,
              score: 2
            });
          }

          subsection.items?.forEach(item => {
            if (item.toLowerCase().includes(normalizedQuery)) {
              results.push({
                title: item,
                path: `/${key}/${subsection.id}/${item.toLowerCase().replace(/\s+/g, '-')}`,
                excerpt: `${section.title} > ${subsection.title} > ${item}`,
                score: 2
              });
            }
          });
        });
      }
    });

    return results;
  };

  const performLocalSearch = (query) => {
    if (!query?.trim()) return [];
    
    // Search through navigation structure
    const navigationResults = searchThroughNavigation(query);
    
    // Search through content
    const contentResults = searchContent(query);
    
    // Combine and deduplicate results
    const combinedResults = [...navigationResults, ...(contentResults || [])];
    const uniqueResults = Array.from(
      new Map(combinedResults.map(item => [item.path, item])).values()
    );
    
    // Sort by relevance - don't limit results here
    return uniqueResults.sort((a, b) => ((b.score || b.relevance || 1) - (a.score || a.relevance || 1)));
  };

  // Navigation helper functions
  const hasSubsections = (section) => {
    return section && 'subsections' in section && Array.isArray(section.subsections);
  };

  const isSelected = (section, item, subsection = null) => {
    if (!section || !item) return false;
    const itemPath = getItemPath(section, item, subsection);
    return location.pathname === itemPath;
  };

  const isSectionSelected = (path) => {
    if (!path) return false;
    return location.pathname.startsWith(`/${path}`);
  };

  const getItemPath = (section, item, subsection = null) => {
    if (!section || !item) return '/';
    const itemSlug = item.toLowerCase().replace(/\s+/g, '-');
    
    if (subsection) {
      const subsectionSlug = subsection.toLowerCase().replace(/\s+/g, '-');
      return `/${section}/${subsectionSlug}/${itemSlug}`;
    }
    
    return `/${section}/${itemSlug}`;
  };

  // Section handling functions
  const handleSectionClick = (key) => {
    navigate(sectionConfig[key].defaultRoute);
    
    if (!isSidebarCollapsed) {
      setExpandedTopSection(current => current === key ? null : key);
      setExpandedSubSection(null);
    }
  };

  const toggleTopSection = (sectionKey) => {
    if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
    }
    setExpandedTopSection(current => current === sectionKey ? null : sectionKey);
    setExpandedSubSection(null);
  };

  const toggleSubSection = (subsectionKey, e) => {
    e.stopPropagation();
    setExpandedSubSection(current => current === subsectionKey ? null : subsectionKey);
  };

  // Click outside handler for search dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearchDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
    
  // Rendering helper functions
  const renderSubsectionItems = (section, sectionKey, subsection) => (
    <div className="ml-4">
      {subsection.items.map((item, itemIdx) => {
        const itemIsSelected = isSelected(sectionKey, item, subsection.title);
        return (
          <Link 
            key={itemIdx}
            to={getItemPath(sectionKey, item, subsection.title)}
            className={`block py-1 text-sm rounded px-2 ${
              itemIsSelected
                ? 'bg-red-800 text-white pointer-events-none'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );

  const renderSectionItems = (section, sectionKey) => (
    <div className="mt-2 ml-2">
      {section.items.map((item, idx) => {
        const itemIsSelected = isSelected(sectionKey, item);
        return (
          <Link
            key={idx}
            to={getItemPath(sectionKey, item)}
            className={`block py-1 text-sm rounded px-2 ${
              itemIsSelected
                ? 'bg-red-800 text-white pointer-events-none'
                : 'text-black hover:bg-gray-100'
            }`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );

  const scrollToSection = (direction) => {
    const sections = document.querySelectorAll('h2, h3'); // Assuming sections are marked with h2 or h3
    const currentScrollY = window.scrollY;

    if (direction === 'up') {
      const previousSection = [...sections].reverse().find(section => section.getBoundingClientRect().top < 0);
      if (previousSection) {
        previousSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top if no previous section
      }
    } else if (direction === 'down') {
      const nextSection = [...sections].find(section => section.getBoundingClientRect().top > 0);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to bottom if no next section
      }
    }
  };

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 bg-white shadow-lg relative transition-all duration-300`}>
          <div className="bg-white h-16 px-4 border-b shadow-sm flex justify-between items-center space-x-4">
            <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Home className="w-5 h-5 text-red-800" />
              {!isSidebarCollapsed && (
                <span className="ml-2 text-red-800 font-medium">Playbook Home</span>
              )}
            </Link>
            <button 
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="absolute -right-3 top-4 bg-white rounded-full p-1 shadow-md"
            >
              {isSidebarCollapsed ? (
                <PanelLeftOpen className="w-5 h-5 text-gray-600" />
              ) : (
                <PanelLeftClose className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
          
          <nav className="p-2 bg-white">
            {Object.entries(navigationItems).map(([key, section]) => {
              const SectionIcon = sectionConfig[key].icon;
              return (
                <div key={key} className="mb-2">
                  <button
                    onClick={() => handleSectionClick(key)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      isSectionSelected(key) 
                        ? 'bg-red-800 text-white' 
                        : 'bg-white text-black'
                    } ${!isSectionSelected(key) && 'hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center">
                      {SectionIcon && <SectionIcon className="w-5 h-5" />}
                      {!isSidebarCollapsed && (
                        <span className="text-sm ml-2">{section.title}</span>
                      )}
                    </div>
                    {!isSidebarCollapsed && (
                      expandedTopSection === key ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )
                    )}
                  </button>
                  
                  {expandedTopSection === key && !isSidebarCollapsed && (
                    <>
                      {hasSubsections(section) && (
                        <div className="mt-2 ml-2">
                          {section.subsections.map((subsection) => (
                            <div key={subsection.id} className="mb-2">
                              <button
                                onClick={(e) => toggleSubSection(subsection.id, e)}
                                className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors ${
                                  isSectionSelected(`${key}/${subsection.id}`)
                                    ? 'bg-red-800 text-white'
                                    : 'bg-white text-black'
                                } ${!isSectionSelected(`${key}/${subsection.id}`) && 'hover:bg-gray-100'}`}
                              >
                                <span className="text-sm">{subsection.title}</span>
                                {expandedSubSection === subsection.id ? (
                                  <ChevronUp className="w-4 h-4" />
                                ) : (
                                  <ChevronDown className="w-4 h-4" />
                                )}
                              </button>
                              
                              {expandedSubSection === subsection.id && (
                                renderSubsectionItems(section, key, subsection)
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {section.items && !hasSubsections(section) && (
                        renderSectionItems(section, key)
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        <div className="flex-1 overflow-auto relative">
          <div className="fixed top-16 right-8 flex flex-col space-y-2 z-50">
            <button
              onClick={() => scrollToSection('up')}
              onDoubleClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            >
              <ArrowUp className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={() => scrollToSection('down')}
              onDoubleClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
            >
              <ArrowDown className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          <div className="bg-white h-16 px-4 border-b shadow-sm flex justify-end items-center space-x-4">
            <div className="flex items-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
                CCC SharePoint
              </a>
              <a href="https://gileaddevops.atlassian.net/jira/software/projects/CCC/boards/573/timeline" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
                CCC Roadmap
              </a>
              <a href="https://teams.microsoft.com/l/team/19%3AltiB9AjmIpw_32CWiItBDE2BpBaQkBrp9J0XfjfMeek1%40thread.tacv2/conversations?groupId=d82c53b9-2336-4e94-99da-b0ecb26ab3dc&tenantId=a5a8bcaa-3292-41e6-b735-5e8b21f4dbfd" target="_blank" rel="noopener noreferrer" className="text-red-800 hover:underline">
                CCC Teams
              </a>
            </div>
            <Link
                to="/feedback"
                className="flex items-center text-red-800 hover:text-red-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Submit Feedback
              </Link>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  navigateToSearchResults();
                }} 
                className="relative" 
                ref={searchRef}
              >
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                {showSearchDropdown && searchResults.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-96 overflow-y-auto">
                    {searchResults.slice(0, 3).map((result, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => {
                          setShowSearchDropdown(false);
                          setSearchTerm('');
                          navigate(result.path);
                        }}
                        className="w-full px-4 py-3 text-left bg-white flex flex-col border-b last:border-b-0"
                        >
                        <span className="font-medium text-red-800">{result.title}</span>
                        <span className="text-sm text-gray-600">{result.excerpt}</span>
                      </button>
                    ))}
                    
                    {searchResults.length > 3 && (
                      <div className="px-4 py-2 text-sm bg-white text-gray-500 border-b">
                        {searchResults.length - 3} more results available
                      </div>
                    )}
                    
                    <button
                      type="button" // Explicitly set type to button
                      onClick={() => navigateToSearchResults()}
                      className="w-full px-4 py-2 text-center bg-white text-sm text-red-800 border-t"
                      >
                      View all results
                    </button>
                  </div>
                )}
              </form>
            </div>
            <Breadcrumbs />
            {children}
          </div>
        </div>
    </>
  );
};

export default MainLayout;