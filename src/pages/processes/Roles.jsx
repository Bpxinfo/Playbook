const Roles = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Roles & Responsibilities</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Team Roles</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Leadership Team</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Strategic direction and oversight</li>
                  <li>Resource allocation and management</li>
                  <li>Stakeholder engagement</li>
                  <li>Program governance</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Project Managers</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Day-to-day project coordination</li>
                  <li>Timeline management</li>
                  <li>Team coordination</li>
                  <li>Progress reporting</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Support Functions</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Technical Team</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>System maintenance and support</li>
                  <li>Technical implementation</li>
                  <li>Data management</li>
                  <li>Security oversight</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Administrative Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Documentation management</li>
                  <li>Meeting coordination</li>
                  <li>Communication support</li>
                  <li>Resource scheduling</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Stakeholder Responsibilities</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Internal Stakeholders</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Project review and approval</li>
                  <li>Resource commitment</li>
                  <li>Strategic alignment</li>
                  <li>Performance monitoring</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">External Partners</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Project execution</li>
                  <li>Data sharing</li>
                  <li>Quality assurance</li>
                  <li>Compliance adherence</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Roles; 