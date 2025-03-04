import React from 'react';

const FeeForService = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Fee For Service</h1>
        
        <div className="space-y-6">
          {/* Fee For Service Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Fee For Service</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Individual Service Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="italic text-gray-600">[Pending official description from Sabrina]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Qualification Process */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Qualification Process</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Project Qualification Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Conversation with CCC Lead</h4>
                  <p>Project Funnel Criteria (link from above)</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Qualified CCC Concepts [ISR/Collaborative Studies, Aligned with CCC Criteria]</h4>
                  <ol className="list-decimal pl-6">
                    <li>Describe how the project aligns with the CCC Pillars</li>
                    <li>Describe how the partner fits with the CCC Selection Criteria</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Process</h4>
                  <p>Submission to CCC Adjudication Committee</p>
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