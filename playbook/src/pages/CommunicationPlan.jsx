import React from 'react';

const CommunicationPlan = () => {
  const communicationStreams = [
    {
      content: 'CCC Newsletter',
      channel: 'CCC SP Hub & Internal Email',
      responsible: 'USMA',
      reviewers: 'CCC Project Leads Approvers: CCC LT',
      audience: 'Internal CCC Stakeholders',
      frequency: 'Quarterly'
    },
    {
      content: 'CCC Spotlight - CCC Initiative Update',
      channel: 'CCC SP Hub Blog / Compile into Newsletter',
      responsible: 'Sabrina CCC Core Team',
      reviewers: 'USMA operations, field team',
      audience: '',
      frequency: 'Monthly'
    }
  ];

  return (
    <div className="w-full p-6">
      <div className="text-sm text-gray-500 mb-6">
        Home / Communication Plan / Communication Streams
      </div>

      <div className="w-full max-w-[2000px] mx-auto">
        <h1 className="text-4xl text-red-800 font-light mb-8">Communication Plan</h1>
        
        <section className="mb-12 w-full">
          <h2 className="text-2xl text-red-800 mb-4">Communication Streams</h2>
          <p className="text-gray-600 mb-6">
            Communication streams are the different message passing systems allowing the CCC information to travel between individuals or groups.
          </p>

          <div className="w-full bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto"> 
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Content Stream</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Channel(s)</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Responsible / Accountable</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Reviewers / Approvers</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Audience</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {communicationStreams.map((stream, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.content}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.channel}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.responsible}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.reviewers}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.audience}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{stream.frequency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Communication Cadence</h2>
          <p className="text-gray-600 mb-6">
            Communication streams are the different message passing systems allowing the CCC information to travel between individuals or groups.
          </p>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-500 mb-4">Table in progress</p>
            <p className="mb-4">Work Development meetings will have their own communication streams:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>To CCC Core Team for input, alignment, output generation</li>
              <li>To CCC LT for alignment, approval</li>
              <li>To CCC Extended Team for engagement, awareness</li>
              <li>To Broader Organization for awareness, engagement, expansion (can be done through CCC SP Hub, Newsletter, etc.)</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunicationPlan;