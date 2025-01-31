import React from 'react';
import CCC_Overview from '../../assets/CCC_Overview.jpg'

const CCCOverview = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">OBJECTIVES</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center">The Project Summary</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-8">
                <img 
                  src={CCC_Overview} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">CCC Overview Diagram</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center">CCC Overview</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 mb-4">
                The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in community settings. By bringing together key partners and collaborating with oncology treatment sites nationwide, we identify impactful opportunities and implement innovative solutions.
              </p>
              <p className="text-gray-700">
                Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center">Three Strategic Pillars</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>Generating Evidence</li>
                <li>Addressing Disparities, Improving Health Equity</li>
                <li>Enabling Education for Providers and Patients</li>
              </ol>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center">CCCs is working with community sites to address the following Unmet Needs:</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Advance Evidence-Based Solutions: Close the gap between clinical trial evidence and real-world implementation in community settings</li>
                <li>Reduce Disparities in Cancer Care: Focus on health equity by addressing specific care gaps in underserved regions, starting with the Southeastern U.S., and scaling nationally</li>
                <li>Enhance Provider and Patient Education: Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey</li>
                <li>Improve Cancer Care Delivery: Collaborate with community-focused institutions to develop capabilities that optimize the quality of care for diverse oncology populations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center">Partnership Approach</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">
                To achieve this goal, Gilead partners with community-focused institutions treating patients and nationwide support organizations to identify meaningful opportunities, develop community site capabilities, and execute impactful solutions for diverse oncology patient populations.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CCCOverview;