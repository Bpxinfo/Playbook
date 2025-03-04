import React from 'react';

const ISR = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Investigator Sponsored Research (ISR)</h1>
        
        <div className="space-y-6">
          {/* ISR Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Investigator Sponsored Research (ISR)</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h4 className="font-medium mb-2 text-black">Objective / Overview</h4>
              <p className="mb-4 text-black">
                ISR: IRC is responsible for the review and approval of investigator-sponsored research proposals (i.e., non-GSR, non-collaborative). These proposals can include Gilead or non-Gilead products, may be disease-focused, may be interventional or non-interventional, and may collect primary data or make use of secondary data collected for other purposes.
              </p>
              <p className="mb-4 text-black">
                An ISR study involving a Gilead product can only be initiated after regulatory approval of that Gilead product in the country where the external sponsor is located.
              </p>
              <p className="mb-4 text-black">
                For all ISRs, the responsibility for the regulatory sponsor requirements, including the design, conduct, analysis, and publication of the study lays not with Gilead, but with the investigator or the investigator's institution.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 text-black">
                <p className="font-medium mb-2 text-black">After review of the ISR proposal, the submission should either be rejected or accepted with no changes requested. If the proposal is approved by the IRC, Gilead's role is limited to:</p>
                <ul className="list-disc pl-6 text-black">
                  <li>Providing study drug and/or funding</li>
                  <li>Monitoring the progress of the study and publications</li>
                  <li>Protocol check by Global Medical Affairs and Patient Safety</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-black">
                <p className="font-medium mb-2 text-black">GMA and Patient Safety may comment on major concerns related to patient safety to ensure:</p>
                <ul className="list-disc pl-6 text-black">
                  <li>The protocol aligns with the proposal study design and medication dosing that was approved at IRC.</li>
                  <li>Minimum safety requirements are aligned to the standards defined per US Package Insert and Investigator Brochure/guidance documents.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Collection Types */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Data Collection Types</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg text-black">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Prospective Data Collection</h3>
                <p className="text-black">Governance: GRC LINK</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg text-black">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Retrospective Data Collection</h3>
                <p className="text-black">Governance: LRC LINK</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Other</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Decision</h4>
                  <p className="text-black">Adjudication Committee</p>
                </div>
                
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">LinkS</h4>
                  <ul className="list-disc pl-6 text-black">
                    <li>LINK TO COMPLIANCE</li>
                    <li>LINK TO GOVERNANCE</li>
                    <li>LINK to SOP LIST</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ISR; 