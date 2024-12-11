import React from 'react';

const Objectives = () => {
  return (
    <div className="p-8">
      
      <h1 className="text-4xl font-light text-red-800 mb-8">Objectives</h1>
      
      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Primary Objective</h2>
          <p className="text-gray-700 mb-4">
            To create a centralized knowledge base that serves as the single source of truth for all CCC-related information, processes, and guidelines.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Key Goals</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Streamline access to CCC documentation and resources</li>
            <li>Ensure consistency in CCC processes and communications</li>
            <li>Facilitate onboarding of new team members</li>
            <li>Support ongoing reference and learning needs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Success Metrics</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Reduced time to find CCC-related information</li>
              <li>Increased consistency in CCC process execution</li>
              <li>Improved onboarding experience ratings</li>
              <li>Higher engagement with CCC resources</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Objectives;