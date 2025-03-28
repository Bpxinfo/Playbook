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
  ArrowRight,
  Users as UsersIcon,
  UserCog,
  MapPin,
  FileText,
  HelpingHand
} from 'lucide-react';

export default function InternalOnboardingHome() {
  const navigate = useNavigate();

  const teamSections = [
    {
      title: "CCC Core",
      description: "Comprehensive onboarding program for core team members.",
      path: "/internal-onboarding/ccc-core",
      icon: UsersIcon,
      color: "bg-purple-50"
    },
    {
      title: "CCC Extended",
      description: "Onboarding program for extended collaborators and partners.",
      path: "/internal-onboarding/ccc-extended",
      icon: Users,
      color: "bg-green-50"
    },
    {
      title: "CCC Leadership SteerCo",
      description: "Specialized onboarding for leadership steering committee members.",
      path: "/internal-onboarding/ccc-leadership-steerco",
      icon: UserCog,
      color: "bg-yellow-50"
    },
    {
      title: "Field Team",
      description: "Tailored onboarding for field team members working on the ground.",
      path: "/internal-onboarding/field-team",
      icon: MapPin,
      color: "bg-orange-50"
    },
    {
      title: "Project Leads",
      description: "Dedicated onboarding track for project leaders and managers.",
      path: "/internal-onboarding/project-leads",
      icon: Target,
      color: "bg-pink-50"
    },

  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Onboarding</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Program Overview</h2>
          <div className="space-y-4">
              <p className="text-gray-700">
                The integration program accelerates the onboarding of high-potential CCC Project Leaders, aligning them quickly with strategic goals to maximize impact from day one. Spanning six phases—from pre-integration to ongoing support—it guides leaders through a structured, year-long journey of growth, engagement, and contribution. Emphasizing hands-on experience, strategic responsibilities, and external collaboration, the program develops self-driven leaders who become key drivers of innovation and community impact.
              </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">Onboarding Programs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {teamSections.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left relative`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-md mr-3">
                  <IconComponent className="w-6 h-6 text-red-800" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600 pr-6">{section.description}</p>
              <ArrowRight className="w-5 h-5 text-red-800 absolute right-4 top-1/2 -translate-y-1/2" />
            </button>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          Select the appropriate team onboarding program based on your role. For Core & Extended team members, proceed through each phase sequentially.
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