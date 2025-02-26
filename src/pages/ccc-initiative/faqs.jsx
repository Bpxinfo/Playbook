import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Building, Target, Users, Briefcase, Shield, LineChart, ChevronDown, Goal, Lock } from 'lucide-react';

const CCCFAQs = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What is the Community Cancer Collective (CCC)?",
      answer: "The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in community settings. By bringing together key partners and collaborating with oncology treatment sites nationwide, we identify impactful opportunities and implement innovative solutions. Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care.",
      icon: Building,
      color: "bg-blue-50"
    },
    {
      question: "What are the three strategic pillars of CCC?",
      answer: "The CCC is built on three strategic pillars:\n1. Generating Evidence: Close the gap between clinical trial evidence and real-world implementation in community settings\n2. Addressing Disparities & Improving Health Equity: Focus on health equity by addressing specific care gaps in underserved regions\n3. Enabling Education: Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey",
      icon: Target,
      color: "bg-green-50"
    },
    {
      question: "How does CCC select its partners?",
      answer: "Partner selection follows objective criteria including:\n- Demonstrated expertise and experience in CCC focus areas\n- Commitment to community oncology care\n- Diversity across both major centers and community oncology institutions\n- Sufficient data and clinical infrastructure to support studies\n- Alignment with CCC objectives and strategic pillars\n\nImportantly, selection is not based on sales/revenue considerations and must be free from commercial influence.",
      icon: Users,
      color: "bg-purple-50"
    },
    {
      question: "How can I get involved with CCC projects?",
      answer: "CCC projects are open to qualified sites through our RFP program via GOptics, posted on AskGilead.com. Projects are selected based on alignment with CCC objectives, strategic pillars, and scientific merit. Interested sites should ensure they meet the partner selection criteria and can demonstrate commitment to improving community cancer care.",
      icon: Briefcase,
      color: "bg-yellow-50"
    },
    {
      question: "What types of projects does CCC support?",
      answer: "CCC supports various project types including:\n- Collaborative Studies (GRC/LRC): Research partnerships with external investigators or institutions\n- Investigator Sponsored Research (ISR): Studies initiated by external investigators\n- Evidence Generation Projects: Focusing on real-world implementation\n- Health Equity Initiatives: Addressing care gaps in underserved communities\n- Educational Programs: Supporting provider and patient education",
      icon: LineChart,
      color: "bg-pink-50"
    },
    {
      question: "How does CCC governance work?",
      answer: "CCC governance includes:\n- CCC Leadership SteerCo: Provides strategic direction and oversight\n- Adjudication Committee: Reviews complex projects with representatives from Medical Affairs, Medical Governance, Legal, and Compliance\n- Advisory Council: Provides expert input while maintaining appropriate boundaries\n- Project Review Process: Includes both standard and complex project review pathways",
      icon: Shield,
      color: "bg-orange-50"
    },
    {
      question: "What are CCC's key objectives?",
      answer: "Key objectives include:\n- Advancing Evidence-Based Solutions in community settings\n- Reducing Disparities in Cancer Care\n- Enhancing Provider and Patient Education\n- Improving Cancer Care Delivery through collaboration\n- Supporting positive change for partners, communities, and patients\n- Developing capabilities that optimize quality of care for diverse oncology populations",
      icon: Goal,
      color: "bg-indigo-50"
    },
    {
      question: "How does CCC ensure compliance?",
      answer: "CCC maintains compliance through:\n- Clear separation from commercial influence\n- Objective selection criteria for partners and projects\n- Structured review processes via the Adjudication Committee\n- Alignment with Gilead's existing policies and procedures\n- Regular oversight and monitoring\n- Documentation of business justification and approvals",
      icon: Lock,
      color: "bg-red-50"
    },
    {
      question: 'How can sites participate in CCC projects?',
      answer: 'CCC projects are open to qualified sites through our RFP program via GOptics, posted on AskGilead.com'
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <HelpCircle className="w-8 h-8 mr-3" />
          CCC Initiative FAQs
        </h1>
        
        {/* <button
          onClick={() => navigate('/ccc-overview')}
          className="mb-8 inline-flex items-center text-red-800 hover:text-red-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to CCC Overview
        </button> */}

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div key={index} className={`${faq.color} rounded-lg shadow-md overflow-hidden transition-all duration-200`}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left bg-white focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                      <h2 className="text-xl font-semibold text-gray-800">{faq.question}</h2>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-red-800 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0">
                    {faq.answer.split('\\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CCCFAQs; 