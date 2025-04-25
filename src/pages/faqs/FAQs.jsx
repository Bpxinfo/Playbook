import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Building, Target, Users, Briefcase, Shield, LineChart, ChevronDown, Goal, Lock } from 'lucide-react';

const CCCFAQs = () => {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = React.useState(null);

  const faqs = [
    {
      question: "What is the Community Cancer Collective (CCC)?",
      answer: "The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in the community setting. By bringing together key partners and treating patients in the community oncology setting, we identify impactful opportunities and implement innovative solutions. Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care.\n\n📖 [Learn more in CCC Initiative Overview](/ccc-overview)",
      icon: Building,
      color: "bg-blue-50 dark:bg-gray-800"
    },
    {
      question: "What are the three strategic pillars of CCC?",
      answer: "The CCC is built on three strategic pillars:\n\n• Generating Evidence: Close the gap between clinical trial evidence and real-world implementation in the community setting\n\n• Addressing Disparities & Improving Health Equity: Focus on health equity by addressing specific care gaps in underserved regions\n\n• Enabling Education for providers and patients: Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey\n\n📖 [Learn more in Strategic Pillars](/ccc-overview/strategic-pillars)",
      icon: Target,
      color: "bg-green-50 dark:bg-gray-800"
    },
    {
      question: "How does CCC select its partners?",
      answer: "Partner selection follows objective criteria including:\n\n• Subject matter expertise\n\n• Has community presence\n\n• IT infrastructure\n\n• Clinical data infrastructure and research capabilities\n\n• Minimal scope of services offered\n\n• Practice type\n\n• Geographic reach / location\n\n• Willingness to partner with Gilead\n\n• Reputation\n\nImportantly, selection is not based on sales/revenue considerations and must be free from commercial influence.\n\n📖 [Learn more in Stakeholders](/ccc-overview/stakeholders)",
      icon: Users,
      color: "bg-purple-50 dark:bg-gray-800"
    },
    {
      question: "How can I get involved with CCC projects?",
      answer: "\n Please reach out to the CCC lead (sabrina.meyers@gilead.com) for any questions or additional details regarding CCC Projects.",
      icon: Briefcase,
      color: "bg-yellow-50 dark:bg-gray-800"
    },
    {
      question: "What types of projects does CCC support?",
      answer: "CCC supports various project types including:\n\n• Collaborative Studies (GRC/LRC): Research partnerships with external investigators or institutions\n\n• Investigator Sponsored Research (ISR): Studies initiated by external investigators\n\n• Evidence Generation Projects: Focusing on real-world implementation\n\n• Health Equity Initiatives: Addressing care gaps in underserved communities\n\n• Educational Programs: Supporting provider and patient education\n\n📖 [Learn more in Project Types](/project-archetype)",
      icon: LineChart,
      color: "bg-pink-50 dark:bg-gray-800"
    },
    {
      question: "How does CCC governance work?",
      answer: "CCC governance includes:\n\n• CCC Leadership SteerCo: Advises and advocates and provides strategic direction\n\n• CCC Adjudication Committee: Serves two key purposes:\n   - Determines the appropriate division (i.e., Medical vs Commercial) within Gilead to route candidate initiatives for evaluation\n   - Maps candidate initiatives to the most appropriate existing internal Gilead review, approval & funding mechanisms (i.e. ISR, grants, etc)\n\n• CCC Project Review Process: includes the CCC Adjudication Committee to start and then follows the appropriate internal Gilead review/approval process\n\n📖 [Learn more in Processes & Governance](/processes/processes)",
      icon: Shield,
      color: "bg-orange-50 dark:bg-gray-800"
    },
    {
      question: "What are CCC's key objectives?",
      answer: "Key objectives include:\n\n• Advancing Evidence-Based Solutions in the community oncology setting\n\n• Reducing Disparities in Cancer Care\n\n• Enhancing Provider and Patient Education\n\n• Improving Cancer Care Delivery through collaboration\n\n• Supporting positive change for partners, communities, and patients\n\n• Developing capabilities that optimize quality of care for diverse oncology populations\n\n📖 [Learn more in CCC Overview](/ccc-overview/objectives)",
      icon: Goal,
      color: "bg-indigo-50 dark:bg-gray-800"
    },
    {
      question: "How does CCC ensure compliance?",
      answer: "CCC maintains compliance through:\n\n• Clear separation from commercial influence\n\n• Objective selection criteria for partners and projects\n\n• Structured review processes via the CCC Adjudication Committee\n\n• Alignment with Gilead's existing policies and procedures\n\n• Regular oversight and monitoring\n\n• Documentation of business justification and approvals\n\n📖 [Learn more in Compliance](/compliance)",
      icon: Lock,
      color: "bg-red-50 dark:bg-gray-800"
    },
    {
      question: "How to submit a proposal?",
      answer: "Email the CCC Lead (sabrina.meyers@gilead.com) with your proposal\n\n📖 [Learn more in Processes](/processes)",
      icon: Briefcase,
      color: "bg-yellow-50 dark:bg-gray-800"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
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
                  className="w-full p-6 text-left bg-white dark:bg-gray-800 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <IconComponent className="w-6 h-6 text-red-800 dark:text-red-400 mr-3" />
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{faq.question}</h2>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-red-800 dark:text-red-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-6 pt-0">
                    {faq.answer.split('\n').map((paragraph, pIndex) => {
                      if (paragraph.includes('[Learn more in')) {
                        const [text, link] = paragraph.match(/\[(.*?)\]\((.*?)\)/).slice(1);
                        return (
                          <p key={pIndex} className="text-gray-700 dark:text-gray-300 mt-4">
                            <span className="cursor-pointer text-red-800 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300" onClick={() => navigate(link)}>
                              {text}
                            </span>
                          </p>
                        );
                      }
                      return (
                        <p key={pIndex} className={`text-gray-700 dark:text-gray-300 ${paragraph.trim().startsWith('•') ? 'mt-3' : 'mb-2'}`}>
                          {paragraph}
                        </p>
                      );
                    })}
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