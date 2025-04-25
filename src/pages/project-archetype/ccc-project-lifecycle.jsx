import React from 'react'
import lifecycle from '../../assets/CCC_Process_Overview.png'
import ImageWithZoom from '../../components/ImageWithZoom'
import { 
  Lightbulb,
  Files,
  Scale,
  ClipboardCheck,
  FileText,
  Eye,
  CheckCircle2,
  Target,
  ArrowRight
} from 'lucide-react'

const CCCProjectLifecycle = () => {
  return (
    <div className="p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-6 text-center bg-red-800 p-4 uppercase relative">
          CCC Project Lifecycle
        </h1>

        <div className="space-y-6 relative">
          {/* Overview Section with Large Image */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Overview
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <ImageWithZoom 
                src={lifecycle} 
                alt="Project Lifecyle Diagram" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              <p className="text-sm text-gray-500">Project Lifecyle Diagram</p>
            </div>
            <p className="text-gray-700 mt-4">
              The CCC Project Lifecycle provides a structured process for managing clinical projects to
              ensure they align with organizational goals, meet compliance standards, and achieve desired
              outcomes. Below is a step-by-step explanation of each phase.
            </p>
          </section>

          {/* Strategy Development */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6" />
              Strategy Development
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  The project's purpose and strategy are defined with input from external experts and internal
                  teams. This ensures the project is aligned with broader organizational objectives and has a
                  clear focus.
                </p>
              </div>
            </div>
          </section>

          {/* Project Proposal Funnel Section */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Project Proposal Development
            </h2>
            <p className="text-gray-700 mb-4">
              Below are the key steps and considerations for preparing qualified CCC Concepts that align
              with CCC Criteria:
            </p>
            <ul className="list-disc pl-6 mb-4 text-black">
            <li>Qualified CCC Concepts (ISR/Collaborative Studies aligned with CCC Criteria)</li>
              <li>Describe how the project aligns with the CCC Pillars</li>
              <li>Describe how the partner fits with the CCC Selection Criteria</li>
              <li>CCC Project Ideas, Draft Concepts are tracked by the CCC Team</li>
            </ul>
          </section>

          {/* Project Development */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Files className="w-6 h-6" />
              Project Development
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  Detailed planning begins, including internal discussions (e.g., with Medical Affairs and
                  Compliance) and collaboration with external stakeholders. A formal proposal is created,
                  outlining the project's scope and approach.
                </p>
              </div>
            </div>
          </section>

          {/* Adjudication */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Scale className="w-6 h-6" />
              Adjudication
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  Projects are reviewed for compliance with legal, regulatory, and medical standards. Simple
                  projects undergo a standard review, while complex projects require deeper scrutiny by
                  governance teams.
                </p>
              </div>
            </div>
          </section>

          {/* Review & Approval */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6" />
              Review &amp; Approval
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  Committees, such as the Global or Local Review Committee, formally approve the project.
                  These approvals ensure the project is ready to move forward and aligns with organizational
                  and regulatory expectations.
                </p>
              </div>
            </div>
          </section>

          {/* Contracting */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Contracting
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  Necessary agreements and contracts are finalized to enable project execution. This ensures
                  all parties involved are legally bound and aligned on responsibilities.
                </p>
              </div>
            </div>
          </section>

          {/* Oversight */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6" />
              Oversight
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  During execution, the project is closely monitored to ensure it stays on track, complies
                  with plans, and meets quality standards. Regular updates are provided to stakeholders.
                </p>
              </div>
            </div>
          </section>

          {/* Close-Out */}
          <section className="bg-white rounded-lg shadow-md p-6 transform transition-all hover:scale-[1.02]">
            <h2 className="text-2xl text-red-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" />
              Close-Out
            </h2>
            <div className="flex items-start gap-4">
              <div className="flex-grow">
                <p className="text-gray-700">
                  The project is formally concluded, with outcomes documented and any open issues resolved.
                  This phase ensures the project is properly closed and all obligations are met.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

export default CCCProjectLifecycle
