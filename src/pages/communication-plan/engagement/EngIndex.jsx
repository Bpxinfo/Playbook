import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Target, 
  Goal,
  GitCommit,
  Layout,
  UserCheck,
  LineChart,
  ArrowRight 
} from 'lucide-react';

export default function CommEngHome() {
  const navigate = useNavigate();

  const sections = {
    engagement: {
      title: "Engagement Plan",
      description: "Framework for stakeholder engagement and feedback",
      color: "bg-green-100",
      icon: Layout,
      subsections: [
        {
          title: "Objectives",
          description: "Goals and targets for stakeholder engagement",
          path: "/communication-plan/engagement-plan/objectives",
          icon: Goal,
          color: "bg-green-50"
        },
        {
          title: "Communication Path",
          description: "Structured approach to stakeholder communication",
          path: "/communication-plan/engagement-plan/communication-path",
          icon: GitCommit,
          color: "bg-green-50"
        },
        {
          title: "Internal Engagement Strategies",
          description: "Methods to enhance stakeholder participation",
          path: "/communication-plan/engagement-plan/internal-engagement-strategies",
          icon: Target,
          color: "bg-green-50"
        },
        {
          title: "Internal Engagement Plan",
          description: "Systems for collecting and acting on feedback",
          path: "/communication-plan/engagement-plan/internal-engagement-plan",
          icon: UserCheck,
          color: "bg-green-50"
        },

        {
          title: "Impact Monitoring",
          description: "Tracking and measuring engagement effectiveness",
          path: "/communication-plan/engagement-plan/impact-monitoring",
          icon: LineChart,
          color: "bg-green-50"
        }
      ]
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 bg-red-800 p-4 uppercase">Engagement Plan</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
          Framework for stakeholder engagement and feedback</p>
          <p className="text-gray-700">
            Plan for strategic stakeholder interaction and feedback collection.
          </p>
        </div>
      </div>

      {Object.entries(sections).map(([key, section]) => {
        const SectionIcon = section.icon;
        return (
          <div key={key} className="mb-12">
            <div className={`${section.color} p-6 rounded-t-lg border-b border-gray-200`}>
              <div className="flex items-center mb-2">
                <SectionIcon className="w-6 h-6 text-red-800 mr-3" />
                <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white rounded-b-lg shadow-lg">
              {section.subsections.map((subsection, index) => {
                const SubIcon = subsection.icon;
                return (
                  <button
                    key={index}
                    onClick={() => navigate(subsection.path)}
                    className={`${subsection.color} p-4 rounded-lg shadow-md hover:shadow-lg transition-all group text-left`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <SubIcon className="w-5 h-5 text-red-800 mr-2" />
                        <h3 className="text-lg font-semibold text-gray-800">{subsection.title}</h3>
                      </div>
                      <ArrowRight className="w-4 h-4 text-red-800 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-gray-600">{subsection.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
        <p className="text-gray-700 mb-4">
          If you need guidance on which section to explore first, we recommend starting with the Internal Communications Objectives to understand our core communication goals.
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