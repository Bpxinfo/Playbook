import React from 'react';

const KeyMessages = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-light text-red-800 mb-8">Key Messages</h1>

      <div className="max-w-4xl">
        <section className="mb-8">
          <p className="text-gray-700 mb-4">
            The CCC (Community Cancer Collective) is making progress towards developing complex, multi-stakeholder ecosystem projects that impact outcomes for patients with cancer and advance our presence in community oncology.
          </p>
          <p className="text-gray-700 mb-4">
            Partnerships facilitate participation in projects that meaningfully improve cancer care in the community and develop the community site's capabilities to address patient needs within their community.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold text-red-800 mb-2">North Star</h2>
              <p className="text-gray-700">"Elevating Partners to Impact Community Patients"</p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold text-red-800 mb-2">Mission</h2>
              <p className="text-gray-700">
                "Bring together key partners to improve the lives of patients receiving their cancer care in the community"
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold text-red-800 mb-2">Vision</h2>
              <p className="text-gray-700">
                "Effectively collaborate and partner with organizations across the country to identify impactful opportunities and implement innovative solutions"
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl text-red-800 mb-4">Short Version</h2>
          <p className="text-gray-700 mb-4">
            The CCC is an initiative to unite key partners nationwide in transforming community cancer care through collaborative, innovative solutions that enhance patient outcomes.
          </p>

          <h2 className="text-2xl text-red-800 mb-4">Medium Version</h2>
          <p className="text-gray-700 mb-4">
            Guided by our mission to improve the lives of patients receiving their cancer care in community settings, we are bringing together key partners across the country. By leveraging strategic collaborations, we aim to identify impactful opportunities and implement innovative solutions that address unmet needs, elevate patient care, and deliver scalable improvements in community oncology.
          </p>

          <h2 className="text-2xl text-red-800 mb-4">Long Version</h2>
          <p className="text-gray-700 mb-4">
            Aligned with our North Star—"Elevating Partners to Impact Community Patients"—this initiative is dedicated to transforming cancer care in the community setting through strategic collaboration and innovation. Our mission is to unite key partners nationwide to improve the lives of patients receiving cancer care in their communities.
          </p>
          <p className="text-gray-700 mb-4">
            By effectively collaborating with organizations across the country, we aim to identify impactful opportunities and implement innovative solutions that address the unique challenges faced by community cancer patients.
          </p>
          <p className="text-gray-700 mb-4">
            Through a patient-centric approach, we seek to enhance outcomes, increase access to cutting-edge treatments, and create lasting value in community oncology care.
          </p>
          <p className="text-gray-700 mb-4">
            By leveraging our collective expertise and resources, we strive to make a nationwide impact, ensuring that patients receive the highest quality care where they live.
          </p>
        </section>

        <section>
          <h2 className="text-2xl text-red-800 mb-4">Functional Messaging</h2>
          <p className="text-gray-700 mb-4">
            When underserved community sites conduct clinical research/trials, educate patients and improve patient care, the community benefits through increased awareness, participation and collaboration in innovative projects that ultimate create positive impact for oncology patients across the US.
          </p>
        </section>
      </div>
    </div>
  );
};

export default KeyMessages;