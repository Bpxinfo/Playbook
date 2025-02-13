import React from 'react';

const Cadence = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Cadence</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Communication Cadence</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cadence</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Audience</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsible</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link(s)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="1">Biweekly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Adjudication Committee</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead, Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Proposals, Concepts</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="5">Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Dashboard</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Live Project Status, Milestones, Risks/Issues</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Spotlights</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Email / Mini Article / SP Blog Update</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Lead(s)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project and Partner Updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC LT Core Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead(s)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Updates on Governance, Next Steps</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Alignment Meetings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Updates (Milestone, Spend)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Spotlights</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Teams (+/- email)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Lead(s)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Teams</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="4">Quarterly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Ext Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Core Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Agenda Driven Updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Gilead Internal Stakeholders</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Newsletter</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Core Team + Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Spotlights, Updates, etc</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Governance: GLRC</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Meeting</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Leads</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Project Proposals</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan="5">Meeting/Program Review</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="1">Yearly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Leadership Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Senior Leadership Meetings</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC LT</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Updates, Overview, Budget, Highlights</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan="2">Ad Hoc</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Extended Team</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Playbook Training</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Playbook</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Internal Functions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Internal Roadshow</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">CCC Lead</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Update Slides</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Work Development Communication</h2>
            <div className="space-y-4">
              <p className="text-gray-700 mb-4">Work Development meetings will have their own communication streams:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>To CCC Core Team for input, alignment, output generation</li>
                <li>To CCC LT for alignment, approval</li>
                <li>To CCC Extended Team for engagement, awareness</li>
                <li>To broader Organization for awareness, engagement, expansion (can be done through CCC SP Hub, Newsletter, etc.)</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Cadence;