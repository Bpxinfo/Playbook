import React from 'react';

const CCCOverview = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Objectives</h1>
      
      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">The Project Summary</h2>
          <p className="text-gray-700 mb-4">
            A screenshot of a website
          </p>
          <p className="text-gray-700 mb-4">
            Description automatically generated
          </p>
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
            <li>Address gaps between evidence generated in clinical trials and implementation in the real-world community setting</li>
            <li>Address care gaps identified in the SE community setting with the potential to scale to other regions in the US</li>
            <li>Support improvements in cancer care delivery through novel approaches to provider education and patient empowerment</li>
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