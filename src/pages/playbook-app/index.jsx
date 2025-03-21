import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, ArrowRight } from 'lucide-react';

export default function PlaybookHome() {
  const navigate = useNavigate();

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Playbook Overview</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-100">
          <h2 className="text-2xl text-red-800 mb-6">Objectives & Mission</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Primary Objective</h3>
              <p className="text-gray-700">
                To create a centralized knowledge base that serves as the single source of truth for all CCC-related information, processes, and guidelines.
              </p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Goals</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Streamline access to CCC documentation and resources</li>
                <li>Ensure consistency in CCC processes and communications</li>
                <li>Facilitate onboarding of new team members</li>
                <li>Support ongoing reference and learning needs</li>
              </ul>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Success Metrics</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Reduced time to find CCC-related information</li>
                <li>Increased consistency in CCC process execution</li>
                <li>Improved onboarding experience ratings</li>
                <li>Higher engagement with CCC resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg shadow-lg p-8 border border-gray-100">
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