import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

// Import page components
import PlaybookObjectives from './pages/playbook-app/Objectives';

//CCC Initiative Overview
import CCCOverview from './pages/ccc-initiative/Objectives';
import KeyMessages from './pages/ccc-initiative/KeyMessaging';
import Stakeholders from './pages/ccc-initiative/Stakeholders';
import StrategicPillars from './pages/ccc-initiative/StrategicPillars';

//Communicaiton pLan
import InternalObjectives from './pages/communication-plan/internal/Objectives';
import CommunicationChannels from './pages/communication-plan/internal/CCCCommunications';
import CCCStakeholders from './pages/communication-plan/internal/CCCStakeholders';
import CommunicationStreams from './pages/communication-plan/internal/CommunicationStreams';
import StrategiesTactics from './pages/communication-plan/internal/StrategiesNTactics';
import Timeline from './pages/communication-plan/internal/Timeline';


import EngagementObjectives from './pages/communication-plan/engagement/Objectives';
import CommunicationPlan from './pages/communication-plan/engagement/CommunicationPath';
import LeadershipSteerCoMonitoring from './pages/communication-plan/engagement/ImpactMonitoring';
import InternalEngagementStrategies from './pages/communication-plan/engagement/InternalEngagementStrategies';
import InternalEngagementPlan from './pages/communication-plan/engagement/InternalFeedback';

//Onboarding
import OnboardingObjectives from './pages/internal-onboarding/Objectives';

//Processes
import ProcessesObjectives from './pages/processes/Objectives';
import ProcessesGovernance from './pages/processes/ProcessesGovernance';
import ComplianceGuidance from './pages/processes/ComplianceGuidance';
import LinksToProcess from './pages/processes/LinktoSGF';

//Systems
import SystemsObjectives from './pages/systems/Objectives';

function App() {
  return (
    <MainLayout>
      <Routes>
        {/* Playbook App Overview */}
        <Route path="/playbook-app-overview/objectives" element={<PlaybookObjectives />} />

        {/* CCC Initiative */}
        <Route path="/ccc-initiative/objectives-and-ccc-overview" element={<CCCOverview />} />
        <Route path="/ccc-initiative/strategic-pillars" element={<StrategicPillars />} />
        <Route path="/ccc-initiative/key-messaging" element={<KeyMessages />} />
        <Route path="/ccc-initiative/stakeholders" element={<Stakeholders />} />

        {/* Communication Plan - Internal */}
        <Route path="/communication-plan/internal/objectives" element={<InternalObjectives />} />
        <Route path="/communication-plan/internal/ccc-communications" element={<CommunicationChannels />} />
        <Route path="/communication-plan/internal/ccc-stakeholders" element={<CCCStakeholders />} />
        <Route path="/communication-plan/internal/communication-streams" element={<CommunicationStreams />} />
        <Route path="/communication-plan/internal/strategies-&-tactics" element={<StrategiesTactics />} />
        <Route path="/communication-plan/internal/timeline" element={<Timeline />} />


        {/* Communication Plan - Engagement */}
        <Route path="/communication-plan/engagement-plan/objectives" element={<EngagementObjectives />} />
        <Route path="/communication-plan/engagement-plan/communication-path" element={<CommunicationPlan />} />
        <Route path="/communication-plan/engagement-plan/impact-monitoring" element={<LeadershipSteerCoMonitoring />} />
        <Route path="/communication-plan/engagement-plan/internal-engagement-strategies" element={<InternalEngagementStrategies />} />
        <Route path="/communication-plan/engagement-plan/internal-feedback" element={<InternalEngagementPlan />} />


        {/* Internal Onboarding */}
        <Route path="/internal-onboarding/objectives" element={<OnboardingObjectives />} />

        {/* Processes */}
        <Route path="/processes/objectives" element={<ProcessesObjectives />} />
        <Route path="/processes/processes-&-governance" element={<ProcessesGovernance />} />
        <Route path="/processes/compliance-guidance" element={<ComplianceGuidance />} />
        <Route path="/processes/link-to-sops,-guidance,-forms,-etc." element={<LinksToProcess />} />

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