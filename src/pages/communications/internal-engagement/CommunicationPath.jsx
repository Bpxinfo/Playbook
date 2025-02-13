import React from 'react';

const CommunicationPath = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Communication Path</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Communication Flow</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our structured communication path ensures efficient information flow across all stakeholder levels:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Top-Down Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Strategic Updates</li>
                    <li>Policy Changes</li>
                    <li>Organizational Announcements</li>
                    <li>Project Directives</li>
                    <li>Performance Expectations</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Bottom-Up Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Progress Reports</li>
                    <li>Feedback and Suggestions</li>
                    <li>Issue Reporting</li>
                    <li>Resource Requests</li>
                    <li>Innovation Proposals</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Communication Guidelines</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Follow these guidelines for effective communication:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use appropriate channels based on message priority</li>
                <li>Maintain clear and concise messaging</li>
                <li>Follow established reporting hierarchies</li>
                <li>Document important communications</li>
                <li>Ensure timely responses and follow-ups</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Escalation Process</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Follow this escalation path for critical issues:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issues</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Level 1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Team Lead</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24 hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Routine Issues</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Level 2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Department Head</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">48 hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Complex Issues</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Level 3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Executive Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">72 hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Critical Issues</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Documentation Requirements</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Ensure proper documentation for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Meeting minutes and action items</li>
                <li>Project decisions and changes</li>
                <li>Issue resolution and outcomes</li>
                <li>Policy updates and announcements</li>
                <li>Stakeholder feedback and responses</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CommunicationPath;
