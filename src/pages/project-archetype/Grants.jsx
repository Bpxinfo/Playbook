import React from 'react';
import { Link } from 'react-router-dom';

const Grants = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Grants</h1>
        
        <div className="space-y-6">
          {/* Grants Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Grants</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">General</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <ul className="list-disc pl-6 mb-4 text-black">
                    <li>No CCC grant examples at this time.</li>
                  </ul>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">See <Link to="/processes/sops-and-resources" className="underline hover:text-red-700">SOPs and Resources</Link></p>
                  <p className="text-black">Includes:</p>
                  <ul className="list-disc pl-6 mt-2 text-black">
                    <li>FRM-04327 Grant Approval Form (GAF)</li>
                    <li>FRM-07237 Notification of Acceptance of Grant Funding Request</li>
                    <li>FRM-07649 Educational Grant Letter</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* iMed Activities */}
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">iMed Activities</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="text-black">IMed activities (not supported through CCC, separate process)</p>
                </div>
                {/* <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Grants; 