import React, { useEffect } from 'react';
import SignupFormDemo from '@/components/signup-form-demo';
import { useTheme } from '../contexts/ThemeContext';

const Signup = () => {
  const { forceDarkMode } = useTheme();

  useEffect(() => {
    forceDarkMode();
  }, [forceDarkMode]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-black rounded-2xl shadow-xl relative w-full max-w-md">
        <div className="p-6">
          <SignupFormDemo onClose={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Signup; 