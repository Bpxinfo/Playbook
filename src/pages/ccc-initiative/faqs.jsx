import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function CCCFAQs() {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "What is the Community Cancer Collective (CCC)?",
      answer: "The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in community settings. By bringing together key partners and collaborating with oncology treatment sites nationwide, we identify impactful opportunities and implement innovative solutions. Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care."
    },
    {
      question: "What are the three strategic pillars of CCC?",
      answer: "The CCC is built on three strategic pillars:\n1. Generating Evidence: Close the gap between clinical trial evidence and real-world implementation in community settings\n2. Addressing Disparities & Improving Health Equity: Focus on health equity by addressing specific care gaps in underserved regions\n3. Enabling Education: Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey"
    },
    {
      question: "How does CCC select its partners?",
      answer: "Partner selection follows objective criteria including:\n- Demonstrated expertise and experience in CCC focus areas\n- Commitment to community oncology care\n- Diversity across both major centers and community oncology institutions\n- Sufficient data and clinical infrastructure to support studies\n- Alignment with CCC objectives and strategic pillars\n\nImportantly, selection is not based on sales/revenue considerations and must be free from commercial influence."
    },
    {
      question: "How can I get involved with CCC projects?",
      answer: "CCC projects are open to qualified sites through our RFP program via GOptics, posted on AskGilead.com. Projects are selected based on alignment with CCC objectives, strategic pillars, and scientific merit. Interested sites should ensure they meet the partner selection criteria and can demonstrate commitment to improving community cancer care."
    },
    {
      question: "What types of projects does CCC support?",
      answer: "CCC supports various project types including:\n- Collaborative Studies (GRC/LRC): Research partnerships with external investigators or institutions\n- Investigator Sponsored Research (ISR): Studies initiated by external investigators\n- Evidence Generation Projects: Focusing on real-world implementation\n- Health Equity Initiatives: Addressing care gaps in underserved communities\n- Educational Programs: Supporting provider and patient education"
    },
    {
      question: "How does CCC governance work?",
      answer: "CCC governance includes:\n- CCC Leadership SteerCo: Provides strategic direction and oversight\n- Adjudication Committee: Reviews complex projects with representatives from Medical Affairs, Medical Governance, Legal, and Compliance\n- Advisory Council: Provides expert input while maintaining appropriate boundaries\n- Project Review Process: Includes both standard and complex project review pathways"
    },
    {
      question: "What are CCC's key objectives?",
      answer: "Key objectives include:\n- Advancing Evidence-Based Solutions in community settings\n- Reducing Disparities in Cancer Care\n- Enhancing Provider and Patient Education\n- Improving Cancer Care Delivery through collaboration\n- Supporting positive change for partners, communities, and patients\n- Developing capabilities that optimize quality of care for diverse oncology populations"
    },
    {
      question: "How does CCC ensure compliance?",
      answer: "CCC maintains compliance through:\n- Clear separation from commercial influence\n- Objective selection criteria for partners and projects\n- Structured review processes via the Adjudication Committee\n- Alignment with Gilead's existing policies and procedures\n- Regular oversight and monitoring\n- Documentation of business justification and approvals"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">CCC Initiative FAQs</h1>
        
        {/* <button
          onClick={() => navigate('/ccc-initiative')}
          className="mb-8 inline-flex items-center text-red-800 hover:text-red-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to CCC Initiative Overview
        </button> */}

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-red-800 mb-4">{faq.question}</h2>
              {faq.answer.split('\\n').map((paragraph, pIndex) => (
                <p key={pIndex} className="text-gray-700 mb-2">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 