import React from 'react';

const CCCStakeholders = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">CCC Stakeholders</h1>

      <div className="max-w-6xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Stakeholder Communications</h2>
          <p className="text-gray-700 mb-4">
            The identity of CCC stakeholders, their needs, methods, and channels:
          </p>

          <table className="table-auto w-full text-gray-700 mb-8">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">CCC Stakeholders</th>
                <th className="px-4 py-2 text-left">Title(s)/Group(s)</th>
                <th className="px-4 py-2 text-left">Deliverable</th>
                <th className="px-4 py-2 text-left">Priority</th>
                <th className="px-4 py-2 text-left">Method Communication</th>
                <th className="px-4 py-2 text-left">Channels</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">CCC LT (Gilead)</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Leadership Steering Committee</li>
                    <li>Core CCC Team Members</li>
                    <li>Extended CCC Members</li>
                  </ul>
                </td>
                <td className="border px-4 py-2">
                  CCC Strategy, Objectives, and Message<br />
                  CCC leadership may propose and select projects.
                </td>
                <td className="border px-4 py-2">
                  Provide direction and objectives to be executed.
                </td>
                <td className="border px-4 py-2">Meeting minutes of decisions</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>CCC Monthly Meetings</li>
                    <li>Email</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">USMA Oncology (Gilead)</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>USMA</li>
                    <li>USMA Operations</li>
                  </ul>
                </td>
                <td className="border px-4 py-2">
                  Implementation of strategies and present updates on program status to the CCCs leadership.<br />
                  USMA may propose, select, and oversee projects.
                </td>
                <td className="border px-4 py-2">Implement objectives</td>
                <td className="border px-4 py-2">Presentations and meetings on objectives</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Program and learn meetings</li>
                    <li>USMA SharePoint</li>
                    <li>Email</li>
                    <li>Instant Message</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">PAQ</td>
                <td className="border px-4 py-2">Patient Assistance & Quality</td>
                <td className="border px-4 py-2">
                  Inform patients about PAQ services and guide them through the application process.
                </td>
                <td className="border px-4 py-2">
                  Help patients access medications and medical care they might otherwise be unable to afford.
                </td>
                <td className="border px-4 py-2">Team Meetings</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Team Meetings</li>
                    <li>Email</li>
                    <li>Instant Message</li>
                    <li>SharePoint</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">GPFIS</td>
                <td className="border px-4 py-2">
                  Global Patient Focused Implementation Sciences
                </td>
                <td className="border px-4 py-2">
                  Involving patients more actively in their care.
                </td>
                <td className="border px-4 py-2">
                  Enhancing communication, encouraging active participation in care, and providing support and resources are priorities.
                </td>
                <td className="border px-4 py-2">Team Meetings</td>
                <td className="border px-4 py-2">
                  <ul className="list-disc pl-4">
                    <li>Team Meetings</li>
                    <li>Email</li>
                    <li>Instant Message</li>
                    <li>SharePoint</li>
                    <li>Internet Web Page</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Stakeholder Descriptions</h2>
          <p className="text-gray-700 mb-4">
            <strong>1. CCC LT:</strong> The CCC leadership group within Gilead will provide the direction and objectives for the Community Cancer Collective initiative. The leadership group needs to provide clear direction and objectives to meet the CCC’s goal.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>2. USMA Organization:</strong> The USMA team has worked extensively with Legal and Medical Governance to jointly develop a governance process to implement procedures to partner with community healthcare groups.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>3. Field Team:</strong> The Gilead field team consists of KADs, MSL, and MVELs who establish and maintain relationships with physicians at academic institutions and clinics.
          </p>
          <p className="text-gray-700">
            <strong>4. Internal Line-Functions:</strong> Line functions of different departments contribute to the review of RFPs and work with USMA as needed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CCCStakeholders;
