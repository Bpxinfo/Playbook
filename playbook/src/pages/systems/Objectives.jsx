import React from 'react';

const Objectives = () => {
  return (
    <div className="p-8 bg-white text-gray-900">
      <h1 className="text-4xl font-light text-red-800 mb-8 text-center">OBJECTIVES</h1>

      <div className="max-w-4xl space-y-8">
        <section>
          <h2 className="text-2xl text-red-800 mb-4">Systems Framework Overview</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700 mb-4">
              The systems framework serves as the operational backbone of the Community Cancer Collective (CCC) initiative, providing the essential infrastructure needed to coordinate and execute its mission effectively. These systems are generally involved with CCC through projects, administration and general activities (e.g. processes). By integrating diverse platforms, workflows, and processes, this framework enables CCC to manage complex projects, maintain regulatory compliance, and facilitate collaboration across multiple stakeholders.
            </p>
            <p className="text-gray-700">
              The framework streamlines day-to-day operations by connecting critical internal platforms like GVault, GOptics, and G360 with external systems and manual processes, ensuring that teams can efficiently manage everything from study concepts and protocols to vendor relationships and financial approvals.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Governance & Compliance</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">
              Through structured governance mechanisms like the Global Review Committee (GRC) and Local Review Committee (LRC), the systems framework safeguards the integrity of CCC's work while expediting decision-making processes. It provides clear pathways for project approvals, document management, and regulatory compliance, reducing operational friction and enabling teams to focus on their core objectives. The framework's emphasis on transparent documentation and standardized processes helps protect both the initiative's interests and its stakeholders by maintaining consistent standards across all activities.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Scalability & Adaptation</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">
              Most importantly, this systems framework transforms complex operational requirements into manageable, repeatable processes that support CCC's growth and adaptation. It creates a foundation that allows CCC to scale its operations efficiently, respond to emerging needs in the cancer care landscape, and maintain the highest standards of quality and compliance while supporting the initiative's goal of advancing cancer care in community settings.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Objectives;
