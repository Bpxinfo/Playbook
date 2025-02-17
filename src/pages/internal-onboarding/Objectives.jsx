import React from 'react';

const Objectives = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">OBJECTIVES</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl text-red-800 mb-4">Program Overview</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">
                The objective of this comprehensive integration program is to accelerate the onboarding of high-potential CCC Project Leaders into a community patient mission-driven initiative, ensuring their rapid alignment with strategic goals and maximizing their impact from day one. Through a structured, year-long journey, the program systematically transforms new entrants into fully integrated, high-performing contributors and ambassadors for the initiative.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4">Program Framework</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">
                This meticulously designed framework encompasses six key phases: pre-integration preparation, initial orientation, immersive contribution, deepened engagement, full integration, and ongoing support. Each phase is carefully crafted to build upon the previous, fostering a self-driven approach to leadership development while simultaneously advancing the initiative's objectives.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4">Development Approach</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700">
                The program's emphasis on hands-on experience, strategic responsibility allocation, and external engagement ensures that participants not only assimilate into their roles but also emerge as catalysts for innovation and growth within the organization.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Objectives;
