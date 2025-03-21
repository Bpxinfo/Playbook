const ProcessFramework = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Process Framework</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Framework Overview</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The CCC Process Framework provides a structured approach to managing and executing projects, ensuring consistency and compliance across all initiatives.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-red-800 mb-2">Key Components</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Project Initiation and Planning</li>
                  <li>Execution and Monitoring</li>
                  <li>Quality Control and Assurance</li>
                  <li>Documentation and Reporting</li>
                  <li>Review and Approval Workflows</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Guidelines</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Follow these guidelines to ensure effective process implementation:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Adhere to established workflows and procedures</li>
                <li>Maintain proper documentation at each stage</li>
                <li>Follow review and approval protocols</li>
                <li>Monitor progress and track milestones</li>
                <li>Ensure compliance with regulatory requirements</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProcessFramework; 