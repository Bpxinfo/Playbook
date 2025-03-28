import React, { useState, useEffect, useRef, useCallback } from 'react';
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
  ChevronLeft,
  Menu,
  X,
  ExternalLink,
  Loader,
  FileText,
  Hash,
  ListIcon,
  Lock,
  Unlock,
  Folders
} from 'lucide-react'; 
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { searchIndex } from '../utils/searchIndex';
import useContentSearch from '../hooks/useContentSearch';
import { performGlobalSearch } from '../utils/searchUtils';
import TextSelectionComment from '../components/TextSelectionComment';
import SearchDebug from '../components/SearchDebug';
import { Sidebar, SidebarBody, SidebarLink } from '../components/Sidebar';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '../lib/utils';
import TextSelectionContextMenu from '../components/TextSelectionContextMenu';
import UserIcon from '../components/UserIcon';
import ThemeToggle from '../components/ThemeToggle';

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
  
  // Update sidebar state management
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigationItems = {
    'playbook-overview': {
      title: 'Playbook Overview',
    },
    'ccc-overview': {
      title: 'CCC Overview',
      items: [
        'Strategic Pillars',
        'Key Messaging',
        'Stakeholders',
        'Patient Impact'
      ]
    },
    'communications': {
      title: 'Communications',
      items: [
        'Channels',
        'Cadence',
        'CCC Stakeholders',
        // 'Communication Path',
        // 'Internal Engagement Strategies'
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
        },
      ]
    },
    'processes': {
      title: 'Processes & Governance',
      items: [
        'Processes',
        'Governance',
        'SOPs & Resources'
      ]
    },
    'compliance': {
      title: 'Compliance Guidance',
      items: [
        // 'Overview',
        'Resources and Support',
      ]
    },

    'systems': {
      title: 'Systems',
      items: [
        'Internal Platforms',
        //'Manual Systems',
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
      // Use our enhanced search functionality
      console.log('MainLayout: Searching for', value.trim());
      
      // Ensure searchContent is available
      if (typeof searchContent !== 'function') {
        console.error('MainLayout: searchContent is not a function', searchContent);
        return;
      }
      
      try {
        const results = performGlobalSearch(value.trim(), navigationItems, searchContent, 10);
        console.log('MainLayout: Search results', results);
        
        if (Array.isArray(results)) {
          setSearchResults({
            results: results.slice(0, 5),
            hiddenCount: results.length > 5 ? results.length - 5 : 0
          });
          setShowSearchDropdown(true);
        } else {
          console.error('MainLayout: Results are not an array', results);
          setSearchResults({ results: [], hiddenCount: 0 });
          setShowSearchDropdown(false);
        }
      } catch (error) {
        console.error('MainLayout: Error performing search', error);
        setSearchResults({ results: [], hiddenCount: 0 });
        setShowSearchDropdown(false);
      }
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
    
    // Special case for internal-onboarding section
    if (path === 'internal-onboarding') {
      // Check if current path is under any of the core/extended subsections
      return location.pathname.startsWith(`/${path}`) || 
             location.pathname.includes('/ccc-core/') ||
             location.pathname.includes('/ccc-extended/');
    }
    
    return location.pathname.startsWith(`/${path}`);
  };

  const getItemPath = (section, item, subsection = null) => {
    if (!section || !item) return '/';
    
    // Special handling for compliance section
    if (section === 'compliance') {
      // const anchorId = item.toLowerCase().replace(/\s+/g, '-').replace(/[&]/g, 'and');
      const anchorId = 'overview';
      return `/compliance/guidance#${anchorId}`;
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
    // Always navigate to the section's default route first
    if (key === 'compliance') {
      navigate('/compliance');  // Navigate to landing page for compliance section
    } else {
      navigate(sectionConfig[key].defaultRoute);
    }
    
    // Only toggle expansion if sidebar is open
    if (sidebarOpen) {
      setExpandedTopSection(current => current === key ? null : key);
      setExpandedSubSection(null);
    }
  };

  // Add effect to clear expanded sections when sidebar is collapsed
  useEffect(() => {
    if (!sidebarOpen) {
      setExpandedTopSection(null);
      setExpandedSubSection(null);
    }
  }, [sidebarOpen]);

  const toggleTopSection = (sectionKey) => {
    if (isSidebarCollapsed) {
      setIsSidebarCollapsed(false);
    }
    setExpandedTopSection(current => current === sectionKey ? null : sectionKey);
    setExpandedSubSection(null);
  };

  const toggleSubSection = (subsectionKey, e) => {
    e.stopPropagation();
    
    // Navigate to the subsection page
    // Using the current expandedTopSection to determine the parent section
    if (expandedTopSection) {
      navigate(`/${expandedTopSection}/${subsectionKey}`);
    }
    
    // Toggle the expanded state
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
                      ? 'bg-red-700 text-white hover:text-white'
                      : 'bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
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
                              ? 'bg-red-500 text-white hover:text-white'
                              : 'bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
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
                    ? 'bg-red-700 text-white hover:text-white'
                    : 'bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item}
              </Link>
            ) : (
              <button
                onClick={() => getItemPath(sectionKey, item)}
                className="block w-full text-left p-2 text-sm rounded-lg transition-colors bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
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
      {subsection.items.map((item, index) => {
        // Special case for Key Communications
        if (item === 'Key Communications' && sectionKey === 'communications' && subsection.id === 'internal-comms-plan') {
          return (
            <div key={`${subsection.id}-${item}-${index}`} className="mb-1">
              <button
                onClick={() => window.open('https://www.google.com', '_blank')}
                className={`block w-full p-2 text-sm rounded-lg transition-colors bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-left`}
              >
                <span className="flex items-center">
                  {item}
                  <LinkIcon className="w-3 h-3 ml-1" />
                </span>
              </button>
            </div>
          );
        }

        // Handle items that are objects with title and path
        if (typeof item === 'object' && item.title && item.path) {
          const isActive = location.pathname === item.path.split('#')[0] && location.hash === '#' + item.path.split('#')[1];
          return (
            <div key={`${subsection.id}-${item.title}-${index}`} className="mb-1">
              <Link
                to={item.path}
                className={`block p-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? 'bg-red-500 text-white hover:text-white'
                    : 'bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                onClick={(e) => {
                  // Allow default navigation
                  setTimeout(() => {
                    const targetId = item.path.split('#')[1];
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
              >
                {item.title}
              </Link>
            </div>
          );
        }

        // Handle regular string items (backwards compatibility)
        const path = getItemPath(sectionKey, item, subsection.id);
        const isActive = location.pathname === path;
        return (
          <div key={`${subsection.id}-${item}-${index}`} className="mb-1">
            {path ? (
              <Link
                to={path}
                className={`block p-2 text-sm rounded-lg transition-colors ${
                  isActive
                    ? 'bg-red-500 text-white hover:text-white'
                    : 'bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item}
              </Link>
            ) : (
              <button
                onClick={() => getItemPath(sectionKey, item)}
                className="block w-full text-left p-2 text-sm rounded-lg transition-colors bg-white dark:bg-[#333333] text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item}
              </button>
            )}
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

  const handleLogoClick = () => {
    navigate('/ccc-playbook');
  };

  return (
    <div className="min-h-screen bg-[#e8e8e8] dark:bg-[#212121] relative">
      <TextSelectionContextMenu />
      {/* Top Navigation Bar - Keep it intact */}
      <header className="w-full py-3 bg-white dark:bg-[#333333] border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 w-full min-w-0">
          <div className="flex items-center space-x-4 bg-white dark:bg-[#333333] min-w-0">
            {/* CCC Digital Playbook icon/link */}
            <button onClick={handleLogoClick} className="flex items-center">
              <Home className="w-5 h-5 text-red-800 dark:text-white mr-2" />
              <span className="text-xl font-semibold text-red-800 dark:text-white">CCC Playbook</span>
            </button>
          </div>
          
          {/* Center Navigation Links */}
          <div className="flex items-center space-x-6 flex-grow ml-32">
            <a href="https://gileadconnect.sharepoint.com/sites/MA-US-Oncology" target="_blank" rel="noopener noreferrer" className="text-red-800 dark:text-white hover:underline">
              CCC SharePoint
            </a>
            <a href="https://gileaddevops.atlassian.net/jira/software/projects/CCC/boards/573/timeline" target="_blank" rel="noopener noreferrer" className="text-red-800 dark:text-white hover:underline">
              CCC Roadmap
            </a>
            <a href="https://teams.microsoft.com/l/team/19%3AltiB9AjmIpw_32CWiItBDE2BpBaQkBrp9J0XfjfMeek1%40thread.tacv2/conversations?groupId=d82c53b9-2336-4e94-99da-b0ecb26ab3dc&tenantId=a5a8bcaa-3292-41e6-b735-5e8b21f4dbfd" target="_blank" rel="noopener noreferrer" className="text-red-800 dark:text-white hover:underline">
              CCC Teams
            </a>
          </div>

          {/* Right-aligned group with Quick Links and Feedback dropdowns */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center text-red-800 dark:text-white hover:text-red-700 dark:hover:text-white">
                <LinkIcon className="w-4 h-4 mr-2" />
                Quick Links
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Add invisible bridge to maintain hover */}
              <div className="absolute w-full h-2 bg-transparent" />
              <div className="absolute z-50 mt-0 w-64 bg-white dark:bg-[#333333] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/faqs" className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    FAQs
                  </Link>
                  <a 
                    href="https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    Compliance Guidance
                  </a>
                  <Link to="/processes/sops-&-resources" className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Database className="w-4 h-4 mr-2" />
                    SOPs & Resources
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center text-red-800 dark:text-white hover:text-red-700 dark:hover:text-white transition-colors">
                <MessageSquare className="w-4 h-4 mr-2" />
                Feedback
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {/* Add invisible bridge to maintain hover */}
              <div className="absolute w-full h-2 bg-transparent" />
              <div className="absolute z-50 mt-0 w-48 bg-white dark:bg-[#333333] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 invisible group-hover:visible">
                <div className="py-2">
                  <Link to="/feedback" className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Leave Feedback
                  </Link>
                  <a href="https://supabase.com/dashboard/project/ttfeudxktntujxehofzg/editor/29291?schema=public" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <BookOpen className="w-4 h-4 mr-2" />
                    See All Feedback
                  </a>
                </div>
              </div>
            </div>

            {/* Search bar */}
            <form 
              onSubmit={navigateToSearchResults}
              className="flex items-center"
            >
              <div className="relative w-64" ref={searchRef}>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 text-black rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
                  onFocus={() => {
                    if (searchTerm.trim().length > 1) {
                      setShowSearchDropdown(true);
                    }
                  }}
                />
                
                {showSearchDropdown && searchResults.results.length > 0 && (
                  <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md z-50 max-h-96 overflow-y-auto border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    {searchResults.results.map((result, idx) => (
                      <Link
                        key={`${result.path}-${idx}`}
                        to={result.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-0 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700"
                        onClick={() => setShowSearchDropdown(false)}
                      >
                        <div className="font-medium">{result.title}</div>
                        <div className="text-xs text-gray-500 dark:text-white dark:opacity-70">{result.excerpt}</div>
                      </Link>
                    ))}
                    
                    {searchResults.hiddenCount > 0 && (
                      <button
                        onClick={navigateToSearchResults}
                        className="block w-full px-4 py-2 text-sm text-center text-red-800 bg-white font-medium dark:bg-gray-800 dark:text-white"
                      >
                        See all {searchResults.hiddenCount + searchResults.results.length} results
                      </button>
                    )}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="ml-2 p-2 rounded-md bg-red-800 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <Search className="h-4 w-4 text-white" />
              </button>
            </form>

            {/* Theme Toggle */}
            <div className="ml-4">
              <ThemeToggle />
            </div>

            {/* Add UserIcon component */}
            <div className="ml-4">
              <UserIcon />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Container */}
        <div className={cn(
          "fixed top-0 left-0 h-screen z-40 transition-all duration-300",
          sidebarOpen ? "w-[280px]" : "w-12"
        )}>
          <Sidebar 
            open={sidebarOpen} 
            setOpen={setSidebarOpen}
            animate={true}
          >
            <SidebarBody className="bg-white dark:bg-[#333333] h-full transition-all duration-300">
              <nav 
                ref={navContainerRef}
                className={cn(
                  "p-2 overflow-y-auto scrollbar-hide",
                  !sidebarOpen && "flex flex-col items-center",
                  !sidebarOpen && "mt-7"
                )}
                style={{ 
                  height: 'calc(100vh - 64px)',
                  marginTop: '64px',
                  scrollBehavior: 'smooth',
                  msOverflowStyle: 'none',
                  scrollbarWidth: 'none'
                }}
                onScroll={updateScrollState}
              >
                {Object.entries(navigationItems).map(([key, section]) => {
                  const SectionIcon = sectionConfig[key].icon;
                  return (
                    <div key={key} className={cn("mb-2", !sidebarOpen && "w-full flex justify-center")}>
                      <button
                        onClick={() => handleSectionClick(key)}
                        className={cn(
                          "flex items-center transition-all duration-300 rounded-lg",
                          sidebarOpen ? "w-full justify-between p-3" : "w-12 h-12 p-2 justify-center",
                          isSectionSelected(key) 
                            ? 'bg-red-900 text-white' 
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white'
                        )}
                      >
                        <div className="flex items-center">
                          {SectionIcon && (
                            <SectionIcon className={cn("w-6 h-6", isSectionSelected(key) ? 'text-white' : 'text-red-800 dark:text-white')} />
                          )}
                          {sidebarOpen && (
                            <motion.span 
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm ml-2 font-medium"
                            >
                              {section.title}
                            </motion.span>
                          )}
                        </div>
                        {sidebarOpen && (section.items || hasSubsections(section)) && (
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedTopSection === key ? 'rotate-180' : ''}`} />
                          </motion.div>
                        )}
                      </button>
                      
                      <AnimatePresence>
                        {expandedTopSection === key && sidebarOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            {section.items && (
                              renderSectionItems(section, key)
                            )}
                            
                            {hasSubsections(section) && (
                              <div className="mt-2 ml-2">
                                {section.subsections.map((subsection) => (
                                  <div key={subsection.id} className="mb-2">
                                    <button
                                      onClick={(e) => toggleSubSection(subsection.id, e)}
                                      className={cn(
                                        "w-full flex items-center justify-between p-2 rounded-lg transition-all duration-300",
                                        isSectionSelected(`${key}/${subsection.id}`)
                                          ? 'bg-red-700 text-white'
                                          : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-white'
                                      )}
                                    >
                                      <span className="text-sm">{subsection.title}</span>
                                      <ChevronDown className={`w-4 h-4 transform transition-transform duration-300 ${expandedSubSection === subsection.id ? 'rotate-180' : ''}`} />
                                    </button>
                                    
                                    <AnimatePresence>
                                      {expandedSubSection === subsection.id && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.3 }}
                                          className="overflow-hidden"
                                        >
                                          {renderSubsectionItems(section, key, subsection)}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>
              
              {/* Add scroll buttons for navigation */}
              {navOverflow && (
                <>
                  {/* Top scroll button and gradient */}
                  <div 
                    className={`absolute z-40 left-0 top-0 w-full h-12 bg-gradient-to-b from-white dark:from-[#333333] to-transparent pointer-events-none transition-opacity duration-300 ${
                      scrollPosition <= 5 ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></div>
                  <button 
                    onClick={() => handleNavScroll('up')}
                    className={cn(
                      "absolute z-50 left-1/2 transform -translate-x-1/2 top-[4.5rem] bg-white dark:bg-[#333333] rounded-full p-1.5 shadow-md transition-opacity hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800",
                      scrollPosition <= 5 ? 'opacity-0 pointer-events-none' : 'opacity-90'
                    )}
                    aria-label="Scroll navigation up"
                  >
                    <ChevronUp className="w-5 h-5 text-red-800 dark:text-white" />
                  </button>
                  
                  {/* Bottom scroll button and gradient */}
                  <div 
                    className={cn(
                      "absolute z-40 left-0 bottom-0 w-full h-12 bg-gradient-to-t from-white dark:from-[#333333] to-transparent pointer-events-none transition-opacity duration-300",
                      navContainerRef.current && 
                      (navContainerRef.current.scrollHeight - navContainerRef.current.scrollTop - navContainerRef.current.clientHeight < 5)
                        ? 'opacity-0' 
                        : 'opacity-100'
                    )}
                  ></div>
                  <button 
                    onClick={() => handleNavScroll('down')}
                    className={cn(
                      "absolute z-50 left-1/2 transform -translate-x-1/2 bottom-4 bg-white dark:bg-[#333333] rounded-full p-1.5 shadow-md transition-opacity hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-red-800",
                      navContainerRef.current && 
                      (navContainerRef.current.scrollHeight - navContainerRef.current.scrollTop - navContainerRef.current.clientHeight < 5)
                        ? 'opacity-0 pointer-events-none' 
                        : 'opacity-90'
                    )}
                    aria-label="Scroll navigation down"
                  >
                    <ChevronDown className="w-5 h-5 text-red-800 dark:text-white" />
                  </button>
                </>
              )}
            </SidebarBody>
          </Sidebar>
        </div>

        {/* Main Content */}
        <main className={cn(
          "flex-1 p-6 transition-all duration-300 bg-[#e8e8e8] dark:bg-[#212121]",
          sidebarOpen ? "md:ml-[280px]" : "md:ml-0"
        )}>
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs />
            <div className="mt-4">
              <Outlet />
            </div>
          </div>
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
          background: 'var(--bg-color, white)',
          padding: '8px 12px',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
          '--bg-color': document.documentElement.classList.contains('dark') ? '#333333' : 'white',
        }}
        className="dark:bg-[#333333] bg-white"
      >
        <span style={{ color: 'var(--text-color, #4D4D4D)', fontSize: '14px' }} className="dark:text-white">Powered by</span>
        <img src="/bpxlogo.svg" alt="BPX Logo" style={{ height: '20px' }} />
      </div>

      {/* Add search debug component */}
      {/* <SearchDebug /> */}

      {/* Styles */}
      <style>
        {scrollbarHideStyles}
      </style>
    </div>
  );
};

export default MainLayout;