import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Heart, Building, GraduationCap, Stethoscope, 
  BarChart, LineChart, Users, Target, ChevronRight, Scale, Network 
} from 'lucide-react';

const PatientImpact = () => {
  const navigate = useNavigate();

  const impactAreas = [
    {
      title: "Enhanced Access to Care",
      description: "Through our community partnerships and initiatives, we're improving access to quality cancer care in underserved regions, bringing advanced treatments closer to where patients live.",
      icon: Building,
      color: "bg-blue-50"
    },
    {
      title: "Improved Provider and Patient Education",
      description: "Our educational programs help providers andpatients better understand their treatment journey, leading to improved adherence and better-informed decision-making.",
      icon: GraduationCap,
      color: "bg-green-50"
    },
    {
      title: "Evidence-Based Care",
      description: "By bridging the gap between clinical trials and community implementation, we're ensuring patients receive the most effective, evidence-based treatments available.",
      icon: Stethoscope,
      color: "bg-purple-50"
    }
  ];

  const metrics = [
    {
      title: "Quantitative Metrics",
      items: [
        "Number of patients reached through community programs",
        "Improvement in treatment adherence rates",
        "Reduction in care disparities across regions",
        "Implementation of evidence-based practice in the community setting"
      ],
      icon: BarChart,
      color: "bg-yellow-50"
    },
    {
      title: "Qualitative Outcomes",
      items: [
        "Enhanced patient satisfaction with care delivery",
        "Improved patient understanding of treatment options",
        "Stronger community engagement in cancer care",
        "Better coordination between healthcare providers"
      ],
      icon: LineChart,
      color: "bg-pink-50"
    }
  ];

  const futureGoals = [
    {
      goal: "Expand our reach to more underserved communities",
      icon: Network
    },
    {
      goal: "Develop innovative patient support programs",
      icon: Users
    },
    {
      goal: "Strengthen the connection between research and community practice",
      icon: Scale
    },
    {
      goal: "Create sustainable models for community-based cancer care",
      icon: Building
    },
    {
      goal: "Foster greater collaboration among healthcare stakeholders",
      icon: Heart
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Heart className="w-8 h-8 mr-3" />
          Patient Impact
        </h1>
        
        {/* <button
          onClick={() => navigate('/ccc-initiative')}
          className="mb-8 inline-flex items-center text-red-800 hover:text-red-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to CCC Initiative Overview
        </button> */}

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Heart className="w-6 h-6 mr-2" />
              Overview
            </h2>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
              <p className="text-gray-700">
                The Community Cancer Collective (CCC) is dedicated to making a meaningful difference in patients' lives through our community-focused initiatives. Our impact is measured not just in numbers, but in the improved quality of care and better outcomes for cancer patients in the community setting.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Key Impact Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div key={index} className={`${area.color} p-6 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200`}>
                    <div className="flex items-center mb-3">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-700">{area.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <BarChart className="w-6 h-6 mr-2" />
              Measuring Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className={`${metric.color} p-6 rounded-lg shadow-md`}>
                    <div className="flex items-center mb-4">
                      <div className="bg-white p-2 rounded-full shadow-md">
                        <IconComponent className="w-6 h-6 text-red-800" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 ml-3">{metric.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {metric.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Target className="w-6 h-6 mr-2" />
              Future Impact Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {futureGoals.map((goal, index) => {
                const IconComponent = goal.icon;
                return (
                  <div key={index} className="bg-indigo-50 p-4 rounded-lg shadow-md flex items-start transform hover:scale-[1.02] transition-all duration-200">
                    <div className="bg-white p-2 rounded-full shadow-md mr-3 flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-red-800" />
                    </div>
                    <p className="text-gray-700">{goal.goal}</p>
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

export default PatientImpact; 