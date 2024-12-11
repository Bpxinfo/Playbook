import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import page components
import PlaybookObjectives from './pages/playbook-app/Objectives';
import CCCObjectives from './pages/ccc-initiative/Objectives';
import InternalObjectives from './pages/communication-plan/internal/Objectives';
import EngagementObjectives from './pages/communication-plan/engagement/Objectives';
import OnboardingObjectives from './pages/internal-onboarding/Objectives';
import ProcessesObjectives from './pages/processes/Objectives';
import SystemsObjectives from './pages/systems/Objectives';

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Playbook App Overview */}
        <Route path="/playbook-app-overview/objectives" element={<PlaybookObjectives />} />

        {/* CCC Initiative */}
        <Route path="/ccc-initiative/objectives" element={<CCCObjectives />} />

        {/* Communication Plan - Internal */}
        <Route path="/communication-plan/internal/objectives" element={<InternalObjectives />} />

        {/* Communication Plan - Engagement */}
        <Route path="/communication-plan/engagement/objectives" element={<EngagementObjectives />} />

        {/* Internal Onboarding */}
        <Route path="/internal-onboarding/objectives" element={<OnboardingObjectives />} />

        {/* Processes */}
        <Route path="/processes/objectives" element={<ProcessesObjectives />} />

        {/* Systems */}
        <Route path="/systems/objectives" element={<SystemsObjectives />} />

        {/* Default route */}
        <Route path="/" element={
          <div className="p-8">
            <h1 className="text-4xl font-light text-red-800">Welcome to the CCC Playbook</h1>
          </div>
        } />
      </Routes>
    </MainLayout>
  );
}

export default App;