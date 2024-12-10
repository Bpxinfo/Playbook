import React, { useState } from 'react';
import { Home, Search } from 'lucide-react';
import SidebarItem from '../components/SidebarItem';

const MainLayout = ({ children }) => {
  const [expandedSections, setExpandedSections] = useState({
    'playbook-app': false,
    'ccc-initiative': false,
    'communication-plan': true,
    'internal-onboarding': false,
    'processes': false,
    'systems': false,
    'projects': false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 min-w-64 bg-white shadow-lg">
      <div className="p-4 border-b">
        <div className="flex items-center text-red-800 font-medium">
        <Home className="w-4 h-4 mr-2" />
        Playbook Home
        </div>
    </div>
    
    <nav className="p-2 bg-white">
        <SidebarItem
        title="Playbook App Overview"
        expanded={expandedSections['playbook-app']}
        onClick={() => toggleSection('playbook-app')}
        />
        
        <SidebarItem
        title="Communication Plan"
        expanded={expandedSections['communication-plan']}
        onClick={() => toggleSection('communication-plan')}
        active={true}
        >
        <div className="space-y-2">
            <div className="text-red-800 bg-red-50 p-2 rounded">Internal</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">Objectives</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">CCC Stakeholders</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">Strategies & Tactics</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">Timeline</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">CCC Communications</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">Communication Streams</div>
            <div className="text-sm text-black hover:bg-gray-100 p-2 rounded cursor-pointer">Engagement Plan</div>
        </div>
        </SidebarItem>
          
          {/* Add other sidebar items as needed */}
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 min-w-0">
        {/* Top search bar */}
        <div className="w-full bg-white p-4 shadow-sm flex justify-end">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border rounded-lg"
            />
            <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Main content */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;