import React from 'react';

const PreIntegrationPrep = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Pre-Integration Prep</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">A. Background Information</h2>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Playbook Review
              <ul className="list-disc pl-6">
                <li>LINK to Initiative goals and objectives</li>
                <li>LINK to Current status and achievements</li>
                <li>LINK to Key stakeholders and team structure</li>
              </ul>
            </li>
            <li>Function-specific orientation
              <ul className="list-disc pl-6">
                <li>Tailored orientation for different roles/groups</li>
              </ul>
            </li>
            <li>LINK to relevant project summaries, examples, and support resources</li>
            <li>LINK to Process OverviewCC</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">B. Logistics</h2>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>LINK to systems, request for necessary access rights and accounts</li>
            <li>LINK to Sign up for relevant CCC meetings</li>
            <li>LINK to add proposed content for relevant agendas</li>
            <li>Introduce new members to key team members</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PreIntegrationPrep;
