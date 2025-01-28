import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Database,
  Target,
  Monitor,
  ClipboardList,
  Link as LinkIcon,
  ArrowRight 
} from 'lucide-react';

export default function SystemsHome() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Objectives",
      description: "Understand the purpose and goals of our digital and manual systems infrastructure.",
      path: "/systems/objectives",
      icon: Target,
      color: "bg-blue-50"
    },
    {
      title: "Internal Platforms",
      description: "Overview of all digital platforms, tools, and applications used in CCC operations.",
      path: "/systems/internal-platforms",
      icon: Monitor,
      color: "bg-purple-50"
    },
    {
      title: "Manual Systems",
      description: "Documentation of manual processes, workflows, and physical systems.",
      path: "/systems/manual-systems",
      icon: ClipboardList,
      color: "bg-green-50"
    },
    {
      title: "Links to Process",
      description: "Quick access to system-related processes, guides, and documentation.",
      path: "/systems/links-to-process",
      icon: LinkIcon,
      color: "bg-yellow-50"
    }
  ];

  const systemHighlights = [
    {
      title: "GRC & LRC",
      description: "Governance and regulatory compliance systems"
    },
    {
      title: "G360 (Veeva)",
      description: "Field planning and account management"
    },
    {
      title: "GOptics (Appian)",
      description: "ISR collaboration platform"
    },
    {
      title: "SteepRock",
      description: "Grants and sponsorships portal"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Systems</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Database className="w-8 h-8 text-red-800 mr-4" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Systems Overview
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Our systems infrastructure combines digital and manual tools to support efficient CCC operations. This section provides comprehensive information about all systems used within the CCC initiative, including access procedures, best practices, and integration points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {systemHighlights.map((highlight, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-red-800 mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
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

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">System Access & Support</h2>
        <p className="text-gray-700 mb-4">
          For access to any CCC systems or technical support, please review the Digital Systems section first. If you need additional assistance or have specific questions, use the feedback form to reach our support team.
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
  );
}