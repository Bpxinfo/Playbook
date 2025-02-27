import React from 'react';
import { Target, GitBranch, Shield } from 'lucide-react';

const Objectives = () => {
  const sections = [
    {
      title: "Process Framework Overview",
      description: "The objective of this comprehensive processes, governance, and compliance framework is to establish a robust operational foundation for the CCC initiative, ensuring seamless execution while maintaining the highest standards of regulatory adherence and risk management. By implementing a structured approach to governance, the framework creates clear lines of accountability, streamlines decision-making processes, and fosters a culture of compliance that protects both the initiative's integrity and its stakeholders' interests.",
      icon: Target,
      color: "bg-blue-50"
    },
    {
      title: "Framework Integration",
      description: "This integrated framework orchestrates the cross functional interactions of three critical pillars: operational processes that drive day-to-day activities, governance mechanisms that ensure proper oversight and control, and compliance guidance that safeguard against regulatory risks. Each pillar is designed to complement and reinforce the others, creating a dynamic system that adapts to changing requirements while maintaining operational excellence and legal, compliance and regulatory conformity.",
      icon: GitBranch,
      color: "bg-purple-50"
    },
    {
      title: "Continuous Improvement",
      description: "The framework's emphasis on transparent documentation, clear accountability structures, and proactive risk management ensures that the CCC initiative not only meets its current obligations but is also positioned to scale effectively and respond to emerging complexities. Through systematic monitoring and regular review cycles, the framework promotes continuous improvement while maintaining the agility necessary to address evolving patient needs, treatment landscapes and operational demands.",
      icon: Shield,
      color: "bg-green-50"
    }
  ];

  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase rounded-lg shadow-lg">
          OBJECTIVES
        </h1>

        <div className="space-y-6">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <section key={index} className={`${section.color} rounded-lg shadow-lg transition-all hover:shadow-xl`}>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                      <IconComponent className="w-6 h-6 text-red-800" />
                    </div>
                    <h2 className="text-2xl text-red-800 font-semibold">{section.title}</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Objectives;
