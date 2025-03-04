import React from 'react';

const Grants = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Grants</h1>
        
        <div className="space-y-6">
          {/* Grants Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Grants</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">General</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p className="italic text-gray-600">[Please add examples for this]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>FRM-04327 Grant Approval Form (GAF)</li>
                    <li>FRM-07237 Notification of Acceptance of Grant Funding Request</li>
                    <li>FRM-07649 Educational Grant Letter</li>
                  </ul>
                  <p className="mt-2 italic">[INSERT LINKS FROM PROCESS, GOV, COMPLIANCE section]</p>
                </div>
              </div>
            </div>

            {/* iMed Activities */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">iMed Activities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>IMed activities (not supported through CCC, separate process, NEED LINK to redirect to)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p className="italic text-gray-600">[Please add examples for this]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Grants; 