import React from 'react';

const InternalEngagementStrategies = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Engagement Strategies</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Strategies</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our engagement strategies are designed to foster active participation and collaboration:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Employee Development</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Skills Training Programs</li>
                    <li>Career Growth Opportunities</li>
                    <li>Mentorship Initiatives</li>
                    <li>Knowledge Sharing Sessions</li>
                    <li>Professional Certifications</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Team Building</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Collaborative Projects</li>
                    <li>Cross-functional Teams</li>
                    <li>Team Workshops</li>
                    <li>Social Activities</li>
                    <li>Recognition Programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Approach</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Key steps for implementing engagement strategies:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Assess current engagement levels and needs</li>
                <li>Develop targeted engagement programs</li>
                <li>Create clear communication channels</li>
                <li>Establish feedback mechanisms</li>
                <li>Monitor and measure effectiveness</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Engagement Tools</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target Group</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Feedback Surveys</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Gather Input</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">All Employees</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Training Portal</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Skill Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Department Teams</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Recognition Platform</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Motivation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">All Employees</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Success Indicators</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Key metrics for measuring strategy effectiveness:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Employee participation rates</li>
                <li>Feedback quality and quantity</li>
                <li>Program completion rates</li>
                <li>Employee satisfaction scores</li>
                <li>Retention and growth metrics</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InternalEngagementStrategies;
