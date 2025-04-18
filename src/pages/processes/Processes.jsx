import React, { useState } from 'react';
import { 
  AlertTriangle, Info, Building, Users2, BookOpen, 
  Target, Shield, FileCheck, ChevronRight, Briefcase,
  Settings, UserCheck, Network, LineChart, CheckCircle2,
  FileText, Flag, Brain, Workflow, DollarSign, Users
} from 'lucide-react';
import advisory from '../../assets/advisory.jpg'
import legalcompliance from '../../assets/legalcompliance.jpg'
import partner from '../../assets/partner-selection.jpg'
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import ImageZoomModal from '../../components/ImageZoomModal';
import { FiZoomIn } from 'react-icons/fi';

const Processes = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openZoomModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeZoomModal = () => {
    setSelectedImage(null);
  };

  const ImageWithZoom = ({ src, alt, className }) => (
    <div className="relative group">
      <img 
        src={src} 
        alt={alt} 
        className={`${className} cursor-pointer`}
        onClick={() => openZoomModal(src)}
      />
      <button
        onClick={() => openZoomModal(src)}
        className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <FiZoomIn size={20} />
      </button>
    </div>
  );

  const selectionCriteria = [
    { text: "Subject matter expertise", icon: Brain },
    { text: "Data and IT infrastructure", icon: Settings },
    { text: "Analytic/innovative culture", icon: Briefcase },
    { text: "Institutional reputation", icon: Building },
    { text: "Geographic location", icon: Target },
    { text: "Project capabilities", icon: FileCheck }
  ];

  const projectLimitations = [
    "Funding must be open to qualified sites and will not be steered towards CCC external advisor's sites, CCC initial partner sites, or to other key Commercial accounts.",
    "CCC projects and partners must not be selected based on sales/revenue generating considerations.",
    "CCC projects must not be initiated, directed, or influenced by Sales.",
    "CCC projects must not be offered to physicians or sites in connection with (i) sales contracts, (ii) clinical pathways or other functions that determine which products may be recommended to oncologists for use with patients, or (iii) contract negotiations for discounts or rebates on Gilead products.",
    "CCC projects must not be unnecessarily duplicative."
  ];

  const processSteps = [
    { text: "Submission", icon: FileText },
    { text: "Review", icon: Shield },
    { text: "Approval", icon: CheckCircle2 },
    { text: "Documentation retention", icon: FileCheck },
    { text: "Management", icon: Settings },
    { text: "Tracking", icon: LineChart },
    { text: "Reporting/sharing", icon: Network }
  ];

  const projectTracking = [
    "Track and report on key milestones, dates, and deliverables",
    "Monitor contract timeline adherence and budget utilization",
    "Flag dependencies, blockers, and risks",
    "Maintain project phase status and resource needs",
    "Document quick status indicators (On track/Needs attention/Blocked)"
  ];

  const impactMeasurement = [
    "Record and verify direct patient benefits and outcomes",
    "Capture unexpected positive results and ripple effects",
    "Track resource efficiency improvements",
    "Document patient stories and examples",
    "Maintain 3-5 key performance metrics"
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Settings className="w-8 h-8 mr-3" />
          Processes
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Workflow className="w-6 h-6 mr-2" />
              CCC Project Lifecycle
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                <ImageWithZoom 
                  src={CCC_Process_Overview} 
                  alt="CCC Process Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center dark:text-black">Process Flow Diagram</p>
              </div>
              
            </div>
          </section>

          <section id="project-proposals-and-approvals" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <FileCheck className="w-6 h-6 mr-2" />
              Project Proposals & Approvals
            </h2>
            <div className="bg-yellow-50 rounded-lg shadow p-6 mb-6">
              <div className="space-y-3">
                {[
                  "All proposals are subject to existing Gilead policies and procedures. Sales teams are strictly prohibited from any involvement in project development or oversight, while Research proposals remain under Medical's exclusive purview",
                  "Project development must align with internal cross-functional strategy and may incorporate feedback from external expert advisors, all while maintaining compliance with relevant Gilead policies for each type of initiative",
                  "CCC project proposals may be proposed through an RFP process or through specific internal Gilead teams, such as USMA (including PAQ), Managed Markets, Public Affairs, Gov't Affairs, Commercial (not sales)",
                  "A formal request for proposal (\"RFP\") process may be publicly advertised in order to solicit CCC project proposals. Note: The RFP must be reviewed and approved by Legal in advance of release and abide by all guidance in the RFP policy",
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Selection Criteria */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
                <UserCheck className="w-5 h-5 mr-2" />
                Partner Selection Framework
              </h3>
              <div className="mb-8 bg-blue-50 p-6 rounded-lg">
                <h2 className="font-semibold mb-4 text-gray-900 dark:text-black">CCC Partner Selection Criteria</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">The areas and subsets of criteria were informed by the explicit objectives of the CCC</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">The criteria were selected as proxies to evaluate an organization's capabilities to execute research initiatives related to the CCC's three strategic pillars</p>
                  </div>
                  <div className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">Criteria related to practice type and geography were included to represent variation in community oncology and generalizability of candidate studies</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-gray-700 mb-4">CCC projects and partners will be selected based on neutral, objective criteria. Partners will be selected based on, but not limited to, the following criteria:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectionCriteria.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg shadow-sm">
                          <div className="bg-white p-2 rounded-full shadow-md">
                            <IconComponent className="w-4 h-4 text-red-800" />
                          </div>
                          <span className="text-gray-700 ml-3 dark:text-black">{item.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-gray-900 flex items-center dark:text-black">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600 " />
                    CCC project and partner selection is subject to the following limitations:
                  </h4>
                  <div className="space-y-3">
                    {projectLimitations.map((text, index) => (
                      <div key={index} className="flex items-start">
                        <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                        <p className="text-gray-700 dark:text-black">{text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Review Process */}
            <div className="bg-indigo-50 rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <Shield className="w-5 h-5 mr-2 dark:text-black" />
                Review & Approval Process
              </h3>
              <p className="text-gray-700 mb-4 dark:text-black">Once CCC projects have been routed to the appropriate department (e.g., Medical Affairs, Managed Markets, Marketing, Public Affairs, etc.) the primary Gilead department(s) responsible for the CCC project will oversee all operations of the CCC project.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                      <div className="bg-indigo-50 p-2 rounded-full shadow-md">
                        <IconComponent className="w-4 h-4 text-red-800 dark:text-black" />
                      </div>
                      <span className="text-gray-700 ml-3">{step.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Adjudication Committee */}
            <div className="bg-purple-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <Shield className="w-5 h-5 mr-2 dark:text-black" />
                Adjudication Committee
              </h3>
              <p className="text-gray-700 mb-4 dark:text-black">The CCC Adjudication Committee will review Complex Projects and include representatives from Medical Affairs, Medical Governance, Legal, and Compliance. No one from the Commercial organization, including Managed Markets, will sit on the Adjudication Committee.</p>
              <div className="space-y-3">
                {[
                  "They fit within the CCC's objectives and strategic pillars.",
                  "They fit within the Partner and Project criteria.",
                  "If initially approved, route the CCC project to the appropriate functional department for further respective review and approval."
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="project-operations" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-2" />
              Project Operations
            </h2>

            {/* Project Lead Responsibilities - New section */}
            <div className="bg-yellow-50 rounded-lg shadow p-6 mb-8">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <Users2 className="w-5 h-5 mr-2 dark:text-black" />
                Project Lead Responsibilities
              </h3>
              <div className="space-y-3">
                {[
                  "Oversee day-to-day project execution including team coordination, timeline management, and stakeholder communication",
                  "Conduct biweekly status meetings with project team and maintain detailed documentation of all decisions and action items",
                  "Develop and manage detailed project plans with clear milestones, dependencies, and resource allocations",
                  "Establish and monitor critical success metrics for the project, reporting monthly to the CCC Adjudication Committee",
                  "Proactively identify and mitigate risks, escalating issues that may impact project scope, timeline, or budget",
                  "Ensure all project activities comply with Gilead policies, legal requirements, and regulatory guidelines",
                  "Serve as the primary point of contact between CCC teams and external partners, maintaining appropriate boundaries",
                  "Prepare quarterly progress reports and final project documentation for internal stakeholders"
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Project Tracking */}
              <div className="bg-blue-50 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                  <LineChart className="w-5 h-5 mr-2 dark:text-black" />
                  Project Tracking & Monitoring
                </h3>
                <div className="space-y-3">
                  {projectTracking.map((text, index) => (
                    <div key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black">{text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Measurement */}
              <div className="bg-green-50 rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                  <Target className="w-5 h-5 mr-2 dark:text-black" />
                  Impact Documentation & Measurement
                </h3>
                <div className="space-y-3">
                  {impactMeasurement.map((text, index) => (
                    <div key={index} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* External Interaction Guidelines */}
            <div className="bg-red-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <AlertTriangle className="w-5 h-5 mr-2 dark:text-black" />
                External Interaction Guidelines
              </h3>
              <div className="text-center">
                <a 
                  href="https://gileadconnect.sharepoint.com/sites/GNet-ER-BusinessConduct/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents%2FCCC%20Legal%20%26%20Compliance%20Guidance%20%2D%20Final%20as%20of%2005%2E2024%2Epdf&parent=%2Fsites%2FGNet%2DER%2DBusinessConduct%2FShared%20Documents" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-900 transition-colors"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View CCC Legal & Compliance Document
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <ImageZoomModal
        isOpen={!!selectedImage}
        onClose={closeZoomModal}
        imageUrl={selectedImage}
        altText="Zoomed image"
      />
    </div>
  );
};

export default Processes; 