import React from 'react';

const StrategiesTactics = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Strategies & Tactics</h1>

      <div className="max-w-6xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Strategy</h2>
          <p className="text-gray-700 mb-4">
            Develop a comprehensive stakeholder matrix to ensure targeted, effective communication across all levels of the CCC initiative.
          </p>
          <h3 className="text-xl text-red-800 mb-2">Tactics:</h3>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Conduct a thorough stakeholder analysis within X weeks, identifying all parties involved in or affected by the CCC project</li>
            <li>Segment stakeholders into 3 priority tiers based on influence and interest by end of month</li>
            <li>Create detailed personas for top 5 stakeholder groups within X weeks to tailor communication approaches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Strategy</h2>
          <p className="text-gray-700 mb-4">
            Ensure all communication aligns with CCC's mission, vision, and strategic pillars while addressing key unmet needs in community oncology.
          </p>
          <h3 className="text-xl text-red-800 mb-2">Tactics:</h3>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li>Review existing key messages against the 3 strategic pillars and 3 unmet needs within X weeks</li>
            <li>Develop a message house document linking each refined message to specific objectives and stakeholder groups within X weeks</li>
            <li>Create a rapid approval process for new messaging, allowing X-day turnaround for stakeholder feedback</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Strategy</h2>
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

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Cross-Cutting Initiatives</h2>

          <div className="mb-8">
            <h3 className="text-xl text-red-800 mb-2">1. Evidence Generation Focus:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Create a bi-weekly 'Research Roundup' communication for stakeholders involved in evidence generation, summarizing progress on adoption, access, and patient experiences</li>
              <li>Establish a secure data-sharing protocol for community sites to report on real-world evidence within 2 months</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl text-red-800 mb-2">2. Health Equity & Disparities Emphasis:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Develop a monthly 'Equity Spotlight' feature in all stakeholder communications, highlighting efforts in care coordination and SDOH impact</li>
              <li>Create a cross-functional task force to review all communications for cultural sensitivity and inclusivity within 1 month</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-red-800 mb-2">3. Education and Common Language Development:</h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li>Launch a 'Term of the Week' initiative in all stakeholder communications to build a common language between clinicians and patients</li>
              <li>Develop a series of micro-learning modules for clinicians on latest treatment guidelines, with 1 new module released monthly</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StrategiesTactics;
