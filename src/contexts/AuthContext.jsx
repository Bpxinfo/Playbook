import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isGuest, setIsGuest] = useState(() => {
    const storedGuestState = localStorage.getItem('isGuest') === 'true';
    console.log('Initial guest state:', storedGuestState);
    return storedGuestState;
  });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { forceLightMode } = useTheme();

  const syncUserProfile = async (session) => {
    if (!session?.user) return;
    
    try {
      // First check if profile exists
      const { data: existingProfile, error: fetchError } = await supabase
        .from('profiles')
        .select()
        .eq('id', session.user.id)
        .single();

      if (fetchError && !fetchError.message.includes('No rows found')) {
        console.error('Error fetching profile:', fetchError);
        return;
      }

      // Get display name prioritizing first_name and last_name fields
      let displayName;
      
      // First try to get first_name and last_name from user_metadata
      const firstName = session.user.user_metadata?.first_name || session.user.user_metadata?.firstName || '';
      const lastName = session.user.user_metadata?.last_name || session.user.user_metadata?.lastName || '';
      
      if (firstName || lastName) {
        // Use combined first and last name if either exists
        displayName = `${firstName} ${lastName}`.trim();
      } else {
        // Fall back to other metadata sources if first/last name not available
        displayName = 
          session.user.user_metadata?.full_name || // From OAuth providers
          session.user.user_metadata?.name || // From some OAuth providers
          session.user.email?.split('@')[0]; // Fallback to email username
      }

      console.log('Setting display name:', displayName);

      // If profile doesn't exist, create it
      if (!existingProfile) {
        const { error: insertError } = await supabase
          .from('profiles')
          .insert([
            {
              id: session.user.id,
              email: session.user.email,
              display_name: displayName,
              avatar_url: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            }
          ]);

        if (insertError) {
          console.error('Error creating profile:', insertError);
          return;
        }
      } else if (
        existingProfile.display_name !== displayName || 
        existingProfile.email !== session.user.email || 
        existingProfile.avatar_url !== (session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture)
      ) {
        // Update profile if there are changes
        const { error: updateError } = await supabase
          .from('profiles')
          .update({
            display_name: displayName,
            email: session.user.email,
            avatar_url: session.user.user_metadata?.avatar_url || session.user.user_metadata?.picture,
            updated_at: new Date().toISOString(),
          })
          .eq('id', session.user.id);

        if (updateError) {
          console.error('Error updating profile:', updateError);
          return;
        }
      }
    } catch (error) {
      console.error('Error in syncUserProfile:', error);
    }
  };

  // Add effect to handle initial guest state
  useEffect(() => {
    const storedGuestState = localStorage.getItem('isGuest') === 'true';
    if (storedGuestState) {
      setIsGuest(true);
      setUser(null);
      setLoading(false);
    }
  }, []);

  // Modify the guest state effect to be more robust
  useEffect(() => {
    console.log('Guest state changed:', isGuest);
    if (isGuest) {
      localStorage.setItem('isGuest', 'true');
      // Clear any existing user data when switching to guest mode
      setUser(null);
      setLoading(false);
      // Force a hard redirect to ensure clean state
      if (window.location.pathname !== '/ccc-playbook') {
        window.location.replace('/ccc-playbook');
      }
    } else {
      localStorage.removeItem('isGuest');
      setLoading(false);
    }
  }, [isGuest]);

  const signInWithGoogle = async () => {
    try {
      console.log('Starting Google sign in process...');
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}`,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
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
          redirectTo: `${window.location.origin}`,
          scopes: 'openid email profile User.Read',
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
            response_type: 'code',
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

  const signInWithEmail = async (email, password) => {
    try {
      console.log('Starting email sign in process...');
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        console.error('Email sign in error:', error);
        throw error;
      }
      
      console.log('Email sign in successful:', data);
      return data;
    } catch (error) {
      console.error('Email sign in failed:', error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      console.log('Starting sign out process...');
      
      // First clear local state
      setUser(null);
      setIsGuest(false);
      localStorage.removeItem('isGuest');
      sessionStorage.removeItem('isGuest');
      setLoading(false);
      
      if (!isGuest) {
        console.log('User is not a guest, signing out from Supabase...');
        try {
          const { error } = await supabase.auth.signOut();
          if (error) {
            console.error('Supabase sign out error:', error);
            throw error;
          }
          console.log('Successfully signed out from Supabase');
        } catch (supabaseError) {
          console.error('Error during Supabase sign out:', supabaseError);
          // Continue with redirect even if Supabase sign out fails
        }
      }
      
      // Clear any remaining auth state
      localStorage.clear();
      sessionStorage.clear();
      
      console.log('Clearing all state and redirecting...');
      // Force a hard redirect to clear all state
      window.location.replace('/');
    } catch (error) {
      console.error('Error during sign out:', error);
      // Even if there's an error, try to redirect
      window.location.replace('/');
    }
  };

  // Add a cleanup function to handle unmounting
  useEffect(() => {
    return () => {
      // Cleanup function
      setUser(null);
      setIsGuest(false);
      setLoading(false);
    };
  }, []);

  const continueAsGuest = () => {
    setIsGuest(true);
    forceLightMode();
  };

  // Modify the auth state change handler
  useEffect(() => {
    console.log('Checking Supabase session...');
    let isMounted = true;
    let isAuthenticating = false;

    const initializeAuth = async () => {
      if (isAuthenticating) return;
      
      try {
        isAuthenticating = true;
        setLoading(true);
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (!isMounted) return;

        if (error) {
          console.error('Error getting session:', error);
          if (isMounted) {
            setLoading(false);
          }
          return;
        }

        console.log('Auth session:', session);
        if (session?.user) {
          console.log('User session found, disabling guest mode');
          if (isMounted) {
            setUser(session.user);
            setIsGuest(false);
            localStorage.removeItem('isGuest');
            // Ensure loading is set to false after session is processed
            setLoading(false);
          }
          await syncUserProfile(session);
        } else {
          // Check if guest mode is active
          const storedGuestState = localStorage.getItem('isGuest') === 'true';
          if (storedGuestState) {
            console.log('No user session but guest mode is active');
            if (isMounted) {
              setIsGuest(true);
              setUser(null);
              setLoading(false);
            }
          } else {
            console.log('No user session and not in guest mode');
            if (isMounted) {
              setUser(null);
              setIsGuest(false);
              setLoading(false);
            }
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        if (isMounted) {
          setUser(null);
          setLoading(false);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
        isAuthenticating = false;
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!isMounted) return;

      try {
        console.log('Auth state change:', { event, session });

        if (session?.user) {
          console.log('User session found during state change, disabling guest mode');
          if (isMounted) {
            setUser(session.user);
            setIsGuest(false);
            localStorage.removeItem('isGuest');
          }
          await syncUserProfile(session);
          
          // Only navigate if this is a sign-in event and not already on the target page
          if (event === 'SIGNED_IN' && window.location.pathname !== '/ccc-playbook') {
            navigate('/ccc-playbook', { replace: true });
          }
        } else if (event === 'SIGNED_OUT') {
          console.log('Handling SIGNED_OUT event');
          if (isMounted) {
            setUser(null);
            setIsGuest(false);
            localStorage.removeItem('isGuest');
            setLoading(false);
          }
          
          // Only redirect if not already on the home page
          if (window.location.pathname !== '/') {
            window.location.replace('/');
          }
        } else {
          if (isMounted) {
            setUser(null);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error('Error in auth state change:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    });

    return () => {
      console.log('Cleaning up auth effect');
      isMounted = false;
      subscription?.unsubscribe?.();
    };
  }, [navigate, isGuest]);

  const authValue = {
    user,
    isGuest,
    loading,
    signInWithGoogle,
    signInWithMicrosoft,
    signInWithEmail,
    signOut,
    continueAsGuest
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest,
        loading,
        signInWithGoogle,
        signInWithMicrosoft,
        signInWithEmail,
        signOut,
        continueAsGuest
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
}; 