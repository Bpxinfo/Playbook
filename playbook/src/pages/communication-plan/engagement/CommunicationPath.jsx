import React from 'react';

const CommunicationPlan = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Communication Plan</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Objectives</h2>
          <p className="text-gray-700 mb-4">
            Effective communication is an essential element of a good playbook, and it must be both timely and appropriately directed. The purpose of this communication plan is to outline how the communication process will be managed in reference to who should be notified (in the stakeholders section), what is being communicated (in the message section), how and when they should be notified (in the distribution section), and what should happen following notification (in the implementation section).
          </p>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Map out key stakeholders and segment them into priority tiers</li>
            <li>Validate and refine existing key messages to ensure alignment with objectives</li>
            <li>Establish a robust framework for notification methods and timing, enhancing communication efficiency</li>
            <li>Develop a RACI chart for post-notification actions with clear KPIs for each responsible party</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CommunicationPlan;
