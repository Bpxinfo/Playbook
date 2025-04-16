import React from 'react';
import { Laptop, Users, Filter, CheckSquare, Table2 } from 'lucide-react';

const Channels = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Communication Channels</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Primary Channels</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Filter className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Channel Strategy</h2>
                    <p className="text-gray-700 dark:text-black">
                      Our communication strategy utilizes multiple channels to ensure effective information dissemination across the organization:
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Laptop className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">Digital Platforms</h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                        <li>Microsoft Teams</li>
                        <li>SharePoint</li>
                        <li>Email Communications</li>
                        <li>Internal Newsletter</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-full p-2 shadow-md">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800 mb-2">In-Person Channels</h2>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                        <li>Team Meetings</li>
                        <li>Town Halls</li>
                        <li>Training Sessions</li>
                        <li>One-on-One Meetings</li>
                        <li>Workshop Sessions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Channel Selection Guidelines</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Filter className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Selection Criteria</h2>
                    <p className="text-gray-700 mb-4 dark:text-black">Choose the appropriate channel based on these key factors:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                      <li>Message urgency and importance</li>
                      <li>Target audience preferences</li>
                      <li>Content complexity and format</li>
                      <li>Required interaction level</li>
                      <li>Information security requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Best Practices</h2>
            <div className="space-y-4">
              <div className="bg-teal-50 border-l-4 border-teal-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <CheckSquare className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Channel Guidelines</h2>
                    <p className="text-gray-700 mb-4 dark:text-black">Follow these guidelines for effective channel usage:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-black">
                      <li>Use multiple channels for critical communications</li>
                      <li>Maintain consistent messaging across all channels</li>
                      <li>Consider audience accessibility needs</li>
                      <li>Monitor channel effectiveness and engagement</li>
                      <li>Regularly review and update channel strategy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Channel Matrix</h2>
            <div className="space-y-4">
              <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-white rounded-full p-2 shadow-md">
                    <Table2 className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Channel Overview</h2>
                    <p className="text-gray-700 mb-4 dark:text-black">Comprehensive view of our communication channels and their characteristics:</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Response Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Formality Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Teams Chat</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Quick updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Immediate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Informal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Email</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Detailed info</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">24-48 hours</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Formal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">SharePoint</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Documentation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">N/A</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Very Formal</td>
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

export default Channels;