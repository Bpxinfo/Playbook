import React from 'react';
import s1 from '../../assets/StrategicPillar1.jpg'
import s2 from '../../assets/StrategicPillar2.jpg'
import ImageWithZoom from '../../components/ImageWithZoom'
import { Target, LineChart, Users2, BookOpen, ChevronRight, Lightbulb } from 'lucide-react'

const StrategicPillars = () => {
  const pillars = [
    {
      title: "Generating Evidence",
      description: "Close the gap between clinical trial evidence and real-world implementation in the community setting",
      icon: LineChart,
      color: "bg-blue-50"
    },
    {
      title: "Addressing Disparities, Improving Health Equity",
      description: "Focus on health equity by addressing specific care gaps in underserved regions",
      icon: Users2,
      color: "bg-green-50"
    },
    {
      title: "Enabling Education for Providers and Patients",
      description: "Support innovative approaches to empower providers with education and improve patient understanding of their treatment journey",
      icon: BookOpen,
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Target className="w-8 h-8 mr-3" />
          Strategic Pillars
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Overview
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
              <p className="text-gray-700 mb-4">
                To meet the CCC's objective in making impact for Community Patients, projects will focus attention on three key areas (the CCC strategic pillars):
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {pillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className={`${pillar.color} p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200`}>
                    <div className="flex items-center mb-3">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{pillar.title}</h3>
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Strategic Framework
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                <ImageWithZoom 
                  src={s1} 
                  alt="Strategic Pillar 1" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center font-medium">Strategic Pillars Framework - Part 1</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg transform hover:scale-[1.02] transition-all duration-200">
                <ImageWithZoom 
                  src={s2} 
                  alt="Strategic Pillar 2" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center font-medium">Strategic Pillars Framework - Part 2</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default StrategicPillars;
