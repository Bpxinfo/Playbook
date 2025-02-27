import React from 'react';
import { Target, Layers, TrendingUp } from 'lucide-react';

const Objectives = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">OBJECTIVES</h1>

        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Program Overview</h2>
            </div>
            <div className="text-gray-700">
              <p>
                The objective of this comprehensive integration program is to accelerate the onboarding of high-potential CCC Project Leaders into a community patient mission-driven initiative, ensuring their rapid alignment with strategic goals and maximizing their impact from day one. Through a structured, year-long journey, the program systematically transforms new entrants into fully integrated, high-performing contributors and ambassadors for the initiative.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Layers className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Program Framework</h2>
            </div>
            <div className="text-gray-700">
              <p>
                This meticulously designed framework encompasses six key phases: pre-integration preparation, initial orientation, immersive contribution, deepened engagement, full integration, and ongoing support. Each phase is carefully crafted to build upon the previous, fostering a self-driven approach to leadership development while simultaneously advancing the initiative's objectives.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Development Approach</h2>
            </div>
            <div className="text-gray-700">
              <p>
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
