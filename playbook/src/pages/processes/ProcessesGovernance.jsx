import React from 'react';
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import governance_model from '../../assets/governance_model.png'
import stakeholder from '../../assets/Stakeholder.jpg'
import leadership from '../../assets/leadership.jpg'
import adjud from '../../assets/adjud.jpg'
const ProcessesGovernance = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Processes & Governance</h1>
      
      <div className="max-w-4xl space-y-8 text-gray-900">
        {/* 1.1 Process Map & Governance Model */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.1 Process Map & GOVERNANCE MODEL</h2>
          <div className="mb-6">
            {/* Placeholder for Process Map Diagram */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4 text-center">
              <div className="mb-8">
                <img 
                  src={governance_model} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Flow Diagram</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <p>1. GRC - Global Research Committee</p>
            <p>2. LRC - Local Research Committee</p>
          </div>
        </section>

        {/* 1.2 DIA (RACI) */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.2 DIA (RACI)</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
          </div>
        </section>

        {/* 1.3 ISR / Collaborative Studies Approval Process */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.3 ISR / Collaborative Studies Approval Process</h2>
          <p className="mb-4">Iteration of the Process Map with clickable buttons for study type – that greys out all irrelevant steps of process flow</p>
          
          <div className="mb-4">
            <h3 className="text-xl mb-2">Example</h3>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="mb-8">
                <img 
                  src={CCC_Process_Overview} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">CCC Process Overview Diagram</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1.4 CCC Leadership - SteerCo */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.4 CCC Leadership - SteerCo</h2>
          <div className="mb-6">
            <h3 className="text-xl mb-4">CCC Internal Stakeholders & CCC Leadership SteerCo</h3>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
            <div className="mb-8">
                <img 
                  src={stakeholder} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Stakeholders</p>
              </div>
              <div className="mb-8">
                <img 
                  src={leadership} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Leadership SteerCo</p>
              </div>
            </div>
          </div>
        </section>

        {/* 1.5 IRB / Ethics Committee */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.5 CCC Adjudication Committee</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
          <div className="mb-8">
                <img 
                  src={adjud} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Adjudication Model</p>
              </div>
          </div>
        </section>

        {/* 1.6 Multi-Institutional Consortium */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.6 RFP Process</h2>
        </section>

        {/* 1.7 Multi-Institutional Consortium */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">1.7 Multi-Institutional Ecosystem</h2>
        </section>
      </div>
    </div>
  );
};

export default ProcessesGovernance;