import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import partnerSelection from '../../assets/partner-selection.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const ProjectTypes = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the Collaborative Studies page
    navigate('/project-archetype/collaborative-studies');
  }, [navigate]);
  
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Redirecting...</h1>
        <p className="text-center">Redirecting to Collaborative Studies page...</p>
      </div>
    </div>
  );
};

export default ProjectTypes;
