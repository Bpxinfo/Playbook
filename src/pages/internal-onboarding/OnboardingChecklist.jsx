import React from 'react';
import { BookOpen, Settings, ExternalLink } from 'lucide-react';

const PreIntegrationPrep = () => {
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Onboarding Checklist</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Background Information</h2>
          </div>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li className="space-y-2">Playbook Review
              <ul className="list-disc pl-6 mt-2">
                <li className="flex items-center gap-2">
                  <span>Initiative goals and objectives</span>
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </li>
                <li className="flex items-center gap-2">
                  <span>Current status and achievements</span>
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </li>
                <li className="flex items-center gap-2">
                  <span>Key stakeholders and team structure</span>
                  <ExternalLink className="w-4 h-4 text-blue-600" />
                </li>
              </ul>
            </li>
            <li className="space-y-2">Function-specific orientation
              <ul className="list-disc pl-6 mt-2">
                <li>Tailored orientation for different roles/groups</li>
              </ul>
            </li>
            <li className="flex items-center gap-2">
              <span>Relevant project summaries, examples, and support resources</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </li>
            <li className="flex items-center gap-2">
              <span>Process OverviewCC</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Logistics</h2>
          </div>
          <ul className="list-decimal pl-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <span>Systems, request for necessary access rights and accounts</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </li>
            <li className="flex items-center gap-2">
              <span>Sign up for relevant CCC meetings</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </li>
            <li className="flex items-center gap-2">
              <span>Add proposed content for relevant agendas</span>
              <ExternalLink className="w-4 h-4 text-blue-600" />
            </li>
            <li>Introduce new members to key team members</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PreIntegrationPrep;
