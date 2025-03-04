import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardCheck, 
  UserCheck, 
  ArrowRight 
} from 'lucide-react';

const CCCFieldTeam = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Onboarding Checklist",
      description: "Essential preparation steps and background information for field team members.",
      path: "/internal-onboarding/ccc-field-team/onboarding-checklist",
      icon: ClipboardCheck,
      color: "bg-purple-50"
    },
    {
      title: "Welcome Orientation",
      description: "Initial introduction to the field team, initiative overview, and on-the-ground responsibilities.",
      path: "/internal-onboarding/ccc-field-team/welcome-orientation",
      icon: UserCheck,
      color: "bg-green-50"
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Field Team</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The CCC Field Team onboarding program is specifically designed for team members who will be implementing initiatives on the ground and working directly with stakeholders in the field.
          </p>
          <p className="text-gray-700">
            This practical program provides the essential knowledge, tools, and connections needed for effective implementation and stakeholder engagement in diverse settings.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left relative`}
            >
              <div className="flex items-center mb-2">
                <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600 pr-6">{section.description}</p>
              <ArrowRight className="w-5 h-5 text-red-800 absolute right-4 top-1/2 -translate-y-1/2" />
            </button>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          Begin with the Onboarding Checklist to prepare for your role, then proceed to the Welcome Orientation for a comprehensive introduction to the field team's responsibilities and operations.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/internal-onboarding')}
            className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Back to Internal Onboarding
          </button>
        </div>
      </div>
    </div>
  );
};

export default CCCFieldTeam; 