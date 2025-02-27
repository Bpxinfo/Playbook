import React from 'react';

const InternalPlatforms = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Internal Platforms</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Internal Systems Overview</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-red-800 text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">System</th>
                      <th className="px-4 py-2 text-left">Contact</th>
                      <th className="px-4 py-2 text-left">Process</th>
                      <th className="px-4 py-2 text-left">Governance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 text-gray-700">GRC</td>
                      <td className="px-4 py-2 text-gray-700">Shannon Dervin, Sr Dir GMA, GRC Chair<br /></td>
                      <td className="px-4 py-2 text-gray-700"></td>
                      <td className="px-4 py-2 text-gray-700">GRC</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">LRC</td>
                      <td className="px-4 py-2 text-gray-700">Roy Koruth</td>
                      <td className="px-4 py-2 text-gray-700"></td>
                      <td className="px-4 py-2 text-gray-700">Implement objectives</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">GVault</td>
                      <td className="px-4 py-2 text-gray-700">Lauren Crane, Deborah Ablordeppey</td>
                      <td className="px-4 py-2 text-gray-700">CCC Processes</td>
                      <td className="px-4 py-2 text-gray-700"></td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">G360 (Veeva)</td>
                      <td className="px-4 py-2 text-gray-700">Jen Prokes (Lead)<br />(Gene Felber = Acct planning)</td>
                      <td className="px-4 py-2 text-gray-700">Field Planning</td>
                      <td className="px-4 py-2 text-gray-700">Jen Prokes (Main Point)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-700">GOptics</td>
                      <td className="px-4 py-2 text-gray-700">Marina Karmanova</td>
                      <td className="px-4 py-2 text-gray-700">ISR and collaborative studies platform → Study Concepts, Protocols</td>
                      <td className="px-4 py-2 text-gray-700"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InternalPlatforms;