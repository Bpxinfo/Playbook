import React from 'react';
import timeline from '../../../assets/timeline.jpeg';

const Timeline = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Timeline</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
                  <div className="mb-8">
                    <img 
                      src={timeline} 
                      alt="Internal Timeline" 
                      className="w-full rounded-lg shadow-lg mb-4"
                    />
                    <p className="text-sm text-gray-500 text-center">Timeline</p>
                  </div>
                </section>
      </div>
    </div>
  );
};

export default Timeline;