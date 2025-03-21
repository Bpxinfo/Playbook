import React from 'react';
import { Users, BookOpen, Settings, ExternalLink } from 'lucide-react';

const WelcomeOrientation = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Welcome Orientation (Month 1)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">CCC Meeting Intro</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Introduction of immediate team and new members</li>
              <li>Review of initiative overview and individual's role</li>
              <li>Q&A session</li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Initiative Deep Dive</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span>CCC Overview Detailed walkthrough of current and past initiatives</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </li>
              <li className="flex items-center gap-2">
                <span>CCC Overview for Explanation of ongoing projects, strategic pillars, and top priorities</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </li>
              <li className="flex items-center gap-2">
                <span>Systems for Introduction to tools and methodologies in use</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </li>
              <li className="flex items-center gap-2">
                <span>Processes & Governance</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Administrative Tasks</h2>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Review FAQs and propose additional questions if needed</li>
              <li>Ensure functional access to all necessary systems</li>
              <li>Request access to relevant communication channels</li>
              <li className="flex items-center gap-2">
                <span>Teams CCC Channel</span>
                <ExternalLink className="w-4 h-4 text-blue-600" />
              </li>
              <li>Email groups</li>
              <li>Chat, etc.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOrientation;