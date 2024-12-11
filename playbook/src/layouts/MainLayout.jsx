import React, { useState } from 'react';
import { Home, Search, ChevronUp, ChevronDown } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';
import { Link, useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState({
    'playbook-app': false,
    'ccc-initiative': false,
    'communication-plan': true,
    'internal': true,
    'engagement-plan': true,
    'internal-onboarding': false,
    'processes': false,
    'systems': false
  });

  const isSelected = (section, item) => {
    if (!section || !item) return false;
    const itemPath = `/${section}/${item.toLowerCase().replace(/\s+/g, '-')}`;
    return location.pathname === itemPath;
  };

  const isSectionSelected = (section) => {
    if (!section) return false;
    return location.pathname.startsWith(`/${section}`);
  };

  const getItemPath = (section, item) => {
    if (!section || !item) return '/';
    return `/${section}/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  const toggleSection = (section) => {
    if (!section) return;
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

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
                onClick={() => toggleSection(key)}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors
                  ${isSectionSelected(key) 
                    ? 'bg-red-800 text-white' 
                    : 'bg-white text-black hover:bg-gray-100'}`}
              >
                <span className="text-sm">{section.title}</span>
                {expandedSections[key] ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              
              {expandedSections[key] && section.subsections && (
                <div className="mt-2 ml-2">
                  {section.subsections.map((subsection) => (
                    <div key={subsection.id} className="mb-2">
                      <button
                        onClick={() => toggleSection(subsection.id)}
                        className={`w-full flex items-center justify-between p-2 rounded-lg transition-colors
                          ${isSectionSelected(subsection.id)
                            ? 'bg-red-800 text-white'
                            : 'bg-white text-black hover:bg-gray-100'}`}
                      >
                        <span className="text-sm">{subsection.title}</span>
                        {expandedSections[subsection.id] ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      
                      {expandedSections[subsection.id] && subsection.items && (
                        <div className="ml-4">
                          {subsection.items.map((item, itemIdx) => (
                            <Link 
                              key={itemIdx}
                              to={getItemPath(key, item)}
                              className={`block py-1 text-sm rounded px-2 ${
                                isSelected(key, item)
                                  ? 'bg-red-800 text-white'
                                  : 'text-black hover:bg-gray-100'
                              }`}
                            >
                              {item}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              
              {expandedSections[key] && section.items && (
                <div className="mt-2 ml-2">
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={getItemPath(key, item)}
                      className={`block py-1 text-sm rounded px-2 ${
                        isSelected(key, item)
                          ? 'bg-red-800 text-white'
                          : 'text-black hover:bg-gray-100'
                      }`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
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
        {children}
      </div>
    </div>
  );
};

export default MainLayout;