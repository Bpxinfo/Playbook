import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardCheck, 
  UserCheck, 
  ArrowRight 
} from 'lucide-react';

const CCCLeadershipSteerCo = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Onboarding Checklist",
      description: "Essential preparation steps and background information for leadership committee members.",
      path: "/internal-onboarding/ccc-leadership-steerco/onboarding-checklist",
      icon: ClipboardCheck,
      color: "bg-purple-50"
    },
    {
      title: "Welcome Orientation",
      description: "Initial introduction to the steering committee, initiative overview, and leadership responsibilities.",
      path: "/internal-onboarding/ccc-leadership-steerco/welcome-orientation",
      icon: UserCheck,
      color: "bg-green-50"
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Leadership SteerCo</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The CCC Leadership Steering Committee onboarding program is tailored for executive leaders who will guide the strategic direction and governance of the initiative.
          </p>
          <p className="text-gray-700">
            This focused program provides the essential context, frameworks, and connections needed for effective leadership within the CCC ecosystem.
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
          Begin with the Onboarding Checklist to prepare for your role, then proceed to the Welcome Orientation for a comprehensive introduction to the steering committee's responsibilities and operations.
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

export default CCCLeadershipSteerCo; 