import React from 'react';

const InternalEngagementPlan = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Internal Engagement Plan</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Internal Feedback</h2>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Comms Hub</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Current: CCC Teams</li>
              <li>Future: SharePoint</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Surveys</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Workshops</h3>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Lorem ipsum dolor sit amet</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-red-800 mb-2">Teams Check-Ins</h3>
            <ul className="list-disc pl-6 text-gray-700">
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
