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
  BookOpen,
  Shield,
  Link as LinkIcon,
  HelpCircle,
  ChevronRight,
  ChevronLeft
} from 'lucide-react'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { searchIndex } from '../utils/searchIndex';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import TextSelectionComment from '../components/TextSelectionComment';

// Add CSS for WebKit scrollbar hiding
const scrollbarHideStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchContent } = useContentSearch();
  
  const [expandedTopSection, setExpandedTopSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState({ results: [], hiddenCount: 0 });
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const searchRef = useRef(null);
  const isScrollingRef = useRef(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const navContainerRef = useRef(null);
  const [navOverflow, setNavOverflow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const navigationItems = {
    'playbook-overview': {
      title: 'Playbook Overview',
      items: ['Objectives']
    },
    'ccc-overview': {
      title: 'CCC Overview',
      items: [
        'Objectives',
        'Strategic Pillars',
        'Key Messaging',
        'Stakeholders',
        'Patient Impact'
      ]
    },
    'communications': {
      title: 'Communications',
      subsections: [
        {
          id: 'internal-comms-plan',
          title: 'Internal Comms Plan',
          items: [
            'Objectives',
            'Channels',
            'Cadence',
            'CCC Stakeholders',
            'Strategies & Tactics',
            'Timeline',
            // 'Key Communications'
          ]
        },
        {
          id: 'internal-engagement',
          title: 'Internal Engagement',
          items: [
            'Objectives',
            'Communication Path',
            'Internal Engagement Strategies',
            'Internal Engagement Plan',
            'Impact Monitoring'
          ]
        }
      ]
    },
    'internal-onboarding': {
      title: 'Internal Onboarding',
      items: [
        'Objectives',
        'Ongoing Support'
      ],
      subsections: [
        {
          id: 'ccc-core-extended',
          title: 'CCC Core & Extended',
          items: [
            'Onboarding Checklist',
            'Welcome Orientation',
            'Immerse, Contribute',
            'Deepen Engagement',
            'Full Integration',
          ]
        },
        {
          id: 'ccc-leadership-steerco',
          title: 'CCC Leadership SteerCo',
          items: [
            'Onboarding Checklist',
            'Welcome Orientation',
          ]
        },
        {
          id: 'ccc-field-team',
          title: 'CCC Field Team',
          items: [
            'Onboarding Checklist',
            'Welcome Orientation',
          ]
        }
      ]
    },
    'processes': {
      title: 'Processes & Governance',
      items: [
        'Objectives',
        'Processes',
        'Governance',
        'SOPs & Resources'
      ]
    },
    'compliance': {
      title: 'Compliance Guidance',
      items: [
        'Overview',
        'Key Compliance Principles',
        'Compliance Requirements',
        'Resources and Support',
        'CCC Independence',
        // 'CCC Strategy Development',
        // 'Project Proposals & Approvals',
        // 'Project Operations'
      ]
    },
    'project-archetype': {
      title: 'Projects Archetypes',
      items: [
        'Objectives', 
        {
          title: 'CORE Principles',
          hasDropdown: true,
          dropdownItems: [
            'Collaborative Studies',
            'ISRs',
            'Fee For Service',
            'Sponsorships',
            'Grants'
          ]
        },
        'CCC Project Lifecycle',
        // 'CCC Project Types' // Removing this as it's being split into separate pages
        ]
    },
    'systems': {
      title: 'Systems',
      items: [
        'Objectives',
        'Internal Platforms',
        'Manual Systems',
        // 'Links to Process'
      ]
    },
    'glossary': {
      title: 'Glossary of Terms',
    },
    'faqs': {
      title: 'FAQs',
    }
  };

   // Map section keys to icons and their default routes
   const sectionConfig = {
    'playbook-overview': {
      icon: Book,
      defaultRoute: '/playbook-overview'
    },
    'ccc-overview': {
      icon: Building,
      defaultRoute: '/ccc-overview'
    },
    'communications': {
      icon: MessageSquare,
      defaultRoute: '/communications'
    },
    'internal-onboarding': {
      icon: UserPlus,
      defaultRoute: '/internal-onboarding'
    },
    'processes': {
      icon: Settings,
      defaultRoute: '/processes'
    },
    'compliance': {
      icon: Shield,
      defaultRoute: '/compliance'
    },
    'systems': {
      icon: Database,
      defaultRoute: '/systems'
    },
    'project-archetype': {
      icon: Layout,
      defaultRoute: '/project-archetype'
    },
    'glossary': {
      icon: BookOpen,
      defaultRoute: '/glossary'
    },
    'faqs': {
      icon: HelpCircle,
      defaultRoute: '/faqs'
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
      const { displayedResults, hiddenCount } = performLocalSearch(value.trim());
      setSearchResults({
        results: displayedResults,
        hiddenCount
      });
      setShowSearchDropdown(true);
    } else {
      setSearchResults({ results: [], hiddenCount: 0 });
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
    
    const results = performGlobalSearch(query, 5);
    const hasMore = results.length > 5;
    
    return {
      displayedResults: results.slice(0, 5),
      hiddenCount: hasMore ? results.length - 5 : 0
    };
  };

  // Navigation helper functions
  const hasSubsections = (section) => {
    return section && 'subsections' in section && Array.isArray(section.subsections);
  };

  const hasDropdown = (item) => {
    return item && typeof item === 'object' && 'hasDropdown' in item && item.hasDropdown === true;
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
    
    // Special handling for compliance section anchors
    if (section === 'compliance') {
      const anchorId = item.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
      return `/compliance#${anchorId}`;
    }
    
    // Handle dropdown items
    if (typeof item === 'object' && item.hasDropdown) {
      const itemSlug = item.title.toLowerCase().replace(/\s+/g, '-');
      return `/${section}/${itemSlug}`;
    }
    
    const itemSlug = typeof item === 'string' ? item.toLowerCase().replace(/\s+/g, '-') : '';
    
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
  const renderSectionItems = (section, sectionKey) => (
    <div className="ml-4">
      {section.items.map((item) => {
        // Check if item has dropdown
        if (hasDropdown(item)) {
          const path = getItemPath(sectionKey, item);
          const isActive = location.pathname === path;
          const isExpanded = expandedDropdown === `${sectionKey}-${item.title}`;
          
          return (
            <div key={item.title} className="mb-1">
              <div className="flex flex-col">
                <Link
                  to={path}
                  className={`flex justify-between items-center p-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'bg-red-800 text-white hover:text-white'
                      : 'text-black hover:bg-gray-100'
                  }`}
                  onClick={(e) => {
                    // Remove the preventDefault to allow navigation
                    // e.preventDefault();
                    // Toggle dropdown when clicking anywhere on the item
                    setExpandedDropdown(current => current === `${sectionKey}-${item.title}` ? null : `${sectionKey}-${item.title}`);
                    // Navigate to the path
                    navigate(path);
                  }}
                >
                  <span>{item.title}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setExpandedDropdown(current => current === `${sectionKey}-${item.title}` ? null : `${sectionKey}-${item.title}`);
                    }}
                  />
                </Link>
                
                {isExpanded && (
                  <div className="ml-4 mt-1">
                    {item.dropdownItems.map(dropdownItem => {
                      const dropdownItemSlug = dropdownItem.toLowerCase().replace(/\s+/g, '-');
                      const dropdownPath = `/project-archetype/${dropdownItemSlug}`;
                      const isDropdownActive = location.pathname === dropdownPath;
                      
                      return (
                        <Link
                          key={dropdownItem}
                          to={dropdownPath}
                          className={`block p-2 text-sm rounded-lg transition-colors ${
                            isDropdownActive
                              ? 'bg-red-800 text-white hover:text-white'
                              : 'text-black hover:bg-gray-100'
                          }`}
                        >
                          {dropdownItem}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        }
        
        // Regular item (no dropdown)
        const path = getItemPath(sectionKey, item);
        const isActive = location.pathname === path;
        return (
          <div key={item} className="mb-1">
            {path ? (
              <Link
                to={path}
                className={`block p-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? 'bg-red-800 text-white hover:text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {item}
              </Link>
            ) : (
              <button
                onClick={() => getItemPath(sectionKey, item)}
                className="block w-full text-left p-2 text-sm rounded-lg transition-colors text-black hover:bg-gray-100"
              >
                {item}
              </button>
            )}
          </div>
        );
      })}
    </div>
  );

  const renderSubsectionItems = (section, sectionKey, subsection) => (
    <div className="ml-4">
      {subsection.items.map((item) => {
        // Special case for Key Communications
        if (item === 'Key Communications' && sectionKey === 'communications' && subsection.id === 'internal-comms-plan') {
          return (
            <div key={item} className="mb-1">
              <button
                onClick={() => window.open('https://www.google.com', '_blank')}
                className={`block w-full p-2 text-sm rounded-lg transition-colors text-black bg-white hover:bg-gray-100 text-left`}
              >
                <span className="flex items-center">
                  {item}
                  <LinkIcon className="w-3 h-3 ml-1" />
                </span>
              </button>
            </div>
          );
        }

        // Normal case for other items
        const path = getItemPath(sectionKey, item, subsection.id);
        const isActive = location.pathname === path;
        return (
          <div key={item} className="mb-1">
            <Link
              to={path}
              className={`block p-2 text-sm rounded-lg transition-colors ${
                isActive
                  ? 'bg-red-800 text-white hover:text-white'
                  : 'text-black hover:bg-gray-100'
              }`}
            >
              {item}
            </Link>
          </div>
        );
      })}
    </div>
  );

  const scrollToSection = (direction) => {
    const sections = document.querySelectorAll('h2, h3'); // Assuming sections are marked with h2 or h3
    const currentScrollY = window.scrollY;

    if (direction === 'up') {
      // Find the previous section
      const previousSection = [...sections].reverse().find(section => {
        const sectionTop = section.getBoundingClientRect().top + currentScrollY;
        return sectionTop < currentScrollY; // Check if the section is above the current scroll position
      });
      if (previousSection) {
        previousSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top if no previous section
      }
    } else if (direction === 'down') {
      // Find the next section
      const nextSection = [...sections].find(section => {
        const sectionTop = section.getBoundingClientRect().top + currentScrollY;
        return sectionTop > currentScrollY; // Check if the section is below the current scroll position
      });
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); // Scroll to bottom if no next section
      }
    }
  };

  const handleSingleClick = (direction) => {
    if (!isScrollingRef.current) {
      scrollToSection(direction);
    }
  };

  const handleDoubleClick = (direction) => {
    isScrollingRef.current = true;
    if (direction === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
    // Reset the scrolling state after animation completes
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  };

  // Check if navigation is overflowing
  const checkNavOverflow = () => {
    if (navContainerRef.current) {
      const { scrollHeight, clientHeight } = navContainerRef.current;
      const hasOverflow = scrollHeight > clientHeight;
      setNavOverflow(hasOverflow);
    }
  };

  // Update scroll position and check button visibility
  const updateScrollState = () => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      setScrollPosition(container.scrollTop);
      
      // Check if we're at the bottom
      const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 5;
      // This will be used in the render to determine button visibility
    }
  };

  // Handle navigation scroll
  const handleNavScroll = (direction) => {
    if (navContainerRef.current) {
      const container = navContainerRef.current;
      const scrollAmount = 100; // Adjust scroll amount as needed
      
      if (direction === 'up') {
        container.scrollTop -= scrollAmount;
      } else {
        container.scrollTop += scrollAmount;
      }
      
      updateScrollState();
    }
  };

  // Scroll to active section
  const scrollToActiveSection = () => {
    if (navContainerRef.current) {
      const activeElement = navContainerRef.current.querySelector('.bg-red-800');
      if (activeElement) {
        // Calculate the position to scroll to (center the active element in the viewport)
        const container = navContainerRef.current;
        const containerHeight = container.clientHeight;
        const elementTop = activeElement.offsetTop;
        const elementHeight = activeElement.clientHeight;
        
        // Scroll to position that centers the element
        const scrollPosition = elementTop - (containerHeight / 2) + (elementHeight / 2);
        container.scrollTop = scrollPosition;
        
        // Update scroll position state
        setScrollPosition(container.scrollTop);
      }
    }
  };

  // Update overflow status when sections expand/collapse
  useEffect(() => {
    checkNavOverflow();
    // Scroll to active section after expanding
    if (expandedTopSection || expandedSubSection) {
      // Small delay to allow the DOM to update after expansion
      setTimeout(scrollToActiveSection, 100);
    }
  }, [expandedTopSection, expandedSubSection, expandedDropdown, isSidebarCollapsed]);

  // Check for overflow on initial render and window resize
  useEffect(() => {
    checkNavOverflow();
    window.addEventListener('resize', checkNavOverflow);
    return () => window.removeEventListener('resize', checkNavOverflow);
  }, []);

  // Scroll to active section on initial load
  useEffect(() => {
    scrollToActiveSection();
  }, [location.pathname]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Add style tag for scrollbar hiding */}
      <style>{scrollbarHideStyles}</style>
      
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 bg-white shadow-lg relative transition-all duration-300`}>
        <div className="bg-white h-16 px-4 border-b shadow-sm flex justify-between items-center space-x-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Home className="w-5 h-5 text-red-800" />
            {!isSidebarCollapsed && (
              <span className="ml-2 text-red-800 font-medium">CCC Playbook</span>
            )}
          </Link>
          <button 
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="absolute z-50 -right-3 top-4 bg-white rounded-full p-1 shadow-md"
          >
            {isSidebarCollapsed ? (
              <PanelLeftOpen className="w-5 h-5 text-gray-600" />
            ) : (
              <PanelLeftClose className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>
        
        {/* Navigation scroll buttons - only show when overflow is detected */}
        {navOverflow && !isSidebarCollapsed && (
          <>
            {/* Top scroll button and gradient */}
            <div 
              className={`absolute z-40 left-0 top-16 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none transition-opacity duration-300 ${
                scrollPosition <= 5 ? 'opacity-0' : 'opacity-100'
              }`}
            ></div>
            <button 
              onClick={() => handleNavScroll('up')}
              className={`absolute z-50 left-1/2 transform -translate-x-1/2 top-[4.5rem] bg-white rounded-full p-1.5 shadow-md ${
                scrollPosition <= 5 ? 'opacity-0 pointer-events-none' : 'opacity-90'
              } transition-opacity hover:opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-800`}
              aria-label="Scroll navigation up"
            >
              <ChevronUp className="w-5 h-5 text-red-800" />
            </button>
            
            {/* Bottom scroll button and gradient */}
            <div 
              className={`absolute z-40 left-0 bottom-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ${
                navContainerRef.current && 
                (navContainerRef.current.scrollHeight - navContainerRef.current.scrollTop - navContainerRef.current.clientHeight < 5)
                  ? 'opacity-0' 
                  : 'opacity-100'
              }`}
            ></div>
            <button 
              onClick={() => handleNavScroll('down')}
              className={`absolute z-50 left-1/2 transform -translate-x-1/2 bottom-4 bg-white rounded-full p-1.5 shadow-md ${
                navContainerRef.current && 
                (navContainerRef.current.scrollHeight - navContainerRef.current.scrollTop - navContainerRef.current.clientHeight < 5)
                  ? 'opacity-0 pointer-events-none' 
                  : 'opacity-90'
              } transition-opacity hover:opacity-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-800`}
              aria-label="Scroll navigation down"
            >
              <ChevronDown className="w-5 h-5 text-red-800" />
            </button>
          </>
        )}
        
        <nav 
          ref={navContainerRef}
          className="p-2 bg-white overflow-y-auto scrollbar-hide"
          style={{ 
            height: 'calc(100vh - 64px)',
            scrollBehavior: 'smooth',
            msOverflowStyle: 'none', /* IE and Edge */
            scrollbarWidth: 'none' /* Firefox */
          }}
          onScroll={updateScrollState}
        >
          {Object.entries(navigationItems).map(([key, section]) => {
            const SectionIcon = sectionConfig[key].icon;
            return (
              <div key={key} className="mb-2">
                <button
                  onClick={() => handleSectionClick(key)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
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
                    <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedTopSection === key ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedTopSection === key && !isSidebarCollapsed ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  {section.items && (
                    renderSectionItems(section, key)
                  )}
                  
                  {hasSubsections(section) && (
                    <div className="mt-2 ml-2">
                      {section.subsections.map((subsection) => (
                        <div key={subsection.id} className="mb-2">
                          <button
                            onClick={(e) => toggleSubSection(subsection.id, e)}
                            className={`w-full flex items-center justify-between p-2 rounded-lg transition-all duration-300 ${
                              isSectionSelected(`${key}/${subsection.id}`)
                                ? 'bg-red-800 text-white'
                                : 'bg-white text-black'
                            } ${!isSectionSelected(`${key}/${subsection.id}`) && 'hover:bg-gray-100'}`}
                          >
                            <span className="text-sm">{subsection.title}</span>
                            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedSubSection === subsection.id ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedSubSection === subsection.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {renderSubsectionItems(section, key, subsection)}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="bg-white h-16 px-4 border-b shadow-sm flex justify-between items-center">
          {/* Left-aligned group */}
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

          {/* Right-aligned group */}
          <div className="flex items-center space-x-4">
            <div 
              className="relative group"
            >
              <button className="flex items-center text-red-800 hover:text-red-700 bg-white">
                <LinkIcon className="w-4 h-4 mr-2" />
                Quick Links
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Add invisible bridge to maintain hover */}
              <div className="absolute w-full h-2 bg-transparent" />
              <div className="absolute z-50 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/faqs" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <BookOpen className="w-4 h-4 mr-2" />
                    FAQs
                  </Link>
                  <Link to="/compliance" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Shield className="w-4 h-4 mr-2" />
                    Compliance Guidance
                  </Link>
                  <Link to="/processes/sops-&-resources" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <Database className="w-4 h-4 mr-2" />
                    SOPs & Resources
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-red-800 hover:text-red-700 bg-white transition-colors">
                <MessageSquare className="w-4 h-4 mr-2" />
                Feedback
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Add invisible bridge to maintain hover */}
              <div className="absolute w-full h-2 bg-transparent" />
              <div className="absolute z-50 mt-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/feedback" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Leave Feedback
                  </Link>
                  <a href="https://supabase.com/dashboard/project/ttfeudxktntujxehofzg/editor/29291?schema=public" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <BookOpen className="w-4 h-4 mr-2" />
                    See All Feedback
                  </a>
                </div>
              </div>
            </div>
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
              {showSearchDropdown && (
                <div className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
                  {searchResults.results.length > 0 ? (
                    <>
                      {searchResults.results.map((result, index) => (
                        <Link
                          key={index}
                          to={result.path}
                          className="w-full px-4 py-3 text-left hover:bg-gray-50 flex flex-col border-b last:border-b-0"
                          onClick={() => setShowSearchDropdown(false)}
                        >
                          <span className="font-medium text-red-800">{result.title}</span>
                          <span className="text-sm text-gray-600 line-clamp-1">
                            {result.excerpt}
                          </span>
                        </Link>
                      ))}
                      {searchResults.hiddenCount > 0 && (
                        <Link
                          to={`/search?q=${encodeURIComponent(searchTerm.trim())}`}
                          className="w-full px-4 py-2 text-center bg-gray-50 text-sm text-red-800 border-t hover:bg-gray-100"
                          onClick={() => setShowSearchDropdown(false)}
                        >
                          View {searchResults.hiddenCount} more results
                        </Link>
                      )}
                    </>
                  ) : (
                    <div className="px-4 py-3 text-gray-500">No matches found</div>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <Breadcrumbs />
            {children}
          </div>
          <TextSelectionComment />
        </main>
      </div>

      {/* Powered by BPX Logo */}
      <div 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'white',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
        }}
      >
        <span style={{ color: '#4D4D4D', fontSize: '14px' }}>Powered by</span>
        <img src="/bpxlogo.svg" alt="BPX Logo" style={{ height: '20px' }} />
      </div>
    </div>
  );
};

export default MainLayout;