import React from 'react';

const ComplianceGuidance = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Processes / Compliance Guidance
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">Compliance Guidance</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">
            The CCC Compliance Framework provides comprehensive guidelines to ensure all initiatives adhere to regulatory requirements, ethical standards, and organizational policies while maintaining focus on improving patient outcomes in community settings.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Key Compliance Areas</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Regulatory Compliance</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Adherence to healthcare regulations and guidelines</li>
                <li>Documentation and record-keeping requirements</li>
                <li>Privacy and data protection standards</li>
                <li>Reporting obligations and deadlines</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Ethical Standards</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Patient privacy and confidentiality measures</li>
                <li>Informed consent processes</li>
                <li>Conflict of interest management</li>
                <li>Fair treatment and non-discrimination policies</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Risk Management</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Risk assessment procedures</li>
                <li>Mitigation strategies and controls</li>
                <li>Incident reporting and response protocols</li>
                <li>Regular compliance monitoring and audits</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Compliance Resources</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Training Materials</h3>
                <p className="text-gray-700">
                  Comprehensive training modules covering all aspects of CCC compliance requirements, updated regularly to reflect current regulations and best practices.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Documentation Templates</h3>
                <p className="text-gray-700">
                  Standardized forms and templates ensuring consistent compliance documentation across all CCC initiatives.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Support Channels</h3>
                <p className="text-gray-700">
                  Direct access to compliance experts and resources for guidance on complex compliance matters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComplianceGuidance;