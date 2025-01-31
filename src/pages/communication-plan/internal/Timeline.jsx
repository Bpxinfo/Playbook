import React from 'react';
import timeline from '../../../assets/timeline.jpeg'
const Timeline = () => {
  return (
    <div className="p-8 mx-auto max-w-full">  
    <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Timeline</h1>

    <div className="space-y-6">
          {/* Placeholder for Process Map Diagram */}
          <div className="bg-white p-0 rounded-lg text-center">  
            <h2 className="text-3xl text-red-800 mb-4 text-center">Key Actions and Milestones for Each Quarter</h2>
            <div className="mb-8">
              <img 
                src={timeline} 
                alt="timeline" 
                className="w-full rounded-lg shadow-lg mb-4" 
              />
                <p className="text-sm text-gray-500 text-center">Timeline</p>
              </div>
            </div>
          
          </div>
    </div>
  );
};

export default Timeline;