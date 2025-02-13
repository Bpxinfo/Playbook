const EngagementStrategies = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Engagement Strategies</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Strategies</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our engagement approach is built on these foundational strategies:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Employee Development</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Career Growth Planning</li>
                    <li>Skill Enhancement</li>
                    <li>Leadership Training</li>
                    <li>Mentorship Programs</li>
                    <li>Performance Reviews</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Team Building</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Collaborative Projects</li>
                    <li>Team Workshops</li>
                    <li>Social Activities</li>
                    <li>Recognition Events</li>
                    <li>Cross-team Initiatives</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Approach</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Focus Area</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Skills Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Technical & Soft Skills</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q1-Q2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Team Collaboration</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Cross-functional Work</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q2-Q3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Leadership Growth</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Management Skills</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q3-Q4</td>
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
                Key metrics for measuring engagement success:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Employee Satisfaction Scores</li>
                <li>Participation Rates</li>
                <li>Skill Assessment Results</li>
                <li>Team Performance Metrics</li>
                <li>Leadership Development Progress</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Support Framework</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Learning Platform</li>
                    <li>Mentorship Program</li>
                    <li>Development Tools</li>
                    <li>Assessment Systems</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Support Systems</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>HR Support Team</li>
                    <li>Training Materials</li>
                    <li>Feedback Channels</li>
                    <li>Resource Library</li>
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

export default EngagementStrategies; 