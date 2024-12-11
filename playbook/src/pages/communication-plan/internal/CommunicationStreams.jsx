import React from 'react';

const CommunicationStreams = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Communication Streams</h1>

      <div className="max-w-6xl">
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            Communication streams are the different message passing systems allowing the CCC information to travel between individuals or groups.
          </p>
          <h2 className="text-2xl text-red-800 mb-4">Table 3 – CCC Communication Streams</h2>
          <table className="table-auto w-full text-gray-700 border-collapse border border-gray-300 mb-8">
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
                <td className="border px-4 py-2">CCC Newsletter</td>
                <td className="border px-4 py-2">CCC SP Hub & Internal Email</td>
                <td className="border px-4 py-2">USMA</td>
                <td className="border px-4 py-2">CCC Project Leads Approvers: CCC LT</td>
                <td className="border px-4 py-2">Internal CCC Stakeholders</td>
                <td className="border px-4 py-2">Quarterly</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">CCC Spotlight - CCC Initiative Update</td>
                <td className="border px-4 py-2">CCC SP Hub Blog / Compile into Newsletter</td>
                <td className="border px-4 py-2">Sabrina, CCC Core Team</td>
                <td className="border px-4 py-2">USMA operations, field team</td>
                <td className="border px-4 py-2">Monthly</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">CCC Spotlight - Project Update</td>
                <td className="border px-4 py-2">CCC SP Hub Blog / Compile into Newsletter</td>
                <td className="border px-4 py-2">CCC Project Leads</td>
                <td className="border px-4 py-2">CCC LT</td>
                <td className="border px-4 py-2">Gilead Functions</td>
                <td className="border px-4 py-2">Bi-weekly – 2-3 / month</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">CCC Spotlight - Patient Impact Update</td>
                <td className="border px-4 py-2">CCC SP Hub Blog / Compile into Newsletter</td>
                <td className="border px-4 py-2">Field team</td>
                <td className="border px-4 py-2">CCC LT, USMA teams</td>
                <td className="border px-4 py-2">Monthly</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">CCC Lessons Learned</td>
                <td className="border px-4 py-2">SP Hub / Compile into Newsletter</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>USMA teams</li>
                    <li>USMA operations</li>
                  </ul>
                </td>
                <td className="border px-4 py-2">USMA operations</td>
                <td className="border px-4 py-2">End of Project</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Project RFPs</td>
                <td className="border px-4 py-2">SP Hub / Newsletters</td>
                <td className="border px-4 py-2">USMA teams, field team</td>
                <td className="border px-4 py-2">ISR, GSR</td>
                <td className="border px-4 py-2">CCC teams, field team, Line-functions</td>
                <td className="border px-4 py-2">As needed</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Communication Cadence</h2>
          <p className="text-gray-700 mb-4">
            Communication streams are the different message passing systems allowing the CCC information to travel between individuals or groups.
          </p>
          <h3 className="text-xl text-red-800 mb-4">Table 4 – CCC Communication Cadence</h3>
          <p className="text-gray-700">
            Work Development meetings will have their own communication streams:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>To CCC Core Team for input, alignment, output generation</li>
            <li>To CCC LT for alignment, approval</li>
            <li>To CCC Extended Team for engagement, awareness</li>
            <li>To Broader Organization for awareness, engagement, expansion (can be done through CCC SP Hub, Newsletter, etc.)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default CommunicationStreams;
