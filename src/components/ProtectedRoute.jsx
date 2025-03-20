import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, isGuest, loading } = useAuth();

  // Add debugging
  console.log('ProtectedRoute state:', { user, isGuest, loading });

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  // Check if user is authenticated or is a guest
  const isAuthenticated = user !== null || isGuest === true;
  console.log('Is authenticated:', isAuthenticated);

  // If not authenticated and not loading, redirect to login
  if (!isAuthenticated && !loading) {
    console.log('Not authenticated, redirecting to login...');
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated and trying to access login page, redirect to ccc-playbook
  if (isAuthenticated && window.location.pathname === '/login') {
    return <Navigate to="/ccc-playbook" replace />;
  }

  // User is authenticated (or is a guest), render the protected content
  return children;
} 