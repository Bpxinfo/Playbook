import React from 'react';
import { MessageSquare, Star, Target, Eye, AlertCircle, ArrowRight } from 'lucide-react';

const KeyMessages = () => {
  return (
    <div className="p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase">Key Messages</h1>

        <div className="space-y-6">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2" />
              Overview
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  The CCC (Community Cancer Collective) is making progress towards developing complex, multi-stakeholder ecosystem projects that impact outcomes for patients with cancer and advance our presence in community oncology.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
                <p className="text-gray-700">
                  Partnerships facilitate participation in projects that meaningfully improve cancer care in the community and develop the community site's capabilities to address patient needs within their community.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <Star className="w-6 h-6 mr-2" />
              Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center mb-3">
                  <Star className="w-5 h-5 text-red-800 mr-2" />
                  <h3 className="text-lg font-semibold text-red-800">North Star</h3>
                </div>
                <p className="text-gray-700 italic">"Elevating Partners to Impact Community Patients"</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center mb-3">
                  <Target className="w-5 h-5 text-red-800 mr-2" />
                  <h3 className="text-lg font-semibold text-red-800">Mission</h3>
                </div>
                <p className="text-gray-700 italic">
                  "Bring together key partners to improve the lives of patients receiving their cancer care in the community"
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg transform hover:scale-105 transition-transform duration-200">
                <div className="flex items-center mb-3">
                  <Eye className="w-5 h-5 text-red-800 mr-2" />
                  <h3 className="text-lg font-semibold text-red-800">Vision</h3>
                </div>
                <p className="text-gray-700 italic">
                  "Effectively collaborate and partner with organizations across the country to identify impactful opportunities and implement innovative solutions"
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center">
              <MessageSquare className="w-6 h-6 mr-2" />
              Key Message
            </h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-red-800 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    The CCC initiative unites key partners nationwide to transform community cancer care through strategic collaboration and innovation. Guided by our mission to enhance patient outcomes, we identify impactful opportunities, address unmet needs, and implement scalable solutions that elevate oncology care. Aligned with our North Star—"Elevating Partners to Impact Community Patients"—we strive to improve the lives of patients receiving cancer care in their communities.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default KeyMessages;