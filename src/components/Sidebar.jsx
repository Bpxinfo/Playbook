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
          className="fixed left-0 top-[64px] h-[calc(100vh-64px)] w-1 z-50 hover:w-[250px] transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      )}
      
      {/* Expand arrow for collapsed state */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed left-0 top-1/2 -translate-y-1/2 z-50 bg-white p-2 rounded-r-lg shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Expand sidebar"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      )}

      <motion.div
        className={cn(
          "h-full py-4 hidden md:flex md:flex-col bg-white dark:bg-white shrink-0 relative overflow-visible",
          open ? "px-4" : "px-0 w-0",
          className
        )}
        animate={{
          width: animate ? (open ? "250px" : "0px") : "250px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* Collapse arrow */}
        <button
          onClick={() => setOpen(false)}
          className={cn(
            "absolute -right-3 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors z-[999]",
            !open && "hidden"
          )}
          aria-label="Collapse sidebar"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>

        <div className={cn(
          "transition-all duration-300 relative",
          !open && "opacity-0 invisible w-0"
        )}>
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
        !open && "opacity-0 invisible w-0 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className={cn(
        "transition-all duration-300",
        !open && "opacity-0 invisible w-0"
      )}>
        {link.icon}
      </div>
      <span className={cn(
        "text-black dark:text-black text-sm group-hover/sidebar:translate-x-1 transition-all duration-150 whitespace-pre",
        !open && "opacity-0 invisible w-0"
      )}>
        {link.label}
      </span>
    </Link>
  );
}; 