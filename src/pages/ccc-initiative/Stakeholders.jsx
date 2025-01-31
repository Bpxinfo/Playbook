import React from 'react';
import stakeholder from '../../assets/stakeholder.jpg'

const Stakeholders = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Stakeholders</h1>

      <div className="space-y-8">
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">1. CCC Leadership SteerCo</h2>
          <p className="text-gray-700">
            The CCC Leadership SteerCo within Gilead will advise and endorse objectives for the Community Cancer Collective initiative. The leadership group needs clear and concise project updates to provide advice, prioritization and endorsement.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">2. USMA Organization</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              CCC is strategically aligned to the USMA Oncology strategic plan and POA.
            </p>
            <p className="text-gray-700">
              The CCC works hand in hand with the USMA Organization to identify and engage key external stakeholders involved in community oncology patient care and further the CCC initiatives.
            </p>
            <p className="text-gray-700">
              The USMA team needs to clearly and compliantly be able to articulate the CCC's mission and ongoing work to spread awareness of Gilead's willingness or support oncology patients.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">3. Cross Functional Field Team</h2>
          <p className="text-gray-700">
            The Gilead field team includes KADs, MSL and MVELs who establish and maintain relationships with physicians at academic institutions and clinics. They need clear topics and messaging to be successful in establishing and maintaining relationships with external professionals to execute projects that are aligned to the brand strategy.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">4. Internal (Gilead) line-functions for project review</h2>
          <p className="text-gray-700">
            Line functions of different departments that contribute to review of RFPs. Line-functions work with USMA, as needed, depending on the project type. Gilead department(s) responsible for the CCC project will oversee CCC development under the strategic pillars. This includes the department's standard process for submission, review, approval.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl text-red-800 mb-4">5. PAQ</h2>
          <p className="text-gray-700 italic">
            [Need 1) Group description, 2) what they do in the CCC, 3) what they need in terms of Comms]
          </p>
        </section>
      </div>
      <section className="mb-8">
        <div className="mb-8">
          <img 
            src={stakeholder} 
            alt="CCC Overview" 
            className="w-full rounded-lg shadow-lg mb-4"
          />
          <p className="text-sm text-gray-500 text-center">Stakeholder Diagram</p>
        </div>
      </section>
    </div>
  );
};

export default Stakeholders;