import React from 'react';
import { Users, BookOpen, Settings, ExternalLink } from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

const WelcomeOrientation = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Welcome Orientation (1 Month)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">CCC Meeting Intro</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="welcome-intro-1" text="Introduction of immediate team and new members" />
              </li>
              <li>
                <CheckboxItem id="welcome-intro-2" text="Review of initiative overview and individual's role" />
              </li>
              <li>
                <CheckboxItem id="welcome-intro-3" text="Q&A session" />
              </li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Initiative Deep Dive</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="welcome-dive-1" text="CCC Overview Detailed walkthrough of current and past initiatives" />
              </li>
              <li>
                <CheckboxItem id="welcome-dive-2" text="CCC Overview for Explanation of ongoing projects, strategic pillars, and top priorities" />
              </li>
              <li>
                <CheckboxItem id="welcome-dive-3" text="Systems for Introduction to tools and methodologies in use" />
              </li>
              <li>
                <CheckboxItem id="welcome-dive-4" text="Processes & Governance" />
              </li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Administrative Tasks</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="welcome-admin-1" text="Review FAQs and propose additional questions if needed" />
              </li>
              <li>
                <CheckboxItem id="welcome-admin-2" text="Ensure functional access to all necessary systems" />
              </li>
              <li>
                <CheckboxItem id="welcome-admin-3" text="Request access to relevant communication channels" />
              </li>
              <li>
                <CheckboxItem id="welcome-admin-4" text="Teams CCC Channel" />
              </li>
              <li>
                <CheckboxItem id="welcome-admin-5" text="Email groups" />
              </li>
              <li>
                <CheckboxItem id="welcome-admin-6" text="Chat, etc." />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOrientation;