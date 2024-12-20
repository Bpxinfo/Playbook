import React from 'react';

const OngoingSupport = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Ongoing Support</h1>
      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">A. Continuous Learning</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>Provide monthly updates on initiative progress and changes</li>
            <li>Seek opportunities for skill development and cross-training</li>
            <li>Encourage knowledge sharing and best practices</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl text-red-800 mb-4">B. Project Execution</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>Monthly status updates and progress tracking</li>
            <li>Monthly review of patient impact indicators, key performance indicators (KPIs) and milestones</li>
            <li>Quarterly strategic alignment sessions to ensure initative goals are being met</li>
            <li>Participation in planning and retrospectives or formation of lessons learned</li>
            <li>Contribution to new project ideas, as well as risk management and mitigation strategies</li>
            <li>Collaboration on timely deliverables and meeting project deadlines</li>
            <li>Engagement in continuous improvement of project processes</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl text-red-800 mb-4">C. Team Integration</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>Ongoing participation in team meetings and CCC activities</li>
            <li>Advance initiative ideation for new projects and patient impact activities</li>
            <li>Seek opportunities to lead sub-projects or mentor newer members</li>
            <li>Participate in regular forums for idea sharing and collaborative problem-solving</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OngoingSupport;
