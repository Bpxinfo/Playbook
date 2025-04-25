import React from 'react';
import { Calendar, Users, Table2, MessageCircle } from 'lucide-react';

const Cadence = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Cadence</h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl text-red-800 mb-4">Communication Frequency</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Regular Updates</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                      <li>Biweekly Committee Meetings</li>
                      <li>Monthly Project Updates</li>
                      <li>Quarterly Reviews</li>
                      <li>Annual Leadership Meetings</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Users className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Stakeholder Engagement</h2>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                      <li>Core Team Alignment</li>
                      <li>Leadership Team Updates</li>
                      <li>Extended Team Communication</li>
                      <li>Organization-wide Awareness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Communication Cadence</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Communication Schedule</h2>
                    <p className="text-gray-700 mb-4 dark:text-black">
                      Structured communication schedule to ensure consistent and effective information flow across all levels:
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audience</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cadence</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsible Party</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Adjudication Committee</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="1">Biweekly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 text-sm text-gray-700">CCC Lead, CCC Adjudication Committee members (Medical Governance, Compliance, and Legal)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Proposals, Concepts</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="3">Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Jira, Alignment Meetings, email</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Live Project Status, Milestones, Risks/Issues</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Spotlights</td>
                      <td className="px-6 py-4 text-sm text-gray-700">Email / Mini Article in Quarterly CCC Newsletter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Lead(s)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project and Partner Updates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Core Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead + key stakeholders within Medical Affairs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Review new key projects, discuss issues/delays in current projects, governance updates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Leadership SteerCo</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="1">Bi-Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead + key stakeholders within Medical Affairs</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Review new key projects, discuss issues/delays in current projects, governance updates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Extended Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 relative row-span-bg-light-blue" rowSpan="2">
                        <span className="cell-content-above-bg">Quarterly</span>
                        </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Agenda Driven Updates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Gilead Internal Stakeholders</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Newsletter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead + Newsletter Lead (MSL rotation)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Spotlights, Updates, etc</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cadence;