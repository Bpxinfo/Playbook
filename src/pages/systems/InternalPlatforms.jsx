import React from 'react';

const InternalPlatforms = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <div className="text-sm text-gray-500 mb-6 text-center">
        Systems / Internal Platforms
      </div>

      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">CCC Internal Platforms</h1>

      <div className="space-y-8">
        {/* Main Systems Table */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Internal Systems Overview</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse text-sm text-gray-700">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2 text-left font-medium">System</th>
                  <th className="border px-4 py-2 text-left font-medium">Contact</th>
                  <th className="border px-4 py-2 text-left font-medium">Process</th>
                  <th className="border px-4 py-2 text-left font-medium">Governance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">GRC</td>
                  <td className="border px-4 py-2">Shannon Dervin, Sr Dir GMA, GRC Chair<br />Contact = Emma Lee</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">GRC</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">LRC</td>
                  <td className="border px-4 py-2">Emma Lee, ED, PAQ, and co-LRC chair.</td>
                  <td className="border px-4 py-2"></td>
                  <td className="border px-4 py-2">Implement objectives</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GVault</td>
                  <td className="border px-4 py-2">Lauren Crane, Deborah Ablordeppey</td>
                  <td className="border px-4 py-2">CCC Processes</td>
                  <td className="border px-4 py-2"></td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">G360 (Veeva)</td>
                  <td className="border px-4 py-2">Jen Prokes (Lead)<br />(Gene Felber = Acct planning)</td>
                  <td className="border px-4 py-2">Field Planning</td>
                  <td className="border px-4 py-2">Jen Prokes (Main Point)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">GOptics (Appian)</td>
                  <td className="border px-4 py-2">Janet Fobes</td>
                  <td className="border px-4 py-2">ISR Collaboration Platform → Study Concepts, Protocols</td>
                  <td className="border px-4 py-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InternalPlatforms;