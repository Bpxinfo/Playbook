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
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Medical</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="text-black">Medical Sponsorships through Grants Portal (Normal path for CCC)</p>
                  <p className="text-black">Medical Sponsorships {'->'} USMA (SEC - Michelle Brockman&apos;s group) {'->'} Approval {'->'} Legal / Compliance Review</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <p className="text-black">[To be added]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Steeprock Submission Process</h4>
                  <p className="italic text-black">[Pending official description]</p>
                  <p className="mt-2 text-black">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>

            {/* Corporate Sponsorships */}
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Corporate Sponsorships</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="text-black">Corporate Sponsorships {'->'} outside of CCC&apos;s purview</p>
                  <p className="italic text-black">[Pending official description]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <p className="text-black">[To be added]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Steeprock Submission Process</h4>
                  <p className="italic text-black">[Pending official description]</p>
                  <p className="mt-2 text-black">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
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