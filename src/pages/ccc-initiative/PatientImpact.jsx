import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PatientImpact = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Patient Impact</h1>
        
        {/* <button
          onClick={() => navigate('/ccc-initiative')}
          className="mb-8 inline-flex items-center text-red-800 hover:text-red-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to CCC Initiative Overview
        </button> */}

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              The Community Cancer Collective (CCC) is dedicated to making a meaningful difference in patients' lives through our community-focused initiatives. Our impact is measured not just in numbers, but in the improved quality of care and better outcomes for cancer patients in community settings.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Key Impact Areas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enhanced Access to Care</h3>
                <p className="text-gray-700">
                  Through our community partnerships and initiatives, we're improving access to quality cancer care in underserved regions, bringing advanced treatments closer to where patients live.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Improved Patient Education</h3>
                <p className="text-gray-700">
                  Our educational programs help patients better understand their treatment journey, leading to improved adherence and better-informed decision-making.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Evidence-Based Care</h3>
                <p className="text-gray-700">
                  By bridging the gap between clinical trials and community implementation, we're ensuring patients receive the most effective, evidence-based treatments available.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Measuring Our Impact</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Quantitative Metrics</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Number of patients reached through community programs</li>
                  <li>Improvement in treatment adherence rates</li>
                  <li>Reduction in care disparities across regions</li>
                  <li>Implementation of evidence-based practices in community settings</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualitative Outcomes</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Enhanced patient satisfaction with care delivery</li>
                  <li>Improved patient understanding of treatment options</li>
                  <li>Stronger community engagement in cancer care</li>
                  <li>Better coordination between healthcare providers</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Future Impact Goals</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Looking ahead, CCC aims to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Expand our reach to more underserved communities</li>
                <li>Develop innovative patient support programs</li>
                <li>Strengthen the connection between research and community practice</li>
                <li>Create sustainable models for community-based cancer care</li>
                <li>Foster greater collaboration among healthcare stakeholders</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PatientImpact; 