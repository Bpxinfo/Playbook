import React, { useState } from 'react';
import { 
  AlertTriangle, Info, Building, Users2, BookOpen, 
  Target, Shield, FileCheck, CheckCheck, ChevronRight, Briefcase,
  Settings, UserCheck, Network, LineChart, CheckCircle2,
  FileText, Flag, Brain, Workflow, DollarSign, Users, UsersRound,
  ExternalLink
} from 'lucide-react';
import advisory from '../../assets/advisory.jpg'
import legalcompliance from '../../assets/legalcompliance.jpg'
import partner from '../../assets/partner-selection.jpg'
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import ImageZoomModal from '../../components/ImageZoomModal';
import { FiZoomIn } from 'react-icons/fi';

const ProcessesAndGovernance = () => {
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
    { text: "Has community presence", icon: UsersRound },   
    { text: "IT infrastructure", icon: Settings },
    { text: "Clinical data infrastructure and research capabilities", icon: Settings },   
    { text: "Minimal scope of services offered", icon: Briefcase },
    { text: "Practice type", icon: CheckCheck },
    { text: "Geographic reach / location", icon: Target },
    { text: "Willingness to partner with Gilead", icon: FileCheck }
    { text: "Reputation", icon: Building },
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
          Processes & Governance
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
          
          {/* Added CCC Strategy Development section from Governance.jsx */}
          <section id="ccc-strategy-development" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              CCC Strategy Development
            </h2>
            
            {/* Expert Advisors */}
            <div className="bg-blue-50 rounded-lg shadow p-6 mb-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <Brain className="w-5 h-5 mr-2 dark:text-black" />
                CCC Expert Advisors
              </h3>
              <div className="space-y-3">
                {[
                  "Selection of Expert Advisors must follow objective criteria based on demonstrated expertise and experience in CCC focus areas, explicitly moving beyond titles or commercial relationships and ensuring diversity across both major centers and community oncology institutions, with no more than 50% from initial CCC partner sites",
                  "All Expert Advisor engagements must align with Gilead's existing U.S. BCM policies for Advisory Boards and require clear business justification through detailed documentation pre-approved by Legal/Compliance teams",
                  "While Expert Advisors may provide input on operational aspects of complex CCC projects, they should maintain limited influence over broader CCC project design and selection decisions"
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black ">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Collaboration */}
            <div className="bg-green-50 rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                <Network className="w-5 h-5 mr-2 dark:text-black" />
                Internal Collaboration
              </h3>
              <div className="space-y-3">
                {[
                  "Medical Affairs and Commercial teams, and other cross-functional partners may participate in strategy meetings to discuss learnings from external advisors and share relevant information on patient care challenges and gaps in the community cancer setting and collaborate on priority development for CCC projects",
                  "Participants may include the leads for U.S. Medical and Commercial functions, leads for the U.S. Medical and Commercial Oncology teams (VP or above), as well as appropriate leads from other functional areas. Teams may interact and collaborate to the extent allowed by existing WoW and other Gilead policies and guidance noted above",
                  "For clarity, Gilead's Sales organization must not be involved in CCC internal collaboration and strategy development meetings"
                ].map((text, index) => (
                  <div key={index} className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                    <p className="text-gray-700 dark:text-black">{text}</p>
                  </div>
                ))}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
          </section>
          
          <section id="adjudication-committee" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              CCC Adjudication Committee
            </h2>
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                  The CCC adjudication and governance process involves a new structure - the CCC Adjudication Committee
                </h3>
                <p className="text-gray-700 mb-6 dark:text-black">
                  This committee has a very narrowly scoped purpose
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-3 dark:text-black">Purpose:</h4>
                  <p className="text-gray-700 mb-4 dark:text-black">For candidate initiatives (projects or project topics):</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black"><span className="font-semibold">Division Determination:</span> To determine the appropriate division (i.e., Medical vs. Commercial) within Gilead to route candidate initiatives for evaluation for potential execution</p>
                    </div>
                    
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black"><span className="font-semibold">Mapping Initiatives:</span> To map candidate initiatives to the most appropriate existing internal Gilead review, approval & funding mechanisms (i.e., ISR, grants, etc.)</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg shadow p-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4 flex items-center dark:text-black">
                    <AlertTriangle className="w-5 h-5 mr-2 dark:text-black" />
                    Examples of what is out of scope for this committee:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black">Prioritizing the merits of candidate projects/project ideas</p>
                    </div>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black">Working through issues involving project execution and operations (which will be done either per existing Gilead policies, procedures and processes, or otherwise during project execution with support from relevant functions)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          
          {/* Review & Approval Process section */}
          <section id="review-approval-process" className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Review & Approval Process
            </h2>
            <p className="text-gray-700 mb-4 dark:text-black">Once CCC projects have been routed to the appropriate department (e.g., Medical Affairs, Managed Markets, Marketing, Public Affairs, etc.) the primary Gilead department(s) responsible for the CCC project will oversee all operations of the CCC project.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="flex items-center bg-indigo-50 p-3 rounded-lg shadow-sm">
                    <div className="bg-white p-2 rounded-full shadow-md">
                      <IconComponent className="w-4 h-4 text-red-800 dark:text-black" />
                    </div>
                    <span className="text-gray-700 ml-3">{step.text}</span>
                  </div>
                );
              })}
            </div>
          </section>
          
          {/* Research Committee Links as a standalone section */}
          <div className="my-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { 
                  text: "GRC - Global Research Committee", 
                  icon: Building,
                  url: "https://gileadconnect.sharepoint.com/sites/MA-Research" 
                },
                { 
                  text: "LRC - Local Research Committee", 
                  icon: Users2,
                  url: "https://gileadrnd.appiancloud.com/suite/sites/gs-isr" 
                }
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 group cursor-pointer"
                  >
                    <div className="flex items-center">
                      <div className="bg-red-800 p-2 rounded-full">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 ml-3 font-medium">{item.text}</span>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-red-800 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

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

export default ProcessesAndGovernance; 