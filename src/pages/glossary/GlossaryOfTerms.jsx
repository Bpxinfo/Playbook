import React, { useState } from 'react';
import { Search } from 'lucide-react';

const GlossaryOfTerms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample glossary terms - you can replace these with your actual terms
  const glossaryTerms = [
    {
      term: "CCC",
      definition: "Community Cancer Collective",
    },
    {
      term: "CCC Core",
      definition: "CCC Core Team",
    },
    {
      term: "CCC Extended",
      definition: "CCC Extended Team",
    },
    {
      term: "CCC Leadership SteerCo",
      definition: "CCC Leadership Team / CCC Leadership Steering Committee",
    },
    {
      term: "CCC Hub",
      definition: "CCC Communications Hub",
    },
    // {
    //   term: "Global IDA",
    //   definition: "N/A",
    // },
    {
      term: "GMAO",
      definition: "Global Medical Affairs Operations",
    },
    {
      term: "GPFIS",
      definition: "Global Patient Focused Implementation Science",
    },
    {
      term: "GRC",
      definition: "Global Review Committee",
    },
    {
      term: "HEOR",
      definition: "Health Economics & Outcomes Research",
    },
    {
      term: "KAD",
      definition: "Key Account Director",
    },
    {
      term: "Legal/Compliance",
      definition: "Legal/Compliance",
    },
    {
      term: "LRC",
      definition: "Local Review Committee",
    },
    {
      term: "MSL",
      definition: "Medical Science Liaison",
    },
    {
      term: "MKAL",
      definition: "Medical Key Account Lead",
    },
    {
      term: "PAQ",
      definition: "Patient Access & Quality of Care",
    },
    {
      term: "RFP",
      definition: "Request For Proposal",
    },
    {
      term: "RWE",
      definition: "Real World Evidence",
    },
  ];
  

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Glossary of Terms</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-gray rounded-lg shadow-md p-6">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search terms..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border dark:bg-gray dark:text-white dark:border-gray dark:placeholder-gray bg-white text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              {filteredTerms.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-600 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-400 mb-2">{item.term}</h3>
                  <p className="text-gray-700 dark:text-white">{item.definition}</p>
                </div>
              ))}
              {filteredTerms.length === 0 && (
                <p className="text-gray-500 dark:text-white text-center py-4">No terms found matching your search.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default GlossaryOfTerms;