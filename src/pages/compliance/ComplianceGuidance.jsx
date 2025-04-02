import React, { useEffect } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import ImageWithZoom from '../../components/ImageWithZoom';
import advisory from '../../assets/advisory.jpg'
import legalcompliance from '../../assets/legalcompliance.jpg'
import partner from '../../assets/partner-selection.jpg'

const ComplianceGuidance = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to handle scrolling to section
    const scrollToSection = () => {
      const hash = location.hash;
      if (hash) {
        // Remove the '#' from the hash
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Add a small delay to ensure the page is fully rendered
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Scroll on mount and hash change
    scrollToSection();

    // Listen for hash changes
    window.addEventListener('hashchange', scrollToSection);

    // Cleanup
    return () => {
      window.removeEventListener('hashchange', scrollToSection);
    };
  }, [location]);

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Compliance Guidance</h1>

        <div className="space-y-6">
          <section id="overview" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
            <p className="text-gray-700 mb-4">
              The Community Cancer Collective (CCC) is committed to operating in compliance with all applicable laws, regulations, and company policies. This guidance document outlines key compliance considerations for CCC activities.
            </p>
          </section>

          <section id="key-compliance-principles" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Key Compliance Principles</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Important Compliance Notes</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li>All CCC activities must comply with applicable laws, regulations, and company policies</li>
                      <li>Consult Legal/Compliance for guidance on specific activities or questions</li>
                      <li>Document decisions and maintain records of compliance reviews</li>
                      <li>Report any compliance concerns through appropriate channels</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Full Compliance Document</h3>
                    <p className="text-gray-700 dark:text-black">
                      For the complete CCC Legal & Compliance Guidance document, please click{' '}
                      <a 
                        href="https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        here
                      </a>
                    </p>
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

export default ComplianceGuidance;

/*
<section id="ccc-independence" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Independence</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 mb-4">
                To maintain the independence of the CCC as a patient-focused initiative, CCC partners and projects must be selected solely based on established criteria with a clear firewall between the CCC program and certain Gilead activities and personnel.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>CCC partners and projects must not be selected for any commercial purpose. Sales personnel must not be involved in the development, review, approval, or oversight of CCC projects and engagements.</li>
                <li>Gilead personnel must not discuss Gilead products with CCC partners as part of the review, approval, or oversight of CCC projects.</li>
                <li>Gilead personnel must not conduct any commercial analysis of CCC partners or projects (e.g., "return on investment" analysis, institutional formulary analyses, payor mix analyses, market access analyses, etc.).</li>
                <li>The CCC should not provide any additional leeway or authority to Medical or Commercial (including Managed Markets) teams that they do not already have under current Gilead policies.</li>
                <li>Sales is prohibited from leveraging the CCC as a sales tactic for new and existing customers and prohibited from developing or proposing any projects for the CCC.</li>
                <li>Sales must not be involved with any CCC project. To the extent Sales receives questions about the CCC, Sales personnel must refer all questions to the CCC team.</li>
                <li>The CCC should not fund research studies that are used as a pretense to promote Gilead products.</li>
              </ul>
            </div>
          </section>

          <section id="project-operations" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Operations</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Project Review Process</h3>
                    <p className="text-gray-700 mb-2 dark:text-black">
                      CCC project proposals are subject to either a Standard Project or Complex Project review process:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li><strong>Standard Projects:</strong> Traditional activities that fall within existing Gilead policies and procedures</li>
                      <li><strong>Complex Projects:</strong> Those that do not fall within Gilead's existing policies and require additional review by the CCC Adjudication Committee</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">CCC Adjudication Committee</h3>
                    <p className="text-gray-700 mb-2 dark:text-black">
                      The CCC Adjudication Committee reviews Complex Projects and includes representatives from:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li>Medical Affairs</li>
                      <li>Medical Governance</li>
                      <li>Legal</li>
                      <li>Compliance</li>
                    </ul>
                    <p className="text-gray-700 mt-2 mb-2 dark:text-black">
                      No representatives from the Commercial organization, including Managed Markets, will sit on the Adjudication Committee.
                    </p>
                    <p className="text-gray-700 mb-2 dark:text-black">
                      <strong>Committee Responsibilities:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li>Provide initial review and approval of Complex Project proposals</li>
                      <li>Evaluate if projects fit within the CCC's objectives and strategic pillars</li>
                      <li>Evaluate if projects fit within the Partner and Project criteria</li>
                      <li>If initially approved, route the CCC project to the appropriate functional department for further review and approval</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Compliance Monitoring</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li>The CCC will be subject to monitoring to ensure that all operations are following Gilead policies and procedures</li>
                      <li>Project updates, results, and data may be shared with cross-functional teams in accordance with existing Gilead policies</li>
                      <li>All CCC materials used with Customers must abide by internal review approval requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 dark:text-black" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 dark:text-black">Functional Department Review and Updates</h3>
                    <p className="text-gray-700 mb-2 dark:text-black">
                      Once CCC projects have been routed to the appropriate department, the following processes apply:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-black">
                      <li>The primary Gilead department(s) responsible for the CCC project will oversee all operations of the project</li>
                      <li>This includes the department's standard process for submission, review, approval, documentation retention, management, tracking, and reporting/sharing</li>
                      <li>Data and/or results may be shared with cross-functional teams in accordance with existing Gilead policies</li>
                      <li>Project updates may be provided to other functional teams and Gilead leadership (VP and above if in Commercial)</li>
                      <li>CCC project results, data, and output may be used in internal or external materials subject to relevant Gilead policies and procedures for review and approval of materials</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="personnel-interactions" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Personnel Interactions</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 mb-4">
                Guidelines for interactions between Gilead personnel and Customers/CCC Partners/Potential Partners:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Medical Affairs (MSLs, MVels, etc.):</strong> May speak externally about CCC</li>
                <li><strong>KADs:</strong> May speak about CCC but cannot propose or oversee clinical studies, interventional studies, or others overseen by institutional review boards. May propose or oversee Health Equity and Education projects</li>
                <li><strong>Home Office (Marketing, PA, Government Affairs, etc.):</strong> May speak about CCC, but limited to CCC strategic objectives and pillars</li>
                <li><strong>Commercial Field (RMDs, TSs, RDs, EDs, ONEs, FRMs):</strong> May NOT speak about CCC</li>
              </ul>
              <p className="text-gray-700 mt-4 mb-2"><strong>Additional Guidelines:</strong></p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Only trained Gilead field personnel may discuss the CCC in detail with Customers using approved materials and talking points</li>
                <li>The CCC should not be discussed in connection with a Customer's clinical pathway, protocol, or other formulary-equivalent</li>
                <li>CCC projects should never be discussed in the context of contract negotiations for discounts or rebates on Gilead products</li>
                <li>If a Customer is or becomes a CCC partner, Commercial Sales Field Personnel should not discuss CCC with the Customer or attend any CCC-related meetings</li>
              </ul>
            </div>
          </section>

          <section id="resources-and-support" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Resources and Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Compliance Team</h3>
                <p className="text-gray-700">Contact the compliance team for guidance and support</p>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Legal Department</h3>
                <p className="text-gray-700">Consult legal for complex compliance matters</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Legal Compliance</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={legalcompliance} 
                alt="Legal Compliance" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
            </div>
          </section> */