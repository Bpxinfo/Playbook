import React from 'react';

const Timeline = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Timeline</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Month 1–2:</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Complete stakeholder analysis and segmentation</li>
            <li>Refine key messages and create message house document</li>
            <li>Design communication matrix and launch digital dashboard</li>
            <li>Develop RACI chart and establish KPIs</li>
            <li>Create secure data-sharing protocol for community sites</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Month 3–4:</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Implement quarterly newsletter</li>
            <li>Launch 'Research Roundup' and 'Equity Spotlight' communications</li>
            <li>Establish cross-functional task force for communication review</li>
            <li>Begin 'Term of the Week' initiative</li>
            <li>Start releasing monthly micro-learning modules for clinicians</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Month 5–6:</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Conduct first quarterly review of communication effectiveness</li>
            <li>Refine stakeholder personas based on engagement data</li>
            <li>Adjust communication strategies as needed based on KPI performance</li>
            <li>Scale up successful communication initiatives to broader stakeholder groups</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Ongoing (Quarterly):</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Review and update stakeholder matrix</li>
            <li>Assess and refine key messages</li>
            <li>Evaluate KPIs and adjust tactics as necessary</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Timeline;
