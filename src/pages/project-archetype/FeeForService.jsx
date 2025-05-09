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
              <h3 className="text-xl font-semibold text-red-700 mb-3">Individual Projects</h3>
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Description</h4>
                  <p className="italic text-black">[Coming Soon]</p>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Examples</h4>
                    <ul className="list-disc pl-6 mb-4 text-black">
                    <li>ACCC/AONN Patient Navigation Survey (completed) (in collaboration with the PFIS, SEC, and Gov’t Affairs teams)</li>
                    <li>MantaCares Patient Planner (Digital and Physical) (completed) (in collaboration with the PFIS team)</li>
                    <li>Ontada/McKesson eLearn Now and PeerTrax+  Programs (in collaboration with the MM team)</li>
                    <li>Viver Health mBC Guide (in collaboration with the PFIS team)</li>
                  </ul>
                </div>
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Guidance</h4>
                  <p className="text-black">SOP under development</p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Qualification Process */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Qualification Process</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <div className="space-y-4 text-black">
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Conversation with CCC Lead</h4>   
                </div>
                
                <div className="text-black">
                  <h4 className="font-medium mb-2 text-black">Qualified CCC Concepts</h4>
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