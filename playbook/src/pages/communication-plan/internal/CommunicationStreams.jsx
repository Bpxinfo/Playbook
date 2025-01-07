import React from 'react';

const CommunicationStreams = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Communication Content</h1>

      <div className="max-w-6xl">
        <p className="text-gray-700 mb-4">
          Communication streams are the different message passing systems allowing the CCC information to travel between individuals or groups.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Table 3 – CCC Communication Content</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Content Stream</th>
                  <th className="border px-4 py-2 text-left">Channel(s)</th>
                  <th className="border px-4 py-2 text-left">Responsible / Accountable</th>
                  <th className="border px-4 py-2 text-left">Reviewers / Approvers</th>
                  <th className="border px-4 py-2 text-left">Audience</th>
                  <th className="border px-4 py-2 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">CCC Newsletter (Proposed)</td>
                  <td className="border px-4 py-2">CCC SP Hub & Internal Email</td>
                  <td className="border px-4 py-2">Cross Functional Team</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">CCC Extended Team + Cross Functional Stakeholders</td>
                  <td className="border px-4 py-2">Quarterly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Spotlights (Proposed)</td>
                  <td className="border px-4 py-2">CCC SP Hub Blog / Newsletter</td>
                  <td className="border px-4 py-2">Project Leads</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">CCC Extended Team + Cross Functional Stakeholders</td>
                  <td className="border px-4 py-2">Monthly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Lessons Learned (Proposed)</td>
                  <td className="border px-4 py-2">SP Hub / Newsletter</td>
                  <td className="border px-4 py-2">CCC Extended Team, Project Leads</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">CCC Extended Team + Cross Functional Stakeholders</td>
                  <td className="border px-4 py-2">Ad Hoc</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Project Proposals</td>
                  <td className="border px-4 py-2">Email</td>
                  <td className="border px-4 py-2">Project Lead</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">CCC Core Team + Adjudication Committee</td>
                  <td className="border px-4 py-2">Ad Hoc</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Table 4 – CCC Communication Cadence</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse border border-gray-300 mb-8">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Cadence</th>
                  <th className="border px-4 py-2 text-left">Audience</th>
                  <th className="border px-4 py-2 text-left">Method</th>
                  <th className="border px-4 py-2 text-left">Responsible</th>
                  <th className="border px-4 py-2 text-left">Content</th>
                  <th className="border px-4 py-2 text-left">Link(s)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2" rowSpan="1">Biweekly</td>
                  <td className="border px-4 py-2">CCC Adjudication Committee</td>
                  <td className="border px-4 py-2">Meeting</td>
                  <td className="border px-4 py-2">CCC Lead, Project Leads</td>
                  <td className="border px-4 py-2">Proposals, Concepts</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2" rowSpan="5">Monthly</td>
                  <td className="border px-4 py-2">CCC Project Leads</td>
                  <td className="border px-4 py-2">CCC Dashboard</td>
                  <td className="border px-4 py-2">CCC Project Leads</td>
                  <td className="border px-4 py-2">Live Project Status, Milestones, Risks/Issues</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Spotlights</td>
                  <td className="border px-4 py-2">Email / Mini Article / SP Blog Update</td>
                  <td className="border px-4 py-2">Project Lead(s)</td>
                  <td className="border px-4 py-2">Project and Partner Updates</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC LT Core Team</td>
                  <td className="border px-4 py-2">Meeting</td>
                  <td className="border px-4 py-2">CCC Lead(s)</td>
                  <td className="border px-4 py-2">Updates on Governance, Next Steps</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Project Leads</td>
                  <td className="border px-4 py-2">Alignment Meetings</td>
                  <td className="border px-4 py-2">CCC Project Leads</td>
                  <td className="border px-4 py-2">Project Updates (Milestone, Spend)</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Spotlights</td>
                  <td className="border px-4 py-2">CCC Teams (+/- email)</td>
                  <td className="border px-4 py-2">Project Lead(s)</td>
                  <td className="border px-4 py-2">Project Updates</td>
                  <td className="border px-4 py-2">CCC Teams</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2" rowSpan="4">Quarterly</td>
                  <td className="border px-4 py-2">CCC Ext Team</td>
                  <td className="border px-4 py-2">Meeting</td>
                  <td className="border px-4 py-2">CCC Core Team</td>
                  <td className="border px-4 py-2">Agenda Driven Updates</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Gilead Internal Stakeholders</td>
                  <td className="border px-4 py-2">CCC Newsletter</td>
                  <td className="border px-4 py-2">CCC Core Team + Project Leads</td>
                  <td className="border px-4 py-2">CCC Spotlights, Updates, etc</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Governance: GLRC</td>
                  <td className="border px-4 py-2">Meeting</td>
                  <td className="border px-4 py-2">Project Leads</td>
                  <td className="border px-4 py-2">Project Proposals</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2" colSpan="5">Meeting/Program Review</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2" rowSpan="1">Yearly</td>
                  <td className="border px-4 py-2">CCC Leadership Team</td>
                  <td className="border px-4 py-2">Senior Leadership Meetings</td>
                  <td className="border px-4 py-2">CCC LT</td>
                  <td className="border px-4 py-2">CCC Updates, Overview, Budget, Highlights</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2" rowSpan="2">Ad Hoc</td>
                  <td className="border px-4 py-2">CCC Extended Team</td>
                  <td className="border px-4 py-2">CCC Playbook Training</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">Playbook</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Internal Functions</td>
                  <td className="border px-4 py-2">Internal Roadshow</td>
                  <td className="border px-4 py-2">CCC Lead</td>
                  <td className="border px-4 py-2">Update Slides</td>
                  <td className="border px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-4">Work Development meetings will have their own communication streams:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>To CCC Core Team for input, alignment, output generation</li>
            <li>To CCC LT for alignment, approval</li>
            <li>To CCC Extended Team for engagement, awareness</li>
            <li>To broader Organization for awareness, engagement, expansion (can be done through CCC SP Hub, Newsletter, etc.)</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default CommunicationStreams;