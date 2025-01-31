import React from 'react';
import s1 from '../../assets/StrategicPillar1.jpg'
import s2 from '../../assets/StrategicPillar2.jpg'

const StrategicPillars = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Strategic Pillars</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            To meet the CCC's objective in making impact for Community Patients, projects will focus attention on three key areas (the CCC strategic pillars):
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Generating Evidence</li>
            <li>Addressing Disparities, Improving Health Equity</li>
            <li>Enabling Education for Providers and Patients</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Strategic Framework</h2>
          <div className="space-y-8">
            <div>
              <img 
                src={s1} 
                alt="Strategic Pillars 1" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Strategic Pillars Diagram 1</p>
            </div>
            <div>
              <img 
                src={s2} 
                alt="Strategic Pillars 2" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Strategic Pillars Diagram 2</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategicPillars;
