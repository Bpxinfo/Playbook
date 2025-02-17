const Governance = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Governance</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Governance Structure</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The CCC governance framework ensures proper oversight, risk management, and decision-making across all initiatives.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Key Components</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Leadership Steering Committee</li>
                  <li>Project Review Board</li>
                  <li>Quality Assurance Team</li>
                  <li>Compliance Oversight</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Decision Making Framework</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Approval Levels</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Strategic Decisions - Leadership SteerCo</li>
                  <li>Project Approvals - Review Board</li>
                  <li>Operational Decisions - Project Teams</li>
                  <li>Technical Decisions - Subject Matter Experts</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Risk Management</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Key Areas</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Regulatory Compliance</li>
                  <li>Data Security</li>
                  <li>Quality Control</li>
                  <li>Resource Management</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Governance; 