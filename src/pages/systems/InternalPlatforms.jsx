import React from 'react';

const InternalPlatforms = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">CCC Internal Platforms</h1>

        <div className="space-y-6">
          <section className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Internal Systems Overview</h2>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                  <thead className="bg-gray-100 dark:bg-gray-800">
                    <tr>
                      <th className="px-4 py-2 text-left dark:text-gray-200">System</th>
                      <th className="px-4 py-2 text-left dark:text-gray-200">Contact</th>
                      <th className="px-4 py-2 text-left dark:text-gray-200">Process</th>
                      <th className="px-4 py-2 text-left dark:text-gray-200">Governance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="dark:bg-gray-900">
                      <td className="px-4 py-2 text-black dark:text-gray-200">GRC</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">Shannon Dervin, Sr Dir GMA, GRC Chair<br /></td>
                      <td className="px-4 py-2 text-black dark:text-gray-200"></td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">GRC</td>
                    </tr>
                    <tr className="dark:bg-gray-900">
                      <td className="px-4 py-2 text-black dark:text-gray-200">LRC</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">Roy Koruth</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200"></td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">Implement objectives</td>
                    </tr>
                    <tr className="dark:bg-gray-900">
                      <td className="px-4 py-2 text-black dark:text-gray-200">GVault</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">Lauren Crane, Deborah Ablordeppey</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">CCC Processes</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200"></td>
                    </tr>
                    <tr className="dark:bg-gray-900">
                      <td className="px-4 py-2 text-black dark:text-gray-200">GOptics</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">Marina Karmanova</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200">ISR and collaborative studies platform → Study Concepts, Protocols</td>
                      <td className="px-4 py-2 text-black dark:text-gray-200"></td>
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