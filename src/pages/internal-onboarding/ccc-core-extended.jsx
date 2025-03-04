import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ClipboardCheck, 
  UserCheck, 
  Users, 
  Target,
  CheckCircle2,
  ArrowRight 
} from 'lucide-react';

const CCCCoreExtended = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Onboarding Checklist",
      description: "Essential preparation steps and background information before starting the onboarding process.",
      path: "/internal-onboarding/ccc-core-extended/onboarding-checklist",
      icon: ClipboardCheck,
      color: "bg-purple-50"
    },
    {
      title: "Welcome Orientation",
      description: "Initial introduction to the team, initiative overview, and administrative setup.",
      path: "/internal-onboarding/ccc-core-extended/welcome-orientation",
      icon: UserCheck,
      color: "bg-green-50"
    },
    {
      title: "Immerse, Contribute",
      description: "Hands-on integration period with shadowing, learning, and initial contributions.",
      path: "/internal-onboarding/ccc-core-extended/immerse-contribute",
      icon: Users,
      color: "bg-yellow-50"
    },
    {
      title: "Deepen Engagement",
      description: "Enhanced responsibility and knowledge acquisition phase.",
      path: "/internal-onboarding/ccc-core-extended/deepen-engagement",
      icon: Target,
      color: "bg-orange-50"
    },
    {
      title: "Full Integration",
      description: "Complete transition to full team member with independent responsibilities.",
      path: "/internal-onboarding/ccc-core-extended/full-integration",
      icon: CheckCircle2,
      color: "bg-pink-50"
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Core & Extended</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The CCC Core & Extended onboarding program is designed for central team members and extended collaborators who will be deeply involved in the initiative's operations and strategic direction.
          </p>
          <p className="text-gray-700">
            This comprehensive program ensures proper alignment with our strategic goals while providing the knowledge, tools, and connections needed to maximize impact from day one.
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
          Begin with the Onboarding Checklist to prepare for your role, then proceed through each phase sequentially. Each section builds upon the knowledge and experience gained in previous phases.
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

export default CCCCoreExtended; 