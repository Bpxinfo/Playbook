import { useAuth } from '../contexts/AuthContext';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

// Add BottomGradient component
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

export default function Login() {
  const { signInWithMicrosoft } = useAuth();
  const { forceDarkMode } = useTheme();
  const [error, setError] = React.useState(null);

  useEffect(() => {
    forceDarkMode();
  }, [forceDarkMode]);

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

  const handleMicrosoftSignIn = async () => {
    try {
      await signInWithMicrosoft();
      // Let the OAuth redirect and auth context handle navigation
    } catch (err) {
      console.error('Microsoft sign in error:', err);
      setError(err.message || 'Failed to sign in with Microsoft');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white dark:bg-gray-900">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center">
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-200">
            The road to community patient impact starts here
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
          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <button
            onClick={handleMicrosoftSignIn}
            className="group/btn relative flex items-center justify-center w-full px-4 py-2 space-x-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700"
          >
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21">
              <rect x="1" y="1" width="9" height="9" fill="#f25022"/>
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef"/>
              <rect x="11" y="1" width="9" height="9" fill="#7fba00"/>
              <rect x="11" y="11" width="9" height="9" fill="#ffb900"/>
            </svg>
            <span>Sign in with Microsoft</span>
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
} 