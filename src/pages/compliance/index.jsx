import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Shield,
  FileText,
  AlertCircle,
  ArrowRight,
  CheckCircle,
  BookOpen,
  AlertTriangle,
  Info
} from 'lucide-react';

const ComplianceHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Resources & Support",
      description: "Essential guidelines and requirements for maintaining regulatory compliance across all operations.",
      path: "/compliance/resources-and-support",
      icon: Shield,
      color: "bg-blue-50"
    },
    {
      title: "Full Legal & Compliance Document",
      description: "Access the complete compliance documentation and detailed guidance for regulatory adherence.",
      action: () => window.open('https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents', '_blank'),
      icon: FileText,
      color: "bg-purple-50"
    },
    // {
    //   title: "Risk Management",
    //   description: "Framework for identifying, assessing, and managing compliance risks.",
    //   path: "/compliance/risk-management",
    //   icon: AlertCircle,
    //   color: "bg-green-50"
    // },
    // {
    //   title: "Training & Resources",
    //   description: "Compliance training materials and educational resources for team members.",
    //   path: "/compliance/training",
    //   icon: BookOpen,
    //   color: "bg-yellow-50"
    // }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Legal & Compliance Guidance</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Legal & Compliance Framework
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              This section provides comprehensive guidance on compliance requirements, regulatory frameworks, and best practices for maintaining adherence to all applicable laws and regulations.
            </p>
            <p className="text-gray-700">
              Our structured approach ensures that all activities align with regulatory requirements while maintaining operational efficiency and supporting our mission to improve community cancer care.
            </p>
          </section>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={index}
                  onClick={() => section.action ? section.action() : navigate(section.path)}
                  className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white p-3 rounded-full shadow-md mr-4">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-800 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600 ml-16">{section.description}</p>
                </button>
              );
            })}
          </div>

          <div>
            <section id="key-compliance-principles" className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl text-red-800 mb-4">Key Compliance Principles</h2>
              <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1 dark:text-black" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Important Compliance Notes</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                        <li>All CCC activities must comply with applicable laws, regulations, and company policies</li>
                        <li>Consult Legal/Compliance for guidance on specific activities or questions</li>
                        <li>Document decisions and maintain records of compliance reviews</li>
                        <li>Report any compliance concerns through appropriate channels</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                    <div>
                      <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Full Compliance Document</h3>
                      <p className="text-gray-700 dark:text-black">
                        For the complete CCC Legal & Compliance Guidance document, please click{' '}
                        <a
                          href="https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 underline"
                        >
                          here
                        </a>
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Source Reference</h2>
              <p className="text-gray-700 mb-4">
                Start with the Legal & Compliance Guidelines section to understand our compliance framework, then explore specific areas based on your needs. The Training & Resources section is essential for all team members.
              </p>
              <button
                onClick={() => window.open('https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents', '_blank')}
                className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Start Here
              </button>
            </section>
       
            <section className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Need Help?</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about compliance requirements or need clarification on any guidelines, please submit feedback or contact your compliance officer.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => navigate('/feedback')}
                  className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Submit Feedback
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Back to Main Menu
                </button>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ComplianceHome; 