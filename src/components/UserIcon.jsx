import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { User, LogOut, Edit, ChevronDown, Save, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Modal } from './ui/modal';
import SignupFormDemo from './signup-form-demo';
import { supabase } from '../lib/supabaseClient';

const UserIcon = () => {
  const { user, isGuest, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    displayName: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const dropdownRef = useRef(null);

  // Fetch user profile when user state changes
  useEffect(() => {
    if (user) {
      // Check for first and last name in different possible formats
      const firstName = user.user_metadata?.first_name || user.user_metadata?.firstName || '';
      const lastName = user.user_metadata?.last_name || user.user_metadata?.lastName || '';
      
      setFormData({
        firstName: firstName,
        lastName: lastName,
        email: user.email || '',
        displayName: firstName && lastName 
          ? `${firstName} ${lastName}`.trim() 
          : user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0] || ''
      });

      // Fetch additional profile data
      supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()
        .then(({ data: profile, error }) => {
          if (!error && profile) {
            setFormData(prev => ({
              ...prev,
              displayName: profile.display_name || prev.displayName
            }));
          }
        })
        .catch(console.error);
    }
  }, [user?.id]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsEditing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const displayName = `${formData.firstName} ${formData.lastName}`.trim() || user.email.split('@')[0];

      // Update user metadata first
      const { error: userError } = await supabase.auth.updateUser({
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          full_name: displayName
        }
      });

      if (userError) throw userError;

      // Then update the profile
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          display_name: displayName,
          updated_at: new Date().toISOString()
        });

      if (profileError) throw profileError;

      // Update local state with the new data
      setFormData(prev => ({
        ...prev,
        displayName: displayName
      }));

      // Immediately close edit mode and dropdown
      setIsEditing(false);
      setIsOpen(false);
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error('Error updating profile:', err);
    }
  };

  const getInitials = () => {
    if (formData.displayName) {
      const nameParts = formData.displayName.split(' ');
      return nameParts.map(part => part[0]).join('').toUpperCase();
    }
    return '';
  };

  const renderUserIcon = () => {
    // If user is not logged in and not a guest
    if (!user && !isGuest) {
      return (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-red-800 hover:text-red-700"
          >
            Sign In
          </Link>
          <button
            onClick={() => setIsSignupModalOpen(true)}
            className="text-sm font-medium text-white bg-red-800 px-3 py-1 rounded-md hover:bg-red-700"
          >
            Sign Up
          </button>
        </div>
      );
    }

    const initials = getInitials();
    const hasInitials = initials.length > 0;
    const displayName = formData.displayName || 'Guest';

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-800 to-red-600 flex items-center justify-center text-white font-medium hover:scale-110 transition-transform">
            {hasInitials ? initials : <User className="w-5 h-5" />}
          </div>
          <ChevronDown className={`w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#333333] rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {isGuest ? (
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium border-b border-gray-100 dark:border-gray-700">
                    Guest User
                  </div>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      setIsSignupModalOpen(true);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Sign Up
                  </button>
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Log In with Account
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    End Guest Session
                  </button>
                </div>
              ) : (
                <div className="py-1">
                  <div className="px-4 py-2 text-sm text-gray-900 dark:text-white font-medium border-b border-gray-100 dark:border-gray-700">
                    {formData.displayName || user?.email?.split('@')[0] || 'User'}
                  </div>
                  {isEditing ? (
                    <form onSubmit={handleSubmit} className="p-4">
                      {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
                      {success && <div className="text-green-500 text-sm mb-2">{success}</div>}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">First Name</label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => {
                              const newFirstName = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                firstName: newFirstName,
                                displayName: `${newFirstName} ${prev.lastName}`.trim() || prev.email.split('@')[0]
                              }));
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Last Name</label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => {
                              const newLastName = e.target.value;
                              setFormData(prev => ({
                                ...prev,
                                lastName: newLastName,
                                displayName: `${prev.firstName} ${newLastName}`.trim() || prev.email.split('@')[0]
                              }));
                            }}
                            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end space-x-2">
                        <button
                          type="button"
                          onClick={() => setIsEditing(false)}
                          className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <X className="w-4 h-4 mr-1" />
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            handleSubmit(e);
                            setIsEditing(false);
                            setIsOpen(false);
                          }}
                          className="inline-flex items-center px-3 py-1 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-800 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          <Save className="w-4 h-4 mr-1" />
                          Save
                        </button>
                      </div>
                    </form>
                  ) : (
                    <>
                      <button
                        onClick={() => setIsEditing(true)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white flex items-center"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit Profile
                      </button>
                      <button
                        onClick={() => {
                          signOut();
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-white flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      {renderUserIcon()}
      <Modal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        title="Welcome to the CCC Playbook"
        sidebarOpen={true}
      >
        <SignupFormDemo onClose={() => setIsSignupModalOpen(false)} />
      </Modal>
    </>
  );
};

export default UserIcon; 