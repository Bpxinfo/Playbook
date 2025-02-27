import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  UserPlus, 
  ClipboardCheck, 
  UserCheck, 
  Users, 
  Target, 
  CheckCircle2,
  HeartHandshake,
  Link as LinkIcon,
  ArrowRight 
} from 'lucide-react';

export default function InternalOnboardingHome() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Objectives",
      description: "Understand the goals and expected outcomes of our comprehensive integration program.",
      path: "/internal-onboarding/objectives",
      icon: Target,
      color: "bg-blue-50"
    },
    {
      title: "Pre-Integration Prep",
      description: "Essential preparation steps and background information before starting the onboarding process.",
      path: "/internal-onboarding/pre-integration-prep",
      icon: ClipboardCheck,
      color: "bg-purple-50"
    },
    {
      title: "Welcome Orientation",
      description: "Initial introduction to the team, initiative overview, and administrative setup.",
      path: "/internal-onboarding/welcome-orientation",
      icon: UserCheck,
      color: "bg-green-50"
    },
    {
      title: "Immerse, Contribute",
      description: "Hands-on integration period with shadowing, learning, and initial contributions.",
      path: "/internal-onboarding/immerse-contribute",
      icon: Users,
      color: "bg-yellow-50"
    },
    {
      title: "Deepen Engagement",
      description: "Enhanced responsibility and knowledge acquisition phase.",
      path: "/internal-onboarding/deepen-engagement",
      icon: Target,
      color: "bg-orange-50"
    },
    {
      title: "Full Integration",
      description: "Complete transition to full team member with independent responsibilities.",
      path: "/internal-onboarding/full-integration",
      icon: CheckCircle2,
      color: "bg-pink-50"
    },
    {
      title: "Ongoing Support",
      description: "Continuous learning and development resources.",
      path: "/internal-onboarding/ongoing-support",
      icon: HeartHandshake,
      color: "bg-indigo-50"
    },
    {
      title: "External Links",
      description: "Additional resources and references for continued learning.",
      path: "/internal-onboarding/external-links",
      icon: LinkIcon,
      color: "bg-cyan-50"
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Onboarding</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            Our Internal Onboarding program is designed to transform new team members into fully integrated, high-performing contributors to the CCC initiative. This systematic, year-long journey ensures proper alignment with our strategic goals while maximizing impact from day one.
          </p>
          <p className="text-gray-700">
            Each phase of the onboarding journey builds upon the previous, creating a comprehensive learning experience that combines hands-on practice with strategic understanding of the CCC mission.
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
          Begin with the Objectives section to understand the program's goals, then proceed through each phase sequentially. Each section builds upon the knowledge and experience gained in previous phases.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate('/feedback')}
            className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Submit Feedback
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-red-800 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
          >
            Back to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}