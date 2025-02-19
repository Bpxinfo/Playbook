import React from 'react';
import { Clock, Milestone, AlertTriangle, ClipboardList } from 'lucide-react';
import timeline from '../../../assets/timeline.jpeg';
import ImageWithZoom from '../../../components/ImageWithZoom';

const Timeline = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Timeline</h1>
        
        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Project Timeline</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ImageWithZoom 
                src={timeline} 
                alt="Project Timeline" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">Project Timeline Overview</p>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Implementation Schedule</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Schedule Overview</h3>
                    <p className="text-gray-700">
                      Our communication rollout follows a structured timeline to ensure effective implementation:
                    </p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phase</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activities</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timeline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Planning</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Strategy Development</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q1</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Complete</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Launch</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Initial Rollout</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q2</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">In Progress</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Expansion</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Full Implementation</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Q3</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Planned</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Key Milestones</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 border-l-4 border-emerald-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Milestone className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 1: Planning</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Strategy Development</li>
                        <li>Stakeholder Analysis</li>
                        <li>Resource Allocation</li>
                        <li>Channel Selection</li>
                        <li>Team Alignment</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-lg">
                  <div className="flex items-start gap-4">
                    <Milestone className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phase 2: Launch</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Initial Announcements</li>
                        <li>Channel Setup</li>
                        <li>Team Training</li>
                        <li>Feedback Collection</li>
                        <li>Progress Monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Critical Path Activities</h2>
            <div className="space-y-4">
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg">
                <div className="flex items-start gap-4">
                  <ClipboardList className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Essential Activities</h3>
                    <p className="text-gray-700 mb-4">Essential activities that must be completed on schedule:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Stakeholder engagement and alignment</li>
                      <li>Communication platform implementation</li>
                      <li>Training program completion</li>
                      <li>Feedback system deployment</li>
                      <li>Performance monitoring setup</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4">Risk Management</h2>
            <div className="space-y-4">
              <div className="bg-rose-50 border-l-4 border-rose-400 p-4 rounded-lg mb-4">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Risk Assessment</h3>
                    <p className="text-gray-700 mb-4">Key risks and mitigation strategies:</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Resource Constraints</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Early planning and allocation</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Technical Issues</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Medium</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Backup systems and testing</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Stakeholder Resistance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">High</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Early engagement and training</td>
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

export default Timeline;