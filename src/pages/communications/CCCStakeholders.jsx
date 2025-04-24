import React, { useState } from 'react';

const stakeholderGroups = {
  cccInternal: {
    title: 'CCC Team - Core, Extended, Project Leads',
    stakeholders: ['CCC Core Team', 'CCC Extended Team', 'CCC Project Leads']
  },
  leadershipTeams: {
    title: 'Leadership Teams',
    stakeholders: ['Executive Leadership', 'USMA Oncology LT', 'CCC Leadership SteerCo']
  },
  functionalPartners: {
    title: 'Functional Partners',
    stakeholders: ['PAQ', 'GPFIS', 'Managed Markets', 'Field Team', 'RWE', 'HEOR']
  }
};

const stakeholderData = {
  'CCC Leadership SteerCo': {
    description: 'Advise & Advocate',
    deliverable: 'Provide guidance and endorsement of strategy, \nobjectives, \nand key CCC messaging\nReceive regular updates regarding critical CCC Initiatives',
    priority: 'Provide direction and objectives to be executed',
    method: 'Slide Decks, Meetings, Email',
    channels: 'Bi-Monthly Meetings\n As needed'
  },
  'CCC Core Team': {
    description: 'Lead & Execute',
    deliverable: 'Provide input on projects, guidance, guardrails',
    priority: 'Advisors to the CCC',
    method: 'Meetings, Discussion',
    channels: 'Bi-Weekly'
  },
  'CCC Extended Team': {
    description: 'Informed & Consulted',
    deliverable: 'Provide / receive information updates',
    priority: 'Alignment across extended functions',
    method: 'Meetings, Email',
    channels: 'Quarterly Meetings'
  },
  'CCC Project Leads': {
    description: 'Lead and execute CCC projects',
    deliverable: 'Provide project updates (milestones, risks, budget, spend, KPIs, patient impact data)',
    priority: 'USMA Strategy, SEC, PAQ, PFIS, Managed Markets',
    method: 'Meetings, Email',
    channels: 'Monthly'
  },
  'Executive Leadership': {
    description: 'CCC reports to: Michael (MALT)\nSandrine (SLT)\nJohanna',
    deliverable: 'Receive Updates, Approve Budgets, Strategic Direction',
    priority: 'Remove Roadblocks',
    method: 'Deck, Meetings, Email Updates, Updates from CCC Leadership SteerCo',
    channels: 'Bi-Annual'
  },
  'USMA Oncology LT': {
    description: 'Functions include: USMA Strategy, MSL, SEC, PAQ',
    deliverable: 'Implementation and integration of CCC Strategy\nReceive CCC updates',
    priority: 'Implement objectives',
    method: 'Presentations and meetings on objectives\nUSMA SharePoint\nEmail\nInstant Message',
    channels: 'Program and team meetings'
  },
  'Leadership SteerCo': {
    description: 'Program Strategy Team',
    deliverable: 'Receive indication specific updates, study updates via SC\nProvide feedback on strategies',
    priority: 'Inform & Advise',
    method: 'Meetings',
    channels: 'Quarterly / as needed'
  },
  'PAQ': {
    description: 'Patient Assistance & Quality',
    deliverable: 'Inform patients about PAQ, the services they provide and guide them through the application process',
    priority: 'Help patients access medications and medical care they might otherwise be unable to afford',
    method: 'Team meetings\nEmail\nInstant Message\nSharePoint',
    channels: 'Team meetings'
  },
  'GPFIS': {
    description: 'Global Patient Focused Implementation Sciences',
    deliverable: 'Involving patients more actively in their care',
    priority: 'Enhancing Communication\nEncouraging Active Participation in Care\nProviding Support and Resources and priorities',
    method: 'Team meetings\nEmail\nInstant Message\nSharePoint',
    channels: 'Team meetings'
  },
  'Managed Markets': {
    description: 'Managed Markets',
    deliverable: 'Receive Updates\nProvide input per strategy, Implications for discussions with key external stakeholders',
    priority: 'Commercial Partner that connects to key external markets of National Accts, medicare NPO, includes Key Account Director KADs. Also focuses on reimbursement',
    method: 'Slide Decks, Meetings, CCC Leadership SteerCo\nEmail Updates\n(Extended Team Quarterly, Project Team Monthly)',
    channels: 'Bi-Monthly Meetings'
  },
  'Field Team': {
    description: 'KADs\nMSLs\nMKALs',
    deliverable: 'Interact with external professionals to discuss CCC but must follow Community Cancer Collective (CCC) Legal & Compliance Guidance',
    priority: 'Review of CCC partnering plans and visit with external professionals\nReview/discuss published data and approved plans with external professionals',
    method: 'Email\nInstant Message\nSharePoint (MSLs)\nEgnyto (MKALs)',
    channels: 'Team meetings'
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
    deliverable: 'Support PAQ studies',
    priority: 'Value & Access',
    method: 'Study Updates, Extended Team',
    channels: 'Quarterly, as needed'
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
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Channels</th>
                <th className="border px-4 py-2 text-left font-medium text-gray-900 dark:text-gray-900">Cadence</th>
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