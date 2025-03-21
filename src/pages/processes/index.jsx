import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Settings,
  GitBranch,
  Shield,
  FileText,
  ArrowRight 
} from 'lucide-react';

const ProcessesHome = () => {
  const navigate = useNavigate();

  const sections = [
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
      title: "SOPs & Resources",
      description: "Access to standard operating procedures, forms, and other essential documentation.",
      path: "/processes/sops-&-resources",
      icon: FileText,
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Processes & Governance</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-red-800 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                Process Framework Overview
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  The objective of this comprehensive processes, governance, and compliance framework is to establish a robust operational foundation for the CCC initiative, ensuring seamless execution while maintaining the highest standards of regulatory adherence and risk management. By implementing a structured approach to governance, the framework creates clear lines of accountability, streamlines decision-making processes, and fosters a culture of compliance that protects both the initiative's integrity and its stakeholders' interests.
                </p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  This integrated framework orchestrates the cross functional interactions of three critical pillars: operational processes that drive day-to-day activities, governance mechanisms that ensure proper oversight and control, and compliance guidance that safeguard against regulatory risks. Each pillar is designed to complement and reinforce the others, creating a dynamic system that adapts to changing requirements while maintaining operational excellence and legal, compliance and regulatory conformity.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  The framework's emphasis on transparent documentation, clear accountability structures, and proactive risk management ensures that the CCC initiative not only meets its current obligations but is also positioned to scale effectively and respond to emerging complexities. Through systematic monitoring and regular review cycles, the framework promotes continuous improvement while maintaining the agility necessary to address evolving patient needs, treatment landscapes and operational demands.
                </p>
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section className="bg-gray-50 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Reference</h2>
              <p className="text-gray-700 mb-4">
                Start with the Processes & Governance section to understand our operational framework, then explore specific areas based on your needs. The Compliance Guidance section is essential for all team members.
              </p>
              <button
                onClick={() => navigate('/processes/processes-&-governance')}
                className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Start Here
              </button>
            </section>

            <section className="bg-gray-50 rounded-lg shadow-lg p-6">
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
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessesHome;