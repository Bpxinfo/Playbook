import React from 'react';

const Objectives = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Communications Objectives</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Objectives</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our internal communications objectives are designed to ensure clear, consistent, and effective information flow throughout the CCC initiative. These objectives guide our approach to stakeholder engagement and organizational alignment.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Establish clear communication channels and protocols</li>
                <li>Ensure timely dissemination of critical information</li>
                <li>Foster transparency and open dialogue</li>
                <li>Support cross-functional collaboration</li>
                <li>Drive engagement and participation</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Communication Principles</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our communication approach is guided by the following core principles:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Clarity: Messages are clear, concise, and easily understood</li>
                <li>Consistency: Information is consistent across all channels</li>
                <li>Timeliness: Updates are provided promptly and regularly</li>
                <li>Relevance: Content is tailored to stakeholder needs</li>
                <li>Accessibility: Information is easily accessible to all stakeholders</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Success Metrics</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                We measure the success of our internal communications through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Stakeholder engagement rates and feedback</li>
                <li>Information comprehension and retention</li>
                <li>Communication channel effectiveness</li>
                <li>Cross-functional collaboration metrics</li>
                <li>Response times and action completion rates</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Objectives;