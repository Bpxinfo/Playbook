import React from 'react';
import partnerSelection from '../../assets/partner-selection.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const ProjectTypes = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Project Types</h1>
        
        <div className="space-y-6">
          {/* CCC Project Types Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Project Types (SOP 13096)</h2>
            
            {/* Collaborative Studies Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Collaborative Studies (GRC / LRC)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Objective / Overview</h4>
                <p className="mb-4">Per SOP-13096</p>
                <p className="mb-4">
                  Collaborative Research: Research where an independent external investigator, institution, collaborative study group, other pharmaceutical company, or government organization is the Study Sponsor ("Sponsor"), and the Sponsor is responsible and accountable for the regulatory activities and the conduct of the study. Gilead provides investigational/approved product and/or funding and does one or more of the following:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Collaborates with the Sponsor in the study design, study conduct, study analysis and report development, or publications.</li>
                  <li>Provides the Sponsor with access to data and/or biological samples from previous GSR trials.</li>
                  <li>Intends to use the data resulting from this research as part of a Gilead regulatory submission.</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Note:</p>
                  <ul className="list-disc pl-6">
                    <li>Collaborative research may be initiated by Gilead or the Sponsor.</li>
                    <li>Collaborative study proposals are reviewed and approved by the GRC where required, and protocols are reviewed and approved by the appropriate Protocol Review Board.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ISR Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Investigator Sponsored Research (ISR)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Objective / Overview</h4>
                <p className="mb-4">
                  ISR: IRC is responsible for the review and approval of investigator-sponsored research proposals (i.e., non-GSR, non-collaborative). These proposals can include Gilead or non-Gilead products, may be disease-focused, may be interventional or non-interventional, and may collect primary data or make use of secondary data collected for other purposes.
                </p>
                <p className="mb-4">
                  An ISR study involving a Gilead product can only be initiated after regulatory approval of that Gilead product in the country where the external sponsor is located.
                </p>
                <p className="mb-4">
                  For all ISRs, the responsibility for the regulatory sponsor requirements, including the design, conduct, analysis, and publication of the study lays not with Gilead, but with the investigator or the investigator's institution.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="font-medium mb-2">After review of the ISR proposal, the submission should either be rejected or accepted with no changes requested. If the proposal is approved by the IRC, Gilead's role is limited to:</p>
                  <ul className="list-disc pl-6">
                    <li>Providing study drug and/or funding</li>
                    <li>Monitoring the progress of the study and publications</li>
                    <li>Protocol check by Global Medical Affairs and Patient Safety</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">GMA and Patient Safety may comment on major concerns related to patient safety to ensure:</p>
                  <ul className="list-disc pl-6">
                    <li>The protocol aligns with the proposal study design and medication dosing that was approved at IRC.</li>
                    <li>Minimum safety requirements are aligned to the standards defined per US Package Insert and Investigator Brochure/guidance documents.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GRC/LRC Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Global Review Committee (GRC) / Local Review Committee (LRC)</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-4">(GRC/LRC) – primarily for generating evidence.</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-medium mb-2">Prospectives (GRC)</h4>
                    <ul className="list-disc pl-6">
                      <li>FLOW Diagram</li>
                      <li>Additional Governance (e.g. OPRB)</li>
                      <li>Expected Timeline</li>
                      <li>Involved Roles</li>
                      <li>Project</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow">
                    <h4 className="font-medium mb-2">Retrospectives (LRC)</h4>
                    <ul className="list-disc pl-6">
                      <li>FLOW Diagram</li>
                      <li>Additional Governance (e.g. OPRB)</li>
                      <li>Expected Timeline</li>
                      <li>Identify Journey, Experience</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-medium mb-2">CCC Additional Information</h4>
                  <ul className="list-disc pl-6">
                    <li>CCC fits Within Current Evidence Gen Processes</li>
                    <li>CCC Adjudication Committee</li>
                    <li>Site Selection - CCC Partner Objective criteria</li>
                    <li>Ensuring sufficient data, clinical infrastructure to support these studies</li>
                    <li>MVELs/KADs (Key Account Director) have discussion with their sites</li>
                    <li>RFP Program via GOptics, posted on AskGilead.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Existing Partner Selection Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Partner Selection Process</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={partnerSelection} 
                alt="Partner Selection Process" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Partner Selection Overview</p>
            </div>
          </section>

          {/* Data Collection Types */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Data Collection Types</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Prospective Data Collection</h3>
                <p>Governance: GRC LINK</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-red-700 mb-3">Retrospective Data Collection</h3>
                <p>Governance: LRC LINK</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Other</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Decision</h4>
                  <p>Adjudication Committee</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">LinkS</h4>
                  <ul className="list-disc pl-6">
                    <li>LINK TO COMPLIANCE</li>
                    <li>LINK TO GOVERNANCE</li>
                    <li>LINK to SOP LIST</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Fee For Service Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Fee For Service</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Individual Service Projects</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="italic text-gray-600">[Pending official description from Sabrina]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sponsorships Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Sponsorships</h2>
            
            {/* Medical Sponsorships */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Medical</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>Medical Sponsorships through Grants Portal (Normal path for CCC)</p>
                  <p>Medical Sponsorships {'->'} USMA (SEC - Michelle Brockman&apos;s group) {'->'} Approval {'->'} Legal / Compliance Review</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Steeprock Submission Process</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                  <p className="mt-2">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>

            {/* Corporate Sponsorships */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Corporate Sponsorships</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>Corporate Sponsorships {'->'} outside of CCC&apos;s purview</p>
                  <p className="italic text-gray-600">[Pending official description]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p>[To be added]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Steeprock Submission Process</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                  <p className="mt-2">Guidance: LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>
          </section>

          {/* Grants Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Grants</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-red-700 mb-3">General</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p className="italic text-gray-600">[Pending official description]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p className="italic text-gray-600">[Please add examples for this]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINKs to COMPLIANCE, GOVERNANCE, SOPs</p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>FRM-04327 Grant Approval Form (GAF)</li>
                    <li>FRM-07237 Notification of Acceptance of Grant Funding Request</li>
                    <li>FRM-07649 Educational Grant Letter</li>
                  </ul>
                  <p className="mt-2 italic">[INSERT LINKS FROM PROCESS, GOV, COMPLIANCE section]</p>
                </div>
              </div>
            </div>

            {/* iMed Activities */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">iMed Activities</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Description</h4>
                  <p>IMed activities (not supported through CCC, separate process, NEED LINK to redirect to)</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Examples</h4>
                  <p className="italic text-gray-600">[Please add examples for this]</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Guidance</h4>
                  <p>LINK: SYSTEMS {'->'} STEEPROCK</p>
                </div>
              </div>
            </div>
          </section>

          {/* Miscellaneous Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Miscellaneous</h2>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-red-700 mb-3">Project Qualification Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Conversation with CCC Lead</h4>
                  <p>Project Funnel Criteria (link from above)</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Qualified CCC Concepts [ISR/Collaborative Studies, Aligned with CCC Criteria]</h4>
                  <ol className="list-decimal pl-6">
                    <li>Describe how the project aligns with the CCC Pillars</li>
                    <li>Describe how the partner fits with the CCC Selection Criteria</li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Process</h4>
                  <p>Submission to CCC Adjudication Committee</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProjectTypes;
