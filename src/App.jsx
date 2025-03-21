import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { initializeSearchIndex } from '@/utils/pageRegistry';
import { searchIndex } from '@/utils/searchIndex';
import ContentIndexer from '@/components/ContentIndexer';
import { AuthProvider } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import LandingPage from '@/components/LandingPage';

// Lazy load all page components
const HomePage = lazy(() => import('@/pages/index.jsx'));
const FeedbackForm = lazy(() => import('@/pages/feedback/Feedback.jsx'));
const SearchPage = lazy(() => import('@/pages/SearchPage.jsx'));

// Playbook app overview
const PlaybookHome = lazy(() => import('@/pages/playbook-app/index.jsx'));
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
const ComplianceHome = lazy(() => import('@/pages/compliance/index.jsx'));
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
      await initializeSearchIndex();
    };
    initSearch();
  }, []);

  return (
    <AuthProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<MainLayout />}>
            <Route path="/ccc-playbook" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/playbook-overview" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/playbook-overview/objectives" element={
              <ProtectedRoute>
                <PlaybookObjectives />
              </ProtectedRoute>
            } />

            {/* CCC Initiative */}
            <Route path="/ccc-overview" element={
              <ProtectedRoute>
                <CCCInitiativeHome />
              </ProtectedRoute>
            } />
            <Route path="/ccc-overview/objectives" element={
              <ProtectedRoute>
                <CCCOverview />
              </ProtectedRoute>
            } />
            <Route path="/ccc-overview/strategic-pillars" element={
              <ProtectedRoute>
                <StrategicPillars />
              </ProtectedRoute>
            } />
            <Route path="/ccc-overview/key-messaging" element={
              <ProtectedRoute>
                <KeyMessages />
              </ProtectedRoute>
            } />
            <Route path="/ccc-overview/stakeholders" element={
              <ProtectedRoute>
                <Stakeholders />
              </ProtectedRoute>
            } />
            <Route path="/ccc-overview/patient-impact" element={
              <ProtectedRoute>
                <PatientImpact />
              </ProtectedRoute>
            } />

            {/* Communication Plan - Internal */}
            <Route path="/communications" element={
              <ProtectedRoute>
                <CommunicationsHome />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan" element={
              <ProtectedRoute>
                <InternalCommsHome />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/objectives" element={
              <ProtectedRoute>
                <InternalObjectives />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/channels" element={
              <ProtectedRoute>
                <Channels />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/ccc-stakeholders" element={
              <ProtectedRoute>
                <CCCStakeholders />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/cadence" element={
              <ProtectedRoute>
                <Cadence />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/strategies-&-tactics" element={
              <ProtectedRoute>
                <StrategiesTactics />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-comms-plan/timeline" element={
              <ProtectedRoute>
                <Timeline />
              </ProtectedRoute>
            } />

            {/* Communication Plan - Engagement */}
            <Route path="/communications/internal-engagement/objectives" element={
              <ProtectedRoute>
                <EngagementObjectives />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-engagement" element={
              <ProtectedRoute>
                <CommEngHome />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-engagement/communication-path" element={
              <ProtectedRoute>
                <CommunicationPlan />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-engagement/impact-monitoring" element={
              <ProtectedRoute>
                <LeadershipSteerCoMonitoring />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-engagement/internal-engagement-strategies" element={
              <ProtectedRoute>
                <InternalEngagementStrategies />
              </ProtectedRoute>
            } />
            <Route path="/communications/internal-engagement/internal-engagement-plan" element={
              <ProtectedRoute>
                <InternalEngagementPlan />
              </ProtectedRoute>
            } />

            {/* Internal Onboarding */}
            <Route path="/internal-onboarding" element={
              <ProtectedRoute>
                <InternalOnboardingHome />
              </ProtectedRoute>
            } />
            
            {/* Objectives */}
            <Route path="/internal-onboarding/objectives" element={
              <ProtectedRoute>
                <OnboardingObjectives />
              </ProtectedRoute>
            } />
            
            {/* CCC Core & Extended */}
            <Route path="/internal-onboarding/ccc-core-extended" element={
              <ProtectedRoute>
                <CCCCoreExtended />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/onboarding-checklist" element={
              <ProtectedRoute>
                <OnboardingChecklist />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/welcome-orientation" element={
              <ProtectedRoute>
                <WelcomeOrientation />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/immerse,-contribute" element={
              <ProtectedRoute>
                <ImmerseContribute />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/deepen-engagement" element={
              <ProtectedRoute>
                <DeepenEngagement />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/full-integration" element={
              <ProtectedRoute>
                <FullIntegration />
              </ProtectedRoute>
            } />
            
            {/* CCC Leadership SteerCo */}
            <Route path="/internal-onboarding/ccc-leadership-steerco" element={
              <ProtectedRoute>
                <CCCLeadershipSteerCo />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-leadership-steerco/onboarding-checklist" element={
              <ProtectedRoute>
                <OnboardingChecklist />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-leadership-steerco/welcome-orientation" element={
              <ProtectedRoute>
                <WelcomeOrientation />
              </ProtectedRoute>
            } />
            
            {/* CCC Field Team */}
            <Route path="/internal-onboarding/ccc-field-team" element={
              <ProtectedRoute>
                <CCCFieldTeam />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-field-team/onboarding-checklist" element={
              <ProtectedRoute>
                <OnboardingChecklist />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-field-team/welcome-orientation" element={
              <ProtectedRoute>
                <WelcomeOrientation />
              </ProtectedRoute>
            } />
            
            {/* Ongoing Support */}
            <Route path="/internal-onboarding/ongoing-support" element={
              <ProtectedRoute>
                <OngoingSupport />
              </ProtectedRoute>
            } />
            
            {/* Legacy routes for backward compatibility */}
            <Route path="/internal-onboarding/ccc-core-extended/objectives" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/objectives" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/ccc-core-extended/ongoing-support" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ongoing-support" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/deepen-engagement" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ccc-core-extended/deepen-engagement" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/full-integration" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ccc-core-extended/full-integration" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/immerse,-contribute" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ccc-core-extended/immerse-contribute" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/onboarding-checklist" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ccc-core-extended/onboarding-checklist" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/welcome-orientation" element={
              <ProtectedRoute>
                <Navigate to="/internal-onboarding/ccc-core-extended/welcome-orientation" replace />
              </ProtectedRoute>
            } />
            <Route path="/internal-onboarding/external-links" element={
              <ProtectedRoute>
                <ExternalLinks />
              </ProtectedRoute>
            } />

            {/* Processes */}
            <Route path="/processes" element={
              <ProtectedRoute>
                <ProcessesHome />
              </ProtectedRoute>
            } />
            <Route path="/processes/objectives" element={
              <ProtectedRoute>
                <ProcessesObjectives />
              </ProtectedRoute>
            } />
            <Route path="/processes/processes" element={
              <ProtectedRoute>
                <Processes />
              </ProtectedRoute>
            } />
            <Route path="/processes/governance" element={
              <ProtectedRoute>
                <ProcessesGovernance />
              </ProtectedRoute>
            } />
            <Route path="/processes/sops-&-resources" element={
              <ProtectedRoute>
                <LinktoSGF />
              </ProtectedRoute>
            } />

            {/* Compliance */}
            <Route path="/compliance" element={
              <ProtectedRoute>
                <ComplianceHome />
              </ProtectedRoute>
            } />
            <Route path="/compliance/guidance" element={
              <ProtectedRoute>
                <ComplianceGuidance />
              </ProtectedRoute>
            } />

            {/* Systems */}
            <Route path="/systems" element={
              <ProtectedRoute>
                <SystemsHome />
              </ProtectedRoute>
            } />
            <Route path="/systems/objectives" element={
              <ProtectedRoute>
                <SystemsObjectives />
              </ProtectedRoute>
            } />
            <Route path="/systems/internal-platforms" element={
              <ProtectedRoute>
                <InternalPlatforms />
              </ProtectedRoute>
            } />
            <Route path="/systems/manual-systems" element={
              <ProtectedRoute>
                <ManualSystems />
              </ProtectedRoute>
            } />
            <Route path="/systems/links-to-process" element={
              <ProtectedRoute>
                <LinkstoProcess />
              </ProtectedRoute>
            } />

            {/* Project Archetype */}
            <Route path="/project-archetype" element={
              <ProtectedRoute>
                <ProjectArchetypeHome />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/objectives" element={
              <ProtectedRoute>
                <PAObjectives />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/core-principles" element={
              <ProtectedRoute>
                <CorePrinciples />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/ccc-project-lifecycle" element={
              <ProtectedRoute>
                <CCCProjectLifecycle />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/ccc-project-types" element={
              <ProtectedRoute>
                <CCCProjectTypes />
              </ProtectedRoute>
            } />
            
            {/* New Project Archetype Pages */}
            <Route path="/project-archetype/collaborative-studies" element={
              <ProtectedRoute>
                <CollaborativeStudies />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/isrs" element={
              <ProtectedRoute>
                <ISR />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/fee-for-service" element={
              <ProtectedRoute>
                <FeeForService />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/sponsorships" element={
              <ProtectedRoute>
                <Sponsorships />
              </ProtectedRoute>
            } />
            <Route path="/project-archetype/grants" element={
              <ProtectedRoute>
                <Grants />
              </ProtectedRoute>
            } />

            {/* Glossary of Terms */}
            <Route path="/glossary" element={
              <ProtectedRoute>
                <GlossaryOfTerms />
              </ProtectedRoute>
            } />

            {/* FAQs */}
            <Route path="/faqs" element={
              <ProtectedRoute>
                <CCCFAQs />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}

export default App;