import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Target, 
  Users, 
  Clock,
  Radio,
  Share2,
  Goal,
  GitCommit,
  ArrowRight 
} from 'lucide-react';

const CommInternalHome = () => {
  const navigate = useNavigate();

  const sections = {
    internal: {
      title: "Internal Communications",
      description: "Strategies and frameworks for internal stakeholder communication",
      color: "bg-blue-100",
      icon: Radio,
      subsections: [
        {
          title: "Objectives",
          description: "Core goals and targets for internal communication",
          path: "/communications/internal-comms-plan/objectives",
          icon: Goal,
          color: "bg-blue-50"
        },
        {
          title: "CCC Stakeholders",
          description: "Key internal stakeholders and their communication needs",
          path: "/communications/internal-comms-plan/ccc-stakeholders",
          icon: Users,
          color: "bg-blue-50"
        },
        {
          title: "Strategies & Tactics",
          description: "Implementation approaches for effective communication",
          path: "/communications/internal-comms-plan/strategies-&-tactics",
          icon: Target,
          color: "bg-blue-50"
        },
        {
          title: "Timeline",
          description: "Communication rollout schedule and milestones",
          path: "/communications/internal-comms-plan/timeline",
          icon: Clock,
          color: "bg-blue-50"
        },
        {
          title: "Channels",
          description: "Communication channels and their usage",
          path: "/communications/internal-comms-plan/ccc-communications",
          icon: Share2,
          color: "bg-blue-50"
        },
        {
          title: "Cadence",
          description: "Different message passing systems and flows",
          path: "/communications/internal-comms-plan/communication-streams",
          icon: GitCommit,
          color: "bg-blue-50"
        }
      ]
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Communications</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-700 mb-4">
              Strategies and frameworks for internal stakeholder communication
            </p>
            <p className="text-gray-700">
              Day-to-day operational content.
            </p>
          </section>

          {Object.entries(sections).map(([key, section]) => {
            const SectionIcon = section.icon;
            return (
              <section key={key} className="space-y-4">
                <div className={`${section.color} p-6 rounded-t-lg border-b border-gray-200`}>
                  <div className="flex items-center mb-2">
                    <SectionIcon className="w-6 h-6 text-red-800 mr-3" />
                    <h2 className="text-2xl font-semibold text-gray-800">{section.title}</h2>
                  </div>
                  <p className="text-gray-600">{section.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-b-lg shadow-lg p-4">
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
              </section>
            );
          })}

          <section className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you need guidance on which section to explore first, we recommend starting with the Internal Communications Objectives to understand our core communication goals.
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
  );
};

export default CommInternalHome;