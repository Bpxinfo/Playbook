import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Building, MessageSquare, UserPlus, Settings, Database, Layout } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Playbook App Overview",
      description: "Learn about the playbook's objectives and purpose",
      icon: Book,
      path: "/playbook-app-overview",
      color: "bg-blue-50"
    },
    {
      title: "CCC Initiative Overview",
      description: "Understand our mission, vision, and strategic pillars",
      icon: Building,
      path: "/ccc-initiative",
      color: "bg-green-50"
    },
    {
      title: "Communication Plan",
      description: "Access internal and external communication strategies",
      icon: MessageSquare,
      path: "/communication-plan",
      color: "bg-purple-50"
    },
    {
      title: "Internal Onboarding",
      description: "Guide for new team member integration",
      icon: UserPlus,
      path: "/internal-onboarding",
      color: "bg-yellow-50"
    },
    {
      title: "Processes & Governance",
      description: "Learn about our operational frameworks",
      icon: Settings,
      path: "/processes",
      color: "bg-pink-50"
    },
    {
      title: "Systems",
      description: "Explore our digital and manual systems",
      icon: Database,
      path: "/systems",
      color: "bg-orange-50"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-red-800 mb-6">Welcome to the CCC Playbook</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The Community Cancer Collective (CCC) Playbook serves as your comprehensive guide to our patient-focused initiative, designed to address gaps in care for cancer patients in non-academic settings. This digital resource centralizes all CCC-related information, processes, and guidelines to ensure consistent and effective execution of our mission.
          </p>
          <p className="text-gray-700">
            Through our three strategic pillars - Generating Evidence, Addressing Disparities, and Enabling Education - we work to foster collaborations with treatment sites in the oncology community to make a meaningful impact on patient care and outcomes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-left flex flex-col h-full`}
            >
              <div className="flex items-center mb-4">
                <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-12 bg-red-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-red-800 mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions or need to provide feedback about the CCC Playbook, our team is here to help.
        </p>
        <button
          onClick={() => navigate('/feedback')}
          className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}