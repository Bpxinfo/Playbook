import React, { useState } from 'react';

const stakeholderGroups = {
  cccInternal: {
    title: 'CCC Internal Groups',
    stakeholders: ['CCC Leadership SteerCo', 'CCC Core Team', 'CCC Extended Team', 'CCC Project Leads']
  },
  leadershipTeams: {
    title: 'Leadership Teams',
    stakeholders: ['Executive Leadership', 'USMA Oncology', 'PST']
  },
  functionalPartners: {
    title: 'Functional Partners',
    stakeholders: ['PAQ', 'GPFIS', 'MM', 'Field Team', 'RWE', 'HEOR']
  }
};

const stakeholderData = {
  'CCC Leadership SteerCo': {
    description: 'Definition of what SteerCo does. Functions included, what are their roles',
    deliverable: 'Provide guidance and endorsement of strategy, objectives, messaging\nReceive Updates',
    priority: 'Advise & Advocate\nProvide direction and objectives to be executed',
    method: 'Slide Decks, Meetings',
    channels: 'Bi-Monthly Meetings\nEmail Updates'
  },
  'CCC Core Team': {
    description: 'Advisors to the CCC',
    deliverable: 'Provide Input on Projects, Guidance, Guardrails',
    priority: 'Lead & Execute the CCC',
    method: 'Meetings, Discussion',
    channels: 'Bi-Weekly'
  },
  'CCC Extended Team': {
    description: 'Alignment across extended',
    deliverable: 'Provide / Receive Information Updates',
    priority: 'Informed & Consulted',
    method: 'Meetings, Email Updates',
    channels: 'Quarterly Meetings'
  },
  'CCC Project Leads': {
    description: 'USMA Strategy, Lead, SEC, PAQ, GPFIS, MM',
    deliverable: 'Provide Project Updates (milestones, risks, budget, spend, KPIs, Patient Impact data)',
    priority: 'Lead and Execute Projects',
    method: 'Meetings, Email Updates',
    channels: 'Monthly'
  },
  'Executive Leadership': {
    description: 'Michael (MALT)\nSandrine (SLT)\nJohanna',
    deliverable: 'Receive Updates, Approve Budgets, Strategic Direction',
    priority: 'Remove Roadblocks',
    method: 'Deck, Meetings, Email Updates, Updates from CCC Leadership SteerCo',
    channels: 'Bi-Annual'
  },
  'USMA Oncology': {
    description: 'USMA Strategy\nMSLs\nSEC\nStrategy & Operations',
    deliverable: 'Implementation and integration of CCC Strategy\nReceive CCC updates',
    priority: 'Implement objectives',
    method: 'Presentations and meetings on objectives',
    channels: 'Program and team meetings\nUSMA SharePoint\nEmail\nInstant Message'
  },
  'PST': {
    description: 'Program Strategy Team (lead by PSTs)',
    deliverable: 'Receive indication specific updates, study updates via SC\nProvide feedback on strategies',
    priority: 'Inform & Advise',
    method: 'Meetings',
    channels: 'Quarterly / as needed'
  },
  'PAQ': {
    description: 'Patient Assistance & Quality',
    deliverable: 'Inform patients about PAQ, the services they provide and guide them through the application process',
    priority: 'Help patients access medications and medical care they might otherwise be unable to afford',
    method: 'Team meetings',
    channels: 'Team meetings\nEmail\nInstant Message\nSharePoint'
  },
  'GPFIS': {
    description: 'Global Patient Focused Implementation Sciences',
    deliverable: 'Involving patients more actively in their care',
    priority: 'Enhancing Communication\nEncouraging Active Participation in Care\nProviding Support and Resources and priorities',
    method: 'Team meetings',
    channels: 'Team meetings\nEmail\nInstant Message\nSharePoint\nInternet web page?'
  },
  'MM': {
    description: 'Managed Markets',
    deliverable: 'Receive Updates\nProvide input per strategy, Implications for discussions with key external stakeholders',
    priority: 'Commercial Partner that connects to key external markets of National Accts, medicare NPO, includes Key Account Director KADs. Also focuses on reimbursement',
    method: 'Slide Decks, Meetings, CCC Leadership SteerCo',
    channels: 'Bi-Monthly Meetings\nEmail Updates\n(Extended Team Quarterly, Project Team Monthly)'
  },
  'Field Team': {
    description: 'KADs\nMSLs\nMVELs',
    deliverable: 'Interact with external professionals to discuss CCC but must follow Community Cancer Collective (CCC) Legal & Compliance Guidance (May 29, 2024)',
    priority: 'Review of CCC partnering plans and visit with external professionals',
    method: 'Review/discuss published data and approved plans with external professionals',
    channels: 'Team meetings\nEmail\nInstant Message\nSharePoint (MSLs)\nEgnyto (MVELs)'
  },
  'RWE': {
    description: 'RWE in Medical Development',
    deliverable: 'Support PAQ studies, OPRB point of contact',
    priority: 'Medical Development focused, supports HEOR Value & Access',
    method: 'Study Updates, Extended Team',
    channels: 'Quarterly'
  },
  'HEOR': {
    description: 'HEOR in Commercial',
    deliverable: 'Support PAQ studies, as needed',
    priority: 'Value & Access',
    method: 'Study Updates, Extended Team',
    channels: 'Quarterly'
  }
};

const CCCStakeholders = () => {
  const [selectedGroup, setSelectedGroup] = useState('cccInternal');

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">CCC Stakeholders</h1>

      {/* Group Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {Object.entries(stakeholderGroups).map(([groupKey, group]) => (
          <button
            key={groupKey}
            onClick={() => handleGroupClick(groupKey)}
            className={`p-4 rounded-lg shadow-md transition-all ${
              selectedGroup === groupKey
                ? 'bg-red-800 text-white'
                : 'bg-white text-gray-900 hover:bg-gray-50'
            }`}
          >
            <h3 className="text-lg font-medium mb-2">{group.title}</h3>
            <p className="text-sm opacity-75">{group.stakeholders.length} stakeholders</p>
          </button>
        ))}
      </div>

      {/* Stakeholder Details Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl text-red-800 mb-4">{stakeholderGroups[selectedGroup].title}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">CCC Groups</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Description</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Deliverable [Receive / Provide]</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Priority</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Method Communication</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Communication Channels</th>
              </tr>
            </thead>
            <tbody>
              {stakeholderGroups[selectedGroup].stakeholders.map((stakeholder) => (
                <tr key={stakeholder} className="hover:bg-gray-50 dark:hover:bg-transparent">
                  <td className="border px-4 py-2 font-medium">{stakeholder}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{stakeholderData[stakeholder].description}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{stakeholderData[stakeholder].deliverable}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{stakeholderData[stakeholder].priority}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{stakeholderData[stakeholder].method}</td>
                  <td className="border px-4 py-2 whitespace-pre-line">{stakeholderData[stakeholder].channels}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CCCStakeholders;