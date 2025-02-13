const EngagementPlan = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Engagement Plan</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Plan Overview</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Short-term Goals</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Increase participation rates by 25%</li>
                    <li>Launch new engagement initiatives</li>
                    <li>Implement feedback systems</li>
                    <li>Establish baseline metrics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Long-term Goals</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Build sustainable culture</li>
                    <li>Develop leadership pipeline</li>
                    <li>Create innovation framework</li>
                    <li>Enhance team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Timeline</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phase</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Planning</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Strategy Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Complete</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Launch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Initial Programs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">In Progress</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Expansion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Scale Programs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q3-Q4</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Planned</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Key Initiatives</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Primary Focus</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Employee Development Programs</li>
                    <li>Leadership Training Workshops</li>
                    <li>Team Building Activities</li>
                    <li>Recognition Programs</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Support Activities</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Feedback Collection</li>
                    <li>Progress Monitoring</li>
                    <li>Resource Allocation</li>
                    <li>Impact Assessment</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Resource Allocation</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Budget</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Program Development</li>
                    <li>Training Materials</li>
                    <li>Technology Tools</li>
                    <li>Event Planning</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Team Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Program Coordinators</li>
                    <li>Training Facilitators</li>
                    <li>Technical Support</li>
                    <li>Administrative Staff</li>
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

export default EngagementPlan; 