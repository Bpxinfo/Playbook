import React from 'react';
import { ClipboardCheck, Target, MessageSquare, Users } from 'lucide-react';

const FullIntegration = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Full Integration (5-6 months)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ClipboardCheck className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Comprehensive Review</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Lead a retrospective on initiative goals and current status</li>
              <li>Showcase key contributions and measurable impact to date</li>
              <li>Propose areas for personal growth and initiative advancement</li>
              <li>Develop a spotlight on the project you lead for sharing broadly</li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Forward Planning</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Develop and present a proposed roadmap of new projects for the next 6-12 months</li>
              <li>Initiate cross-functional and multi-institutional RFP collaborations to drive innovation</li>
              <li>Demonstrate alignment with organizational leadership goals with broader initiative objectives</li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Feedback and Refinement</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide insights to improve the onboarding process for future leaders</li>
              <li>Identify opportunities to fill organizational knowledge gaps</li>
              <li>Establish a peer mentoring program to support team growth</li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Leadership and External Engagement</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Spearhead a key project or workstream within the initiative</li>
              <li>Represent the initiative at internal and external events or conferences</li>
              <li>Develop and implement a communication strategy to promote initiative successes</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FullIntegration;