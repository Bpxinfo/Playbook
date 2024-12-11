import React, { useState } from 'react';
import { Home, Search, ChevronUp, ChevronDown } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const MainLayout = ({ children }) => {
  const location = useLocation();
  
  // Track expanded state for each navigation level separately
  const [expandedTopSection, setExpandedTopSection] = useState(null);
  const [expandedSubSection, setExpandedSubSection] = useState(null);

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
    setExpandedTopSection(current => current === sectionKey ? null : sectionKey);
    // When changing top-level sections, close any open subsections
    setExpandedSubSection(null);
  };

  const toggleSubSection = (subsectionKey, e) => {
    e.stopPropagation(); // Prevent the parent section from toggling
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
      <div className="w-64 flex-shrink-0 bg-white shadow-lg">
        <Link to="/" className="block">
          <div className="p-4 border-b">
            <div className="flex items-center text-red-800 font-medium">
              <Home className="w-4 h-4 mr-2" />
              Playbook Home
            </div>
          </div>
        </Link>
        
        <nav className="p-2 bg-white">
          {Object.entries(navigationItems).map(([key, section]) => (
            <div key={key} className="mb-2">
              <button
                onClick={() => toggleTopSection(key)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                  isSectionSelected(key) 
                    ? 'bg-red-800 text-white' 
                    : 'bg-white text-black'
                } ${!isSectionSelected(key) && 'hover:bg-gray-100'}`}
              >
                <span className="text-sm">{section.title}</span>
                {expandedTopSection === key ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              {expandedTopSection === key && (
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
          ))}
        </nav>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="bg-white p-4 shadow-sm flex justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          </div>
        </div>
        <Breadcrumbs />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;