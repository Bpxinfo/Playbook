import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { initializeSearchIndex } from './utils/pageRegistry';
import { searchIndex } from './utils/searchIndex';
import ContentIndexer from './components/ContentIndexer';

// Lazy load all page components
const HomePage = lazy(() => import('./pages/index'));
const FeedbackForm = lazy(() => import('./pages/feedback/Feedback'));
const SearchPage = lazy(() => import('./pages/SearchPage'));

// Playbook app overview
const PlaybookObjectives = lazy(() => import('./pages/playbook-app/Objectives'));
const PlaybookOverviewHome = lazy(() => import('./pages/playbook-app/index'));

// CCC Initiative Overview
const CCCOverview = lazy(() => import('./pages/ccc-initiative/Objectives'));
const KeyMessages = lazy(() => import('./pages/ccc-initiative/KeyMessaging'));
const Stakeholders = lazy(() => import('./pages/ccc-initiative/Stakeholders'));
const StrategicPillars = lazy(() => import('./pages/ccc-initiative/StrategicPillars'));
const CCCInitiativeHome = lazy(() => import('./pages/ccc-initiative/index'));

// Communication Plan
const CommunicationPlanHome = lazy(() => import('@/pages/communication-plan/index'));
const CommInternalHome = lazy(() => import('@/pages/communication-plan/internal/InternalIndex'));
const InternalObjectives = lazy(() => import('@/pages/communication-plan/internal/Objectives'));
const CommunicationChannels = lazy(() => import('@/pages/communication-plan/internal/CCCCommunications'));
const CCCStakeholders = lazy(() => import('@/pages/communication-plan/internal/CCCStakeholders'));
const CommunicationStreams = lazy(() => import('@/pages/communication-plan/internal/CommunicationStreams'));
const StrategiesTactics = lazy(() => import('@/pages/communication-plan/internal/StrategiesNTactics'));
const Timeline = lazy(() => import('@/pages/communication-plan/internal/Timeline'));

const EngagementObjectives = lazy(() => import('@/pages/communication-plan/engagement/Objectives'));
const CommEngHome = lazy(() => import('@/pages/communication-plan/engagement/EngIndex'));
const CommunicationPlan = lazy(() => import('@/pages/communication-plan/engagement/CommunicationPath'));
const LeadershipSteerCoMonitoring = lazy(() => import('@/pages/communication-plan/engagement/ImpactMonitoring'));
const InternalEngagementStrategies = lazy(() => import('@/pages/communication-plan/engagement/InternalEngagementStrategies'));
const InternalEngagementPlan = lazy(() => import('@/pages/communication-plan/engagement/InternalFeedback'));

// Onboarding
const InternalOnboardingHome = lazy(() => import('./pages/internal-onboarding/index'));
const OnboardingObjectives = lazy(() => import('./pages/internal-onboarding/Objectives'));
const DeepenEngagement = lazy(() => import('./pages/internal-onboarding/DeepenEngagement'));
const FullIntegration = lazy(() => import('./pages/internal-onboarding/FullIntegration'));
const ImmerseContribute = lazy(() => import('./pages/internal-onboarding/Immerse'));
const PreIntegrationPrep = lazy(() => import('./pages/internal-onboarding/PrePrep'));
const ExternalLinks = lazy(() => import('./pages/internal-onboarding/ExternalLinks'));
const OngoingSupport = lazy(() => import('./pages/internal-onboarding/OngoingSupport'));
const WelcomeOrientation = lazy(() => import('./pages/internal-onboarding/WelcomeOrientation'));

// Processes
const ProcessesHome = lazy(() => import('./pages/processes/index'));
const ProcessesObjectives = lazy(() => import('./pages/processes/Objectives'));
const ProcessesGovernance = lazy(() => import('./pages/processes/ProcessesGovernance'));
const LinktoSGF = lazy(() => import('./pages/processes/RandD'));

// Compliance
const ComplianceGuidance = lazy(() => import('./pages/compliance/ComplianceGuidance'));

// Systems
const SystemsHome = lazy(() => import('./pages/systems/index'));
const SystemsObjectives = lazy(() => import('./pages/systems/Objectives'));
const InternalPlatforms = lazy(() => import('./pages/systems/InternalPlatforms'));
const ManualSystems = lazy(() => import('./pages/systems/ManualSystems'));
const LinkstoProcess = lazy(() => import('./pages/systems/LinksToProcess'));

// Project Archetype
const ProjectArchetypeHome = lazy(() => import('./pages/project-archetype/index'));
const PAObjectives = lazy(() => import('./pages/project-archetype/Objectives'));
const CorePrinciples = lazy(() => import('./pages/project-archetype/CorePrinciples'));
const CCCProjectLifecycle = lazy(() => import('./pages/project-archetype/ccc-project-lifecycle'));
const CCCProjectTypes = lazy(() => import('./pages/project-archetype/ProjectTypes'));

// Glossary
const GlossaryOfTerms = lazy(() => import('./pages/glossary/GlossaryOfTerms'));

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
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path="/processes/resources-&-documentation" element={<LinktoSGF />} />

          {/* Compliance */}
          <Route path="/compliance" element={<ComplianceGuidance />} />

          {/* Systems */}
          <Route path="/systems" element={<SystemsHome />} />
          <Route path="/systems/objectives" element={<SystemsObjectives />} />
          <Route path="/systems/internal-platforms" element={<InternalPlatforms />} />
          <Route path="/systems/manual-systems" element={<ManualSystems />} />
          <Route path="/systems/links-to-process" element={<LinkstoProcess />} />

          {/*Project Archetype */}
          <Route path="/projects-archetypes" element={<ProjectArchetypeHome />} />
          <Route path="/projects-archetypes/objectives" element={<PAObjectives />} />
          <Route path="/projects-archetypes/core-principles" element={<CorePrinciples />} />
          <Route path="/projects-archetypes/ccc-project-lifecycle" element={<CCCProjectLifecycle />} />
          <Route path="/projects-archetypes/ccc-project-types" element={<CCCProjectTypes />} />
          {/* Glossary of Terms */}
          <Route path="/glossary" element={<GlossaryOfTerms />} />

          {/* Default route */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;