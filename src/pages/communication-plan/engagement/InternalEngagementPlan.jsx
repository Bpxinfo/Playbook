import React from 'react';

const InternalEngagementPlan = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Internal Engagement Plan</h1>

      <div className="space-y-8">
        {/* Distribution Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Distribution</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg text-red-800 mb-2">Internal Gilead</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>CCC Leadership:</strong> Generates the program direction and objectives to progress the plan. Leadership to communicate decisions by &lt;TBD Person, Method&gt;.</li>
                <li><strong>USMA:</strong> Presented with CCC direction and objectives after finalization. After review, objectives to be cascaded to teams for alignment and implementation.</li>
                <li>A copy of the CCC Leadership decisions and objectives will be maintained on the USMA SharePoint.</li>
                <li><strong>Gilead field team:</strong> Should be presented with CCC direction and objectives by their leadership or USMA team. Formal training meetings recommended for highlighting areas and providing talking points.</li>
                <li><strong>Line-Functions:</strong> Should be presented with CCC direction and objectives by their leadership or USMA team during implementation.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg text-red-800 mb-2">Objective Distribution Tactics and Channels</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>USMA:</strong> Receives objectives via direct communications from LT, managers</li>
                <li><strong>Gilead field team:</strong> Receives objectives via LT, program teams and/or team meetings</li>
                <li><strong>Line-functions:</strong> Receives direct communications from leadership teams, CCC Teams Space, program teams and/or study team meetings</li>
                <li>Teams will use the Patient Impact Model as a framework to evaluate impact and demonstrate CCC project value</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Training</h2>
          
          <div className="space-y-6">
            <div>
              <p className="mb-4 text-gray-700">Medical Affairs should direct training within 8 weeks to support field readiness on the CCC's direction and objectives.</p>
              <p className="mb-4 text-gray-700">The training should be held to highlight areas and provide talking points with external professionals (KOL, Science, Healthcare) and should provide clear guidelines and strategy.</p>
              <p className="mb-4 text-gray-700">A copy of the CCC training will be maintained on the USMA SharePoint (ID folder section)</p>
            </div>

            <div>
              <h3 className="text-lg text-red-800 mb-2">Training Areas</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Development of site capabilities to conduct oncology clinical research</li>
                <li>Partner with Gilead can improve patient health by participating in innovative projects</li>
                <li>Participation in projects that will improve cancer care in the community</li>
                <li>Project development should develop data to answer a strategic pillar need</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Transition and Support Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Transition and Support</h2>
          
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>The current/started project activities will continue, but all new should using the new priority's and processes.</li>
              <li>New and/or improved systems may be implemented to support the initiative.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternalEngagementPlan;