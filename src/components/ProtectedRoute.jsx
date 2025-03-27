import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, isGuest, loading } = useAuth();
  const [timeoutExpired, setTimeoutExpired] = useState(false);
  const [localLoading, setLocalLoading] = useState(true);

  // Add a timeout to prevent infinite loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        console.log('Loading timeout reached, forcing render decision');
        setTimeoutExpired(true);
      }
    }, 5000); // 5 second timeout

    // Set a shorter local loading state to improve transitions
    const localTimer = setTimeout(() => {
      setLocalLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(localTimer);
    };
  }, [loading]);

  // Add debugging with more context
  console.log('ProtectedRoute state:', { user, isGuest, loading, timeoutExpired, localLoading, path: window.location.pathname });

  // Show loading spinner while checking authentication, but respect timeout
  if ((loading || localLoading) && !timeoutExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Check if user is authenticated or is a guest
  const isAuthenticated = user !== null || isGuest === true;
  console.log('Is authenticated:', isAuthenticated);

  // If not authenticated and not loading (or timeout expired), redirect to login
  if (!isAuthenticated && (timeoutExpired || !loading)) {
    console.log('Not authenticated, redirecting to login...');
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated and trying to access login page, redirect to ccc-playbook
  if (isAuthenticated && window.location.pathname === '/login') {
    console.log('Authenticated user on login page, redirecting to playbook...');
    return <Navigate to="/ccc-playbook" replace />;
  }

  // User is authenticated (or is a guest), render the protected content
  console.log('Rendering protected content for authenticated user');
  return children;
} 