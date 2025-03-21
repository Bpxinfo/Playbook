import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  Target, 
  Users, 
  Share2,
  Goal,
  GitCommit,
  Layout,
  ArrowRight 
} from 'lucide-react';

const CommunicationPlanHome = () => {
  const navigate = useNavigate();

  const sections = {
    communications: {
      title: "Communications",
      description: "Core communication objectives, principles, and engagement framework",
      color: "bg-blue-100",
      icon: MessageSquare,
      subsections: [
        {
          title: "CCC Stakeholders",
          description: "Key stakeholders and their communication needs",
          path: "/communications/ccc-stakeholders",
          icon: Users,
          color: "bg-blue-50"
        },
        {
          title: "Channels",
          description: "Communication channels and their usage",
          path: "/communications/channels",
          icon: Share2,
          color: "bg-blue-50"
        },
        {
          title: "Cadence",
          description: "Different message passing systems and flows",
          path: "/communications/cadence",
          icon: GitCommit,
          color: "bg-blue-50"
        },
        {
          title: "Communication Path",
          description: "Structured approach to stakeholder communication",
          path: "/communications/communication-path",
          icon: GitCommit,
          color: "bg-blue-50"
        },
        {
          title: "Internal Engagement Strategies",
          description: "Methods to enhance stakeholder participation",
          path: "/communications/internal-engagement-strategies",
          icon: Target,
          color: "bg-blue-50"
        }
      ]
    }
  };

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Communications</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Objectives</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The CCC communication objectives aim to ensure clear, consistent, and timely information flow that supports stakeholder engagement, cross-functional collaboration, and organizational alignment. By establishing clear channels, fostering transparency, and encouraging active participation, the framework strengthens relationships across teams. Guided by principles of clarity, consistency, timeliness, relevance, accessibility, and transparency, CCC's communication approach ensures stakeholders stay informed, engaged, and aligned with the initiative's goals.              </p>
            </div>
          </section>

          {Object.entries(sections).map(([key, section]) => {
            const IconComponent = section.icon;
            return (
              <section key={key} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md mr-3">
                    <IconComponent className="w-6 h-6 text-red-800" />
                  </div>
                  <h2 className="text-2xl text-red-800">{section.title}</h2>
                </div>
                <p className="text-gray-700 mb-6">{section.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {section.subsections.map((subsection, index) => {
                    const SubIconComponent = subsection.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => navigate(subsection.path)}
                        className={`${subsection.color} p-4 rounded-lg shadow hover:shadow-md transition-all group text-left relative`}
                      >
                        <div className="flex items-center mb-2">
                          <div className="bg-white p-3 rounded-full shadow-md mr-2">
                            <SubIconComponent className="w-5 h-5 text-red-800" />
                          </div>
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

          <section className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Need Help?</h2>
            <p className="text-gray-700 mb-4">
              If you need guidance on which section to explore first, we recommend starting with the Objectives to understand our core communication goals.
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

export default CommunicationPlanHome;