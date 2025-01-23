import React from 'react';

const Timeline = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-red-800 mb-8 text-center">Timeline</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Communication Timeline</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            <div className="space-y-8">
              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 1: Initial Communication</h3>
                  <p className="text-gray-700">Establish initial communication channels and protocols</p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Set up communication infrastructure</li>
                    <li>Define key stakeholders and roles</li>
                    <li>Create communication templates</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 2: Regular Updates</h3>
                  <p className="text-gray-700">Implement regular communication schedule</p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Weekly team updates</li>
                    <li>Monthly stakeholder reports</li>
                    <li>Quarterly reviews</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 3: Feedback & Adjustment</h3>
                  <p className="text-gray-700">Gather feedback and optimize communication</p>
                  <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                    <li>Collect stakeholder feedback</li>
                    <li>Analyze communication effectiveness</li>
                    <li>Implement improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Key Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Q1 2024</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Communication infrastructure setup</li>
                <li>Initial stakeholder engagement</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Q2 2024</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Regular update schedule implementation</li>
                <li>First quarterly review</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Q3 2024</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Feedback collection and analysis</li>
                <li>Process optimization</li>
              </ul>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Q4 2024</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Year-end review</li>
                <li>Planning for next year</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Timeline;