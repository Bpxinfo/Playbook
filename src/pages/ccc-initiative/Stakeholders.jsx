import React, { useState } from 'react';
import stakeholder from '../../assets/stakeholder.jpg';
import { Users, Building, UserCheck, FileSpreadsheet, Network, ChevronRight } from 'lucide-react';
import leadership from '../../assets/leadership.jpg'
import ImageWithZoom from '../../components/ImageWithZoom';

const Stakeholders = () => {
  const stakeholderSections = [
    {
      title: "CCC Internal Stakeholders",
      description: [
        "The CCC Leadership Steering Committee provides strategic guidance and oversight for the Community Cancer Collective initiative. They require regular, concise updates to make informed decisions on project priorities and approvals.",
        "The CCC Core Team executes strategic initiatives of the program, ensuring alignment with organizational goals and stakeholder needs.",
        "The CCC Extended Team supports program implementation through specialized expertise and cross-functional collaboration, contributing to the overall success of the initiative."
      ],
      icon: Users,
      color: "bg-blue-50"
    },
    // {
    //   title: "USMA Organization",
    //   description: [
    //     "The Community Cancer Collective aligns with USMA Oncology's strategic plan and Plan of Action.",
    //     "We collaborate with USMA to identify and engage key stakeholders in community oncology care.",
    //     "USMA team members communicate our mission to demonstrate Gilead's commitment to supporting oncology patients."
    //   ],
    //   icon: Building,
    //   color: "bg-green-50"
    // },
    // {
    //   title: "Cross Functional Field Team",
    //   description: "Our field team consists of Medical Value Executive Liaisons (MVELs), Medical Science Liaisons (MSLs), and Key Account Directors (KADs). They build and maintain relationships with healthcare providers at academic institutions and clinics, delivering targeted messaging that aligns with our brand strategy.",
    //   icon: UserCheck,
    //   color: "bg-purple-50"
    // },
    // {
    //   title: "Internal Review Departments",
    //   description: "Various Gilead departments review and evaluate Request for Proposals (RFPs) in collaboration with USMA. These departments oversee project development within their strategic areas, managing the submission, review, and approval processes according to standard procedures.",
    //   icon: FileSpreadsheet,
    //   color: "bg-yellow-50"
    // }
  ];

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase flex items-center justify-center">
          <Network className="w-8 h-8 mr-3" />
          Stakeholders
        </h1>

        <div className="space-y-6">
          {stakeholderSections.map((section, index) => (
            <section key={index} className={`${section.color} rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-all duration-200`}>
              <div className="flex items-start space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <section.icon className="w-6 h-6 text-red-800" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl text-red-800 mb-4 flex items-center dark:text-black">
                    {section.title}
                  </h2>
                  {Array.isArray(section.description) ? (
                    <div className="space-y-3">
                      {section.description.map((desc, i) => (
                        <div key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                          <p className="text-gray-700 dark:text-black">{desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0 dark:text-black" />
                      <p className="text-gray-700 dark:text-black">{section.description}</p>
                    </div>
                  )}
                </div>
              </div>
            </section>
          ))}

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Network className="w-6 h-6 mr-2" />
              Stakeholder Overview
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={stakeholder} 
                alt="CCC Overview" 
                className="w-full rounded-lg shadow-lg mb-4 hover:shadow-xl transition-shadow duration-200"
              />
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              CCC Leadership - SteerCo, Core and Extended Team
            </h2>
            <div className="space-y-4">
              <div className="bg-green-50 p-6 rounded-lg">
                <ImageWithZoom 
                  src={leadership} 
                  alt="Leadership SteerCo" 
                  className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Leadership SteerCo</p>
              </div>
            </div>
            </section>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;