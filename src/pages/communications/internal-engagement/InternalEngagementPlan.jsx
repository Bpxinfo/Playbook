import React from 'react';
import { Target, Clock, Lightbulb, BarChart3 } from 'lucide-react';

const InternalEngagementPlan = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Engagement Plan</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Plan Overview</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our internal engagement plan outlines the structured approach to fostering employee participation and collaboration:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Short-term Goals</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Increase participation rates</li>
                        <li>Enhance communication flow</li>
                        <li>Implement feedback systems</li>
                        <li>Launch recognition programs</li>
                        <li>Establish baseline metrics</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Lightbulb className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Long-term Goals</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Build sustainable culture</li>
                        <li>Develop leadership pipeline</li>
                        <li>Create innovation framework</li>
                        <li>Strengthen team cohesion</li>
                        <li>Measure long-term impact</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Timeline</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Timeline Overview</h3>
                    <p className="text-gray-700 mb-4">Track implementation progress across different phases:</p>
                  </div>
                </div>
              </div>
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Phase 1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Initial Assessment</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Complete</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Phase 2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Program Launch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">In Progress</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Phase 3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Review & Adjust</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q3</td>
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
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Primary Focus Areas</h3>
                    <p className="text-gray-700 mb-4">Primary focus areas for engagement:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Employee Development Programs</li>
                      <li>Leadership Training Workshops</li>
                      <li>Cross-functional Projects</li>
                      <li>Innovation Challenges</li>
                      <li>Community Building Events</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Resource Allocation</h2>
            <div className="space-y-4">
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <BarChart3 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Resource Distribution</h3>
                    <p className="text-gray-700 mb-4">Distribution of resources across initiatives:</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Budget Allocation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Training & Development: 40%</li>
                    <li>Tools & Technology: 25%</li>
                    <li>Events & Programs: 20%</li>
                    <li>Recognition & Rewards: 15%</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Team Resources</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Program Managers</li>
                    <li>Training Facilitators</li>
                    <li>Technical Support</li>
                    <li>Content Creators</li>
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

export default InternalEngagementPlan;