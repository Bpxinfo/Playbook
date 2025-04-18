import React, { useState } from 'react';
import { 
  Settings, Network, Shield, FileText, AlertTriangle, 
  Users2, Building, Target, ChevronRight, Workflow,
  Clock, Activity, Brain, ExternalLink
} from 'lucide-react';
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import governance_model from '../../assets/governance_model.png'
import stakeholder from '../../assets/stakeholder.jpg'

import adjud from '../../assets/adjud.jpg'
import advisory from '../../assets/advisory.jpg'
import ImageZoomModal from '../../components/ImageZoomModal';
import { FiZoomIn } from 'react-icons/fi';

const ProcessesGovernance = () => {
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

  const comingSoonSections = [
    {
      title: "DAI (RACI)",
      icon: Activity,
      color: "bg-blue-50"
    },
    // {
    //   title: "ISR / Collaborative Studies Approval Process",
    //   icon: Workflow,
    //   color: "bg-green-50"
    // },
    // {
    //   title: "RFP Process",
    //   icon: FileText,
    //   color: "bg-yellow-50"
    // },
    // {
    //   title: "Multi-Institutional Ecosystem",
    //   icon: Network,
    //   color: "bg-purple-50"
    // }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Shield className="w-8 h-8 mr-3" />
          Governance
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                className="flex items-center justify-between bg-white  p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-200 group cursor-pointer"
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
        <div className="space-y-6">
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



          <section className="bg-white rounded-lg shadow-lg p-6">
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

          {comingSoonSections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl text-red-800 mb-4 flex items-center">
                  <IconComponent className="w-6 h-6 mr-2" />
                  {section.title}
                </h2>
                <div className={`${section.color} p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200`}>
                  <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center dark:text-black">
                    <Clock className="w-5 h-5 mr-2 dark:text-black" />
                    COMING SOON
                  </h3>
                </div>
              </section>
            );
          })}
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

export default ProcessesGovernance;