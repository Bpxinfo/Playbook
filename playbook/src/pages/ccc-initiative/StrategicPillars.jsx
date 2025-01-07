import React from 'react';
import s1 from '../../assets/StrategicPillar1.jpg'
import s2 from '../../assets/StrategicPillar2.jpg'
const StrategicPillars = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Strategic Pillars</h1>

      <div className="max-w-4xl">
        <section>
          <p className="text-gray-700 mb-4">
          To meet the CCC’s objective in making impact for Community Patients, projects will focus attention on three key areas (the CCC strategic pillars):           </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Generating Evidence</li>
            <li>Addressing Disparities, Improving Health Equity</li>
            <li>Enabling Education for Providers and Patients</li>
          </ul>
        </section>
      </div>
      <div className="mb-8">
        <img 
          src={s1} 
          alt="Strategic Pillars 1" 
          className="w-full rounded-lg shadow-lg mb-4"
        />
        <p className="text-sm text-gray-500 text-center">Strategic Pillars Diagram 1</p>
      </div>
      <div className="mb-8">
        <img 
          src={s2} 
          alt="Strategic Pillars 2" 
          className="w-full rounded-lg shadow-lg mb-4"
        />
        <p className="text-sm text-gray-500 text-center">Strategic Pillars Diagram 2</p>
      </div>
    </div>
  );
};

export default StrategicPillars;
