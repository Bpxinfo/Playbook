import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { initializeSearchIndex } from '@/utils/pageRegistry';
import { searchIndex } from '@/utils/searchIndex';
import ContentIndexer from '@/components/ContentIndexer';

// Lazy load all page components
const HomePage = lazy(() => import('@/pages/index.jsx'));
const FeedbackForm = lazy(() => import('@/pages/feedback/Feedback.jsx'));
const SearchPage = lazy(() => import('@/pages/SearchPage.jsx'));

// Playbook app overview
const PlaybookHome = lazy(() => import('@/pages/playbook-app/index.jsx'));
const PlaybookOverview = lazy(() => import('@/pages/playbook-app/index.jsx'));
const PlaybookObjectives = lazy(() => import('@/pages/playbook-app/Objectives.jsx'));

// CCC Initiative Overview
const CCCOverview = lazy(() => import('@/pages/ccc-initiative/Objectives.jsx'));
const KeyMessages = lazy(() => import('@/pages/ccc-initiative/KeyMessaging.jsx'));
const Stakeholders = lazy(() => import('@/pages/ccc-initiative/Stakeholders.jsx'));
const StrategicPillars = lazy(() => import('@/pages/ccc-initiative/StrategicPillars.jsx'));
const CCCInitiativeHome = lazy(() => import('@/pages/ccc-initiative/index.jsx'));
const PatientImpact = lazy(() => import('@/pages/ccc-initiative/PatientImpact.jsx'));


// Communication Plan
const CommunicationsHome = lazy(() => import('@/pages/communications/index.jsx'));
const InternalCommsHome = lazy(() => import('@/pages/communications/internal-comms-plan/InternalIndex.jsx'));
const InternalObjectives = lazy(() => import('@/pages/communications/internal-comms-plan/Objectives.jsx'));
const Channels = lazy(() => import('@/pages/communications/internal-comms-plan/Channels.jsx'));
const CCCStakeholders = lazy(() => import('@/pages/communications/internal-comms-plan/CCCStakeholders.jsx'));
const Cadence = lazy(() => import('@/pages/communications/internal-comms-plan/Cadence.jsx'));
const StrategiesTactics = lazy(() => import('@/pages/communications/internal-comms-plan/StrategiesNTactics.jsx'));
const Timeline = lazy(() => import('@/pages/communications/internal-comms-plan/Timeline.jsx'));

const EngagementObjectives = lazy(() => import('@/pages/communications/internal-engagement/Objectives.jsx'));
const CommEngHome = lazy(() => import('@/pages/communications/internal-engagement/EngIndex.jsx'));
const CommunicationPlan = lazy(() => import('@/pages/communications/internal-engagement/CommunicationPath.jsx'));
const LeadershipSteerCoMonitoring = lazy(() => import('@/pages/communications/internal-engagement/ImpactMonitoring.jsx'));
const InternalEngagementStrategies = lazy(() => import('@/pages/communications/internal-engagement/InternalEngagementStrategies.jsx'));
const InternalEngagementPlan = lazy(() => import('@/pages/communications/internal-engagement/InternalEngagementPlan.jsx'));

// Onboarding
const InternalOnboardingHome = lazy(() => import('@/pages/internal-onboarding/index.jsx'));
const OnboardingObjectives = lazy(() => import('@/pages/internal-onboarding/Objectives.jsx'));
const DeepenEngagement = lazy(() => import('@/pages/internal-onboarding/DeepenEngagement.jsx'));
const FullIntegration = lazy(() => import('@/pages/internal-onboarding/FullIntegration.jsx'));
const ImmerseContribute = lazy(() => import('@/pages/internal-onboarding/Immerse.jsx'));
const OnboardingChecklist = lazy(() => import('@/pages/internal-onboarding/OnboardingChecklist.jsx'));
const ExternalLinks = lazy(() => import('@/pages/internal-onboarding/ExternalLinks.jsx'));
const OngoingSupport = lazy(() => import('@/pages/internal-onboarding/OngoingSupport.jsx'));
const WelcomeOrientation = lazy(() => import('@/pages/internal-onboarding/WelcomeOrientation.jsx'));
const CCCCoreExtended = lazy(() => import('@/pages/internal-onboarding/ccc-core-extended.jsx'));
const CCCLeadershipSteerCo = lazy(() => import('@/pages/internal-onboarding/ccc-leadership-steerco.jsx'));
const CCCFieldTeam = lazy(() => import('@/pages/internal-onboarding/ccc-field-team.jsx'));

// Processes
const ProcessesHome = lazy(() => import('@/pages/processes/index.jsx'));
const ProcessesObjectives = lazy(() => import('@/pages/processes/Objectives.jsx'));
const Processes = lazy(() => import('@/pages/processes/Processes.jsx'));
const ProcessesGovernance = lazy(() => import('@/pages/processes/Governance.jsx'));
const LinktoSGF = lazy(() => import('@/pages/processes/RandD.jsx'));

// Compliance
const ComplianceGuidance = lazy(() => import('@/pages/compliance/ComplianceGuidance.jsx'));

// Systems
const SystemsHome = lazy(() => import('@/pages/systems/index.jsx'));
const SystemsObjectives = lazy(() => import('@/pages/systems/Objectives.jsx'));
const InternalPlatforms = lazy(() => import('@/pages/systems/InternalPlatforms.jsx'));
const ManualSystems = lazy(() => import('@/pages/systems/ManualSystems.jsx'));
const LinkstoProcess = lazy(() => import('@/pages/systems/LinkstoProcess.jsx'));

// Project Archetype
const ProjectArchetypeHome = lazy(() => import('@/pages/project-archetype/index.jsx'));
const PAObjectives = lazy(() => import('@/pages/project-archetype/Objectives.jsx'));
const CorePrinciples = lazy(() => import('@/pages/project-archetype/CorePrinciples.jsx'));
const CCCProjectLifecycle = lazy(() => import('@/pages/project-archetype/ccc-project-lifecycle.jsx'));
const CCCProjectTypes = lazy(() => import('@/pages/project-archetype/ProjectTypes.jsx'));
const CollaborativeStudies = lazy(() => import('@/pages/project-archetype/CollaborativeStudies.jsx'));
const ISR = lazy(() => import('@/pages/project-archetype/ISR.jsx'));
const FeeForService = lazy(() => import('@/pages/project-archetype/FeeForService.jsx'));
const Sponsorships = lazy(() => import('@/pages/project-archetype/Sponsorships.jsx'));
const Grants = lazy(() => import('@/pages/project-archetype/Grants.jsx'));

// Glossary
const GlossaryOfTerms = lazy(() => import('@/pages/glossary/GlossaryOfTerms.jsx'));

// FAQs
const CCCFAQs = lazy(() => import('@/pages/faqs/FAQs.jsx'));

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
          <Route path="/playbook-overview" element={<PlaybookOverview />} />
          <Route path="/playbook-overview/objectives" element={<PlaybookObjectives />} />

          {/* CCC Initiative */}
          <Route path="/ccc-overview" element={<CCCInitiativeHome />} />
          <Route path="/ccc-overview/objectives" element={<CCCOverview />} />
          <Route path="/ccc-overview/strategic-pillars" element={<StrategicPillars />} />
          <Route path="/ccc-overview/key-messaging" element={<KeyMessages />} />
          <Route path="/ccc-overview/stakeholders" element={<Stakeholders />} />
          <Route path="/ccc-overview/patient-impact" element={<PatientImpact />} />


          {/* Communication Plan - Internal */}
          <Route path="/communications" element={<CommunicationsHome />} />
          <Route path="/communications/internal-comms-plan" element={<InternalCommsHome />} />
          <Route path="/communications/internal-comms-plan/objectives" element={<InternalObjectives />} />
          <Route path="/communications/internal-comms-plan/channels" element={<Channels />} />
          <Route path="/communications/internal-comms-plan/ccc-stakeholders" element={<CCCStakeholders />} />
          <Route path="/communications/internal-comms-plan/cadence" element={<Cadence />} />
          <Route path="/communications/internal-comms-plan/strategies-&-tactics" element={<StrategiesTactics />} />
          <Route path="/communications/internal-comms-plan/timeline" element={<Timeline />} />

          {/* Communication Plan - Engagement */}
          <Route path="/communications/internal-engagement/objectives" element={<EngagementObjectives />} />
          <Route path="/communications/internal-engagement" element={<CommEngHome />} />
          <Route path="/communications/internal-engagement/communication-path" element={<CommunicationPlan />} />
          <Route path="/communications/internal-engagement/impact-monitoring" element={<LeadershipSteerCoMonitoring />} />
          <Route path="/communications/internal-engagement/internal-engagement-strategies" element={<InternalEngagementStrategies />} />
          <Route path="/communications/internal-engagement/internal-engagement-plan" element={<InternalEngagementPlan />} />

          {/* Internal Onboarding */}
          <Route path="/internal-onboarding" element={<InternalOnboardingHome />} />
          
          {/* Objectives */}
          <Route path="/internal-onboarding/objectives" element={<OnboardingObjectives />} />
          
          {/* CCC Core & Extended */}
          <Route path="/internal-onboarding/ccc-core-extended" element={<CCCCoreExtended />} />
          <Route path="/internal-onboarding/ccc-core-extended/onboarding-checklist" element={<OnboardingChecklist />} />
          <Route path="/internal-onboarding/ccc-core-extended/welcome-orientation" element={<WelcomeOrientation />} />
          <Route path="/internal-onboarding/ccc-core-extended/immerse-contribute" element={<ImmerseContribute />} />
          <Route path="/internal-onboarding/ccc-core-extended/deepen-engagement" element={<DeepenEngagement />} />
          <Route path="/internal-onboarding/ccc-core-extended/full-integration" element={<FullIntegration />} />
          
          {/* CCC Leadership SteerCo */}
          <Route path="/internal-onboarding/ccc-leadership-steerco" element={<CCCLeadershipSteerCo />} />
          <Route path="/internal-onboarding/ccc-leadership-steerco/onboarding-checklist" element={<OnboardingChecklist />} />
          <Route path="/internal-onboarding/ccc-leadership-steerco/welcome-orientation" element={<WelcomeOrientation />} />
          
          {/* CCC Field Team */}
          <Route path="/internal-onboarding/ccc-field-team" element={<CCCFieldTeam />} />
          <Route path="/internal-onboarding/ccc-field-team/onboarding-checklist" element={<OnboardingChecklist />} />
          <Route path="/internal-onboarding/ccc-field-team/welcome-orientation" element={<WelcomeOrientation />} />
          
          {/* Ongoing Support */}
          <Route path="/internal-onboarding/ongoing-support" element={<OngoingSupport />} />
          
          {/* Legacy routes for backward compatibility */}
          <Route path="/internal-onboarding/ccc-core-extended/objectives" element={<Navigate to="/internal-onboarding/objectives" replace />} />
          <Route path="/internal-onboarding/ccc-core-extended/ongoing-support" element={<Navigate to="/internal-onboarding/ongoing-support" replace />} />
          <Route path="/internal-onboarding/deepen-engagement" element={<Navigate to="/internal-onboarding/ccc-core-extended/deepen-engagement" replace />} />
          <Route path="/internal-onboarding/full-integration" element={<Navigate to="/internal-onboarding/ccc-core-extended/full-integration" replace />} />
          <Route path="/internal-onboarding/immerse,-contribute" element={<Navigate to="/internal-onboarding/ccc-core-extended/immerse-contribute" replace />} />
          <Route path="/internal-onboarding/onboarding-checklist" element={<Navigate to="/internal-onboarding/ccc-core-extended/onboarding-checklist" replace />} />
          <Route path="/internal-onboarding/welcome-orientation" element={<Navigate to="/internal-onboarding/ccc-core-extended/welcome-orientation" replace />} />
          <Route path="/internal-onboarding/external-links" element={<ExternalLinks />} />

          {/* Processes */}
          <Route path="/processes" element={<ProcessesHome />} />
          <Route path="/processes/objectives" element={<ProcessesObjectives />} />
          <Route path="/processes/processes" element={<Processes />} />
          <Route path="/processes/governance" element={<ProcessesGovernance />} />
          <Route path="/processes/sops-&-resources" element={<LinktoSGF />} />

          {/* Compliance */}
          <Route path="/compliance" element={<ComplianceGuidance />} />

          {/* Systems */}
          <Route path="/systems" element={<SystemsHome />} />
          <Route path="/systems/objectives" element={<SystemsObjectives />} />
          <Route path="/systems/internal-platforms" element={<InternalPlatforms />} />
          <Route path="/systems/manual-systems" element={<ManualSystems />} />
          <Route path="/systems/links-to-process" element={<LinkstoProcess />} />

          {/*Project Archetype */}
          <Route path="/project-archetype" element={<ProjectArchetypeHome />} />
          <Route path="/project-archetype/objectives" element={<PAObjectives />} />
          <Route path="/project-archetype/core-principles" element={<CorePrinciples />} />
          <Route path="/project-archetype/ccc-project-lifecycle" element={<CCCProjectLifecycle />} />
          <Route path="/project-archetype/ccc-project-types" element={<CCCProjectTypes />} />
          
          {/* New Project Archetype Pages */}
          <Route path="/project-archetype/collaborative-studies" element={<CollaborativeStudies />} />
          <Route path="/project-archetype/isrs" element={<ISR />} />
          <Route path="/project-archetype/fee-for-service" element={<FeeForService />} />
          <Route path="/project-archetype/sponsorships" element={<Sponsorships />} />
          <Route path="/project-archetype/grants" element={<Grants />} />

          {/* Glossary of Terms */}
          <Route path="/glossary" element={<GlossaryOfTerms />} />

          {/* FAQs */}
          <Route path="/faqs" element={<CCCFAQs />} />

          {/* Default route */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default App;