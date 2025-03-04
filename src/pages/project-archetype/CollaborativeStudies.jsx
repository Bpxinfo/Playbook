import React from 'react';
import partnerSelection from '../../assets/partner-selection.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const CollaborativeStudies = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Collaborative Studies</h1>
        
        <div className="space-y-6">
          {/* Collaborative Studies Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Collaborative Studies (GRC / LRC)</h2>
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
          </section>

          {/* GRC/LRC Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
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
          </section>

          {/* Partner Selection Section */}
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
        </div>
      </div>
    </div>
  );
};

export default CollaborativeStudies; 