import React from 'react';

const Objectives = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Engagement Objectives</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Objectives</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The Internal Engagement objectives are designed to foster meaningful connections and collaboration within the CCC initiative. Our primary goals are to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Create a collaborative environment that encourages active participation from all stakeholders</li>
                <li>Establish clear feedback channels to ensure continuous improvement and adaptation</li>
                <li>Build strong relationships between teams and departments involved in CCC initiatives</li>
                <li>Drive engagement through regular touchpoints and meaningful interactions</li>
                <li>Measure and track engagement effectiveness through defined metrics and KPIs</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Engagement Strategies</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our engagement approach focuses on the following key strategies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Regular stakeholder meetings and feedback sessions</li>
                <li>Cross-functional team collaboration initiatives</li>
                <li>Transparent communication of project progress and outcomes</li>
                <li>Recognition and celebration of team achievements</li>
                <li>Continuous learning and development opportunities</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Success Criteria</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Success in internal engagement will be measured through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Increased participation rates in CCC initiatives and programs</li>
                <li>Quality and frequency of feedback received from stakeholders</li>
                <li>Implementation rate of stakeholder suggestions and improvements</li>
                <li>Stakeholder satisfaction scores and engagement metrics</li>
                <li>Cross-functional collaboration effectiveness</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
