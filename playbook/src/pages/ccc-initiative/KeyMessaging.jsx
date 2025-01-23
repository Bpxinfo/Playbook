import React from 'react';

const KeyMessages = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-red-800 mb-8 text-center">Key Messages</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              The CCC (Community Cancer Collective) is making progress towards developing complex, multi-stakeholder ecosystem projects that impact outcomes for patients with cancer and advance our presence in community oncology.
            </p>
            <p className="text-gray-700">
              Partnerships facilitate participation in projects that meaningfully improve cancer care in the community and develop the community site's capabilities to address patient needs within their community.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">North Star</h3>
              <p className="text-gray-700">"Elevating Partners to Impact Community Patients"</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Mission</h3>
              <p className="text-gray-700">
                "Bring together key partners to improve the lives of patients receiving their cancer care in the community"
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Vision</h3>
              <p className="text-gray-700">
                "Effectively collaborate and partner with organizations across the country to identify impactful opportunities and implement innovative solutions"
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">Message Versions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl text-red-800 mb-2">Short Version</h3>
              <p className="text-gray-700">
                The CCC is an initiative to unite key partners nationwide in transforming community cancer care through collaborative, innovative solutions that enhance patient outcomes.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-red-800 mb-2">Medium Version</h3>
              <p className="text-gray-700">
                Guided by our mission to improve the lives of patients receiving their cancer care in community settings, we are bringing together key partners across the country. By leveraging strategic collaborations, we aim to identify impactful opportunities and implement innovative solutions that address unmet needs, elevate patient care, and deliver scalable improvements in community oncology.
              </p>
            </div>

            <div>
              <h3 className="text-xl text-red-800 mb-2">Long Version</h3>
              <p className="text-gray-700">
                Aligned with our North Star—"Elevating Partners to Impact Community Patients"—this initiative is dedicated to transforming cancer care in the community setting through strategic collaboration and innovation. Our mission is to unite key partners nationwide to improve the lives of patients receiving cancer care in their communities.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default KeyMessages;