import React from 'react';

const WelcomeOrientation = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Welcome Orientation</h1>
      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">A. CCC Meeting Intro</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>Introduction of immediate team and new members</li>
            <li>Review of initiative overview and individual's role</li>
            <li>Q&A session</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">B. Initiative Deep Dive</h2>
          <ul className="list-decimal pl-6 text-gray-700">
            <li>LINK to CCC Overview Detailed walkthrough of current and past initiatives</li>
            <li>LINK to CCC Overview for Explanation of ongoing projects, strategic pillars, and top priorities</li>
            <li>LINK to Systems for Introduction to tools and methodologies in use</li>
            <li>LINK to Processes, Governance, and Ways of Working</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl text-red-800 mb-4">C. Administrative Tasks</h2>
          <ul className="list-decimal pl-6 text-gray-700">
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
  );
};

export default WelcomeOrientation;
