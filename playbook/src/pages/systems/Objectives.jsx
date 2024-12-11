import React from 'react';

const Objectives = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Objectives</h1>

      <div className="max-w-4xl">
        <p className="text-gray-700 mb-4">
          The objective of this comprehensive processes, governance, and compliance framework is to establish a robust operational foundation for the CCC initiative, ensuring seamless execution while maintaining the highest standards of regulatory adherence and risk management. By implementing a structured approach to governance, the framework creates clear lines of accountability, streamlines decision-making processes, and fosters a culture of compliance that protects both the initiative's integrity and its stakeholders' interests.
        </p>
        <p className="text-gray-700 mb-4">
          This integrated framework orchestrates the cross-functional interactions of three critical pillars: operational processes that drive day-to-day activities, governance mechanisms that ensure proper oversight and control, and compliance guidance that safeguards against regulatory risks. Each pillar is designed to complement and reinforce the others, creating a dynamic system that adapts to changing requirements while maintaining operational excellence and legal, compliance, and regulatory conformity.
        </p>
        <p className="text-gray-700">
          The framework's emphasis on transparent documentation, clear accountability structures, and proactive risk management ensures that the CCC initiative not only meets its current obligations but is also positioned to scale effectively and respond to emerging complexities. Through systematic monitoring and regular review cycles, the framework promotes continuous improvement while maintaining the agility necessary to address evolving patient needs, treatment landscapes, and operational demands.
        </p>
      </div>

      <div className="flex justify-between mt-8">
        <button className="bg-gray-500 text-white px-4 py-2 rounded-full">
          &lt;
        </button>
        <button className="bg-red-800 text-white px-4 py-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Objectives;
