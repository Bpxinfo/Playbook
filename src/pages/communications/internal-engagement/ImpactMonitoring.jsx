import React from 'react';

const ImpactMonitoring = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Impact Monitoring</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Monitoring Framework</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our comprehensive monitoring framework tracks engagement impact across multiple dimensions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Quantitative Metrics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Participation Rates</li>
                    <li>Response Times</li>
                    <li>Completion Rates</li>
                    <li>Engagement Scores</li>
                    <li>Performance Indicators</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Qualitative Metrics</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Feedback Quality</li>
                    <li>Program Satisfaction</li>
                    <li>Team Collaboration</li>
                    <li>Innovation Impact</li>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">82%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">On Track</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Response Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24h</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">28h</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Needs Improvement</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Satisfaction</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">90%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">92%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Exceeding</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Improvement Actions</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Based on monitoring results, we implement the following actions:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Regular performance reviews and adjustments</li>
                <li>Targeted training and development programs</li>
                <li>Process optimization based on feedback</li>
                <li>Resource reallocation as needed</li>
                <li>Strategic initiative updates</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Reporting Schedule</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Regular Reports</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Weekly Progress Updates</li>
                    <li>Monthly Performance Reviews</li>
                    <li>Quarterly Strategic Analysis</li>
                    <li>Annual Impact Assessment</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Special Reports</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Project Milestone Reports</li>
                    <li>Initiative Launch Reviews</li>
                    <li>Critical Incident Analysis</li>
                    <li>Stakeholder Feedback Summary</li>
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

export default ImpactMonitoring;
