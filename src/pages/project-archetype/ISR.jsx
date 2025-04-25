import React from 'react';

const ISR = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Investigator Sponsored Research (ISR)</h1>
        
        <div className="space-y-6">
          {/* ISR Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Investigator Sponsored Research (ISR)</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h4 className="font-medium mb-2 text-black">Objective / Overview</h4>
              <p className="mb-4 text-black">
                Investigator-sponsored research (ISR) proposals are non-Gilead Sponsored Research (GSR) and are non-collaborative. These proposals can include Gilead or non-Gilead products, may be disease-focused, may be interventional or non-interventional, and may collect primary data or make use of secondary data collected for other purposes.
              </p>
              <p className="mb-4 text-black">
                The IRC (Investigator Sponsored Research Review Committee) is responsible for the review and approval of ISRs.
              </p>
              <p className="mb-4 text-black">
                An ISR study involving a Gilead product can only be initiated after regulatory approval of that Gilead product in the country where the external sponsor is located.
              </p>
              <p className="mb-4 text-black">
                For all ISRs, the responsibility for the regulatory sponsor requirements, including the design, conduct, analysis, and publication of the study lays not with Gilead, but with the investigator or the investigator's institution.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 text-black">
                <p className="font-medium mb-2 text-black dark:text-black">After review of the ISR proposal, the submission should either be rejected or accepted with no changes requested. If the proposal is approved by the IRC, Gilead's role is limited to:</p>
                <ul className="list-disc pl-6 text-black dark:text-black">
                  <li>Providing study drug and/or funding</li>
                  <li>Monitoring the progress of the study and publications</li>
                  <li>Protocol check by Global Medical Affairs and Patient Safety</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mb-4 text-black">
                <p className="font-medium mb-2 text-black dark:text-black">GMA and Patient Safety may comment on major concerns related to patient safety to ensure:</p>
                <ul className="list-disc pl-6 text-black dark:text-black">
                  <li>The protocol aligns with the proposal study design and medication dosing that was approved at IRC.</li>
                  <li>Minimum safety requirements are aligned to the standards defined per US Package Insert and Investigator Brochure/guidance documents.</li>
                </ul>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg text-black">
                <p className="font-medium mb-2 text-black dark:text-black">System:</p>
                <p className="text-black"><a href="https://gileadrnd.appiancloud.com/suite/sites/gs-isr" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GOptics</a></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ISR; 