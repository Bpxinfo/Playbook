import React from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const SidebarItem = ({ title, expanded, onClick, active, children }) => {
    return (
      <div className="mb-1">
        <button
          onClick={onClick}
          className={cn(
            "w-full flex items-center justify-between p-2 text-sm rounded transition-all duration-300",
            active ? 'bg-red-900 text-white' : 'text-black hover:bg-gray-100'
          )}
        >
          <span>{title}</span>
          {expanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>
        <AnimatePresence>
          {expanded && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-4 py-1 overflow-hidden"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

export default SidebarItem;