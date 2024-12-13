import React from 'react';

const LeadershipSteerCoMonitoring = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Leadership SteerCo Monitoring</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Measurements</h2>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Stakeholder Engagement Metrics:</h3>
            <ul className="list-decimal pl-6 text-gray-700">
              <li>Open rates for email communications</li>
              <li>Attendance rates for virtual meetings/webinars</li>
              <li>User activity on digital dashboard</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg text-red-800 mb-2">Message Effectiveness:</h3>
            <ul className="list-decimal pl-6 text-gray-700">
              <li>Survey stakeholders quarterly on message clarity and relevance</li>
              <li>Track message consistency across different communication channels</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg text-red-800 mb-2">Action Implementation:</h3>
            <ul className="list-decimal pl-6 text-gray-700">
              <li>Completion rate of post-notification actions</li>
              <li>Time from communication to action implementation</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LeadershipSteerCoMonitoring;
