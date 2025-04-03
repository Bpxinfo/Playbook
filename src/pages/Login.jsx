import { useAuth } from '../contexts/AuthContext';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { cn } from '../lib/utils';
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

// Add LabelInputContainer component to match signup form
const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default function Login() {
  const { signInWithMicrosoft, continueAsGuest, signInWithEmail } = useAuth();
  const { forceLightMode, forceDarkMode } = useTheme();
  const navigate = useNavigate();
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    
    try {
      await signInWithEmail(email, password);
      
      // Don't manually navigate here - let the auth context handle it
      // This avoids race conditions during authentication state changes
      forceLightMode();
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to sign in');
      setLoading(false);
    }
  };

  const handleMicrosoftSignIn = async () => {
    try {
      await signInWithMicrosoft();
      // Let the OAuth redirect and auth context handle navigation
      forceLightMode();
    } catch (err) {
      console.error('Microsoft sign in error:', err);
      setError(err.message || 'Failed to sign in with Microsoft');
    }
  };

  const handleGuestAccess = async () => {
    try {
      await continueAsGuest();
      // The continueAsGuest function already handles navigation
      forceLightMode();
    } catch (err) {
      console.error('Guest access error:', err);
      setError(err.message || 'Failed to continue as guest');
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
        
        {showEmailForm ? (
          <div className="space-y-4">
            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <LabelInputContainer>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  required
                  className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="shadow-input bg-gray-50 dark:bg-zinc-900 dark:text-white dark:shadow-[0px_0px_1px_1px_#262626]"
                />
              </LabelInputContainer>
              <button
                type="submit"
                disabled={loading}
                className="group/btn relative w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {loading ? "Signing in..." : "Sign in"}
                <BottomGradient />
              </button>
            </form>
            <button
              onClick={() => setShowEmailForm(false)}
              className="group/btn relative w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Back
              <BottomGradient />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
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

            <button
              onClick={() => setShowEmailForm(true)}
              className="group/btn relative w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in with Email
              <BottomGradient />
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-neutral-600 dark:text-neutral-200 bg-white dark:bg-gray-900">Or</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/signup')}
              className="group/btn relative w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign up
              <BottomGradient />
            </button>

            <button
              onClick={handleGuestAccess}
              className="group/btn relative w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700"
            >
              Continue as Guest
              <BottomGradient />
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 