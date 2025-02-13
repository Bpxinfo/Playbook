const InternalOnboarding = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Internal Onboarding</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Onboarding Overview</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={onboarding_overview} 
                  alt="Onboarding Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Onboarding Process Overview</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Key Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Pre-Onboarding</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>System Access Request</li>
                  <li>Documentation Review</li>
                  <li>Initial Training Schedule</li>
                  <li>Resource Allocation</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">First Week</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Team Introduction</li>
                  <li>System Training</li>
                  <li>Process Overview</li>
                  <li>Initial Assignments</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Training Program</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Core Training Modules</h3>
                <table className="w-full">
                  <thead className="bg-red-800 text-white">
                    <tr>
                      <th className="p-2 text-left">Module</th>
                      <th className="p-2 text-left">Duration</th>
                      <th className="p-2 text-left">Format</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">System Overview</td>
                      <td className="p-2">2 hours</td>
                      <td className="p-2">Virtual Session</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Process Training</td>
                      <td className="p-2">4 hours</td>
                      <td className="p-2">Workshop</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Documentation</td>
                      <td className="p-2">2 hours</td>
                      <td className="p-2">Self-paced</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Resources & Support</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Available Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Documentation</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Process Guides</li>
                      <li>System Manuals</li>
                      <li>Best Practices</li>
                      <li>Templates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Team</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Team Lead</li>
                      <li>Technical Support</li>
                      <li>Process Expert</li>
                      <li>HR Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Milestones & Checkpoints</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">30-60-90 Day Plan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">30 Days</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Complete Training</li>
                      <li>System Access</li>
                      <li>Initial Projects</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">60 Days</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Process Mastery</li>
                      <li>Team Integration</li>
                      <li>Project Contribution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">90 Days</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Independent Work</li>
                      <li>Process Improvement</li>
                      <li>Full Integration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InternalOnboarding; 