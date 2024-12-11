import React from 'react';

const PreIntegrationPrep = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Pre-Integration Prep</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
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

        <section>
          <h2 className="text-2xl text-red-800 mb-4">B. Logistics</h2>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>LINK to systems, request for necessary access rights and accounts</li>
            <li>LINK to Sign up for relevant CCC meetings</li>
            <li>LINK to add proposed content for relevant agendas</li>
            <li>Introduce new members to key team members</li>
          </ul>
        </section>
      </div>

      <div className="flex justify-between mt-8">
        <button className="bg-red-800 text-white px-4 py-2 rounded-full">
          &lt;
        </button>
        <button className="bg-red-800 text-white px-4 py-2 rounded-full">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PreIntegrationPrep;
