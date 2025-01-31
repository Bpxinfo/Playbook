import React from 'react';

const InternalEngagementPlan = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Internal Engagement Plan</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Internal Feedback</h2>
          
          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Comms Hub</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Current: CCC Teams</li>
              <li>Future: SharePoint</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Surveys</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Workshops</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-red-800 mb-2">Teams Check-Ins</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Core Team</li>
              <li>Extended Team</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternalEngagementPlan;