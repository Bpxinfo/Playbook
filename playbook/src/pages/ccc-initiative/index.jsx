import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Building, Target, MessageSquare, Users, BookText, ArrowRight } from 'lucide-react';

export default function CCCInitiativeHome() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Objectives and CCC Overview",
      description: "Learn about our mission to address gaps in care for patients in non-academic settings through community collaboration.",
      path: "/ccc-initiative/objectives-and-ccc-overview",
      icon: Building,
      color: "bg-blue-50"
    },
    {
      title: "Strategic Pillars",
      description: "Explore our three key focus areas: Generating Evidence, Addressing Disparities, and Enabling Education.",
      path: "/ccc-initiative/strategic-pillars",
      icon: Target,
      color: "bg-green-50"
    },
    {
      title: "Key Messaging",
      description: "Access our core messaging framework, including our North Star, Mission, and Vision statements.",
      path: "/ccc-initiative/key-messaging",
      icon: MessageSquare,
      color: "bg-purple-50"
    },
    {
      title: "Stakeholders",
      description: "Understand the roles and responsibilities of key stakeholders in the CCC initiative.",
      path: "/ccc-initiative/stakeholders",
      icon: Users,
      color: "bg-yellow-50"
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-red-800 mb-6">CCC Initiative Overview</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The Community Cancer Collective (CCC) is a transformative initiative focused on improving cancer care in community settings. By fostering collaborations with treatment sites nationwide, we work to bridge care gaps and enhance patient outcomes through evidence-based approaches.
          </p>
          <p className="text-gray-700">
            This section provides a comprehensive overview of the initiative, including our strategic framework, key messages, and the diverse stakeholders who contribute to our mission of elevating community cancer care.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <ArrowRight className="w-5 h-5 text-red-800 transform group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-gray-600">{section.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Getting Started</h2>
        <p className="text-gray-700 mb-4">
          We recommend starting with the Objectives and CCC Overview to gain a foundational understanding of our initiative, followed by exploring our Strategic Pillars to learn about our key focus areas.
        </p>
        <div className="mt-4 flex gap-4">
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