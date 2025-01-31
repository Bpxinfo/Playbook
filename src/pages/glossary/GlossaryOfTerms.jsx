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
      definition: "CCC Corea Team",
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
      definition: "Medical Science Liaisons",
    },
    {
      term: "MVEL",
      definition: "Medical Value & Evidence Liaisons",
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
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Glossary of Terms</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search terms..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-black placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-800 focus:border-red-800 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="space-y-4">
            {filteredTerms.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-800 mb-1">{item.term}</h3>
                <p className="text-gray-700">{item.definition}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlossaryOfTerms;