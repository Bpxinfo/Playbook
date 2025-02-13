import React from 'react';
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import governance_model from '../../assets/governance_model.png'
import stakeholder from '../../assets/stakeholder.jpg'
import leadership from '../../assets/leadership.jpg'
import adjud from '../../assets/adjud.jpg'

const ProcessesGovernance = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Processes & Governance</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Process Map & Governance Model</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={CCC_Process_Overview} 
                  alt="CCC Process Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Process Flow Diagram</p>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>1. GRC - Global Research Committee</p>
                <p>2. LRC - Local Research Committee</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">DAI (RACI)</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-2">COMING SOON</h3>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">ISR / Collaborative Studies Approval Process</h2>
            <div className="space-y-4">
              <p className="text-gray-700">Iteration of the Process Map with clickable buttons for study type – that greys out all irrelevant steps of process flow</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">COMING SOON</h3>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Leadership - SteerCo</h2>
            <div className="space-y-4">
              <h3 className="text-xl text-red-800 mb-4">CCC Internal Stakeholders & CCC Leadership SteerCo</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <img 
                    src={stakeholder} 
                    alt="CCC Stakeholders" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center">Stakeholders</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <img 
                    src={leadership} 
                    alt="Leadership SteerCo" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center">Leadership SteerCo</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Adjudication Committee</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={adjud} 
                  alt="Adjudication Model" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Adjudication Model</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">RFP Process</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">COMING SOON</h3>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Multi-Institutional Ecosystem</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">COMING SOON</h3>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProcessesGovernance;