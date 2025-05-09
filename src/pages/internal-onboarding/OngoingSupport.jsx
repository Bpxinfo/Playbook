import React from 'react';
import { BookOpen, Users, Target } from 'lucide-react';

const OngoingSupport = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Ongoing Support</h1>
      
      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Continuous Learning</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide monthly updates on initiative progress and changes</li>
            <li>Seek opportunities for skill development and cross-training</li>
            <li>Encourage knowledge sharing and best practices</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Users className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Team Integration</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Ongoing participation in team meetings and CCC activities</li>
            <li>Advance initiative ideation for new projects and patient impact activities</li>
            <li>Seek opportunities to lead sub-projects or mentor newer members</li>
            <li>Participate in regular forums for idea sharing and collaborative problem-solving</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Target className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Project Execution</h2>
          </div>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Monthly status updates and progress tracking</li>
            <li>Monthly review of patient impact indicators, key performance indicators (KPIs) and milestones</li>
            <li>Quarterly strategic alignment sessions to ensure initiative goals are being met</li>
            <li>Participation in planning and retrospectives or formation of lessons learned</li>
            <li>Contribution to new project ideas, as well as risk management and mitigation strategies</li>
            <li>Collaboration on timely deliverables and meeting project deadlines</li>
            <li>Engagement in continuous improvement of project processes</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OngoingSupport;