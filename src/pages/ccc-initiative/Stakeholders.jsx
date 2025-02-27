import React from 'react';
import stakeholder from '../../assets/stakeholder.jpg';
import { Users, Building, UserCheck, FileSpreadsheet, Network, ChevronRight } from 'lucide-react';

const Stakeholders = () => {
  const stakeholderSections = [
    {
      title: "CCC Internal Stakeholders",
      description: "The CCC Leadership SteerCo within Gilead will advise and endorse objectives for the Community Cancer Collective initiative. The leadership group needs clear and concise project updates to provide advice, prioritization and endorsement.",
      icon: Users,
      color: "bg-blue-50"
    },
    {
      title: "USMA Organization",
      description: [
        "The CCC is strategically aligned to the USMA Oncology strategic plan and POA.",
        "The CCC works hand in hand with the USMA Organization to identify and engage key external stakeholders involved in community oncology patient care and further the CCC initiatives.",
        "The USMA team needs to clearly and compliantly be able to articulate the CCC's mission and ongoing work to spread awareness of Gilead's willingness or support oncology patients."
      ],
      icon: Building,
      color: "bg-green-50"
    },
    {
      title: "Cross Functional Field Team",
      description: "The Gilead field team supporting the CCC includes the MVELs, MSLs, and KADs who establish and maintain relationships with physicians at academic institutions and clinics. They need clear topics and messaging to be successful in establishing and maintaining relationships with external professionals to execute projects that are aligned to the brand strategy.",
      icon: UserCheck,
      color: "bg-purple-50"
    },
    {
      title: "Internal (Gilead) line-functions for project review",
      description: "Line functions of different departments that contribute to review of RFPs. Line-functions work with USMA, as needed, depending on the project type. Gilead department(s) responsible for the CCC project will oversee CCC development under the strategic pillars. This includes the department's standard process for submission, review, approval.",
      icon: FileSpreadsheet,
      color: "bg-yellow-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
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
                  <h2 className="text-2xl text-red-800 mb-4 flex items-center">
                    {section.title}
                  </h2>
                  {Array.isArray(section.description) ? (
                    <div className="space-y-3">
                      {section.description.map((desc, i) => (
                        <div key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                          <p className="text-gray-700">{desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-red-800 mr-2 mt-1 flex-shrink-0" />
                      <p className="text-gray-700">{section.description}</p>
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
              <img 
                src={stakeholder} 
                alt="CCC Overview" 
                className="w-full rounded-lg shadow-lg mb-4 hover:shadow-xl transition-shadow duration-200"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Stakeholders;