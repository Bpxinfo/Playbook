import React from 'react';
import CCC_Overview from '../../assets/CCC_Overview.jpg';
import StrategicPillars from '../../assets/strategicpillars.jpeg';
import ImageWithZoom from '../../components/ImageWithZoom';
import { Building, Target, BookOpen, Users2, LineChart, Handshake } from 'lucide-react';

const Objectives = () => {
  const unmetNeeds = [
    {
      title: "Advance Evidence-Based Solutions",
      description: "Close the gap between clinical trial evidence and real-world implementation in the community setting",
      icon: LineChart,
      color: "bg-blue-50"
    },
    {
      title: "Reduce Disparities in Cancer Care",
      description: "Focus on health equity by addressing specific care gaps in underserved regions, starting with the Southeastern U.S., and scaling nationally",
      icon: Users2,
      color: "bg-green-50"
    },
    {
      title: "Enhance Provider and Patient Education",
      description: "Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey",
      icon: BookOpen,
      color: "bg-purple-50"
    },
    {
      title: "Improve Cancer Care Delivery",
      description: "Collaborate with community-focused institutions to develop capabilities that optimize the quality of care for diverse oncology populations",
      icon: Building,
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Objectives</h1>
        
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center flex items-center justify-center">
              <Building className="w-6 h-6 mr-2" />
              CCC Overview
            </h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                <p className="text-gray-700">
                  The Community Cancer Collective (CCC) is a patient-focused initiative addressing care gaps for cancer patients in the community setting. By bringing together key partners and collaborating with oncology treatment sites nationwide, we identify impactful opportunities and implement innovative solutions.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  Gilead contributes to this mission by engaging in collaborative initiatives and facilitating communication among stakeholders to support and improve patient outcomes in community oncology care.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              CCC Overview
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={CCC_Overview} 
                alt="CCC Overview" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center flex items-center justify-center">
              <Target className="w-6 h-6 mr-2" />
              Three Strategic Pillars
            </h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <ImageWithZoom 
                  src={StrategicPillars} 
                  alt="Strategic Pillars" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center flex items-center justify-center">
              <Handshake className="w-6 h-6 mr-2" />
              Partnership Approach
            </h2>
            <div className="bg-white rounded-lg shadow p-6">
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  To achieve this goal, Gilead partners with community-focused institutions treating patients and nationwide support organizations to identify meaningful opportunities, develop community site capabilities, and execute impactful solutions for diverse oncology patient populations.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-red-800 mb-4 text-center flex items-center justify-center">
              <Target className="w-6 h-6 mr-2" />
              Addressing Unmet Needs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unmetNeeds.map((need, index) => {
                const IconComponent = need.icon;
                return (
                  <div key={index} className={`${need.color} p-6 rounded-lg shadow-md`}>
                    <div className="flex items-center mb-4">
                      <IconComponent className="w-6 h-6 text-red-800 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-800">{need.title}</h3>
                    </div>
                    <p className="text-gray-700">{need.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Objectives;