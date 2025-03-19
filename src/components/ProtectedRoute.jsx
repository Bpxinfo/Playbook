import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, isGuest, loading } = useAuth();

  // Add debugging
  console.log('ProtectedRoute state:', { user, isGuest, loading });

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

  if (!isAuthenticated) {
    console.log('Redirecting to login...');
    return <Navigate to="/login" replace />;
  }

  // User is authenticated or is a guest, render the protected content
  return children;
} 