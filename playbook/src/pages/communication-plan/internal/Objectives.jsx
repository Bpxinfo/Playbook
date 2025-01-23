import React from 'react';

const Objectives = () => {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-red-800 mb-8 text-center">OBJECTIVES</h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl text-red-800 mb-4">Primary Objective</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">
                Effective communication is an essential element of a good playbook, and it must be both timely and appropriately directed. 
                The purpose of this communication plan is to outline how the communication process will be managed in reference to <u>who</u> should be notified 
                (in the stakeholders) section, <u>what</u> is being communicated (in the message section), <u>how and when</u> they should be notified (in the distribution section), 
                and what should happen following notification (in the implementation section).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4">Key Goals</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Map out key stakeholders and segment them into priority tiers</li>
                <li>Validate and refine existing key messages to ensure alignment with objectives</li>
                <li>Establish a robust framework for notification methods and timing, enhancing communication efficiency</li>
                <li>Develop a RACI chart for post-notification actions with clear KPIs for each responsible party</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Objectives;