import React from 'react';

const ImmerseContribute = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Immerse and Contribute (1-2 months)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">A. Shadowing and Learning</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Partner with a CCC Champion or manager in your group for guidance and questions</li>
              <li>Attend ongoing meetings to observe dynamics, learn how to best contribute</li>
              <li>Read and understand recent decisions, project updates and discussions</li>
            </ol>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">B. Hands-on Integration</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Take on small, manageable tasks related to current projects</li>
              <li>Where needed, ask for close supervision and feedback</li>
              <li>Ask questions and seek clarifications</li>
            </ol>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">C. Relationship Building</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Engage in one-on-one meetings with key collaborators</li>
              <li>Attend team events and participate in CCC outreach activities, ensure you are added to the CCC Roster in Teams</li>
              <li>Understand and introduce yourself to cross-functional CCC stakeholders via CCC Teams space</li>
            </ol>
          </section>
          <section className="bg-white shadow-md rounded-lg p-6 text-left">
            <h2 className="text-2xl text-red-800 mb-4">D. Project Updates</h2>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Share new project concepts and brainstorm potential innovations</li>
              <li>Provide regular monthly status updates on ongoing projects and milestones being lead</li>
              <li>Discuss challenges and potential solutions encountered during project execution</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ImmerseContribute;