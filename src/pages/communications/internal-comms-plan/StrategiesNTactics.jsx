import React from 'react';
import { 
  Target, MessageCircle, Workflow, BarChart3, Users, 
  Lightbulb, ChevronRight, Clock, Activity, Laptop, BookOpen,
  CheckCircle2, LineChart, Settings
} from 'lucide-react';

const StrategiesNTactics = () => {
  const strategies = [
    {
      title: "Internal Alignment",
      items: [
        "Clear Message Framework",
        "Stakeholder Mapping",
        "Channel Optimization",
        "Feedback Integration",
        "Performance Tracking"
      ],
      icon: Users,
      color: "bg-blue-50"
    },
    {
      title: "Engagement Focus",
      items: [
        "Interactive Sessions",
        "Two-way Dialogue",
        "Recognition Programs",
        "Collaborative Tools",
        "Knowledge Sharing"
      ],
      icon: MessageCircle,
      color: "bg-green-50"
    }
  ];

  const tactics = [
    {
      tactic: "Town Halls",
      purpose: "Broad Updates",
      frequency: "Monthly",
      impact: "High",
      icon: Users,
      color: "bg-blue-50"
    },
    {
      tactic: "Team Meetings",
      purpose: "Detailed Planning",
      frequency: "Weekly",
      impact: "Medium",
      icon: MessageCircle,
      color: "bg-green-50"
    },
    {
      tactic: "Newsletters",
      purpose: "Information Sharing",
      frequency: "Bi-weekly",
      impact: "Medium",
      icon: BookOpen,
      color: "bg-purple-50"
    }
  ];

  const resources = [
    {
      title: "Digital Tools",
      items: [
        "Communication Platform",
        "Project Management",
        "Analytics Dashboard",
        "Feedback System"
      ],
      icon: Laptop,
      color: "bg-indigo-50"
    },
    {
      title: "Support Resources",
      items: [
        "Training Materials",
        "Best Practices Guide",
        "Templates Library",
        "Help Documentation"
      ],
      icon: BookOpen,
      color: "bg-pink-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Workflow className="w-8 h-8 mr-3" />
          Strategies & Tactics
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Communication Strategies
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  Our comprehensive communication approach focuses on these key strategies:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {strategies.map((strategy, index) => {
                  const IconComponent = strategy.icon;
                  return (
                    <div key={index} className={`${strategy.color} p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-200`}>
                      <div className="flex items-center mb-4">
                        <div className="bg-white p-2 rounded-full shadow-md">
                          <IconComponent className="w-6 h-6 text-red-800" />
                        </div>
                        <h3 className="text-lg font-semibold text-red-800 ml-3">{strategy.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {strategy.items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2" />
              Implementation Tactics
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {tactics.map((tactic, index) => {
                  const IconComponent = tactic.icon;
                  return (
                    <div key={index} className={`${tactic.color} p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-200`}>
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center mb-2 md:mb-0">
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <IconComponent className="w-6 h-6 text-red-800" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 ml-3">{tactic.tactic}</h3>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <Lightbulb className="w-5 h-5 text-red-800 mr-2" />
                            <span className="text-gray-700">{tactic.purpose}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-5 h-5 text-red-800 mr-2" />
                            <span className="text-gray-700">{tactic.frequency}</span>
                          </div>
                          <div className="flex items-center">
                            <Activity className="w-5 h-5 text-red-800 mr-2" />
                            <span className="text-gray-700">{tactic.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <BarChart3 className="w-6 h-6 mr-2" />
              Success Metrics
            </h2>
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Key performance indicators for measuring effectiveness:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { text: "Engagement Rates", icon: Activity },
                  { text: "Message Comprehension", icon: CheckCircle2 },
                  { text: "Feedback Quality", icon: MessageCircle },
                  { text: "Action Completion", icon: Target },
                  { text: "Stakeholder Satisfaction", icon: Users }
                ].map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <IconComponent className="w-5 h-5 text-red-800 mr-2" />
                      <span className="text-gray-700">{metric.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Settings className="w-6 h-6 mr-2" />
              Tools & Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <div key={index} className={`${resource.color} p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-200`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h3 className="text-lg font-semibold text-red-800 ml-3">{resource.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {resource.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StrategiesNTactics;