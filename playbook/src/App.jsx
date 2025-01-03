import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

//index page
import HomePage from './pages/index';
// Import page components
import FeedbackForm from './pages/feedback/Feedback';
import SearchPage from './pages/SearchPage'; 
import { initializeSearchIndex } from './utils/pageRegistry';
import { searchIndex } from './utils/searchIndex';
import ContentIndexer from './components/ContentIndexer';


//playbook app overview
import PlaybookObjectives from './pages/playbook-app/Objectives';
import PlaybookOverviewHome from './pages/playbook-app/index';


//CCC Initiative Overview
import CCCOverview from './pages/ccc-initiative/Objectives';
import KeyMessages from './pages/ccc-initiative/KeyMessaging';
import Stakeholders from './pages/ccc-initiative/Stakeholders';
import StrategicPillars from './pages/ccc-initiative/StrategicPillars';
import CCCInitiativeHome from './pages/ccc-initiative/index';

//Communicaiton pLan
import CommunicationPlanHome from './pages/communication-plan/index';
import CommInternalHome from './pages/communication-plan/internal/internalIndex';
import InternalObjectives from './pages/communication-plan/internal/Objectives';
import CommunicationChannels from './pages/communication-plan/internal/CCCCommunications';
import CCCStakeholders from './pages/communication-plan/internal/CCCStakeholders';
import CommunicationStreams from './pages/communication-plan/internal/CommunicationStreams';
import StrategiesTactics from './pages/communication-plan/internal/StrategiesNTactics';
import Timeline from './pages/communication-plan/internal/Timeline';

import EngagementObjectives from './pages/communication-plan/engagement/Objectives';
import CommEngHome from './pages/communication-plan/engagement/engIndex';
import CommunicationPlan from './pages/communication-plan/engagement/CommunicationPath';
import LeadershipSteerCoMonitoring from './pages/communication-plan/engagement/ImpactMonitoring';
import InternalEngagementStrategies from './pages/communication-plan/engagement/InternalEngagementStrategies';
import InternalEngagementPlan from './pages/communication-plan/engagement/InternalFeedback';

//Onboarding
import InternalOnboardingHome from './pages/internal-onboarding/index';
import OnboardingObjectives from './pages/internal-onboarding/Objectives';
import DeepenEngagement from './pages/internal-onboarding/DeepenEngagement';
import FullIntegration from './pages/internal-onboarding/FullIntegration';
import ImmerseContribute from './pages/internal-onboarding/Immerse';
import PreIntegrationPrep from './pages/internal-onboarding/PrePrep';
import ExternalLinks from './pages/internal-onboarding/ExternalLinks';
import OngoingSupport from './pages/internal-onboarding/OngoingSupport';
import WelcomeOrientation from './pages/internal-onboarding/WelcomeOrientation';

//Processes
import ProcessesHome from './pages/processes/index';
import ProcessesObjectives from './pages/processes/Objectives';
import ProcessesGovernance from './pages/processes/ProcessesGovernance';
import ComplianceGuidance from './pages/processes/ComplianceGuidance';
import LinktoSGF from './pages/processes/LinktoSGF';

//Systems
import SystemsObjectives from './pages/systems/Objectives';
import DigitalSystems from './pages/systems/DigitalSystems';
import SystemsHome from './pages/systems';
import LinkstoProcess from './pages/systems/LinkstoProcess';
import ManualSystems from './pages/systems/ManualSystems';

//Archetypes
import ProjectArchetypeHome from './pages/project-archetype';
import PAObjectives from './pages/project-archetype/Objectives';

function App() {
  useEffect(() => {
    const initSearch = async () => {
      try {
        // Initialize page content indexing
        const pages = await initializeSearchIndex();
        if (pages) {
          Object.entries(pages).forEach(([path, pageData]) => {
            searchIndex.indexPage(path, pageData);
          });
        }
      } catch (error) {
        console.error('Error initializing search:', error);
      }
    };
  
    initSearch();
  }, []);

  return (
    <MainLayout>
      <ContentIndexer />
      <Routes>
        {/* Components*/}
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/search" element={<SearchPage />} />

        {/* Playbook App Overview */}
        <Route path="/playbook-app-overview/objectives" element={<PlaybookObjectives />} />
        <Route path="/playbook-app-overview" element={<PlaybookOverviewHome />} />

        {/* CCC Initiative */}
        <Route path="/ccc-initiative" element={<CCCInitiativeHome />} />
        <Route path="/ccc-initiative/objectives-and-ccc-overview" element={<CCCOverview />} />
        <Route path="/ccc-initiative/strategic-pillars" element={<StrategicPillars />} />
        <Route path="/ccc-initiative/key-messaging" element={<KeyMessages />} />
        <Route path="/ccc-initiative/stakeholders" element={<Stakeholders />} />

        {/* Communication Plan - Internal */}
        <Route path="/communication-plan" element={<CommunicationPlanHome />} />
        <Route path="/communication-plan/internal" element={<CommInternalHome />} />
        <Route path="/communication-plan/internal/objectives" element={<InternalObjectives />} />
        <Route path="/communication-plan/internal/ccc-communications" element={<CommunicationChannels />} />
        <Route path="/communication-plan/internal/ccc-stakeholders" element={<CCCStakeholders />} />
        <Route path="/communication-plan/internal/communication-streams" element={<CommunicationStreams />} />
        <Route path="/communication-plan/internal/strategies-&-tactics" element={<StrategiesTactics />} />
        <Route path="/communication-plan/internal/timeline" element={<Timeline />} />


        {/* Communication Plan - Engagement */}

        <Route path="/communication-plan/engagement-plan/objectives" element={<EngagementObjectives />} />
        <Route path="/communication-plan/engagement-plan" element={<CommEngHome />} />
        <Route path="/communication-plan/engagement-plan/communication-path" element={<CommunicationPlan />} />
        <Route path="/communication-plan/engagement-plan/impact-monitoring" element={<LeadershipSteerCoMonitoring />} />
        <Route path="/communication-plan/engagement-plan/internal-engagement-strategies" element={<InternalEngagementStrategies />} />
        <Route path="/communication-plan/engagement-plan/internal-feedback" element={<InternalEngagementPlan />} />


        {/* Internal Onboarding */}
        <Route path="/internal-onboarding" element={<InternalOnboardingHome />} />
        <Route path="/internal-onboarding/objectives" element={<OnboardingObjectives />} />
        <Route path="/internal-onboarding/deepen-engagement" element={<DeepenEngagement />} />
        <Route path="/internal-onboarding/full-integration" element={<FullIntegration />} />
        <Route path="/internal-onboarding/immerse,-contribute" element={<ImmerseContribute />} />
        <Route path="/internal-onboarding/pre-integration-prep" element={<PreIntegrationPrep />} />
        <Route path="/internal-onboarding/external-links" element={<ExternalLinks />} />
        <Route path="/internal-onboarding/ongoing-support" element={<OngoingSupport />} />
        <Route path="/internal-onboarding/welcome-orientation" element={<WelcomeOrientation />} />

        {/* Processes */}
        <Route path="/processes" element={<ProcessesHome />} />
        <Route path="/processes/objectives" element={<ProcessesObjectives />} />
        <Route path="/processes/processes-&-governance" element={<ProcessesGovernance />} />
        <Route path="/processes/compliance-guidance" element={<ComplianceGuidance />} />
        <Route path="/processes/link-to-sops,-guidance,-forms,-etc." element={<LinktoSGF />} />

        {/* Systems */}
        <Route path="/systems" element={<SystemsHome />} />
        <Route path="/systems/objectives" element={<SystemsObjectives />} />
        <Route path="/systems/digital-systems" element={<DigitalSystems />} />
        <Route path="/systems/manual-systems" element={<ManualSystems />} />
        <Route path="/systems/links-to-process" element={<LinkstoProcess />} />

        {/*Project Archetype */}
        <Route path="/projects-archetypes" element={<ProjectArchetypeHome />} />
        <Route path="/projects-archetypes/objectives" element={<PAObjectives />} />

        {/* Default route */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;