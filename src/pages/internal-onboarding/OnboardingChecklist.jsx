import React from 'react';
import { BookOpen, Settings, ExternalLink } from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

const PreIntegrationPrep = () => {
  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Onboarding Checklist</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Background Information</h2>
          </div>
          <ul className="pl-6 space-y-3 text-gray-700">
            <li className="space-y-2">Playbook Review
              <ul className="space-y-2">
                <li>
                  <CheckboxItem id="background-1-1" text="Initiative goals and objectives" />
                </li>
                <li>
                  <CheckboxItem id="background-1-2" text="Current status and achievements" />
                </li>
                <li>
                  <CheckboxItem id="background-1-3" text="Key stakeholders and team structure" />
                </li>
              </ul>
            </li>
            <li className="space-y-2">Function-specific orientation
              <ul className="space-y-2">
                <li>
                  <CheckboxItem id="background-2-1" text="Tailored orientation for different roles/groups" />
                </li>
              </ul>
            </li>
            <li>
              <CheckboxItem id="background-3" text="Relevant project summaries, examples, and support resources" />
            </li>
            <li>
              <CheckboxItem id="background-4" text="CCC Project Lifecycle" />
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-red-800 mr-3" />
            <h2 className="text-2xl text-red-800">Logistics</h2>
          </div>
          <ul className="pl-6 space-y-3 text-gray-700">
            <li>
              <CheckboxItem id="logistics-1" text="Systems, request for necessary access rights and accounts" />
            </li>
            <li>
              <CheckboxItem id="logistics-2" text="Sign up for relevant CCC meetings" />
            </li>
            <li>
              <CheckboxItem id="logistics-3" text="Add proposed content for relevant agendas" />
            </li>
            <li>
              <CheckboxItem id="logistics-4" text="Introduce new members to key team members" />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PreIntegrationPrep;
