import React from 'react';

const FeeForService = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Fee For Service</h1>
        
        <div className="space-y-6">
          {/* Fee For Service Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Fee For Service</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6 text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Individual Service Projects</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Qualification Process */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Qualification Process</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Project Qualification Process</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Conversation with CCC Lead</h4>
                  <p className="text-black">Project Funnel Criteria (link from above)</p>
                </div>
                
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Qualified CCC Concepts [ISR/Collaborative Studies, Aligned with CCC Criteria]</h4>
                  <ol className="list-decimal pl-6 text-black">
                    <li>Describe how the project aligns with the CCC Pillars</li>
                    <li>Describe how the partner fits with the CCC Selection Criteria</li>
                  </ol>
                </div>
                
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Process</h4>
                  <p className="text-black">Submission to CCC Adjudication Committee</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FeeForService; 