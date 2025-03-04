import React from 'react';

const Sponsorships = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Sponsorships</h1>
        
        <div className="space-y-6">
          {/* Sponsorships Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Sponsorships</h2>
            
            {/* Medical Sponsorships */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Medical</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>Medical Sponsorships through Grants Portal (Normal path for CCC)</p>
                  <p>Medical Sponsorships {'->'} USMA (SEC - Michelle Brockman&apos;s group) {'->'} Approval {'->'} Legal / Compliance Review</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Steeprock Submission Process</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                  <p className="mt-2">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>

            {/* Corporate Sponsorships */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Corporate Sponsorships</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>Corporate Sponsorships {'->'} outside of CCC&apos;s purview</p>
                  <p className="italic text-gray-600">[Pending official description]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Steeprock Submission Process</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                  <p className="mt-2">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Sponsorships; 