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
      <div className="max-w-4xl mx-auto">
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
                  <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Important Compliance Notes</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>All CCC activities must comply with applicable laws, regulations, and company policies</li>
                      <li>Consult Legal/Compliance for guidance on specific activities or questions</li>
                      <li>Document decisions and maintain records of compliance reviews</li>
                      <li>Report any compliance concerns through appropriate channels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="compliance-requirements" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Compliance Requirements</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">General Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Follow established processes and procedures</li>
                      <li>Maintain appropriate documentation</li>
                      <li>Ensure transparency in decision-making</li>
                      <li>Protect confidential information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">Project-Specific Requirements</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Obtain necessary approvals before project initiation</li>
                      <li>Follow project governance framework</li>
                      <li>Maintain project documentation</li>
                      <li>Regular compliance reviews during project lifecycle</li>
                    </ul>
                  </div>
                </div>
              </div>
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

          <section id="ccc-independence" className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">CCC Independence</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <p className="text-gray-700 mb-4">
                To maintain the independence of the CCC as a patient-focused initiative, CCC partners and projects must be selected solely based on established criteria with a clear firewall between the CCC program and certain Gilead activities and personnel.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Commercial influences must be strictly separated from CCC operations - sales personnel cannot be involved in project development or oversight</li>
                <li>No commercial analyses (ROI, formulary, market access) can be conducted for CCC partners or projects</li>
                <li>The CCC framework does not grant additional authority beyond existing Gilead policies</li>
                <li>Sales teams are explicitly prohibited from leveraging CCC for customer engagement</li>
                <li>CCC projects must not be used as a vehicle to promote Gilead products</li>
              </ul>
            </div>
          </section>

          {/* <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Advisory Council</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={advisory} 
                alt="Advisory Council" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
            </div>
          </section> */}

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Legal Compliance</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={legalcompliance} 
                alt="Legal Compliance" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
            </div>
          </section>

          {/* <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Partner Selection</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={partner} 
                alt="Partner Selection" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default ComplianceGuidance;
