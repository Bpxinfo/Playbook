import React from 'react';

const DigitalSystems = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Systems / Digital Systems
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">CCC Digital Systems</h1>

      <div className="max-w-6xl">
        {/* Main Systems Table */}
        <div className="mb-12">
          <div className="grid grid-cols-3 bg-gray-100 p-4 font-semibold text-gray-700 rounded-t-lg">
            <div>Contact</div>
            <div>Process</div>
            <div>Governance</div>
          </div>
          
          <div className="bg-white shadow-lg rounded-b-lg">
            {[
              {
                system: 'GRC',
                contact: 'Shannon Dervin, Sr Dir GMA, GRC Chair\nContact = Emma Lee',
                process: '',
                governance: 'GRC'
              },
              {
                system: 'LRC',
                contact: 'Emma Lee, ED, PAQ, and co-LRC chair.',
                process: '',
                governance: 'Implement objectives'
              },
              {
                system: 'G360 (Veeva)',
                contact: 'Jen Prokes (Lead)\n(Gene Felber = Acct planning)',
                process: 'Field Planning',
                governance: 'Jen Prokes (Main Point)'
              },
              {
                system: 'GOptics (Appian)',
                contact: 'Janet Fobes',
                process: 'ISR Collaboration Platform → Study Concepts, Protocols',
                governance: ''
              },
              {
                system: 'GILDA',
                contact: 'TBD',
                process: 'TBD',
                governance: 'TBD'
              },
              {
                system: 'SteepRock',
                contact: 'TBD',
                process: 'PORTAL: Grants [IMED (SP?)] Sponsorships',
                governance: 'Grants & Sponsorship Portal'
              },
              {
                system: 'Aptus',
                contact: 'TBD',
                process: 'Work Orders → POs',
                governance: ''
              },
              {
                system: 'IT Questionnaire',
                contact: 'TBD',
                process: 'TBD',
                governance: ''
              },
              {
                system: 'GCAT',
                contact: 'TBD',
                process: 'Vendor Onboarding, contract sign off',
                governance: ''
              },
              {
                system: 'Fieldglass (SAP)',
                contact: 'TBD',
                process: 'Invoice Approvals',
                governance: ''
              },
              {
                system: 'Kelly Services',
                contact: 'TBD',
                process: 'Vendor Onboarding for Gilead',
                governance: ''
              },
              {
                system: 'Jira (Atlassian)',
                contact: 'TBD from Sabrina',
                process: '',
                governance: ''
              },
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-3 border-b p-4 hover:bg-gray-50">
                <div>
                  <div className="font-semibold text-blue-800">{item.system}</div>
                  <div className="whitespace-pre-line text-gray-700">{item.contact}</div>
                </div>
                <div className="text-gray-700">{item.process}</div>
                <div className="text-gray-700">{item.governance}</div>
              </div>
            ))}
          </div>
        </div>

        {/* GOptics Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">1.1 GOptics</h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Janet Fobes, Sr Assc, MAR</li>
            <li>Anyone else that we should contact? Who provides the tech support? Is that Jen Proke's team?</li>
            <li>Appian Platform → gileadmedicalaffairs.appiancloud.com</li>
            <li>ISR Collaborative Platform → Study Concepts, Protocols</li>
          </ul>
        </div>

        {/* SteepRock Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">1.2 SteepRock</h2>
          <div className="text-gray-700">
            <p>RFP Program via GOptics, posted on http://gilead.com/</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>IMED and sponsorships portal?</li>
              <li>Grants & Sponsorship Portal</li>
              <li>Routes to different functions (corporate giving, imet team, michelle brockman (med affairs, sponsorships)</li>
            </ul>
          </div>
        </div>

        {/* Gilda Section */}
        <div>
          <h2 className="text-xl font-semibold text-blue-800 mb-4">1.3 Gilda</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>ClinOps</li>
            <li>CCC Studies,</li>
            <li>Study Milestones</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DigitalSystems;