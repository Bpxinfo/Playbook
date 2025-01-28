import React from 'react';

const ManualSystems = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <div className="text-sm text-gray-500 mb-6 text-center">
        Systems / Manual Systems
      </div>

      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Manual Systems</h1>

      <div className="space-y-8">
        {/* Contract Initiation */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">1. Contract Initiation</h2>
          <div className="text-gray-700">
            {/* Placeholder for future content */}
            <p>COMING SOON</p>
          </div>
        </section>

        {/* PO Creation */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">2. PO Creation</h2>
          <div className="text-gray-700">
            <p>COMING SOON</p>
          </div>
        </section>

        {/* Invoicing */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">3. Invoicing</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <p>COMING SOON</p>
            </div>
          </div>
        </section>

        {/* Budget Tracking */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">4. Budget Tracking</h2>
          <div className="text-gray-700">
            <p>COMING SOON</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManualSystems;