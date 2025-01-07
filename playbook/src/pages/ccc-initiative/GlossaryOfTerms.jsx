import React, { useState } from 'react';
import { Search } from 'lucide-react';

const GlossaryOfTerms = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Sample glossary terms - you can replace these with your actual terms
  const glossaryTerms = [
    {
      term: 'CCC',
      definition: 'Community Cancer Collective - An initiative designed to address gaps in care for cancer patients in non-academic settings.'
    },
    {
      term: 'SOP',
      definition: 'Standard Operating Procedure - A set of step-by-step instructions to help workers carry out complex routine operations.'
    },
    {
      term: 'KPI',
      definition: 'Key Performance Indicator - A quantifiable measure used to evaluate the success in meeting objectives.'
    }
    // Add more terms as needed
  ];

  // Filter terms based on search
  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light text-red-800 mb-8">Glossary of Terms</h1>
      
      {/* Search Bar */}
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-800"
        />
        <Search className="w-5 h-5 absolute left-3 top-2.5 text-gray-400" />
      </div>

      {/* Glossary List */}
      <div className="space-y-4">
        {filteredTerms.map((item, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-red-800 mb-2">{item.term}</h3>
            <p className="text-gray-700">{item.definition}</p>
          </div>
        ))}
        
        {filteredTerms.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No terms found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default GlossaryOfTerms;