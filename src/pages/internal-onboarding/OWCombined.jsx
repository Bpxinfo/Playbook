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
                <li><CheckboxItem id="background-4" text="CCC Project Lifecycle" /></li>
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

        {/* Ongoing Support Section */}
        <section id="ongoing-support">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Ongoing Support</h1>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Continuous Learning</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="ongoing-learn-1" text="Provide monthly updates on initiative progress and changes" /></li>
                <li><CheckboxItem id="ongoing-learn-2" text="Seek opportunities for skill development and cross-training" /></li>
                <li><CheckboxItem id="ongoing-learn-3" text="Encourage knowledge sharing and best practices" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Team Integration</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="ongoing-team-1" text="Ongoing participation in team meetings and CCC activities" /></li>
                <li><CheckboxItem id="ongoing-team-2" text="Advance initiative ideation for new projects and patient impact activities" /></li>
                <li><CheckboxItem id="ongoing-team-3" text="Seek opportunities to lead sub-projects or mentor newer members" /></li>
                <li><CheckboxItem id="ongoing-team-4" text="Participate in regular forums for idea sharing and collaborative problem-solving" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Project Execution</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="ongoing-project-1" text="Monthly status updates and progress tracking" /></li>
                <li><CheckboxItem id="ongoing-project-2" text="Monthly review of patient impact indicators, key performance indicators (KPIs) and milestones" /></li>
                <li><CheckboxItem id="ongoing-project-3" text="Quarterly strategic alignment sessions to ensure initiative goals are being met" /></li>
                <li><CheckboxItem id="ongoing-project-4" text="Participation in planning and retrospectives or formation of lessons learned" /></li>
                <li><CheckboxItem id="ongoing-project-5" text="Contribution to new project ideas, as well as risk management and mitigation strategies" /></li>
                <li><CheckboxItem id="ongoing-project-6" text="Collaboration on timely deliverables and meeting project deadlines" /></li>
                <li><CheckboxItem id="ongoing-project-7" text="Engagement in continuous improvement of project processes" /></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OWCombined; 