import React from 'react';

const CCCOverview = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">CCC Overview</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">The Project Summary</h2>
          <p className="text-gray-700 mb-4">
            The Community Cancer Collective (CCC) is a patient-focused initiative to address gaps in care for patients in non-academic settings by fostering collaborations with treatment sites in the oncology community. Gilead can positively contribute to improving the lives of patients living with cancer in community settings through collaboration and communication.
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
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Generating Evidence</li>
            <li>Addressing Disparities, Improving Health Equity</li>
            <li>Enabling Education for Providers and Patients</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Addressing Unmet Needs</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Address gaps between evidence generated in clinical trials and implementation in the real-world community setting</li>
            <li>Address care gaps identified in the SE community setting with the potential to scale to other regions in the US</li>
            <li>Support improvements in cancer care delivery through novel approaches to provider education and patient empowerment</li>
          </ul>
          <p className="text-gray-700 mt-4">
            To achieve this goal, Gilead partners with institutions treating patients in the community and organizations that support these institutions to identify meaningful opportunities, evaluate their capabilities, and execute solutions for diverse populations.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CCCOverview;
