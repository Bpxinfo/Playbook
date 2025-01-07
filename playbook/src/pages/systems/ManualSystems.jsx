import React from 'react';

const ManualSystems = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Systems / Manual Systems
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">Manual Systems</h1>

      <div className="max-w-4xl space-y-8">
        {/* Contract Initiation */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1. Contract Initiation</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-black">
            {/* Placeholder for future content */}
            <p>[CONTENT]</p>
          </div>
        </div>

        {/* PO Creation */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">2. PO Creation</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-black">
          <p>[CONTENT]</p>
          </div>
        </div>

        {/* Invoicing */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">3. Invoicing</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-black space-y-4">
            <div>
              <p>[CONTENT]</p>
            </div>
          </div>
        </div>

        {/* Budget Tracking */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">4. Budget Tracking</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-black">
          <p>[CONTENT]</p>          </div>
        </div>
      </div>
    </div>
  );
};

export default ManualSystems;