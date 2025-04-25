import React from 'react';
import { Link } from 'react-router-dom';

const Sponsorships = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
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
                  <p className="text-black">All Medical Sponsorships should be submitted through the GIlead SteepRock Grants Portal.</p>
                </div>
                <div className="space-y-4 text-black">
                  <h4 className="font-medium mb-2 text-black">Process</h4>
                  <p className="text-black">Please submit all medical sponsorship requests to the CCC Lead [Sabrina Meyers (sabrina.meyers@gilead.com)]. Sabrina will review and discuss with SEC Lead (Michelle Brockman). If approved, we will request that the site/organization submit their request/proposal directly to the Gilead SteepRock Grants Portal.</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <ul className="list-disc pl-6 mb-4 text-black">
                    <li>ACCC projects – VA Disparities, AI in Cancer Care Delivery, and ACORI 1.0 & 2.0 (in collaboration with the SEC team)</li>
                    <li>ACS projects – VOICES of Black Women Population Cohort Study and Improving Treatment of Advanced Breast Cancer Initiative (in collaboration with the SEC, Pt Advocacy, and PFIS teams)</li>
                  </ul>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">SOP under development</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Gilead Grants Portal</h4>
                  <p className="italic text-black"><a href="https://gilead-grants.steeprockinc.com/" target="_blank" rel="noopener noreferrer">SteepRock</a></p>
                  {/* <p className="mt-2 text-black"><span className="font-bold">SYSTEM:</span> STEEPROCK</p> */}
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
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <ul className="list-disc pl-6 mb-4 text-black">
                    <li>No CCC corporate sponsorship examples at this time.</li>
                  </ul>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">See <Link to="/processes/sops-and-resources" className="underline hover:text-red-700">SOPs and Resources</Link></p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Steeprock Submission Process</h4>
                  <p className="italic text-black">[Coming Soon]</p>
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