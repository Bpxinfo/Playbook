const Monitoring = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Engagement Monitoring</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Monitoring Framework</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Quantitative Metrics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Participation Rates</li>
                    <li>Engagement Scores</li>
                    <li>Response Times</li>
                    <li>Completion Rates</li>
                    <li>Activity Metrics</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Qualitative Metrics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Feedback Quality</li>
                    <li>Program Impact</li>
                    <li>Team Dynamics</li>
                    <li>Leadership Growth</li>
                    <li>Cultural Alignment</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Performance Dashboard</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Target</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Engagement Rate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">85%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">78%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">In Progress</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Response Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24h</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">36h</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Needs Action</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Program Completion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">90%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">92%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Achieved</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Improvement Actions</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Regular Reviews</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Performance Analysis</li>
                    <li>Gap Identification</li>
                    <li>Action Planning</li>
                    <li>Progress Tracking</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Enhancement Steps</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Training Programs</li>
                    <li>Process Updates</li>
                    <li>Tool Optimization</li>
                    <li>Resource Allocation</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Reporting Schedule</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Regular Reports</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Weekly Updates</li>
                    <li>Monthly Summaries</li>
                    <li>Quarterly Reviews</li>
                    <li>Annual Assessments</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Special Reports</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Project Milestones</li>
                    <li>Critical Incidents</li>
                    <li>Success Stories</li>
                    <li>Impact Analysis</li>
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

export default Monitoring; 