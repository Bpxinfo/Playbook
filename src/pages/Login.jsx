import { useAuth } from '../contexts/AuthContext';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const { signInWithGoogle, signInWithMicrosoft, continueAsGuest } = useAuth();
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
            onClick={signInWithGoogle}
            className="flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Sign in with Google</span>
          </button>

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