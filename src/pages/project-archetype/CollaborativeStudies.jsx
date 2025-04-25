import React from 'react';
import { Link } from 'react-router-dom';
import partnerSelection from '../../assets/partner-selection.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const CollaborativeStudies = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Collaborative Studies</h1>
        
        <div className="space-y-6">
          {/* Collaborative Studies Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Collaborative Studies (Governed by GRC / LRC)</h2>
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              <h4 className="font-medium mb-2 text-black">Objective / Overview</h4>
              <p className="mb-4 text-black">Per SOP-13096</p>
              <p className="mb-4 text-black">
                Collaborative Research: Research where an independent external investigator, institution, collaborative study group, other pharmaceutical company, or government organization is the Study Sponsor ("Sponsor"), and the Sponsor is responsible and accountable for the regulatory activities and the conduct of the study. Gilead provides investigational/approved product and/or funding and does one or more of the following:
              </p>
              <ul className="list-disc pl-6 mb-4 text-black">
                <li>Collaborates with the Sponsor in the study design, study conduct, study analysis and report development, or publications.</li>
                <li>Provides the Sponsor with access to data and/or biological samples from previous Gilead Sponsored Research (GSR) trials.</li>
                <li>Intends to use the data resulting from this research as part of a Gilead regulatory submission.</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-lg mb-4 text-black">
                <p className="font-medium text-black dark:text-black">Note:</p>
                <ul className="list-disc pl-6 text-black dark:text-black">
                  <li>Collaborative research may be initiated by Gilead or the Sponsor.</li>
                  <li>Collaborative study proposals are reviewed and approved by the GRC where required, and protocols are reviewed and approved by the appropriate Protocol Review Board.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GRC/LRC Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-red-700 mb-3">Global Review Committee (GRC) / Local Review Committee (LRC)</h3>
            <div className="bg-gray-50 p-4 rounded-lg text-black">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow text-black border-2 border-white">
                  <h4 className="font-medium mb-2 text-black">Prospective Studies (GRC)</h4>
                  <ul className="list-disc pl-6 text-black">
                    <li>Prospective Data Generation (Additional Governance: oPRB)</li>
                    <li>ISR / Collaboratives</li>
                    <li>Implementation Sciences (PFIS)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow text-black border-2 border-white">
                  <h4 className="font-medium mb-2 text-black">Retrospective Studies (LRC)</h4>
                  <ul className="list-disc pl-6 text-black">
                    <li>Secondary Data Generation</li>
                    <li>Real World Evidence</li>
                    <li>Care Quality Improvement (PAQ)</li>
                  </ul>
                </div>
                <li><Link to="/processes/processes-and-governance" className="text-red-800 hover:text-red-600">CCC Project Lifecycle</Link></li>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CollaborativeStudies; 