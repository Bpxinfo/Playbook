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
  Layout,
  UserCheck,
  LineChart,
  ArrowRight 
} from 'lucide-react';

const CommunicationPlanHome = () => {
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
          path: "/communications/internal-comms-plan/channels",
          icon: Share2,
          color: "bg-blue-50"
        },
        {
          title: "Cadence",
          description: "Different message passing systems and flows",
          path: "/communications/internal-comms-plan/cadence",
          icon: GitCommit,
          color: "bg-blue-50"
        }
      ]
    },
    engagement: {
      title: "Internal Engagement",
      description: "Framework for internal stakeholder engagement and feedback",
      color: "bg-green-100",
      icon: Layout,
      subsections: [
        {
          title: "Objectives",
          description: "Goals and targets for stakeholder engagement",
          path: "/communications/internal-engagement/objectives",
          icon: Goal,
          color: "bg-green-50"
        },
        {
          title: "Communication Path",
          description: "Structured approach to stakeholder communication",
          path: "/communications/internal-engagement/communication-path",
          icon: GitCommit,
          color: "bg-green-50"
        },
        {
          title: "Internal Engagement Strategies",
          description: "Methods to enhance stakeholder participation",
          path: "/communications/internal-engagement/internal-engagement-strategies",
          icon: Target,
          color: "bg-green-50"
        },
        {
          title: "Internal Engagement Plan",
          description: "Systems for collecting and acting on feedback",
          path: "/communications/internal-engagement/internal-engagement-plan",
          icon: UserCheck,
          color: "bg-green-50"
        },
        {
          title: "Impact Monitoring",
          description: "Tracking and measuring engagement effectiveness",
          path: "/communications/internal-engagement/impact-monitoring",
          icon: LineChart,
          color: "bg-green-50"
        }
      ]
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Communications</h1>

        <div className="space-y-6">
          {Object.entries(sections).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <section key={key} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                  <h2 className="text-2xl text-red-800">{section.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{section.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.subsections.map((subsection, index) => {
                    const SubIconComponent = subsection.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => navigate(subsection.path)}
                        className={`${subsection.color} p-4 rounded-lg shadow hover:shadow-md transition-all group text-left relative`}
                      >
                        <div className="flex items-center mb-2">
                          <SubIconComponent className="w-5 h-5 text-red-800 mr-2" />
                          <h3 className="text-lg font-semibold text-gray-800">{subsection.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm pr-6">{subsection.description}</p>
                        <ArrowRight className="w-4 h-4 text-red-800 absolute right-3 top-1/2 -translate-y-1/2" />
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunicationPlanHome;