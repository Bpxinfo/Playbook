import React from 'react';
import { 
  BarChart2, LineChart, Target, Clock, Users, Brain, 
  CheckCircle2, FileText, Calendar, AlertTriangle, Activity,
  Lightbulb, ChevronRight, Star, Flag
} from 'lucide-react';

const ImpactMonitoring = () => {
  const quantitativeMetrics = [
    {
      title: "Participation Rates",
      icon: Users,
      color: "bg-blue-50"
    },
    {
      title: "Response Times",
      icon: Clock,
      color: "bg-green-50"
    },
    {
      title: "Completion Rates",
      icon: CheckCircle2,
      color: "bg-purple-50"
    },
    {
      title: "Engagement Scores",
      icon: Activity,
      color: "bg-yellow-50"
    },
    {
      title: "Performance Indicators",
      icon: Target,
      color: "bg-pink-50"
    }
  ];

  const qualitativeMetrics = [
    {
      title: "Feedback Quality",
      icon: Brain,
      color: "bg-indigo-50"
    },
    {
      title: "Program Satisfaction",
      icon: Star,
      color: "bg-red-50"
    },
    {
      title: "Team Collaboration",
      icon: Users,
      color: "bg-green-50"
    },
    {
      title: "Innovation Impact",
      icon: Lightbulb,
      color: "bg-yellow-50"
    },
    {
      title: "Cultural Alignment",
      icon: Flag,
      color: "bg-purple-50"
    }
  ];

  const performanceData = [
    {
      metric: "Engagement Rate",
      target: "85%",
      current: "82%",
      status: "On Track",
      icon: Activity,
      color: "bg-blue-50",
      statusColor: "text-green-600"
    },
    {
      metric: "Response Time",
      target: "24h",
      current: "28h",
      status: "Needs Improvement",
      icon: Clock,
      color: "bg-yellow-50",
      statusColor: "text-yellow-600"
    },
    {
      metric: "Satisfaction",
      target: "90%",
      current: "92%",
      status: "Exceeding",
      icon: Star,
      color: "bg-green-50",
      statusColor: "text-green-600"
    }
  ];

  const reports = [
    {
      title: "Regular Reports",
      items: [
        "Weekly Progress Updates",
        "Monthly Performance Reviews",
        "Quarterly Strategic Analysis",
        "Annual Impact Assessment"
      ],
      icon: FileText,
      color: "bg-blue-50"
    },
    {
      title: "Special Reports",
      items: [
        "Project Milestone Reports",
        "Initiative Launch Reviews",
        "Critical Incident Analysis",
        "Stakeholder Feedback Summary"
      ],
      icon: AlertTriangle,
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <BarChart2 className="w-8 h-8 mr-3" />
          Impact Monitoring
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Monitoring Framework
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  Our comprehensive monitoring framework tracks engagement impact across multiple dimensions:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-800 flex items-center">
                    <LineChart className="w-5 h-5 mr-2" />
                    Quantitative Metrics
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {quantitativeMetrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className={`${metric.color} p-3 rounded-lg shadow-sm flex items-center transform hover:scale-[1.02] transition-all duration-200`}>
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <IconComponent className="w-4 h-4 text-red-800" />
                          </div>
                          <span className="text-gray-700 ml-3">{metric.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-800 flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    Qualitative Metrics
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {qualitativeMetrics.map((metric, index) => {
                      const IconComponent = metric.icon;
                      return (
                        <div key={index} className={`${metric.color} p-3 rounded-lg shadow-sm flex items-center transform hover:scale-[1.02] transition-all duration-200`}>
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <IconComponent className="w-4 h-4 text-red-800" />
                          </div>
                          <span className="text-gray-700 ml-3">{metric.title}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Activity className="w-6 h-6 mr-2" />
              Performance Dashboard
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                {performanceData.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`${item.color} p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-200`}>
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center mb-2 md:mb-0">
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <IconComponent className="w-6 h-6 text-red-800" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-800 ml-3">{item.metric}</h3>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center">
                            <Target className="w-5 h-5 text-red-800 mr-2" />
                            <span className="text-gray-700">{item.target}</span>
                          </div>
                          <div className="flex items-center">
                            <Activity className="w-5 h-5 text-red-800 mr-2" />
                            <span className="text-gray-700">{item.current}</span>
                          </div>
                          <div className="flex items-center">
                            <Flag className="w-5 h-5 text-red-800 mr-2" />
                            <span className={item.statusColor}>{item.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section> */}

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Improvement Actions
            </h2>
            <div className="bg-green-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4">
                Based on monitoring results, we implement the following actions:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "Regular performance reviews and adjustments", icon: Activity },
                  { text: "Targeted training and development programs", icon: Target },
                  { text: "Process optimization based on feedback", icon: Brain },
                  { text: "Resource reallocation as needed", icon: Users },
                  { text: "Strategic initiative updates", icon: Flag }
                ].map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <div key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                      <IconComponent className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{action.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Calendar className="w-6 h-6 mr-2" />
              Reporting Schedule
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reports.map((report, index) => {
                const IconComponent = report.icon;
                return (
                  <div key={index} className={`${report.color} p-6 rounded-lg shadow-md transform hover:scale-[1.02] transition-all duration-200`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h3 className="text-lg font-semibold text-red-800 ml-3">{report.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {report.items.map((item, i) => (
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

export default ImpactMonitoring;
