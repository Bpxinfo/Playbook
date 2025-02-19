import React, { useState } from 'react';
import { 
  Settings, Network, Shield, FileText, AlertTriangle, 
  Users2, Building, Target, ChevronRight, Workflow,
  Clock, Activity
} from 'lucide-react';
import CCC_Process_Overview from '../../assets/CCC_Process_Overview.png'
import governance_model from '../../assets/governance_model.png'
import stakeholder from '../../assets/stakeholder.jpg'
import leadership from '../../assets/leadership.jpg'
import adjud from '../../assets/adjud.jpg'
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
    {
      title: "ISR / Collaborative Studies Approval Process",
      icon: Workflow,
      color: "bg-green-50"
    },
    {
      title: "RFP Process",
      icon: FileText,
      color: "bg-yellow-50"
    },
    {
      title: "Multi-Institutional Ecosystem",
      icon: Network,
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Shield className="w-8 h-8 mr-3" />
          Governance
        </h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Workflow className="w-6 h-6 mr-2" />
              Process Map & Governance Model
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                <ImageWithZoom 
                  src={CCC_Process_Overview} 
                  alt="CCC Process Overview" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Process Flow Diagram</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { text: "GRC - Global Research Committee", icon: Building },
                  { text: "LRC - Local Research Committee", icon: Users2 }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg shadow-sm">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-4 h-4 text-red-800" />
                      </div>
                      <span className="text-gray-700 ml-3">{item.text}</span>
                    </div>
                  );
                })}
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
                  <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    COMING SOON
                  </h3>
                </div>
              </section>
            );
          })}

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Users2 className="w-6 h-6 mr-2" />
              CCC Leadership - SteerCo
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-blue-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                  <ImageWithZoom 
                    src={stakeholder} 
                    alt="CCC Stakeholders" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center">Stakeholders</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                  <ImageWithZoom 
                    src={leadership} 
                    alt="Leadership SteerCo" 
                    className="w-full rounded-lg shadow-lg mb-4"
                  />
                  <p className="text-sm text-gray-500 text-center">Leadership SteerCo</p>
                </div>
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
                <ImageWithZoom 
                  src={adjud} 
                  alt="Adjudication Model" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Adjudication Model</p>
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

export default ProcessesGovernance;