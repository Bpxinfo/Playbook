const Channels = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Engagement Channels</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Core Engagement Channels</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Our engagement strategy leverages various channels to maximize employee participation and involvement:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Interactive Platforms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Virtual Town Halls</li>
                    <li>Employee Forums</li>
                    <li>Digital Suggestion Box</li>
                    <li>Feedback Surveys</li>
                    <li>Online Discussion Boards</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">Collaborative Tools</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Project Workspaces</li>
                    <li>Innovation Hubs</li>
                    <li>Knowledge Sharing Platforms</li>
                    <li>Mentoring Programs</li>
                    <li>Cross-functional Teams</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Engagement Strategies</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                Key strategies for maximizing channel effectiveness:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Regular feedback collection and implementation</li>
                <li>Recognition and reward programs</li>
                <li>Skill development opportunities</li>
                <li>Cross-departmental collaboration</li>
                <li>Employee-led initiatives</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Success Metrics</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                We measure engagement success through:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Participation rates in initiatives</li>
                <li>Employee satisfaction scores</li>
                <li>Feedback implementation rate</li>
                <li>Innovation contributions</li>
                <li>Cross-functional collaboration metrics</li>
              </ul>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Engagement Matrix</h2>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Channel</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact Level</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Town Halls</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Company-wide updates</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Monthly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Forums</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Topic discussions</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Weekly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Surveys</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Feedback collection</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Quarterly</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
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

export default Channels; 