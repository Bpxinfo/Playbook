import React from 'react';
import s1 from '../../assets/StrategicPillar1.jpg'
import s2 from '../../assets/StrategicPillar2.jpg'
import ImageWithZoom from '../../components/ImageWithZoom'
import { Target, LineChart, Users2, BookOpen, ChevronRight, Lightbulb } from 'lucide-react'

const StrategicPillars = () => {
  const pillars = [
    {
      title: "Evidence Generation",
      description: "Address gaps between evidence generated in clinical trials and implementation in the real-world community setting",
      priorityAreas: [
        "Adoption of new treatments",
        "Patient access to guideline concordant care",
        "Patient experiences on treatment"
      ],
      icon: LineChart,
      color: "bg-blue-50"
    },
    {
      title: "Health Equity & Disparities",
      description: "Address care gaps identified in the South East community setting with the potential to scale to other regions in the US",
      priorityAreas: [
        "Understand impact of care coordination and patient navigation with community stakeholders",
        "Understand impact and relationship of social determinants of health (SDOH) on cancer care equity"
      ],
      icon: Users2,
      color: "bg-green-50"
    },
    {
      title: "Provider & Patient Education",
      description: "Support improvements in cancer care delivery through novel approaches to provider education and patient empowerment",
      priorityAreas: [
        "Identify practical ways to improve/optimize clinician education and real-time decision support",
        "Help create a common language between clinicians and patients regarding the impact of outcome measures"
      ],
      icon: BookOpen,
      color: "bg-purple-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Target className="w-8 h-8 mr-3" />
          Strategic Pillars
        </h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Lightbulb className="w-6 h-6 mr-2" />
              Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-200 p-6 rounded-lg">
                <h3 className="text-xl text-grey font-semibold mb-3">Mission:</h3>
                <p className="text-lg text-grey">
                  Bring together key partners to improve the lives of patients receiving their cancer care in the community
                </p>
              </div>
              <div className="bg-red-200 p-6 rounded-lg">
                <h3 className="text-xl text-grey font-semibold mb-3">Vision:</h3>
                <p className="text-lg text-grey">
                  Effectively collaborate and partner with organizations across the country to identify impactful opportunities and implement innovative solutions
                </p>
              </div>
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
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{pillar.title}</h2>
                    <div className="flex items-start mb-4">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-lg text-gray-700 dark:text-black">{pillar.description}</p>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 dark:text-black">Priority Areas:</h3>
                      <ul className="list-none space-y-2">
                        {pillar.priorityAreas.map((area, idx) => (
                          <li key={idx} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                            <span className="text-lg text-gray-700 dark:text-black">{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default StrategicPillars;
