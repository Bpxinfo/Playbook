import React from 'react';

const CommunicationChannels = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Communication Channels</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">CCC Communication Channels</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-gray-700 border-collapse border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left">Channel</th>
                  <th className="border px-4 py-2 text-left">Inputs (What People Need)</th>
                  <th className="border px-4 py-2 text-left">Outputs (What People Give)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">CCC Core Team Monthly Meeting</td>
                  <td className="border px-4 py-2">Project Updates, Project Issues, Guidance</td>
                  <td className="border px-4 py-2">ADVISE: Cross-Functional Guidance, Governance, Project Issue Guidance, Counsel</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Extended Team Quarterly Meeting</td>
                  <td className="border px-4 py-2">INFORM: Functional Requests, Project Spotlights</td>
                  <td className="border px-4 py-2">Guidance, Advice, Functional Updates</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Management Committee Biweekly Meeting</td>
                  <td className="border px-4 py-2">Project Proposals, Ideas, Concepts, Amendments</td>
                  <td className="border px-4 py-2">ADVISE, DECIDE: Project Decisions Path for Approval/Governance, Legal / Compliance Guidance</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Workshops Ad Hoc</td>
                  <td className="border px-4 py-2">Areas of need / issues / concern / opportunities</td>
                  <td className="border px-4 py-2">Methods / processes / work streams to mitigate issues / concern / opportunities</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Dashboard (PowerApps)</td>
                  <td className="border px-4 py-2">CCC Roadmap, Project Updates, CCC Budget<br />Project Lead Input (Risks, Issues, Milestones, Costs)</td>
                  <td className="border px-4 py-2">Leadership View, Specific Project View, Portfolio View</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Roadmap (JIRA)</td>
                  <td className="border px-4 py-2">Proposed / Approved Projects, Milestones, Updates, Financial Updates (Actuals/Budget)</td>
                  <td className="border px-4 py-2">Gilead Leadership – Slide Updates<br />Excel Format for Project Team Inputs<br />JIRA for core team editing</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Newsletter</td>
                  <td className="border px-4 py-2">Portfolio Updates, Project Spotlights, Patient and Cross Functional Series, Cross Functional Initiative Collaboration, 'Me Drop' updates</td>
                  <td className="border px-4 py-2">INFORM: Formal communication that provides cross-functional internal / external updates</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Hub SharePoint/Teams</td>
                  <td className="border px-4 py-2">Links (Playbook, Dashboard, Jira, etc), Content Spotlights (see Communication Streams)</td>
                  <td className="border px-4 py-2">INFORM: Serves as the information backbone for CCC, includes documentation and decisions</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">CCC Playbook</td>
                  <td className="border px-4 py-2">Cross Functional Input, Onboarding, Communications, Project Archetypes, Processes, Governance, Compliance</td>
                  <td className="border px-4 py-2">ADVISE, INFORM: Strategic guidance for oversight, involvement and execution of the CCC Initiative</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Executive Level Presentation</td>
                  <td className="border px-4 py-2">INFORM: Updates (Budget, Projects, Initiatives), Request for updates and guidance at that level</td>
                  <td className="border px-4 py-2">DECIDE / ADVISE: Budget, Strategic Alignment (e.g. SLT, MALT)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Internal Roadshow</td>
                  <td className="border px-4 py-2">CCC Framework and Initiatives, Request for input, success stories</td>
                  <td className="border px-4 py-2">ADVISE, INFORM: Update and inform general internal audience, increase engagement across organization</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Project Proposal Path (CCC LEAD)</td>
                  <td className="border px-4 py-2">What: Project Design<br />Where: Target Community Hospitals<br />Who: Internal Support Team, HCPs<br />When: Milestones<br />How Much: Budget</td>
                  <td className="border px-4 py-2">Concepts, Proposals for review, rating for adjudication</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunicationChannels;