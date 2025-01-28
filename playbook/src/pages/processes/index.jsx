import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings,
  Target,
  GitBranch,
  Shield,
  FileText,
  ArrowRight 
} from 'lucide-react';

export default function ProcessesHome() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Objectives",
      description: "Understand the goals and framework of our processes, governance, and compliance structure.",
      path: "/processes/objectives",
      icon: Target,
      color: "bg-blue-50"
    },
    {
      title: "Processes & Governance",
      description: "Comprehensive overview of operational processes and governance frameworks.",
      path: "/processes/processes-&-governance",
      icon: GitBranch,
      color: "bg-purple-50"
    },
    {
      title: "Compliance Guidance",
      description: "Essential guidelines and requirements for maintaining regulatory compliance.",
      path: "/processes/compliance-guidance",
      icon: Shield,
      color: "bg-green-50"
    },
    {
      title: "Link to SOPs, Guidance, Forms, etc.",
      description: "Access to standard operating procedures, forms, and other essential documentation.",
      path: "/processes/link-to-sops,-guidance,-forms,-etc.",
      icon: FileText,
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Processes, Governance & Ways of Working</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-red-800 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Operational Framework
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            This section outlines our comprehensive framework for process management, governance structures, and operational guidelines. It provides the foundation for consistent, compliant, and effective execution of CCC initiatives.
          </p>
          <p className="text-gray-700">
            Our structured approach ensures that all activities align with regulatory requirements while maintaining operational efficiency and supporting our mission to improve community cancer care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-white p-2 rounded-lg shadow-sm mr-4">
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

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Reference</h2>
          <p className="text-gray-700 mb-4">
            Start with the Objectives section to understand our process framework, then explore specific areas based on your needs. The Compliance Guidance section is essential for all team members.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/processes/objectives')}
              className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Start Here
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
          <p className="text-gray-700 mb-4">
            If you can't find what you're looking for or need clarification on any processes, please submit feedback or contact your team lead.
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
        </div>
      </div>
    </div>
  );
}