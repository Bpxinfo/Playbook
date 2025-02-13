import React from 'react';

const StrategiesNTactics = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Strategies & Tactics</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Communication Strategies</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our comprehensive communication approach focuses on these key strategies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Internal Alignment</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Clear Message Framework</li>
                    <li>Stakeholder Mapping</li>
                    <li>Channel Optimization</li>
                    <li>Feedback Integration</li>
                    <li>Performance Tracking</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Engagement Focus</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Interactive Sessions</li>
                    <li>Two-way Dialogue</li>
                    <li>Recognition Programs</li>
                    <li>Collaborative Tools</li>
                    <li>Knowledge Sharing</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Tactics</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tactic</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Town Halls</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Broad Updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Team Meetings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Detailed Planning</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Weekly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Newsletters</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Information Sharing</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Bi-weekly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Success Metrics</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Key performance indicators for measuring effectiveness:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Engagement Rates</li>
                <li>Message Comprehension</li>
                <li>Feedback Quality</li>
                <li>Action Completion</li>
                <li>Stakeholder Satisfaction</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Tools & Resources</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Digital Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Communication Platform</li>
                    <li>Project Management</li>
                    <li>Analytics Dashboard</li>
                    <li>Feedback System</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Support Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Training Materials</li>
                    <li>Best Practices Guide</li>
                    <li>Templates Library</li>
                    <li>Help Documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StrategiesNTactics;