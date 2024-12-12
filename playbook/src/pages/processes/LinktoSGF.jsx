import React from 'react';
import { ExternalLink } from 'lucide-react';

const LinksToProcess = () => {
  return (
    <div className="p-8">
      <div className="text-sm text-gray-500 mb-6">
        Processes / Link to SOPs, Guidance, Forms, etc.
      </div>

      <h1 className="text-4xl font-light text-red-800 mb-8">Resources & Documentation</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Quick Access Links</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid gap-4">
              {[
                { title: "CCC Project Initiation Form", path: "#", type: "Form" },
                { title: "Standard Operating Procedures Manual", path: "#", type: "SOP" },
                { title: "Compliance Guidelines 2024", path: "#", type: "Guide" },
                { title: "Risk Assessment Template", path: "#", type: "Template" },
                { title: "Stakeholder Communication Framework", path: "#", type: "SOP" },
                { title: "Project Progress Report Template", path: "#", type: "Form" },
                { title: "Quality Assurance Checklist", path: "#", type: "Form" },
                { title: "Document Control Guidelines", path: "#", type: "Guide" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-red-100 text-red-800">
                      {item.type}
                    </span>
                    <span className="text-gray-700">{item.title}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LinksToProcess;