import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ArrowRight, Layout, FileText, GitBranch, DollarSign, Award, Users } from 'lucide-react';

export default function ProjectArchetypeHome() {
  const navigate = useNavigate();

  const mainSections = [
    {
      title: "CCC Project Lifecycle",
      description: "Learn about the different phases and stages of CCC projects, from inception to completion, ensuring consistent project delivery.",
      path: "/project-archetype/ccc-project-lifecycle",
      icon: GitBranch,
      color: "bg-purple-50"
    }
  ];

  const projectTypes = [
    {
      title: "Collaborative Studies",
      description: "Explore collaborative research initiatives that bring together multiple stakeholders to advance cancer care.",
      path: "/project-archetype/collaborative-studies",
      icon: Users,
      color: "bg-green-50"
    },
    {
      title: "ISRs",
      description: "Learn about Investigator Sponsored Research projects and their implementation within the CCC framework.",
      path: "/project-archetype/isrs",
      icon: FileText,
      color: "bg-yellow-50"
    },
    {
      title: "Fee For Service",
      description: "Understand the fee-for-service project model and how it supports the CCC initiative.",
      path: "/project-archetype/fee-for-service",
      icon: DollarSign,
      color: "bg-orange-50"
    },
    {
      title: "Sponsorships",
      description: "Discover how sponsorships work within the CCC ecosystem and their impact on community cancer care.",
      path: "/project-archetype/sponsorships",
      icon: Award,
      color: "bg-pink-50"
    },
    {
      title: "Grants",
      description: "Learn about grant-based projects and how they contribute to advancing community cancer care initiatives.",
      path: "/project-archetype/grants",
      icon: Award,
      color: "bg-indigo-50"
    }
  ];

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Project Archetypes Overview</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Framework Overview</h2>
          <div className="space-y-4">
              <p className="text-gray-700">
              The CCC project archetypes framework streamlines the management of four key initiative types—collaborative studies, fee-for-service projects, sponsorships, and grants—by providing clear guidelines that ensure alignment with core principles, operational excellence, and regulatory compliance. Each archetype supports CCC's mission to elevate partners and improve community patient impact through structured governance, community trust-building, and tailored education.
              </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Core Principles</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              Building on our North Star - Elevating Partners to Impact Community Patients – the CCC seeks to accomplish our Strategic Pillars through the Core Principles that address each pillar.
            </p>
            
            <h3 className="text-xl text-red-800 mb-4">Core Principles:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Address unmet patient needs</li>
              <li>Enable community sites to better serve patients</li>
              <li>Build trust within communities</li>
              <li>Develop enabling education that is Right Sized, Personalized</li>
              <li>Create intentional linkages between projects, data, and advocate voices</li>
              <li>Support change opportunities that positively impact partners, communities, patients</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">Main Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <button
                key={index}
                onClick={() => navigate(section.path)}
                className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left relative`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-white p-3 rounded-full shadow-md mr-3">
                    <IconComponent className="w-6 h-6 text-red-800" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 pr-6">{section.description}</p>
                <ArrowRight className="w-5 h-5 text-red-800 absolute right-4 top-1/2 -translate-y-1/2" />
              </button>
            );
          })}
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-800 mb-6 dark:text-white">CCC Project Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {projectTypes.map((section, index) => {
          const IconComponent = section.icon;
          return (
            <button
              key={index}
              onClick={() => navigate(section.path)}
              className={`${section.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left relative`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-full shadow-md mr-3">
                  <IconComponent className="w-6 h-6 text-red-800" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              </div>
              <p className="text-gray-600 pr-6">{section.description}</p>
              <ArrowRight className="w-5 h-5 text-red-800 absolute right-4 top-1/2 -translate-y-1/2" />
            </button>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 dark:text-white">Looking for Something Specific?</h2>
        <p className="text-gray-700 mb-4">
          This section will expand as we continue to develop and refine the playbook. If you have suggestions for additional content or sections that would be helpful, please use the feedback form to let us know.
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