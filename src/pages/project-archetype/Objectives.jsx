import React from 'react';

const PAObjectives = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Objectives</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Framework Overview</h2>
            <p className="text-gray-700">
              The objective of this comprehensive project archetypes framework is to establish clear pathways 
              and guidelines for managing diverse initiatives within the CCC, ensuring each project type aligns 
              with core principles while maintaining operational excellence and regulatory compliance. By 
              implementing a structured approach to project categorization and governance, the framework creates 
              distinct processes for collaborative studies, fee for service projects, sponsorships, and grants, 
              while fostering adherence to CCC's North Star of elevating partners to impact community patients.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Types & Integration</h2>
            <p className="text-gray-700">
              This integrated framework orchestrates the management of four critical project types: collaborative 
              studies that generate evidence through GRC/LRC oversight, fee for service projects that deliver 
              individual services, sponsorships that support medical and corporate initiatives, and grants that 
              enable community impact. Each archetype is designed to complement CCC's core principles, creating a 
              dynamic system that enables community sites to better serve patients, builds trust within 
              communities, and develops right-sized, personalized education.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Governance & Execution</h2>
            <p className="text-gray-700">
              The framework's emphasis on structured project lifecycles, clear governance mechanisms, and 
              comprehensive SOPs ensures that each CCC initiative not only meets its immediate objectives but 
              also contributes to broader strategic goals. Through systematic oversight via the CCC Adjudication 
              Committee and established operational guidelines, the framework promotes effective project execution 
              while maintaining the flexibility to create intentional linkages between projects, data, and 
              advocate voices, ultimately supporting positive change for partners, communities, and patients.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PAObjectives;