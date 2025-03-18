import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ArrowRight, Layout, FileText, GitBranch, DollarSign, Award, Users } from 'lucide-react';

export default function ProjectArchetypeHome() {
  const navigate = useNavigate();

  // Color palette for main sections
  const mainSectionColors = [
    'bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500',
    'bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500',
    'bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500',
  ];

  // Color palette for project types
  const projectTypeColors = [
    'bg-gradient-to-br from-indigo-50 to-indigo-100 border-l-4 border-indigo-500',
    'bg-gradient-to-br from-pink-50 to-pink-100 border-l-4 border-pink-500',
    'bg-gradient-to-br from-yellow-50 to-yellow-100 border-l-4 border-yellow-500',
    'bg-gradient-to-br from-teal-50 to-teal-100 border-l-4 border-teal-500',
    'bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-500',
  ];

  const sections = [
    {
      title: "Objectives",
      description: "Understand the core objectives and goals of the CCC Projects, including their purpose and key success metrics.",
      path: "/project-archetype/objectives",
      icon: Book
    },
    {
      title: "CORE Principles",
      description: "Explore the fundamental CORE principles that guide our approach to community cancer care and shape our project methodologies.",
      path: "/project-archetype/core-principles",
      icon: Layout
    },
    {
      title: "Collaborative Studies",
      description: "Explore collaborative research initiatives that bring together multiple stakeholders to advance cancer care.",
      path: "/project-archetype/collaborative-studies",
      icon: Users
    },
    {
      title: "ISRs",
      description: "Learn about Investigator Sponsored Research projects and their implementation within the CCC framework.",
      path: "/project-archetype/isrs",
      icon: FileText
    },
    {
      title: "Fee For Service",
      description: "Understand the fee-for-service project model and how it supports the CCC initiative.",
      path: "/project-archetype/fee-for-service",
      icon: DollarSign
    },
    {
      title: "Sponsorships",
      description: "Discover how sponsorships work within the CCC ecosystem and their impact on community cancer care.",
      path: "/project-archetype/sponsorships",
      icon: Award
    },
    {
      title: "Grants",
      description: "Learn about grant-based projects and how they contribute to advancing community cancer care initiatives.",
      path: "/project-archetype/grants",
      icon: Award
    },
    {
      title: "CCC Project Lifecycle",
      description: "Learn about the different phases and stages of CCC projects, from inception to completion, ensuring consistent project delivery.",
      path: "/project-archetype/ccc-project-lifecycle",
      icon: GitBranch
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-gradient-to-r from-red-700 to-red-900 p-6 rounded-lg shadow-lg uppercase tracking-wider">
          Project Archetypes Overview
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            The Project Archetypes section provides a comprehensive introduction to the different types of projects within the Community Cancer Collective (CCC) initiative. Here you'll find information about project objectives, guiding principles, and the project lifecycle.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            This section has been designed to help you understand the various project types and methodologies used within the CCC, ensuring consistent implementation and successful outcomes for community cancer care initiatives.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-red-200 inline-block">Main Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(section.path)}
                className={`${mainSectionColors[index]} p-6 rounded-lg shadow-md hover:shadow-xl transition-all group text-left relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full bg-white opacity-10"></div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white mr-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-red-800" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 pr-6 mb-4">{section.description}</p>
                <div className="flex justify-end">
                  <div className="flex items-center text-red-800 font-medium group-hover:text-red-700">
                    <span className="mr-1">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b-2 border-red-200 inline-block">CCC Project Types</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(section.path)}
                className={`${projectTypeColors[index]} p-6 rounded-lg shadow-md hover:shadow-xl transition-all group text-left relative overflow-hidden`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 -mt-8 -mr-8 rounded-full bg-white opacity-10"></div>
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white mr-4 shadow-sm">
                    <IconComponent className="w-6 h-6 text-red-800" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 pr-6 mb-4">{section.description}</p>
                <div className="flex justify-end">
                  <div className="flex items-center text-red-800 font-medium group-hover:text-red-700">
                    <span className="mr-1">Learn more</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg shadow-lg p-8 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Looking for Something Specific?</h2>
        <p className="text-gray-700 mb-6">
          This section will expand as we continue to develop and refine the playbook. If you have suggestions for additional content or sections that would be helpful, please use the feedback form to let us know.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => navigate('/feedback')}
            className="bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-lg hover:from-red-800 hover:to-red-900 transition-colors inline-flex items-center shadow-md"
          >
            Submit Feedback
          </button>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-gray-700 to-gray-800 text-white px-6 py-3 rounded-lg hover:from-gray-800 hover:to-gray-900 transition-colors inline-flex items-center shadow-md"
          >
            Back to Main Menu
          </button>
        </div>
      </div>
    </div>
  );
}