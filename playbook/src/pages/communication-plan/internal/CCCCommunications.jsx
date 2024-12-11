import React from 'react';

const CommunicationChannels = () => {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-red-800 mb-8">Table 2 – CCC Communication Channels</h1>

      <div className="max-w-6xl">
        <table className="table-auto w-full text-gray-700 border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Channel</th>
              <th className="border px-4 py-2 text-left">Input</th>
              <th className="border px-4 py-2 text-left">Output</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">CCC Core Team Meeting</td>
              <td className="border px-4 py-2">Project Updates</td>
              <td className="border px-4 py-2">Decisions and Directions</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Extended Team Meeting</td>
              <td className="border px-4 py-2">Functional Requests</td>
              <td className="border px-4 py-2">Guidelines</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Workshops</td>
              <td className="border px-4 py-2">Identify an area of need/concern</td>
              <td className="border px-4 py-2">Identify methods to mitigate the concern</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Dashboard</td>
              <td className="border px-4 py-2">
                CCC Roadmap, CCC Budget,<br />
                Project Lead Input (Risks, Issues, Milestones)
              </td>
              <td className="border px-4 py-2">JIRA for core team editing</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Roadmap</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>Proposed Projects</li>
                  <li>Project Milestones</li>
                  <li>Project Lead Updates</li>
                  <li>Financial Updates</li>
                </ul>
              </td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>Gilead Leadership – Slide Updates</li>
                  <li>Excel Format for Project Team Inputs</li>
                  <li>JIRA for core team editing</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Governance</td>
              <td className="border px-4 py-2">Project Proposals, Guidance, Oversight, Control</td>
              <td className="border px-4 py-2">
                Ensuring that the project stays on track, meets its objectives, and delivers value<br />
                Community Cancer Collective (CCC) Legal & Compliance Guidance
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC Newsletter</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>Portfolio Updates</li>
                  <li>CCC Project Spotlights</li>
                  <li>Patient Impact Interviews</li>
                </ul>
              </td>
              <td className="border px-4 py-2">Formal communication that provides updates.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">CCC SharePoint Hub</td>
              <td className="border px-4 py-2">Playbook, Content Spotlights (see Communication Streams)</td>
              <td className="border px-4 py-2">Holds CCC documentation and decisions.</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Executive Level Presentation</td>
              <td className="border px-4 py-2">Budget Updates, Project Updates, Initiative Updates</td>
              <td className="border px-4 py-2">
                <ul className="list-disc pl-4">
                  <li>Sandrine’s LT (SLT)</li>
                  <li>USMA LT</li>
                  <li>Town Hall Presentation</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Functional Meetings</td>
              <td className="border px-4 py-2">
                Relevant CCC Intro Content, CCC Playbook, Project Updates, RFPs
              </td>
              <td className="border px-4 py-2">Onboarding, Functional Engagement</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Cross Functional Roadshow</td>
              <td className="border px-4 py-2">
                CCC Mission, Stakeholders, Project Updates, Request needed for success
              </td>
              <td className="border px-4 py-2">Update and Inform</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Project Proposal Path</td>
              <td className="border px-4 py-2">
                What: Project Design<br />
                Where: Target Community Hospitals<br />
                Who: Internal Support Team, HCPs<br />
                When: Milestones<br />
                How Much: Budget
              </td>
              <td className="border px-4 py-2">Project RFPs for review, approval</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Publications</td>
              <td className="border px-4 py-2">Development of major discoveries and innovation</td>
              <td className="border px-4 py-2">Distribution of discoveries</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2">Communications</td>
              <td className="border px-4 py-2">Communications</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunicationChannels;
