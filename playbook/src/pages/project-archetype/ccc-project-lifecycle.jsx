import React from 'react'
import lifecycle from '../../assets/CCC_Process_Overview.png'
const CCCProjectLifecycle = () => {
  return (
    <div className="p-8 mx-auto max-w-7xl">
      {/* Main Page Title */}
      <h1 className="text-4xl font-light text-red-800 mb-8 text-center">CCC Project Lifecycle</h1>

      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
            <div className="mb-8">
                <img 
                    src={lifecycle} 
                    alt="lifecyle" 
                    className="w-full rounded-lg shadow-lg mb-4"
                />
                <p className="text-sm text-gray-500 text-center">Project Lifecyle Diagram</p>
            </div>
            </div>
      </section>

      {/* Overview Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">Overview</h2>
        <p className="text-gray-700">
          The CCC Project Lifecycle provides a structured process for managing clinical projects to
          ensure they align with organizational goals, meet compliance standards, and achieve desired
          outcomes. Below is a step-by-step explanation of each phase.
        </p>
      </section>

      {/* Strategy Development */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">1. Strategy Development</h2>
        <p className="text-gray-700">
          The project’s purpose and strategy are defined with input from external experts and internal
          teams. This ensures the project is aligned with broader organizational objectives and has a
          clear focus.
        </p>
      </section>

      {/* Project Development */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">2. Project Development</h2>
        <p className="text-gray-700">
          Detailed planning begins, including internal discussions (e.g., with Medical Affairs and
          Compliance) and collaboration with external stakeholders. A formal proposal is created,
          outlining the project's scope and approach.
        </p>
      </section>

      {/* Adjudication */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">3. Adjudication</h2>
        <p className="text-gray-700">
          Projects are reviewed for compliance with legal, regulatory, and medical standards. Simple
          projects undergo a standard review, while complex projects require deeper scrutiny by
          governance teams.
        </p>
      </section>

      {/* Review & Approval */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">4. Review &amp; Approval</h2>
        <p className="text-gray-700">
          Committees, such as the Global or Local Review Committee, formally approve the project.
          These approvals ensure the project is ready to move forward and aligns with organizational
          and regulatory expectations.
        </p>
      </section>

      {/* Contracting */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">5. Contracting</h2>
        <p className="text-gray-700">
          Necessary agreements and contracts are finalized to enable project execution. This ensures
          all parties involved are legally bound and aligned on responsibilities.
        </p>
      </section>

      {/* Oversight */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">6. Oversight</h2>
        <p className="text-gray-700">
          During execution, the project is closely monitored to ensure it stays on track, complies
          with plans, and meets quality standards. Regular updates are provided to stakeholders.
        </p>
      </section>

      {/* Close-Out */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">7. Close-Out</h2>
        <p className="text-gray-700">
          The project is formally concluded, with outcomes documented and any open issues resolved.
          This phase ensures the project is properly closed and all obligations are met.
        </p>
      </section>

      {/* Project Proposal Funnel Section */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl text-red-800 mb-4">Project Proposal Funnel Material</h2>
        <p className="text-gray-700 mb-4">
          Below are the key steps and considerations for preparing qualified CCC Concepts that align
          with CCC Criteria:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Qualified CCC Concepts [ISR/Collaborative Studies, Aligned with CCC Criteria]</li>
          <li>Describe how the project aligns with the CCC Pillars</li>
          <li>Describe how the partner fits with the CCC Selection Criteria</li>
          <li>
            CCC Project Ideas, Draft Concepts are tracked by the CCC Team (
            <a href="#!" className="text-blue-500 underline">
              LINK
            </a>
            )
          </li>
        </ul>
      </section>
    </div>
  )
}

export default CCCProjectLifecycle
