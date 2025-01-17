import React from 'react';
import CCC_Overview from '../../assets/CCC_Overview.jpg'
const CCCOverview = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Objectives</h1>
      
      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">The Project Summary</h2>
          <div className="mb-8">
            <img 
              src={CCC_Overview} 
              alt="CCC Overview" 
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-sm text-gray-500 text-center">CCC Overview Diagram</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">CCC Overview</h2>
          <p className="text-gray-700 mb-4">
            The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in community settings. By bringing together key partners and collaborating with oncology treatment sites nationwide, we identify impactful opportunities and implement innovative solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Three Strategic Pillars</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Generating Evidence</li>
            <li>Addressing Disparities, Improving Health Equity</li>
            <li>Enabling Education for Providers and Patients</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">CCCs is working with community sites to address the following Unmet Needs:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Advance Evidence-Based Solutions: Close the gap between clinical trial evidence and real-world implementation in community settings</li>
            <li>Reduce Disparities in Cancer Care: Focus on health equity by addressing specific care gaps in underserved regions, starting with the Southeastern U.S., and scaling nationally</li>
            <li>Enhance Provider and Patient Education: Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey</li>
            <li>Improve Cancer Care Delivery: Collaborate with community-focused institutions to develop capabilities that optimize the quality of care for diverse oncology populations</li>
          </ul>
        </section>

        <section>
          <p className="text-gray-700">
            To achieve this goal, Gilead partners with community-focused institutions treating patients and nationwide support organizations to identify meaningful opportunities, develop community site capabilities, and execute impactful solutions for diverse oncology patient populations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CCCOverview;