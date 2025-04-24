import React, { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import { initializeSearchIndex } from '@/utils/pageRegistry';
import { searchIndex } from '@/utils/searchIndex';
import ContentIndexer from '@/components/ContentIndexer';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CheckboxProvider } from '@/contexts/CheckboxContext';
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

// CCC Initiative Overview
const KeyMessages = lazy(() => import('@/pages/ccc-initiative/KeyMessaging.jsx'));
const Stakeholders = lazy(() => import('@/pages/ccc-initiative/Stakeholders.jsx'));
const StrategicPillars = lazy(() => import('@/pages/ccc-initiative/StrategicPillars.jsx'));
const CCCInitiativeHome = lazy(() => import('@/pages/ccc-initiative/index.jsx'));
const PatientImpact = lazy(() => import('@/pages/ccc-initiative/PatientImpact.jsx'));


// Communication Plan
const CommunicationsHome = lazy(() => import('@/pages/communications/index.jsx'));
const Channels = lazy(() => import('@/pages/communications/Channels.jsx'));
const Cadence = lazy(() => import('@/pages/communications/Cadence.jsx'));
const CCCStakeholders = lazy(() => import('@/pages/communications/CCCStakeholders.jsx'));
const CommunicationPath = lazy(() => import('@/pages/communications/CommunicationPath.jsx'));
const InternalEngagementStrategies = lazy(() => import('@/pages/communications/InternalEngagementStrategies.jsx'));

// Onboarding
const InternalOnboardingHome = lazy(() => import('@/pages/internal-onboarding/index.jsx'));
const DeepenEngagement = lazy(() => import('@/pages/internal-onboarding/DeepenEngagement.jsx'));
const FullIntegration = lazy(() => import('@/pages/internal-onboarding/FullIntegration.jsx'));
const ImmerseContribute = lazy(() => import('@/pages/internal-onboarding/Immerse.jsx'));
const OnboardingChecklist = lazy(() => import('@/pages/internal-onboarding/OnboardingChecklist.jsx'));
const ExternalLinks = lazy(() => import('@/pages/internal-onboarding/ExternalLinks.jsx'));
const OngoingSupport = lazy(() => import('@/pages/internal-onboarding/OngoingSupport.jsx'));
const WelcomeOrientation = lazy(() => import('@/pages/internal-onboarding/WelcomeOrientation.jsx'));
const CCCCore = lazy(() => import('@/pages/internal-onboarding/CombinedOnboarding.jsx'));
const ProjectLeads = lazy(() => import('@/pages/internal-onboarding/CombinedOnboarding.jsx'));
const CCCExtended = lazy(() => import('@/pages/internal-onboarding/OWCombined.jsx'));
const CCCLeadershipSteerCo = lazy(() => import('@/pages/internal-onboarding/OWCombined.jsx'));
const FieldTeam = lazy(() => import('@/pages/internal-onboarding/OWCombined.jsx'));


// Processes
const ProcessesHome = lazy(() => import('@/pages/processes/index.jsx'));
const Processes = lazy(() => import('@/pages/processes/Processes.jsx'));
const ProcessesGovernance = lazy(() => import('@/pages/processes/Governance.jsx'));
const LinktoSGF = lazy(() => import('@/pages/processes/RandD.jsx'));

// Compliance
const ComplianceHome = lazy(() => import('@/pages/compliance/index.jsx'));

// Systems
const SystemsHome = lazy(() => import('@/pages/systems/index.jsx'));
const InternalPlatforms = lazy(() => import('@/pages/systems/InternalPlatforms.jsx'));
const ManualSystems = lazy(() => import('@/pages/systems/ManualSystems.jsx'));
const LinkstoProcess = lazy(() => import('@/pages/systems/LinkstoProcess.jsx'));

// Project Archetype
const ProjectArchetypeHome = lazy(() => import('@/pages/project-archetype/index.jsx'));
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
    <ThemeProvider>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route element={<MainLayout />}>
              <Route path="/ccc-playbook" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
              <Route path="/search" element={<ProtectedRoute><SearchPage /></ProtectedRoute>} />
              <Route path="/playbook-overview" element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />

              {/* CCC Initiative */}
              <Route path="/ccc-overview" element={
                <ProtectedRoute>
                  <CCCInitiativeHome />
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

              {/* Communication Plan */}
              <Route path="/communications" element={
                <ProtectedRoute>
                  <CommunicationsHome />
                </ProtectedRoute>
              } />
              <Route path="/communications/channels" element={
                <ProtectedRoute>
                  <Channels />
                </ProtectedRoute>
              } />
              <Route path="/communications/cadence" element={
                <ProtectedRoute>
                  <Cadence />
                </ProtectedRoute>
              } />
              <Route path="/communications/ccc-stakeholders" element={
                <ProtectedRoute>
                  <CCCStakeholders />
                </ProtectedRoute>
              } />
              <Route path="/communications/communication-path" element={
                <ProtectedRoute>
                  <CommunicationPath />
                </ProtectedRoute>
              } />
              <Route path="/communications/internal-engagement-strategies" element={
                <ProtectedRoute>
                  <InternalEngagementStrategies />
                </ProtectedRoute>
              } />

              {/* Internal Onboarding - Wrapped with CheckboxProvider */}
              <Route path="/internal-onboarding" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <InternalOnboardingHome />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* CCC Core Onboarding Page */}
              <Route path="/internal-onboarding/ccc-core" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <CCCCore />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              
              {/* CCC Extended */}
              <Route path="/internal-onboarding/ccc-extended/onboarding-checklist" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <OnboardingChecklist />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              <Route path="/internal-onboarding/ccc-extended/welcome-orientation" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <WelcomeOrientation />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* CCC Leadership SteerCo */}
              <Route path="/internal-onboarding/ccc-leadership-steerco" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <CCCLeadershipSteerCo />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />

              {/* CCC Extended */}
              <Route path="/internal-onboarding/ccc-extended" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <CCCExtended />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* CCC Field Team */}
              <Route path="/internal-onboarding/field-team" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <FieldTeam />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* Project Leads Onboarding Page */}
              <Route path="/internal-onboarding/project-leads" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <ProjectLeads />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
            
              
              {/* Ongoing Support */}
              <Route path="/internal-onboarding/ongoing-support" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <OngoingSupport />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />

              {/* Legal & Compliance - Moved from top level to internal-onboarding */}
              <Route path="/internal-onboarding/legal-compliance" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <ComplianceHome />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* Processes */}
              <Route path="/processes" element={
                <ProtectedRoute>
                  <ProcessesHome />
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

              {/* Systems */}
              <Route path="/systems" element={
                <ProtectedRoute>
                  <SystemsHome />
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

              {/* Feedback */}
              <Route path="/feedback" element={
                <ProtectedRoute>
                  <FeedbackForm />
                </ProtectedRoute>
              } />

              {/* Actual component routes with CheckboxProvider */}
              <Route path="/internal-onboarding/ccc-core-extended/deepen-engagement" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <DeepenEngagement />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              <Route path="/internal-onboarding/ccc-core-extended/full-integration" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <FullIntegration />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              <Route path="/internal-onboarding/ccc-core-extended/immerse-contribute" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <ImmerseContribute />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              <Route path="/internal-onboarding/ccc-core-extended/onboarding-checklist" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <OnboardingChecklist />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              <Route path="/internal-onboarding/ccc-core-extended/welcome-orientation" element={
                <ProtectedRoute>
                  <CheckboxProvider>
                    <WelcomeOrientation />
                  </CheckboxProvider>
                </ProtectedRoute>
              } />
              
              {/* External links with CheckboxProvider */}
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;