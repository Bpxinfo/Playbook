import React from 'react';
import partnerSelection from '../../assets/partner-selection.jpg'
const CCCProjectTypes = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      {/* Page Title */}
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">CCC Project Types (use SOP 13096)</h1>

      {/* Collaborative Studies (GRC / LRC) */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">Collaborative Studies (GRC / LRC)</h2>
        <p className="text-gray-700 mb-4">Objective / Overview</p>

        <p className="text-gray-700 mb-4">Collaborative Studies </p>
        <p className="text-gray-700 mb-4">Per SOP-13096 (LINK)</p>

        <p className="text-gray-700 mb-4">
          Collaborative Research: Research where an independent external investigator, institution,
          collaborative study group, other pharmaceutical company, or government organization is the
          Study Sponsor (“Sponsor”), and the Sponsor is responsible and 
          accountable for the regulatory activities and the conduct of the study. Gilead provides
          investigational/approved product and/or funding and does one or more of the following:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Collaborates with the Sponsor in the study design, study conduct, study analysis and report development, or publications.</li>
          <li>Provides the Sponsor with access to data and/or biological samples from previous GSR trials.</li>
          <li>Intends to use the data resulting from this research as part of a Gilead regulatory submission.</li>
        </ul>

        <p className="text-gray-700 mb-2">Note:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Collaborative research may be initiated by Gilead or the Sponsor.</li>
          <li>Collaborative study proposals are reviewed and approved by the GRC where required, and protocols are reviewed and approved by the appropriate Protocol Review Board.</li>
        </ul>
      </section>

      {/* Investigator Sponsored Research (ISR) */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">Investigator Sponsored Research (ISR)</h2>
        <p className="text-gray-700 mb-4">Objective / Overview</p>

        <p className="text-gray-700 mb-4">
          ISR: IRC is responsible for the review and approval of investigator-sponsored research
          proposals (i.e., non-GSR, non-collaborative). These proposals can include Gilead or
          non-Gilead products, may be disease-focused, may be interventional or non-interventional,
          and may collect primary data or make use of secondary data collected for other purposes.
        </p>
        <p className="text-gray-700 mb-4">
          An ISR study involving a Gilead product can only be initiated after regulatory approval
          of that Gilead product in the country where the external sponsor is located.
        </p>
        <p className="text-gray-700 mb-4">
          For all ISRs, the responsibility for the regulatory sponsor requirements, including the
          design, conduct, analysis, and publication of the study lays not with Gilead, but with
          the investigator or the investigator's institution.
        </p>

        <p className="text-gray-700 mb-2">
          After review of the ISR proposal, the submission should either be rejected or accepted
          with no changes requested. If the proposal is approved by the IRC, Gilead's role is
          limited to:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Providing study drug and/or funding</li>
          <li>Monitoring the progress of the study and publications</li>
          <li>Protocol check by Global Medical Affairs and Patient Safety</li>
        </ul>

        <p className="text-gray-700 mb-2">
          GMA and Patient Safety may comment on major concerns related to patient safety to ensure:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>The protocol aligns with the proposal study design and medication dosing that was approved at IRC.</li>
          <li>Minimum safety requirements are aligned to the standards defined per US Package Insert and Investigator Brochure/guidance documents.</li>
        </ul>
      </section>

      {/* Global Review Committee / Local review committee */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">
          Global Review Committee (GRC) / Local review committee (LRC)
        </h2>
        <p className="text-gray-700 mb-4">(GRC/LRC) – primarily for generating evidence.</p>

        <p className="text-gray-700 mb-2">Prospectives (GRC)</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>FLOW Diagram</li>
          <li>Additional Governance (e.g. OPRB)  [Thom – please reach out to Debbie]</li>
          <li>Expected Timeline</li>
          <li>Involved Roles</li>
          <li>Project</li>
        </ul>

        <p className="text-gray-700 mb-2">Retrospectives (LRC)</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>FLOW Diagram</li>
          <li>Additional Governance (e.g. OPRB)</li>
          <li>Expected Timeline</li>
        </ul>

        <p className="text-gray-700 mb-4">Identify Journey, Experience</p>
        <p className="text-gray-700 mb-4">CCC fits Within Current Evidence Gen Processes</p>
      </section>

      {/* Combined Section: CCC Adjudication Committee, Site Selection, and RFP Program */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">CCC Adjudication Committee</h2>
        <p className="text-gray-700 mb-4">
            [CROSS LINK TO ADJUDICATION COMMITTEE IN PROCESSES, GOVERNANCE, COMPLIANCE]
        </p>

        <h2 className="text-2xl text-red-800 mb-4">Site Selection - CCC Partner Objective criteria</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Ensuring sufficient data, clinical infrastructure to support these studies</li>
            <li>MVELs/KADs (Key Account Director) have discussion with their sites </li>
        </ul>

        <h2 className="text-2xl text-red-800 mb-4">
            RFP Program via GOptics, posted on AskGilead.com
        </h2>
        <p className="text-gray-700 mb-4">&lt;LINK TO PROCESS SECTION&gt;</p>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="mb-8">
              <img 
                src={partnerSelection} 
                alt="Project Types" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Project Selection Criteria</p>
            </div>
          </div>
        </section>

    </div>
  );
};

export default CCCProjectTypes;
