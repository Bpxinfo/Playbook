import React from 'react';
import { Users, BookOpen, HeartHandshake, ClipboardList } from 'lucide-react';
import CheckboxItem from '../../components/CheckboxItem';

const ImmerseContribute = () => {
  return (
    <div className="p-4 flex justify-center">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light text-white mb-8 text-center bg-red-800 p-4 uppercase">Immerse and Contribute (1-2 months)</h1>
        <div className="space-y-8">
          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Users className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Shadowing and Learning</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="immerse-shadow-1" text="Partner with a CCC Champion or manager in your group for guidance and questions" />
              </li>
              <li>
                <CheckboxItem id="immerse-shadow-2" text="Attend ongoing meetings to observe dynamics, learn how to best contribute" />
              </li>
              <li>
                <CheckboxItem id="immerse-shadow-3" text="Read and understand recent decisions, project updates and discussions" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Hands-on Integration</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="immerse-hands-1" text="Take on small, manageable tasks related to current projects" />
              </li>
              <li>
                <CheckboxItem id="immerse-hands-2" text="Where needed, ask for close supervision and feedback" />
              </li>
              <li>
                <CheckboxItem id="immerse-hands-3" text="Ask questions and seek clarifications" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <HeartHandshake className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Relationship Building</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="immerse-relation-1" text="Engage in one-on-one meetings with key collaborators" />
              </li>
              <li>
                <CheckboxItem id="immerse-relation-2" text="Attend team events and participate in CCC outreach activities, ensure you are added to the CCC Roster in Teams" />
              </li>
              <li>
                <CheckboxItem id="immerse-relation-3" text="Understand and introduce yourself to cross-functional CCC stakeholders via CCC Teams space" />
              </li>
            </ul>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 text-left hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <ClipboardList className="w-8 h-8 text-red-800 mr-3" />
              <h2 className="text-2xl text-red-800">Project Updates</h2>
            </div>
            <ul className="pl-6 space-y-2 text-gray-700">
              <li>
                <CheckboxItem id="immerse-project-1" text="Share new project concepts and brainstorm potential innovations" />
              </li>
              <li>
                <CheckboxItem id="immerse-project-2" text="Provide regular monthly status updates on ongoing projects and milestones being lead" />
              </li>
              <li>
                <CheckboxItem id="immerse-project-3" text="Discuss challenges and potential solutions encountered during project execution" />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ImmerseContribute;