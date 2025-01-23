import React from 'react';

const StrategiesTactics = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-red-800 mb-8 text-center">Strategies & Tactics</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Strategy 1</h2>
          <p className="text-gray-700 mb-4">
            Develop a comprehensive stakeholder matrix to ensure targeted, effective communication across all levels of the CCC initiative.
          </p>
          <h3 className="text-xl text-red-800 mb-2">Tactics:</h3>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Conduct a thorough stakeholder analysis, identifying all parties involved in or affected by the CCC project</li>
            <li>Segment stakeholders into 3 priority tiers based on influence and interest by end of month</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Strategy 2</h2>
          <p className="text-gray-700 mb-4">
            Ensure all communication aligns with CCC's mission, vision, and strategic pillars while addressing key unmet needs in community oncology.
          </p>
          <h3 className="text-xl text-red-800 mb-2">Tactics:</h3>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Review existing key messages against the 3 strategic pillars and 3 unmet needs within X weeks</li>
            <li>Develop a message house document linking each refined message to specific objectives and stakeholder groups within X weeks</li>
            <li>Core team to provide rapid approval of new messaging, allowing 10 day turnaround for stakeholder feedback</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Strategy 3</h2>
          <p className="text-gray-700 mb-4">
            Establish a multi-channel, timely communication system that enhances information flow and stakeholder engagement.
          </p>
          <h3 className="text-xl text-red-800 mb-2">Tactics:</h3>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Design a communication matrix mapping channels (e.g., email, web portal, video calls) to stakeholder tiers within X days</li>
            <li>Implement a digital dashboard for real-time project updates, accessible to all key stakeholders within X month</li>
            <li>Develop a quarterly newsletter template highlighting progress across all 3 strategic pillars, to launch by next quarter</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Cross-Cutting Initiatives</h2>
          
          <div className="space-y-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl text-red-800 mb-2">1. Generating Evidence</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Utilize input from Partners for 'Research Roundup' communication for CCC network, involve evidence generation, summarizing progress on adoption, access, and patient experiences</li>
                <li>Establish a secure data-sharing protocol for community sites to report on real-world evidence within 2 months</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl text-red-800 mb-2">2. Addressing Health Equity & Outcomes Disparities</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Develop a monthly 'Equity Spotlight' feature in all stakeholder communications, highlighting efforts in care coordination and SDOH impact</li>
                <li>Create a cross-functional task force to review all communications for cultural sensitivity and inclusivity within 1 month</li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="text-xl text-red-800 mb-2">3. Enabling Education for Patients and Providers</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>Common Language Developments</li>
                <li>Establish 'Key Terms' across stakeholder communications, build common language between clinicians and patients</li>
                <li>Develop micro-learning modules for clinicians re: latest treatment guidelines, target monthly releases</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategiesTactics;