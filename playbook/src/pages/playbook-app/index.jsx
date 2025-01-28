import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ArrowRight } from 'lucide-react';

export default function PlaybookOverviewHome() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Objectives",
      description: "Understand the core objectives and goals of the CCC Playbook, including its purpose as a centralized knowledge base and key success metrics.",
      path: "/playbook-app-overview/objectives",
      icon: Book
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Playbook App Overview</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <p className="text-gray-700 mb-4">
            The Playbook App Overview section provides a comprehensive introduction to the CCC Playbook application. Here you'll find information about why this playbook exists, what it aims to achieve, and how it serves as a crucial resource for the Community Cancer Collective initiative.
          </p>
          <p className="text-gray-700">
            This digital platform has been designed to centralize all CCC-related information, ensuring consistent access to important documentation, processes, and guidelines. Through this systematic organization, we aim to enhance collaboration and drive better outcomes for community cancer care.
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
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all group text-left col-span-1 md:col-span-2 lg:col-span-3"
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
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Looking for Something Specific?</h2>
        <p className="text-gray-700">
          This section will expand as we continue to develop and refine the playbook. If you have suggestions for additional content or sections that would be helpful, please use the feedback form to let us know.
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