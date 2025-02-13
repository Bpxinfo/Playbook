const Overview = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Playbook Overview</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Purpose & Scope</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-4">The CCC Playbook serves as a comprehensive guide for internal and external stakeholders, providing structured information about our processes, systems, and best practices.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Objectives</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Standardize processes</li>
                      <li>Improve efficiency</li>
                      <li>Ensure compliance</li>
                      <li>Enable collaboration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Target Audience</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Internal Teams</li>
                      <li>External Partners</li>
                      <li>New Members</li>
                      <li>Stakeholders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Playbook Structure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Core Sections</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>CCC Initiative</li>
                  <li>Internal Communications</li>
                  <li>Internal Engagement</li>
                  <li>Processes & Governance</li>
                  <li>Systems Overview</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Supporting Elements</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Best Practices</li>
                  <li>Templates</li>
                  <li>Guidelines</li>
                  <li>Resources</li>
                  <li>Tools</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Navigation Guide</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">How to Use the Playbook</h3>
                <table className="w-full">
                  <thead className="bg-red-800 text-white">
                    <tr>
                      <th className="p-2 text-left">Section</th>
                      <th className="p-2 text-left">Purpose</th>
                      <th className="p-2 text-left">Key Content</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Initiative</td>
                      <td className="p-2">Overview & Goals</td>
                      <td className="p-2">Mission, Vision, Values</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Communications</td>
                      <td className="p-2">Strategy & Plans</td>
                      <td className="p-2">Channels, Timeline, Impact</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Engagement</td>
                      <td className="p-2">Interaction Guide</td>
                      <td className="p-2">Methods, Tools, Metrics</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Updates & Maintenance</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Version Control</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Update Process</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Regular Reviews</li>
                      <li>Change Management</li>
                      <li>Version Tracking</li>
                      <li>Communication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Responsibilities</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Content Owners</li>
                      <li>Reviewers</li>
                      <li>Approvers</li>
                      <li>Publishers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Contact & Support</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Help Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Support Channels</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Help Desk</li>
                      <li>Documentation</li>
                      <li>Training</li>
                      <li>FAQs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Contacts</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Program Lead</li>
                      <li>Technical Support</li>
                      <li>Content Team</li>
                      <li>Admin Support</li>
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

export default Overview; 