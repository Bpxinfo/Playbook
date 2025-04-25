import React from 'react';
import { 
  BookOpen, Settings, Users, Target, ClipboardCheck, 
  HeartPulse, MessageSquare, HeartHandshake, ClipboardList 
} from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

const CombinedOnboarding = () => {
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

        {/* Immerse and Contribute Section */}
        <section id="immerse-contribute">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Immerse and Contribute (1-2 months)</h1>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Shadowing and Learning</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="immerse-shadow-1" text="Partner with a CCC Champion or manager in your group for guidance and questions" /></li>
                <li><CheckboxItem id="immerse-shadow-2" text="Attend ongoing meetings to observe dynamics, learn how to best contribute" /></li>
                <li><CheckboxItem id="immerse-shadow-3" text="Read and understand recent decisions, project updates and discussions" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Hands-on Integration</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="immerse-hands-1" text="Take on small, manageable tasks related to current projects" /></li>
                <li><CheckboxItem id="immerse-hands-2" text="Where needed, ask for close supervision and feedback" /></li>
                <li><CheckboxItem id="immerse-hands-3" text="Ask questions and seek clarifications" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <HeartHandshake className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Relationship Building</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="immerse-relation-1" text="Engage in one-on-one meetings with key collaborators" /></li>
                <li><CheckboxItem id="immerse-relation-2" text="Attend team events and participate in CCC outreach activities, ensure you are added to the CCC Roster in Teams" /></li>
                <li><CheckboxItem id="immerse-relation-3" text="Understand and introduce yourself to cross-functional CCC stakeholders via CCC Teams space" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ClipboardList className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Project Updates</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="immerse-project-1" text="Share new project concepts and brainstorm potential innovations" /></li>
                <li><CheckboxItem id="immerse-project-2" text="Provide regular monthly status updates on ongoing projects and milestones being lead" /></li>
                <li><CheckboxItem id="immerse-project-3" text="Discuss challenges and potential solutions encountered during project execution" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Deepen Engagement Section */}
        <section id="deepen-engagement">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Deepen Engagement (2-4 months)</h1>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Increasing Responsibility</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="deepen-resp-1" text="Lead and oversee more substantial milestone tasks or entire projects" /></li>
                <li><CheckboxItem id="deepen-resp-2" text="Leverage CCC resources and learnings to independently problem-solve" /></li>
                <li><CheckboxItem id="deepen-resp-3" text="Facilitate direct communication with stakeholders, gauge risks, and issues" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <BookOpen className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Knowledge Acquisition</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="deepen-know-1" text="Digest current roadmap, historical project data, and decisions" /></li>
                <li><CheckboxItem id="deepen-know-2" text="Request targeted training on initiative-specific skills or knowledge" /></li>
                <li><CheckboxItem id="deepen-know-3" text="Participate in or review past relevant internal or external training" /></li>
                <li><CheckboxItem id="deepen-know-4" text="Develop Lessons Learned for institutional engagement, projects, and milestones" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ClipboardCheck className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Progress Review</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="deepen-progress-1" text="Weekly check-ins with supervisor" /></li>
                <li><CheckboxItem id="deepen-progress-2" text="Mid-point (2-week) review of integration progress" /></li>
                <li><CheckboxItem id="deepen-progress-3" text="Adjust onboarding plan as needed based on progress and feedback" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <HeartPulse className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Capture Patient Impact</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="deepen-impact-1" text="Understand Value Creation through the Patient Impact Model" /></li>
                <li><CheckboxItem id="deepen-impact-2" text="Map activities and impacts across relevant projects" /></li>
                <li><CheckboxItem id="deepen-impact-3" text="Report Patient Impact generated by projects being run" /></li>
                <li><CheckboxItem id="deepen-impact-4" text="Monitor indicators of value as a measure of success" /></li>
                <li><CheckboxItem id="deepen-impact-5" text="LINK to Impact Form" /></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Full Integration Section */}
        <section id="full-integration">
          <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Full Integration (5-6 months)</h1>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <ClipboardCheck className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Comprehensive Review</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="full-review-1" text="Lead a retrospective on initiative goals and current status" /></li>
                <li><CheckboxItem id="full-review-2" text="Showcase key contributions and measurable impact to date" /></li>
                <li><CheckboxItem id="full-review-3" text="Propose areas for personal growth and initiative advancement" /></li>
                <li><CheckboxItem id="full-review-4" text="Develop a spotlight on the project you lead for sharing broadly" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Forward Planning</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="full-planning-1" text="Develop and present a proposed roadmap of new projects for the next 6-12 months" /></li>
                <li><CheckboxItem id="full-planning-2" text="Initiate cross-functional and multi-institutional RFP collaborations to drive innovation" /></li>
                <li><CheckboxItem id="full-planning-3" text="Demonstrate alignment with organizational leadership goals with broader initiative objectives" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <MessageSquare className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Feedback and Refinement</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="full-feedback-1" text="Provide insights to improve the onboarding process for future leaders" /></li>
                <li><CheckboxItem id="full-feedback-2" text="Identify opportunities to fill organizational knowledge gaps" /></li>
                <li><CheckboxItem id="full-feedback-3" text="Establish a peer mentoring program to support team growth" /></li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-800 mr-3" />
                <h2 className="text-2xl text-red-800">Leadership and External Engagement</h2>
              </div>
              <ul className="pl-6 space-y-2 text-gray-700">
                <li><CheckboxItem id="full-leadership-1" text="Spearhead a key project or workstream within the initiative" /></li>
                <li><CheckboxItem id="full-leadership-2" text="Represent the initiative at internal and external events or conferences" /></li>
                <li><CheckboxItem id="full-leadership-3" text="Develop and implement a communication strategy to promote initiative successes" /></li>
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

export default CombinedOnboarding; 