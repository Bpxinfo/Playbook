import React from 'react';

const InternalPlatforms = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Systems / Internal Platforms
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">CCC Internal Platforms</h1>

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
                system: 'GVault',
                contact: 'Lauren Crane, Deborah Ablordeppey',
                process: 'CCC Processes',
                governance: ''
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

        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.1 GRC (Global Review Committee)</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">How do I submit to the GRC?</h3>
              <div className="space-y-2">
                <p><span className="font-medium">SYSTEM:</span></p>
                <ul className="list-disc pl-6">
                  <li>Submission Portal: GOptics</li>
                  <li>SharePoint</li>
                </ul>
              </div>
            </div>
            <div>
              <p><span className="font-medium">LINK to Governance:</span> Global Review Committee – prospective studies</p>
            </div>
            <div>
              <p><span className="font-medium">Contact Info:</span> Shannon Dervin, Sr Dir GMA, GRC chair</p>
            </div>
          </div>
        </div>

        {/* LRC Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.2 LRC (Local Review Committee)</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">How do I submit to the LRC?</h3>
              <div className="space-y-2">
                <p><span className="font-medium">SYSTEM:</span></p>
                <ul className="list-disc pl-6">
                  <li>Submission Portal: GOptics</li>
                  <li>SharePoint</li>
                </ul>
              </div>
            </div>
            <div>
              <p><span className="font-medium">LINK to Governance:</span> Local Review Committee – retrospective studies</p>
            </div>
            <div>
              <p><span className="font-medium">Contact Info:</span></p>
              <ul className="list-disc pl-6">
                <li>Roy Koruth – LRC Chair</li>
                <li>EunYoung Lee – Point of Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* GVault Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.3 GVault</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">What is GVault?</h3>
              <p>Gilead Document <strong>Veeva Vault</strong>: Enterprise-wide quality document management system.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What does this do for the CCC?</h3>
              <p>It provides the central location for all SOPs, guidance documents.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I access?</h3>
              <p className="break-all">LINK: https://login.veevavault.com/auth/login?retURL=https%3A%2F%2Fgvault.veevavault.com/ui/%23t/0TB000000000101/workflows</p>
            </div>
          </div>
        </div>

        {/* GOptics Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.4 GOptics</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">What is GOptics?</h3>
              <p><strong>GOptics</strong> is a Medical Affairs system based on the Appian Platform for tracking Study Concepts, Protocols.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What does this do for the CCC?</h3>
              <p>Captures ISR & Collaborative Study Proposals / Concepts, Protocols</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I access?</h3>
              <p>LINK: gileadmedicalaffairs.appiancloud.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Point of Contact:</h3>
              <ul className="list-disc pl-6">
                <li>GRC: Marina</li>
                <li>LRC: EunYoung Lee</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SteepRock Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.5 SteepRock</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">What is SteepRock?</h3>
              <p>SteepRock is a Medical Affairs system for applying for grants and sponsorships.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What does this do for the CCC?</h3>
              <p>IMED and sponsorships portal</p>
              <p>Routes to different functions:</p>
              <ul className="list-disc pl-6">
                <li>Corporate giving</li>
                <li>iMed team</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I access?</h3>
              <p>Grants & Sponsorship Portal LINK</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Point of Contact:</h3>
              <ul className="list-disc pl-6">
                <li>Heidi Britton (Gilead)</li>
                <li>&lt;generic email for SteepRock&gt;</li>
              </ul>
            </div>
          </div>
        </div>

        {/* APTTUS Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.6 APTTUS</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">What is GQPMS -Apttus?</h3>
              <p>APTTUS is the Salesforce SaaS platform for managing contracts and their lifecycle.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What does this do for the CCC?</h3>
              <p>It provides a repository for Gilead Contracts as well as full contract lifecycle support for selected contract. Provides source of information for invoices submitted for approval, payment. Milestones from contracts need to be laid out with clear definitions of done, timing and payment amounts. These milestones serve as the basis for invoices to be reviewed and approved by Project Leads.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I access?</h3>
              <p>LINK: Request Access</p>
              <p className="mt-2">(Gilead Quote and Proposal Management System) – CLMS System is the Out of the Box Apttus CLM hosted on the GFORCE (Salesforce) SaaS environment to be accessible by clients for managing contracts and its lifecycle.</p>
              <p className="mt-2">GQPMS – Apttus types.</p>
            </div>
            <div>
              <p><span className="font-medium">Reference:</span> KB0021450</p>
            </div>
          </div>
        </div>

        {/* GILDA Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.7 GILDA</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <div>
              <h3 className="font-semibold mb-2">What is GILDA?</h3>
              <p>Gilead's Clinical Trial Management System. GILDA is used globally to record clinical study information, track clinical study progress, and process payments to clinical sites.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What does this do for the CCC?</h3>
              <p>Captures CCC Studies, which are a majority of CCC Projects. Also includes some study milestones.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">How do I access?</h3>
              <p className="break-all">LINK: https://sparc.service-now.com/services?id=kb_article&sys_id=fd9becdb1bbfc65ce3a899ffbd4bcbbf</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Target Audience</h3>
              <p>If you are unsure of which application to request access for, review the following questions:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Do you need to enter or update information like sites, contacts, and accounts?</li>
                <li>Will you be updating any information in GILDA system?</li>
                <li>Do you need read-only access to front end information?</li>
              </ul>
              <p className="mt-2">Access to the GILDA <strong>System</strong> is mostly for individuals who will be entering/editing data and only granted after completing training. The GILDA <strong>Clinical Dashboard</strong> is updated nightly and shows all the same information from GILDA, but in an easier view format.</p>
            </div>
          </div>
        </div>

        {/* JIRA Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.8 JIRA: COMMUNITY_CANCER_COLLECTIVE</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-4 text-black">
            <p>CCC PROJECT ROADMAP</p>
            <ul className="list-disc pl-6">
              <li>&lt;LINK TO JIRA RULES DOC à post in CCC TEAMS Space&gt;</li>
              <li>&lt;LINK TO Gilead JIRA Space&gt;</li>
            </ul>
            <p><span className="font-medium">How to Request Access:</span> &lt;LINK TO IDM&gt;</p>
          </div>
        </div>

        {/* CCC Dashboard Section */}
        <div>
          <h2 className="text-xl font-semibold text-red-800 mb-4">1.9 CCC Dashboard</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 text-black">
            <p>&lt;LINK TO POWER APPS DASHBOARD&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalPlatforms;