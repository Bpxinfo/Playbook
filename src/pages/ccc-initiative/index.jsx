import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Target, MessageSquare, Users, BookText, ArrowRight, HelpCircle, Heart } from 'lucide-react';
import CCC_Overview from '../../assets/CCC_Overview.jpg';
import ImageWithZoom from '../../components/ImageWithZoom';

const CCCInitiativeHome = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Strategic Pillars",
      description: "Explore our three key focus areas: Generating Evidence, Addressing Disparities, and Enabling Education.",
      path: "/ccc-overview/strategic-pillars",
      icon: Target,
      color: "bg-green-50"
    },
    {
      title: "Key Messaging",
      description: "Access our core messaging framework, including our North Star, Mission, and Vision statements.",
      path: "/ccc-overview/key-messaging",
      icon: MessageSquare,
      color: "bg-purple-50"
    },
    {
      title: "Stakeholders",
      description: "Understand the roles and responsibilities of key stakeholders in the CCC initiative.",
      path: "/ccc-overview/stakeholders",
      icon: Users,
      color: "bg-yellow-50"
    },
    {
      title: "Patient Impact",
      description: "Learn about how CCC initiatives are making a difference in patient outcomes and care quality.",
      path: "/ccc-overview/patient-impact",
      icon: Heart,
      color: "bg-pink-50"
    },
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Overview</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4">Objectives & Mission</h2>
            <div className="space-y-4">
                <p className="text-gray-700">
                  The Community Cancer Collective (CCC) is a patient-focused initiative dedicated to addressing care gaps for cancer patients in community settings. To achieve this mission, Gilead partners with community-based institutions and national support organizations to identify opportunities, strengthen site capabilities, and deliver impactful solutions for diverse oncology populations. Through collaborative initiatives and open stakeholder communication, Gilead supports improved outcomes in community oncology care.                </p>
            </div>
          </section>

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
                      <div className="bg-white p-3 rounded-full shadow-md mr-3">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-800 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <p className="text-gray-600">{section.description}</p>
                </button>
              );
            })}
          </div>
 

          <section className="bg-gray-50 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Getting Started</h2>
            <p className="text-gray-700 mb-4">
              We recommend starting with the Strategic Pillars to understand our key focus areas, followed by exploring Key Messaging to learn about our mission and vision.
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

export default CCCInitiativeHome;