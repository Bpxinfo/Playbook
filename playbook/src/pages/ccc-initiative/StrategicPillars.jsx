import React from 'react';

const StrategicPillars = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Strategic Pillars</h1>

      <div className="max-w-4xl">
        <section>
          <p className="text-gray-700 mb-4">
            To meet the CCC's objective in making an impact for Community Patients, projects will focus attention on three key areas (the CCC strategic pillars):
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Generating Evidence</li>
            <li>Addressing Disparities, Improving Health Equity</li>
            <li>Enabling Education for Providers and Patients</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default StrategicPillars;
