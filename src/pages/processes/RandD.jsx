import React, { useState } from 'react';
import { ExternalLink, ChevronDown, ChevronRight, FileText, ScrollText, FileSpreadsheet } from 'lucide-react';

// Document database with URL placeholders
const documents = {
  proposal: [
    { id: 'SOP-14946', title: 'Design, Conduct, and Management of Observational Research', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1753756/1/0' },
    { id: 'SOP-14729', title: 'Local Medical Affairs Research Review', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1680723/1/1' },
    { id: 'GXPMAN-00022', title: 'Non-Interventional Studies Clinical Operations Manual (v9.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1070787/9/0=&idx=0&pt=asl&sm=202940571729109013475&tvsl=JnNlYXJjaD1HWFBNQU4tMDAwMjImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MTA5MDEzNDc1JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'BED-04506', title: 'Medical Affairs Research Guidance', type: 'Guidance', url: 'https://gvault.veevavault.com/ui/#doc_info/1696222/1/0' }
  ],
  committee: [
    { id: 'SOP-14729', title: 'Local Medical Affairs Research Review', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1680723/1/1' },
    { id: 'SOP-13096', title: 'Oversight of Non-Gilead Sponsored Research (v1.0)', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1342426/1/0=&idx=0&pt=asl&sm=202940571729013583899&tvsl=JnNlYXJjaD0lMjU3QiUyNTIydGV4dCUyNTIyJTI1M0ElMjUyMlNPUC0xMzA5NiUyNTIyJTI1N0QmaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MDEzNTgzODk5JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'SOP-14946', title: 'Design, Conduct, and Management of Observational Research', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1753756/1/0' },
    { id: 'GXPMAN-00572', title: 'Global Health Economics and Outcomes Research (GHEOR) Ways of Working', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/3047761/1/0' },
    { id: 'GXPMAN-00022', title: 'Non-Interventional Studies Clinical Operations Manual (v9.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1070787/9/0=&idx=0&pt=asl&sm=202940571729109013475&tvsl=JnNlYXJjaD1HWFBNQU4tMDAwMjImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MTA5MDEzNDc1JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'GXPMAN-00402', title: 'Observational Study Protocol Review Board (oPRB) (v1.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1668822/1/0=&idx=0&pt=asl&sm=202940571729012976798&tvsl=JnNlYXJjaD1HWFBNQU4tMDA0MDImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MDEyOTc2Nzk4JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'WRK-05795', title: 'Local Medical Affairs Research Review', type: 'Work Practice', url: 'https://gvault.veevavault.com/ui/#doc_info/1681855/1/0' },
    { id: 'BED-04506', title: 'Medical Affairs Research Guidance', type: 'Guidance', url: 'https://gvault.veevavault.com/ui/#doc_info/1696222/1/0' }
  ],
  contracting: [
    { id: 'SOP-15064', title: 'Global Clinical Contracts - Site and Investigator Sponsored Research / Collaborative Research', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1795636/1/0' },
    { id: 'SOP-13096', title: 'Oversight of Non-Gilead Sponsored Research (v1.0)', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1342426/1/0=&idx=0&pt=asl&sm=202940571729013583899&tvsl=JnNlYXJjaD0lMjU3QiUyNTIydGV4dCUyNTIyJTI1M0ElMjUyMlNPUC0xMzA5NiUyNTIyJTI1N0QmaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MDEzNTgzODk5JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'SOP-15064', title: 'Global Clinical Contracts - Site and Investigator Sponsored Research / Collaborative Research', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1795636/1/0' },
    { id: 'FRM-04327', title: 'Grant Approval Form (GAF)', type: 'Form', url: 'https://gvault.veevavault.com/ui/#doc_info/737890/2/0' },
    { id: 'FRM-07237', title: 'Notification of Acceptance of Grant Funding Request', type: 'Form', url: 'https://gvault.veevavault.com/ui/#doc_info/825582/1/0' },
    { id: 'FRM-07649', title: 'Educational Grant Letter', type: 'Form', url: 'https://gvault.veevavault.com/ui/#doc_info/837111/1/0' },
    { id: 'GXPMAN-00387', title: 'New Contracts/Amendments Procedures for Site & Investigator Sponsored Research / Collaborative Research', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1638638/1/0' },
    { id: 'GXPMAN-00387', title: 'New Contracts/Amendments Procedures for Site & Investigator Sponsored Research / Collaborative Research', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1638638/1/0' },
    { id: 'GXPMAN-00022', title: 'Non-Interventional Studies Clinical Operations Manual (v9.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1070787/9/0=&idx=0&pt=asl&sm=202940571729109013475&tvsl=JnNlYXJjaD1HWFBNQU4tMDAwMjImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MTA5MDEzNDc1JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'WRK-05819', title: 'Safety Management in Gilead Sponsored Interventional Clinical Studies, Managed Access/Compassionate Use Programs', type: 'Work Practice', url: 'https://gvault.veevavault.com/ui/#doc_info/1689253/3/0' },
    { id: 'BED-04506', title: 'Medical Affairs Research Guidance', type: 'Guidance', url: 'https://gvault.veevavault.com/ui/#doc_info/1696222/1/0' }
  ],
  oversight: [
    { id: 'SOP-14946', title: 'Design, Conduct, and Management of Observational Research', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1753756/1/0' },
    { id: 'SOP-13096', title: 'Oversight of Non-Gilead Sponsored Research (v1.0)', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1342426/1/0=&idx=0&pt=asl&sm=202940571729013583899&tvsl=JnNlYXJjaD0lMjU3QiUyNTIydGV4dCUyNTIyJTI1M0ElMjUyMlNPUC0xMzA5NiUyNTIyJTI1N0QmaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MDEzNTgzODk5JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'GXPMAN-00022', title: 'Non-Interventional Studies Clinical Operations Manual (v9.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1070787/9/0=&idx=0&pt=asl&sm=202940571729109013475&tvsl=JnNlYXJjaD1HWFBNQU4tMDAwMjImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MTA5MDEzNDc1JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'GXPMAN-00005', title: 'Oversight of Non-Gilead Sponsored Research', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1471277/1/0' }
  ],
  closeout: [
    { id: 'SOP-13096', title: 'Oversight of Non-Gilead Sponsored Research (v1.0)', type: 'SOP', url: 'https://gvault.veevavault.com/ui/#doc_info/1342426/1/0=&idx=0&pt=asl&sm=202940571729013583899&tvsl=JnNlYXJjaD0lMjU3QiUyNTIydGV4dCUyNTIyJTI1M0ElMjUyMlNPUC0xMzA5NiUyNTIyJTI1N0QmaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MDEzNTgzODk5JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' },
    { id: 'GXPMAN-00022', title: 'Non-Interventional Studies Clinical Operations Manual (v9.0)', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/1070787/9/0=&idx=0&pt=asl&sm=202940571729109013475&tvsl=JnNlYXJjaD1HWFBNQU4tMDAwMjImaXZwPTEmaXZyPTAmaXY9MSZpdm89ZGVzYyZpdnM9JmZjYWM9JmFsbFN0dWRpZXNTaXRlcz0mc209MjAyOTQwNTcxNzI5MTA5MDEzNDc1JnNtYXJ0PXRydWUmaXZ2PUNPTVBBQ1Qmdmlld0lkPWFkdlNlYXJjaCZmYWNldHNVbmNoYW5nZWQ9ZmFsc2UmaW50ZXJuYWxGaWx0ZXJzJTVCJTVEPWNvbXBvdW5kVHlwZV9iISUzRCU1QiUyMnFNU0Zvcm1hdHRlZE91dHB1dCUyMiU1RA,,' }
  ],
  dataDisclosure: [
    { id: 'GXPMAN-00572', title: 'Global Health Economics and Outcomes Research (GHEOR) Ways of Working', type: 'Manual', url: 'https://gvault.veevavault.com/ui/#doc_info/3047761/1/0' }
  ]
};

const categoryNames = {
  proposal: 'Proposal Development',
  committee: 'Committee Review',
  contracting: 'Contracting & Grants',
  oversight: 'Project Oversight',
  closeout: 'Project Closeout',
  dataDisclosure: 'Data Disclosure'
};

const getIconForType = (type) => {
  switch (type) {
    case 'SOP':
      return <ScrollText className="w-4 h-4 text-blue-600" />;
    case 'Form':
      return <FileSpreadsheet className="w-4 h-4 text-green-600" />;
    default:
      return <FileText className="w-4 h-4 text-gray-600" />;
  }
};

const getTypeColor = (type) => {
  switch (type) {
    case 'SOP':
      return 'bg-blue-100 text-blue-800';
    case 'Form':
      return 'bg-green-100 text-green-800';
    case 'Manual':
      return 'bg-purple-100 text-purple-800';
    case 'Guidance':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const DocumentLink = ({ doc }) => {
  const handleClick = (e) => {
    if (doc.url.startsWith('/path/to/')) {
      e.preventDefault();
      console.log(`Clicked document: ${doc.id}`);
    }
  };

  return (
    <div className="pl-12">
      <a
        href={doc.url}
        onClick={handleClick}
        className="flex items-center justify-between p-3 bg-white rounded-lg border hover:bg-gray-50 transition-colors group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex items-center gap-3">
          {getIconForType(doc.type)}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700 group-hover:text-red-800">{doc.id}</span>
              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTypeColor(doc.type)}`}>
                {doc.type}
              </span>
            </div>
            <p className="text-sm text-gray-600 group-hover:text-gray-900">{doc.title}</p>
          </div>
        </div>
        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-red-800 flex-shrink-0" />
      </a>
    </div>
  );
};

const DocumentSection = ({ title, docs, isExpanded, onToggle }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          <div className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </div>
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
          <span className="ml-2 text-sm text-gray-500">({docs.length})</span>
        </div>
      </button>
      
      {isExpanded && (
        <div className="mt-4 space-y-3 transition-all duration-200 ease-in-out">
          {docs.map((doc) => (
            <DocumentLink key={`${doc.id}-${doc.url}`} doc={doc} />
          ))}
        </div>
      )}
    </div>
  );
};

const LinktoSGF = () => {
  const [expandedSections, setExpandedSections] = useState(new Set(['proposal']));

  const toggleSection = (section) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Resources & Documentation</h1>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {Object.entries(documents).map(([key, docs]) => (
            <button
              key={key}
              onClick={() => toggleSection(key)}
              className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <p className="font-medium text-gray-900">{categoryNames[key]}</p>
              <p className="text-2xl font-bold text-red-800">{docs.length}</p>
              <p className="text-sm text-gray-500">Documents</p>
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {Object.entries(documents).map(([key, docs]) => (
            <DocumentSection
              key={key}
              title={categoryNames[key]}
              docs={docs}
              isExpanded={expandedSections.has(key)}
              onToggle={() => toggleSection(key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinktoSGF;