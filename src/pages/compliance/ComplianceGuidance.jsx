import React, { useEffect } from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import { useLocation } from 'react-router-dom';
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
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Compliance Guidance</h1>

      <div className="space-y-8">
        <section id="overview" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
          <p className="text-gray-700 mb-4">
            The Community Cancer Collective (CCC) is committed to operating in compliance with all applicable laws, regulations, and company policies. This guidance document outlines key compliance considerations for CCC activities.
          </p>
        </section>

        <section id="key-compliance-principles" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Key Compliance Principles</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-yellow-800 mb-2">Important Compliance Notes</h3>
                <ul className="list-disc pl-5 space-y-2 text-yellow-700">
                  <li>All CCC activities must comply with applicable laws, regulations, and company policies</li>
                  <li>Consult Legal/Compliance for guidance on specific activities or questions</li>
                  <li>Document decisions and maintain records of compliance reviews</li>
                  <li>Report any compliance concerns through appropriate channels</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="compliance-requirements" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Compliance Requirements</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-blue-800 mb-2">General Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-700">
                  <li>Follow established processes and procedures</li>
                  <li>Maintain appropriate documentation</li>
                  <li>Ensure transparency in decision-making</li>
                  <li>Protect confidential information</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-blue-800 mb-2">Project-Specific Requirements</h3>
                <ul className="list-disc pl-5 space-y-2 text-blue-700">
                  <li>Obtain necessary approvals before project initiation</li>
                  <li>Follow project governance framework</li>
                  <li>Maintain project documentation</li>
                  <li>Regular compliance reviews during project lifecycle</li>
                </ul>
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

        <section id="ccc-strategy-development" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">CCC Strategy Development</h2>
          {/* Advisory Council */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">CCC Advisory Council</h3>
            <div className="mb-8">
              <img 
                src={advisory} 
                alt="CCC Overview" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">CCC Advisory Council</p>
            </div>
          </div>
          
          {/* Expert Advisors */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">CCC Expert Advisors</h3>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Selection of Expert Advisors must follow objective criteria based on demonstrated expertise and experience in CCC focus areas, explicitly moving beyond titles or commercial relationships and ensuring diversity across both major centers and community oncology institutions, with no more than 50% from initial CCC partner sites. </li>
              <li>All Expert Advisor engagements must align with Gilead's existing U.S. BCM policies for Advisory Boards and require clear business justification through detailed documentation pre-approved by Legal/Compliance teams. </li>
              <li>While Expert Advisors may provide input on operational aspects of complex CCC projects, they should maintain limited influence over broader CCC project design and selection decisions. </li>
            </ol>
          </div>

          {/* Internal Collaboration */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Internal Collaboration</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Medical Affairs and Commercial teams, and other cross-functional partners may participate in strategy meetings to discuss learnings from external advisors and share relevant information on patient care challenges and gaps in the community cancer setting and collaborate on priority development for CCC projects.  </li>
              <li>Participants may include the leads for U.S. Medical and Commercial functions, leads for the U.S. Medical and Commercial Oncology teams (VP or above), as well as appropriate leads from other functional areas. Teams may interact and collaborate to the extent allowed by existing WoW and other Gilead policies and guidance noted above.  </li>
              <li>For clarity, Gilead's Sales organization must not be involved in CCC internal collaboration and strategy development meetings. </li>
            </ul>
          </div>
        </section>

        <section id="project-proposals-and-approvals" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Project Proposals & Approvals</h2>
          <div className="bg-white rounded-lg shadow p-6">
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>All proposals are subject to existing Gilead policies and procedures.  Sales teams are strictly prohibited from any involvement in project development or oversight, while Research proposals remain under Medical's exclusive purview. </li>
              <li>Project development must align with internal cross-functional strategy and may incorporate feedback from external expert advisors, all while maintaining compliance with relevant Gilead policies for each type of initiative. </li>
              <li>CCC project proposals may be proposed through an RFP process or through specific internal Gilead teams, such as USMA (including PAQ), Managed Markets, Public Affairs, Gov't Affairs, Commercial (not sales). </li>
              <li>A formal request for proposal ("RFP") process may be publicly advertised in order to solicit CCC project proposals.  Note:  The RFP must be reviewed and approved by Legal in advance of release and abide by all guidance in the RFP policy. </li>
            </ul>
          </div>
          <div className="space-y-6">
            {/* Selection Criteria */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Partner & Project Selection</h3>
              <div className="mb-8">
                <img 
                  src={partner} 
                  alt="CCC Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">CCC Partner Selection Criteria</p>
              </div>  
              
              <div>
                <p>CCC projects and partners will be selected based on neutral, objective criteria. Partners will be selected based on, but not limited to, the following criteria: </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Subject matter expertise</li>
                  <li>Data and IT infrastructure</li>
                  <li>Analytic/innovative culture</li>
                  <li>Institutional reputation</li>
                  <li>Geographic location</li>
                  <li>Project capabilities</li>
                </ul>
              </div>
              <div>
                <p>Furthermore, CCC projects will be selected based on alignment with CCC objectives and strategic pillars. Selection of CCC projects must also be based on other objective criteria, including but not limited to the scientific merit of the proposed project, and data gaps. </p>
                <h4 className="font-semibold mb-2">CCC project and partner selection is subject to the following limitations: </h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Funding must be open to qualified sites and will not be steered towards CCC external advisor's sites, CCC initial partner sites, or to other key Commercial accounts. </li>
                  <li>CCC projects and partners must not be selected based on sales/revenue generating considerations. </li>
                  <li>CCC projects must not be initiated, directed, or influenced by Sales. </li>
                  <li>CCC projects must not be offered to physicians or sites in connection with (i) sales contracts, (ii) clinical pathways or other functions that determine which products may be recommended to oncologists for use with patients, or (iii) contract negotiations for discounts or rebates on Gilead products. </li>
                  <li>CCC projects must not be unnecessarily duplicative. </li>
                </ul>
              </div>
            </div>

            {/* Review Process */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Project Review & Approval</h3>
              <div>
                <p>CCC project proposals are subject to either a Standard Project or Complex Project review process.</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Standard Projects are traditional activities that fall within existing Gilead policies and procedures, including but not limited to the BCM and Medical SOPs and Work Practices (e.g., grants, sponsorships, clinical trials, ISR/collaborative studies, etc.). </li>
                  <li>Complex Projects are those that do not fall within Gilead's existing policies and procedures and would require additional review by the CCC Adjudication Committee. </li>
                </ul>
              </div>
            </div>

            {/* Adjudication Committee */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">Adjudication Committee</h3>
              <p className="text-gray-700 mb-4">The CCC Adjudication Committee will review Complex Projects and include representatives from Medical Affairs, Medical Governance, Legal, and Compliance. No one from the Commercial organization, including Managed Markets, will sit on the Adjudication Committee.</p>
              <p className="text-gray-700 mb-4">The Adjudication Committee's role and responsibilities are to provide initial review and approval of Complex Project proposals presented by the CCC Chair and evaluate whether:  </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>They fit within the CCC's objectives and strategic pillars. </li>
                <li>They fit within the Partner and Project criteria. </li>
                <li>If initially approved, route the CCC project to the appropriate functional department for further respective review and approval. </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="project-operations" className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Project Operations</h2>
          
          {/* Review & Approval */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Review & Approval Process</h3>
            <p className="text-gray-700 mb-4">Once CCC projects have been routed to the appropriate department (e.g., Medical Affairs, Managed Markets, Marketing, Public Affairs, etc.) the primary Gilead department(s) responsible for the CCC project will oversee all operations of the CCC project.  </p>
            <p className="text-gray-700 mb-4">Includes the department's standard process for:  </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Submission</li>
              <li>Review</li>
              <li>Approval</li>
              <li>Documentation retention</li>
              <li>Management</li>
              <li>Tracking</li>
              <li>Reporting/sharing</li>
            </ul>
            <p>The data and/or results of the project may be shared with cross-functional teams in accordance with existing WoW and other relevant Gilead policies.</p>
          </div>

          {/* Updates & Reporting */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Updates & Reporting</h3>
            <p className="text-gray-700 mb-8">
              The Gilead team responsible for a CCC project may provide updates on CCC projects, so long as such internal information sharing is consistent with existing WoW, policies and procedures.
            </p>
            <h2 className="text-xl text-red-800 mb-6">PROJECT LEAD - RESPONSIBILITY LIST</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl text-red-800 mb-4">Project Tracking & Monitoring</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Track and report on key milestones, dates, and deliverables</li>
                  <li>Monitor contract timeline adherence and budget utilization</li>
                  <li>Flag dependencies, blockers, and risks</li>
                  <li>Maintain project phase status and resource needs</li>
                  <li>Document quick status indicators (On track/Needs attention/Blocked)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-red-800 mb-4">Impact Documentation & Measurement</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Record and verify direct patient benefits and outcomes</li>
                  <li>Capture unexpected positive results and ripple effects</li>
                  <li>Track resource efficiency improvements</li>
                  <li>Document patient stories and examples</li>
                  <li>Maintain 3-5 key performance metrics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-red-800 mb-4">Reporting & Communication</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Submit standardized monthly project updates using templates</li>
                  <li>Create quarterly shareable summaries</li>
                  <li>Document lessons learned and best practices</li>
                  <li>Complete impact snapshots showing current benefits achieved</li>
                  <li>Report on metrics, blockers, and resource needs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-red-800 mb-4">Opportunity Management</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                  <li>Identify potential scale-up opportunities</li>
                  <li>Spot resource-light quick wins</li>
                  <li>Map new patient impact pathways</li>
                  <li>Note cross-project synergies and collaboration possibilities</li>
                  <li>Track emerging expansion areas</li>
                </ul>
              </div>
            </div>
            <div>
            <h3 className="text-xl text-red-800 mb-4">CCC PROJECT MONTHLY UPDATE TEMPLATE</h3>
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <p className="font-medium text-gray-900">[Project Name] - [Month Year]</p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💫 WINS & IMPACTS</h4>
                <ul className="list-none pl-4 space-y-2 text-gray-700">
                  <li><strong>Patient Benefit</strong>: [Most significant outcome]</li>
                  <li><strong>System Impact</strong>: [Key ripple effect observed]</li>
                  <li><strong>Unexpected Win</strong>: [Surprise positive outcome]</li>
                  <li><strong>Quick Numbers</strong>:</li>
                  <li className="pl-4">[Key Metric 1]: [Current] vs [Target]</li>
                  <li className="pl-4">[Key Metric 2]: [Current] vs [Target]</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📊 PROJECT HEALTH</h4>
                <ul className="list-none pl-4 space-y-2 text-gray-700">
                  <li><strong>Timeline</strong>: [On Track/At Risk/Blocked]</li>
                  <li><strong>Budget</strong>: [Within/Attention/Over]</li>
                  <li><strong>Next Milestone</strong>: [Date + Brief description]</li>
                  <li><strong>Key Blocker</strong>: [If any - otherwise "None"]</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🔄 SCALING OPPORTUNITIES</h4>
                <ul className="list-none pl-4 space-y-2 text-gray-700">
                  <li><strong>Quick Win Spotted</strong>: [Resource-light opportunity]</li>
                  <li><strong>Impact Pathway</strong>: [How we could scale impact]</li>
                  <li><strong>Cross-Project Link</strong>: [Synergy with other CCC work, functions]</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚡️ NEEDS & NEXT STEPS</h4>
                <ul className="list-none pl-4 space-y-2 text-gray-700">
                  <li><strong>Resource Need</strong>: [Specific ask if any]</li>
                  <li><strong>Decision Need</strong>: [Leadership input needed]</li>
                  <li><strong>Support Need</strong>: [Cross-team help needed]</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💭 LOOKING AHEAD</h4>
                <p className="text-gray-700">Brief bullet on biggest opportunity for next 30 days</p>
              </div>
            </div>
          </div>
          </div>
          {/* Compliance Monitoring */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">Compliance Monitoring</h3>
            <p className="text-gray-700 mb-4">The CCC will be subject to monitoring to ensure that all operations are following Gilead policies and procedures. </p>
          </div>
          
          {/* External Interaction Guidelines */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-4">External Interaction Guidelines</h3>
            <div className="mb-8">
              <img 
                src={legalcompliance} 
                alt="CCC Overview" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Legal & Compliance Guidance on CCC</p>
            </div>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>CCC discussions with customers are restricted to trained field personnel (MSLs, MVELs, KADs) using only approved materials, while sales teams including Oncology Sales Leadership must not engage in CCC discussions and must refer all inquiries to the CCC team. </li>
              <li>CCC Leadership Steer Co and Home Office teams may discuss strategic objectives within existing Gilead policies, but CCC projects must never be discussed in connection with clinical pathways, formulary decisions, or contract negotiations for Gilead products. </li>
              <li>All customer interactions regarding CCC must be channeled through the CCC team for follow-up, and commercial field personnel are prohibited from reaching out to CCC partners for project data or attending CCC-related meetings. </li>
              <li>All CCC materials require appropriate internal review approval (MRC or PRC) before customer use. </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ComplianceGuidance;
