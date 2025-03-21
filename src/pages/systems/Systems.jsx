const Systems = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Systems</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Systems Overview</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <img 
                  src={systems_overview} 
                  alt="Systems Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Systems Overview Diagram</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Systems</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Research Management</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Protocol Management System</li>
                  <li>Study Documentation Portal</li>
                  <li>Data Collection Platform</li>
                  <li>Analytics Dashboard</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Collaboration Tools</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Project Management Suite</li>
                  <li>Communication Platform</li>
                  <li>Document Repository</li>
                  <li>Team Workspace</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">System Access & Security</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Access Levels</h3>
                <table className="w-full">
                  <thead className="bg-red-800 text-white">
                    <tr>
                      <th className="p-2 text-left">Role</th>
                      <th className="p-2 text-left">Access Level</th>
                      <th className="p-2 text-left">Systems</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Administrator</td>
                      <td className="p-2">Full Access</td>
                      <td className="p-2">All Systems</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Researcher</td>
                      <td className="p-2">Limited Access</td>
                      <td className="p-2">Research Tools</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Collaborator</td>
                      <td className="p-2">Basic Access</td>
                      <td className="p-2">Collaboration Tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">System Integration</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Integration Framework</h3>
                <p className="text-gray-700 mb-4">Our systems are integrated through a secure API framework that ensures seamless data flow while maintaining data integrity and security.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Real-time data synchronization</li>
                      <li>Secure API endpoints</li>
                      <li>Automated workflow triggers</li>
                      <li>Data validation checks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Benefits</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Improved efficiency</li>
                      <li>Reduced data entry errors</li>
                      <li>Enhanced collaboration</li>
                      <li>Better data consistency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Support & Training</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Resources</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Training Materials</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>User Guides</li>
                      <li>Video Tutorials</li>
                      <li>Quick Reference Cards</li>
                      <li>FAQs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Support Channels</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Help Desk</li>
                      <li>Email Support</li>
                      <li>Live Chat</li>
                      <li>Knowledge Base</li>
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

export default Systems; 