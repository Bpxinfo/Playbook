import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(() => {
    const storedGuestState = localStorage.getItem('isGuest') === 'true';
    console.log('Initial guest state:', storedGuestState);
    return storedGuestState;
  });

  useEffect(() => {
    // Only check Supabase session if not in guest mode
    if (!isGuest) {
      console.log('Checking Supabase session...');
      supabase.auth.getSession().then(({ data: { session }, error }) => {
        if (error) {
          console.error('Error getting session:', error);
          return;
        }
        console.log('Auth session:', session);
        setUser(session?.user ?? null);
        // If we have a user session, ensure guest mode is disabled
        if (session?.user) {
          console.log('User session found, disabling guest mode');
          setIsGuest(false);
          localStorage.removeItem('isGuest');
        }
        setLoading(false);
      });

      // Listen for changes on auth state (logged in, signed out, etc.)
      const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
        console.log('Auth state change:', { event: _event, session });
        setUser(session?.user ?? null);
        // If we have a user session, ensure guest mode is disabled
        if (session?.user) {
          console.log('User session found during state change, disabling guest mode');
          setIsGuest(false);
          localStorage.removeItem('isGuest');
        }
      });

      return () => subscription.unsubscribe();
    } else {
      // If in guest mode, just set loading to false
      console.log('In guest mode, skipping session check');
      setLoading(false);
    }
  }, [isGuest]);

  // Add effect to sync guest state with localStorage
  useEffect(() => {
    console.log('Guest state changed:', isGuest);
    if (isGuest) {
      localStorage.setItem('isGuest', 'true');
      // Clear any existing user data when switching to guest mode
      setUser(null);
    } else {
      localStorage.removeItem('isGuest');
    }
  }, [isGuest]);

  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google sign in process...');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/ccc-playbook`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            scope: 'openid offline_access email profile'
          },
        }
      });
      if (error) {
        console.error('Google sign in error:', error);
        throw error;
      }
      console.log('Google sign in initiated:', data);
    } catch (error) {
      console.error('Google sign in failed:', error);
      throw error;
    }
  };

  const signInWithMicrosoft = async () => {
    try {
      console.log('Starting Microsoft sign in process...');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'azure',
        options: {
          redirectTo: `${window.location.origin}/ccc-playbook`,
          queryParams: {
            response_type: 'code',
            scope: 'openid offline_access email profile'
          },
        }
      });
      if (error) {
        console.error('Microsoft sign in error:', error);
        throw error;
      }
      console.log('Microsoft sign in initiated:', data);
    } catch (error) {
      console.error('Microsoft sign in failed:', error);
      throw error;
    }
  };

  const signOut = async () => {
    console.log('Signing out...');
    setIsGuest(false);
    localStorage.removeItem('isGuest');
    if (!isGuest) {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    }
    setUser(null);
  };

  const continueAsGuest = () => {
    console.log('Continuing as guest...');
    setIsGuest(true);
    setUser(null);
    localStorage.setItem('isGuest', 'true');
    window.location.href = '/ccc-playbook';
  };

  const authValue = {
    user,
    isGuest,
    loading,
    signInWithGoogle,
    signInWithMicrosoft,
    signOut,
    continueAsGuest
  };

  console.log('Current auth state:', authValue);

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}; 