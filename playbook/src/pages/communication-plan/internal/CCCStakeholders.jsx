import React from 'react';

const CCCStakeholders = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">CCC Stakeholders</h1>

      <div className="max-w-7xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Stakeholder Communications</h2>
          <p className="text-gray-700 mb-4">The identity of CCC stakeholders, their needs, methods, channels:</p>

          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left font-medium">CCC Groups</th>
                  <th className="border px-4 py-2 text-left font-medium">Description</th>
                  <th className="border px-4 py-2 text-left font-medium">Deliverable [Receive / Provide]</th>
                  <th className="border px-4 py-2 text-left font-medium">Priority</th>
                  <th className="border px-4 py-2 text-left font-medium">Method Communication</th>
                  <th className="border px-4 py-2 text-left font-medium">Communication Channels</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">CCC Leadership SteerCo</td>
                  <td className="border px-4 py-2">Definition of what SteerCo does. Functions included, what are their roles</td>
                  <td className="border px-4 py-2">Provide guidance and endorsement of strategy, objectives, messaging<br />Receive Updates</td>
                  <td className="border px-4 py-2">Advise & Advocate<br />Provide direction and objectives to be executed</td>
                  <td className="border px-4 py-2">Slide Decks, Meetings</td>
                  <td className="border px-4 py-2">Bi-Monthly Meetings<br />Email Updates</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Core Team</td>
                  <td className="border px-4 py-2">Advisors to the CCC</td>
                  <td className="border px-4 py-2">Provide Input on Projects, Guidance, Guardrails</td>
                  <td className="border px-4 py-2">Lead & Execute the CCC</td>
                  <td className="border px-4 py-2">Meetings, Discussion</td>
                  <td className="border px-4 py-2">Bi-Weekly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Extended Team</td>
                  <td className="border px-4 py-2">Alignment across extended</td>
                  <td className="border px-4 py-2">Provide / Receive Information Updates</td>
                  <td className="border px-4 py-2">Informed & Consulted</td>
                  <td className="border px-4 py-2">Meetings, Email Updates</td>
                  <td className="border px-4 py-2">Quarterly Meetings</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Project Leads</td>
                  <td className="border px-4 py-2">USMA Strategy, Lead, SEC, PAQ, GPFIS, MM</td>
                  <td className="border px-4 py-2">Provide Project Updates (milestones, risks, budget, spend, KPIs, Patient Impact data)</td>
                  <td className="border px-4 py-2">Lead and Execute Projects</td>
                  <td className="border px-4 py-2">Meetings, Email Updates</td>
                  <td className="border px-4 py-2">Monthly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Executive Leadership</td>
                  <td className="border px-4 py-2">Michael (MALT)<br />Sandrine (SLT)<br />Johanna</td>
                  <td className="border px-4 py-2">Receive Updates, Approve Budgets, Strategic Direction</td>
                  <td className="border px-4 py-2">Remove Roadblocks</td>
                  <td className="border px-4 py-2">Deck, Meetings, Email Updates, Updates from CCC Leadership SteerCo</td>
                  <td className="border px-4 py-2">Bi-Annual</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">USMA Oncology</td>
                  <td className="border px-4 py-2">USMA Strategy<br />MSLs<br />SEC<br />Strategy & Operations</td>
                  <td className="border px-4 py-2">Implementation and integration of CCC Strategy<br />Receive CCC updates</td>
                  <td className="border px-4 py-2">Implement objectives</td>
                  <td className="border px-4 py-2">Presentations and meetings on objectives</td>
                  <td className="border px-4 py-2">Program and team meetings<br />USMA SharePoint<br />Email<br />Instant Message</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">PST</td>
                  <td className="border px-4 py-2">Program Strategy Team (lead by PSTs)</td>
                  <td className="border px-4 py-2">Receive indication specific updates, study updates via SC<br />Provide feedback on strategies</td>
                  <td className="border px-4 py-2">Inform & Advise</td>
                  <td className="border px-4 py-2">Meetings</td>
                  <td className="border px-4 py-2">Quarterly / as needed</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">PAQ</td>
                  <td className="border px-4 py-2">Patient Assistance & Quality</td>
                  <td className="border px-4 py-2">Inform patients about PAQ, the services they provide and guide them through the application process</td>
                  <td className="border px-4 py-2">Help patients access medications and medical care they might otherwise be unable to afford</td>
                  <td className="border px-4 py-2">Team meetings</td>
                  <td className="border px-4 py-2">Team meetings<br />Email<br />Instant Message<br />SharePoint</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GPFIS</td>
                  <td className="border px-4 py-2">Global Patient Focused Implementation Sciences</td>
                  <td className="border px-4 py-2">Involving patients more actively in their care</td>
                  <td className="border px-4 py-2">Enhancing Communication<br />Encouraging Active Participation in Care<br />Providing Support and Resources and priorities</td>
                  <td className="border px-4 py-2">Team meetings</td>
                  <td className="border px-4 py-2">Team meetings<br />Email<br />Instant Message<br />SharePoint<br />Internet web page?</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">MM</td>
                  <td className="border px-4 py-2">Managed Markets</td>
                  <td className="border px-4 py-2">Receive Updates<br />Provide input per strategy, Implications for discussions with key external stakeholders</td>
                  <td className="border px-4 py-2">Commercial Partner that connects to key external markets of National Accts, medicare NPO, includes Key Account Director KADs. Also focuses on reimbursement</td>
                  <td className="border px-4 py-2">Slide Decks, Meetings, CCC Leadership SteerCo</td>
                  <td className="border px-4 py-2">Bi-Monthly Meetings<br />Email Updates<br />(Extended Team Quarterly, Project Team Monthly)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Field Team</td>
                  <td className="border px-4 py-2">KADs<br />MSLs<br />MVELs</td>
                  <td className="border px-4 py-2">Interact with external professionals to discuss CCC but must follow Community Cancer collective (CCC) Legal & Compliance Guidance (May 29, 2024)</td>
                  <td className="border px-4 py-2">Review of CCC partnering plans and visit with external professionals</td>
                  <td className="border px-4 py-2">Review/discuss published data and approved plans with external professionals</td>
                  <td className="border px-4 py-2">Team meetings<br />Email<br />Instant Message<br />SharePoint (MSLs)<br />Egnyto (MVELs)<br />P alert</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">RWE</td>
                  <td className="border px-4 py-2">RWE in Medical Development</td>
                  <td className="border px-4 py-2">Support PAQ studies, OPRB point of contact</td>
                  <td className="border px-4 py-2">Medical Development focused, supports HEOR Value & Access</td>
                  <td className="border px-4 py-2">Study Updates, Extended Team</td>
                  <td className="border px-4 py-2">Quarterly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">HEOR</td>
                  <td className="border px-4 py-2">HEOR in Commercial</td>
                  <td className="border px-4 py-2">Support PAQ studies, as needed</td>
                  <td className="border px-4 py-2">Value & Access</td>
                  <td className="border px-4 py-2">Study Updates, Extended Team</td>
                  <td className="border px-4 py-2">Quarterly</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">All Else</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                  <td className="border px-4 py-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CCCStakeholders;