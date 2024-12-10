import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

const SidebarItem = ({ title, expanded, onClick, active, children }) => {
    return (
      <div className="mb-1">
        <button
          onClick={onClick}
          className={`w-full flex items-center justify-between p-2 text-sm rounded
            ${active ? 'bg-black text-white' : 'text-black hover:bg-gray-100'}`}
        >
          <span>{title}</span>
          {expanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
        {expanded && (
          <div className="pl-4 py-1">
            {children}
          </div>
        )}
      </div>
    );
  };

export default SidebarItem;