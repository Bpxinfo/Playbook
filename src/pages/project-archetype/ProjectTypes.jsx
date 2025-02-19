import React from 'react';
import partnerSelection from '../../assets/partner-selection.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const ProjectTypes = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Project Types</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Partner Selection Process</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={partnerSelection} 
                alt="Partner Selection Process" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Partner Selection Overview</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypes;
