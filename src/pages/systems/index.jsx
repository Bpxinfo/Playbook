import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Database,
  Target,
  Monitor,
  ClipboardList,
  Link as LinkIcon,
  ArrowRight 
} from 'lucide-react';

const SystemsHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Internal Platforms",
      description: "Overview of all digital platforms, tools, and applications used in CCC operations.",
      path: "/systems/internal-platforms",
      icon: Monitor,
      color: "bg-purple-50"
    },
    {
      title: "Manual Systems",
      description: "Documentation of manual processes, workflows, and physical systems.",
      path: "/systems/manual-systems",
      icon: ClipboardList,
      color: "bg-green-50"
    }
  ];

  const systemHighlights = [
    {
      title: "GOptics",
      description: "ISR / Collaborative Studies platform"
    },
    {
      title: "SteepRock",
      description: "Grants and medical sponsorships portal"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Systems</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="bg-white p-3 rounded-full shadow-md mr-4">
                <Database className="w-8 h-8 text-red-800" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Systems Framework Overview
              </h2>
            </div>
            <div className="space-y-4">
                <p className="text-gray-700">
                  The systems framework is the operational backbone of the Community Cancer Collective (CCC), integrating platforms, workflows, and governance mechanisms to manage projects, ensure regulatory compliance, and support collaboration. Through structures like the GRC and LRC, it streamlines approvals, documentation, and decision-making while maintaining integrity and consistency. By transforming complex operations into repeatable processes, the framework enables CCC to scale efficiently, adapt to emerging needs, and uphold its mission to advance community-based cancer care.                </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {systemHighlights.map((highlight, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-red-800 mb-2">{highlight.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(section.path)}
                  className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="bg-white p-3 rounded-full shadow-md mr-4">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-black">{section.title}</h2>
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-800 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600 dark:text-black ml-16">{section.description}</p>
                </button>
              );
            })}
          </div>

          <section className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-black mb-4">System Access & Support</h2>
            <p className="text-gray-700 dark:text-black mb-4">
              For access to any CCC systems or technical support, please review the Internal Platforms section first. If you need additional assistance or have specific questions, use the feedback form to reach our support team.
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

export default SystemsHome;