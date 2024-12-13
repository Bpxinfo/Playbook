import React, { useState } from 'react';
import { 
  Home,
  Search, 
  ChevronUp, 
  ChevronDown,
  PanelLeftClose,
  PanelLeftOpen,
  Book,
  Building,
  MessageSquare,
  UserPlus,
  Settings,
  Database,
  Layout
} from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expandedTopSection, setExpandedTopSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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
    }
  };

  //search functions
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const handleSectionClick = (key) => {
    // Always navigate to default route when clicking section header
    navigate(sectionConfig[key].defaultRoute);
    
    // Only expand/collapse if sidebar isn't collapsed
    if (!isSidebarCollapsed) {
      setExpandedTopSection(current => current === key ? null : key);
      setExpandedSubSection(null);
    }
  };

  // Map section keys to icons
  const sectionIcons = {
    'playbook-app-overview': Book,
    'ccc-initiative': Building,
    'communication-plan': MessageSquare,
    'internal-onboarding': UserPlus,
    'processes': Settings,
    'systems': Database,
    'projects-archetypes': Layout
  };

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
        'Stakeholders',
        'Glossary of Terms'
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
    'systems': {
      title: 'Systems',
      items: [
        'Objectives',
        'Digital Systems',
        'Manual Systems',
        'Links to Process'
      ]
    },
    'projects-archetypes': {
      title: 'Projects Archetypes',
      items: ['Objectives']
    }
  };

return (
    <div className="flex h-screen bg-gray-100">
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 bg-white shadow-lg relative transition-all duration-300`}>
      <div className="p-4 border-b flex items-center justify-between">
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

      <div className="flex-1 overflow-auto">
        <div className="bg-white p-4 shadow-sm flex justify-end items-center space-x-4">
          <Link
            to="/feedback"
            className="flex items-center text-red-800 hover:text-red-700 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Submit Feedback
          </Link>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          </form>
        </div>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;