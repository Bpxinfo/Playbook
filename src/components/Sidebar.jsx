"use client";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SidebarContext = createContext(undefined);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true
}) => {
  const [openState, setOpenState] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ 
      open, 
      setOpen, 
      animate,
      isHovered,
      setIsHovered
    }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const Sidebar = ({
  children,
  open,
  setOpen,
  animate,
  className
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      <div className={className}>
        {children}
      </div>
    </SidebarProvider>
  );
};

export const SidebarBody = (props) => {
  return (<>
    <DesktopSidebar {...props} />
    <MobileSidebar {...(props)} />
  </>);
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen, animate, isHovered, setIsHovered } = useSidebar();
  
  return (
    <>
      {/* Hover area for collapsed state */}
      {!open && (
        <div 
          className="fixed left-0 top-[84px] h-[calc(100vh-84px)] w-12 z-40 transition-all duration-300 pointer-events-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}

      <motion.div
        className={cn(
          "h-[calc(100vh-84px)] mt-5 py-4 hidden md:flex md:flex-col bg-white dark:bg-white shrink-0 relative overflow-visible",
          open ? "px-4" : "px-0 w-12",
          className
        )}
        animate={{
          width: animate ? (open ? "280px" : "48px") : "280px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Collapse/Expand arrow - always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-[68px] bg-red-800 p-1.5 rounded-full shadow-md hover:bg-red-700 transition-colors z-[999]"
          aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
        >
          <motion.div
            animate={{ rotate: open ? 0 : 180 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </motion.div>
        </button>

        <div className="relative w-full">
          {children}
        </div>
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}) => {
  const { open, setOpen } = useSidebar();
  return (<>
    <div
      className={cn(
        "h-10 px-4 py-4 flex flex-row md:hidden items-center justify-between bg-white dark:bg-white w-full"
      )}
      {...props}>
      <div className="flex justify-end z-20 w-full">
        <IconMenu2
          className="text-neutral-800 dark:text-neutral-800"
          onClick={() => setOpen(!open)} />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className={cn(
              "fixed h-full w-full inset-0 bg-white dark:bg-white p-10 z-[100] flex flex-col justify-between",
              className
            )}>
            <div
              className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-800"
              onClick={() => setOpen(!open)}>
              <IconX />
            </div>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </>);
};

export const SidebarLink = ({
  link,
  className,
  ...props
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      to={link.href}
      className={cn(
        "flex items-center justify-start gap-2 group/sidebar py-2 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div className="flex-shrink-0">
        {link.icon}
      </div>
      <motion.span 
        className={cn(
          "text-black dark:text-black text-sm group-hover/sidebar:translate-x-1 transition-all duration-150 whitespace-pre",
          !open && "hidden"
        )}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {link.label}
      </motion.span>
    </Link>
  );
}; 