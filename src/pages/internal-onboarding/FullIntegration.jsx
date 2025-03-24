import React from 'react';
import { ClipboardCheck, Target, MessageSquare, Users } from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

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
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="full-review-1" text="Lead a retrospective on initiative goals and current status" />
              </li>
              <li>
                <CheckboxItem id="full-review-2" text="Showcase key contributions and measurable impact to date" />
              </li>
              <li>
                <CheckboxItem id="full-review-3" text="Propose areas for personal growth and initiative advancement" />
              </li>
              <li>
                <CheckboxItem id="full-review-4" text="Develop a spotlight on the project you lead for sharing broadly" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Forward Planning</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="full-planning-1" text="Develop and present a proposed roadmap of new projects for the next 6-12 months" />
              </li>
              <li>
                <CheckboxItem id="full-planning-2" text="Initiate cross-functional and multi-institutional RFP collaborations to drive innovation" />
              </li>
              <li>
                <CheckboxItem id="full-planning-3" text="Demonstrate alignment with organizational leadership goals with broader initiative objectives" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <MessageSquare className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Feedback and Refinement</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="full-feedback-1" text="Provide insights to improve the onboarding process for future leaders" />
              </li>
              <li>
                <CheckboxItem id="full-feedback-2" text="Identify opportunities to fill organizational knowledge gaps" />
              </li>
              <li>
                <CheckboxItem id="full-feedback-3" text="Establish a peer mentoring program to support team growth" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Leadership and External Engagement</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="full-leadership-1" text="Spearhead a key project or workstream within the initiative" />
              </li>
              <li>
                <CheckboxItem id="full-leadership-2" text="Represent the initiative at internal and external events or conferences" />
              </li>
              <li>
                <CheckboxItem id="full-leadership-3" text="Develop and implement a communication strategy to promote initiative successes" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FullIntegration;