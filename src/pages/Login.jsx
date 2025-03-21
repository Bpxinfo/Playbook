import { useAuth } from '../contexts/AuthContext';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { signInWithMicrosoft, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  const words = [
    {
      text: "Welcome",
      className: "text-7xl"
    },
    {
      text: "to",
      className: "text-7xl"
    },
    {
      text: "the",
      className: "text-7xl"
    },
    {
      text: "CCC",
      className: "text-7xl"
    },
    {
      text: "Playbook",
      className: "text-7xl text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
            The road to freedom starts from here
          </p>
          <div className="flex justify-center items-center w-full h-32 mb-2">
            <TypewriterEffectSmooth 
              words={words} 
              cursorClassName="w-[3px] !h-[80px] bg-blue-500"
              className="h-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={signInWithMicrosoft}
            className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
              <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
              <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
              <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
            </svg>
            <span>Sign in with Microsoft</span>
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-gray-900">Or</span>
            </div>
          </div>

          <button
            onClick={() => navigate('/signup')}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign up
          </button>

          <button
            onClick={continueAsGuest}
            className="w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Continue as Guest
          </button>
        </div>
      </div>
    </div>
  );
} 