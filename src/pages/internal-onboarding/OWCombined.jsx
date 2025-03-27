import React from 'react';
import { 
  BookOpen, Settings, Users, Target, ClipboardCheck, 
  HeartPulse, MessageSquare, HeartHandshake, ClipboardList 
} from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

const OWCombined = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Onboarding Checklist Section */}
        <section id="onboarding-checklist">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Onboarding Checklist</h1>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Background Information</h2>
              </div>
              <ul className="pl-6 space-y-3 text-gray-700">
                <li>
                  <h3 className="font-medium mb-2">Playbook Review</h3>
                  <ul className="space-y-2">
                    <li><CheckboxItem id="background-1-1" text="Initiative goals and objectives" /></li>
                    <li><CheckboxItem id="background-1-2" text="Current status and achievements" /></li>
                    <li><CheckboxItem id="background-1-3" text="Key stakeholders and team structure" /></li>
                  </ul>
                </li>
                <li>
                  <h3 className="font-medium mb-2">Function-specific orientation</h3>
                  <ul className="space-y-2">
                    <li><CheckboxItem id="background-2-1" text="Tailored orientation for different roles/groups" /></li>
                  </ul>
                </li>
                <li><CheckboxItem id="background-3" text="Relevant project summaries, examples, and support resources" /></li>
                <li><CheckboxItem id="background-4" text="Process OverviewCC" /></li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Logistics</h2>
              </div>
              <ul className="pl-6 space-y-3 text-gray-700">
                <li><CheckboxItem id="logistics-1" text="Systems, request for necessary access rights and accounts" /></li>
                <li><CheckboxItem id="logistics-2" text="Sign up for relevant CCC meetings" /></li>
                <li><CheckboxItem id="logistics-3" text="Add proposed content for relevant agendas" /></li>
                <li><CheckboxItem id="logistics-4" text="Introduce new members to key team members" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Welcome Orientation Section */}
        <section id="welcome-orientation">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Welcome Orientation (1 Month)</h1>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">CCC Meeting Intro</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="welcome-intro-1" text="Introduction of immediate team and new members" /></li>
                <li><CheckboxItem id="welcome-intro-2" text="Review of initiative overview and individual's role" /></li>
                <li><CheckboxItem id="welcome-intro-3" text="Q&A session" /></li>
              </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Initiative Deep Dive</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="welcome-dive-1" text="CCC Overview Detailed walkthrough of current and past initiatives" /></li>
                <li><CheckboxItem id="welcome-dive-2" text="CCC Overview for Explanation of ongoing projects, strategic pillars, and top priorities" /></li>
                <li><CheckboxItem id="welcome-dive-3" text="Systems for Introduction to tools and methodologies in use" /></li>
                <li><CheckboxItem id="welcome-dive-4" text="Processes & Governance" /></li>
              </ul>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Administrative Tasks</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="welcome-admin-1" text="Review FAQs and propose additional questions if needed" /></li>
                <li><CheckboxItem id="welcome-admin-2" text="Ensure functional access to all necessary systems" /></li>
                <li><CheckboxItem id="welcome-admin-3" text="Request access to relevant communication channels" /></li>
                <li><CheckboxItem id="welcome-admin-4" text="Teams CCC Channel" /></li>
                <li><CheckboxItem id="welcome-admin-5" text="Email groups" /></li>
                <li><CheckboxItem id="welcome-admin-6" text="Chat, etc." /></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OWCombined; 