import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../../lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  sidebarOpen?: boolean;
}

export function Modal({ isOpen, onClose, children, title, sidebarOpen = true }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "fixed top-[10%] z-50 w-full max-w-md",
                sidebarOpen ? "left-[calc(50%-125px)] -translate-x-1/2" : "left-1/2 -translate-x-1/2"
              )}
            >

            <div className="bg-white dark:bg-black rounded-2xl shadow-xl relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Content */}
              <div className="p-6">
                {title && (
                  <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
                    {title}
                  </h2>
                )}
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 