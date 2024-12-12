import React from 'react';

const ProcessesGovernance = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Processes / Processes & Governance
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">Processes & Governance</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">
            The CCC process framework establishes a structured approach to project implementation, ensuring consistency and compliance across all initiatives. This comprehensive framework guides stakeholders through each phase of project development, from initial conception to final execution.
          </p>
          
          <div className="mb-8">
            <img 
              src="/src/assets/CCC_Process_Overview.png" 
              alt="CCC Process Overview" 
              className="w-full rounded-lg shadow-lg mb-4"
            />
            <p className="text-sm text-gray-500 text-center">CCC Process Overview Diagram</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Key Process Components</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Project Initiation</h3>
              <p className="text-gray-700">
                Projects begin with a thorough needs assessment and alignment with CCC strategic pillars. Initial proposals undergo review by key stakeholders to ensure strategic fit and resource availability.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Governance Structure</h3>
              <p className="text-gray-700">
                A multi-tiered governance framework oversees all CCC activities, with clear roles and responsibilities assigned to each level of leadership. This ensures appropriate oversight and risk management throughout the project lifecycle.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Implementation Framework</h3>
              <p className="text-gray-700">
                Standardized processes guide project execution, including resource allocation, timeline management, and milestone tracking. Regular checkpoints ensure projects remain aligned with objectives and compliant with all relevant guidelines.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcessesGovernance;