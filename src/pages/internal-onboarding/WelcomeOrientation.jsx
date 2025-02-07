import React from 'react';

const WelcomeOrientation = () => {
  return (
    <div className="p-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Welcome Orientation (Month 1)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">A. CCC Meeting Intro</h2>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Introduction of immediate team and new members</li>
              <li>Review of initiative overview and individual's role</li>
              <li>Q&A session</li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">B. Initiative Deep Dive</h2>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>LINK to CCC Overview Detailed walkthrough of current and past initiatives</li>
              <li>LINK to CCC Overview for Explanation of ongoing projects, strategic pillars, and top priorities</li>
              <li>LINK to Systems for Introduction to tools and methodologies in use</li>
              <li>LINK to Processes &Governance</li>
            </ul>
          </section>
          
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">C. Administrative Tasks</h2>
            <ul className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Review FAQs and propose additional questions if needed</li>
              <li>Ensure functional access to all necessary systems</li>
              <li>Request access to relevant communication channels</li>
              <li>Teams CCC Channel (Link)</li>
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