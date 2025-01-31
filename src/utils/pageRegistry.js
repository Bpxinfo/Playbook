import { createRoot, unmountComponentAtNode } from 'react-dom/client';

export const pageRegistry = {
    // Home
    '/': {
      component: () => import('../pages/index'),
      title: 'CCC Playbook Home'
    },
  
    // Core Pages
    '/feedback': {
      component: () => import('../pages/feedback/Feedback'),
      title: 'Submit Feedback'
    },
    '/search': {
      component: () => import('../pages/SearchPage'),
      title: 'Search Results'
    },
  
    // Playbook App Overview
    '/playbook-app-overview': {
      component: () => import('../pages/playbook-app/index'),
      title: 'Playbook Overview'
    },
    '/playbook-app-overview/objectives': {
      component: () => import('../pages/playbook-app/Objectives'),
      title: 'Playbook Objectives'
    },
  
    // CCC Initiative
    '/ccc-initiative': {
      component: () => import('../pages/ccc-initiative/index'),
      title: 'CCC Initiative Overview'
    },
    '/ccc-initiative/objectives-and-ccc-overview': {
      component: () => import('../pages/ccc-initiative/Objectives'),
      title: 'CCC Overview & Objectives'
    },
    '/ccc-initiative/strategic-pillars': {
      component: () => import('../pages/ccc-initiative/StrategicPillars'),
      title: 'Strategic Pillars'
    },
    '/ccc-initiative/key-messaging': {
      component: () => import('../pages/ccc-initiative/KeyMessaging'),
      title: 'Key Messaging'
    },
    '/ccc-initiative/stakeholders': {
      component: () => import('../pages/ccc-initiative/Stakeholders'),
      title: 'Stakeholders'
    },
  
    // Communication Plan
    '/communication-plan': {
      component: () => import('../pages/communication-plan/index'),
      title: 'Communication Plan'
    },
  
    // Communication Plan - Internal
    '/communication-plan/internal/objectives': {
      component: () => import('../pages/communication-plan/internal/Objectives'),
      title: 'Internal Communication Objectives'
    },
    '/communication-plan/internal/ccc-communications': {
      component: () => import('../pages/communication-plan/internal/CCCCommunications'),
      title: 'CCC Communications'
    },
    '/communication-plan/internal/ccc-stakeholders': {
      component: () => import('../pages/communication-plan/internal/CCCStakeholders'),
      title: 'CCC Stakeholders'
    },
    '/communication-plan/internal/communication-streams': {
      component: () => import('../pages/communication-plan/internal/CommunicationStreams'),
      title: 'Communication Streams'
    },
    '/communication-plan/internal/strategies-&-tactics': {
      component: () => import('../pages/communication-plan/internal/StrategiesNTactics'),
      title: 'Strategies & Tactics'
    },
    '/communication-plan/internal/timeline': {
      component: () => import('../pages/communication-plan/internal/Timeline'),
      title: 'Communication Timeline'
    },
  
    // Communication Plan - Engagement
    '/communication-plan/engagement-plan/objectives': {
      component: () => import('../pages/communication-plan/engagement/Objectives'),
      title: 'Engagement Plan Objectives'
    },
    '/communication-plan/engagement-plan/communication-path': {
      component: () => import('../pages/communication-plan/engagement/CommunicationPath'),
      title: 'Communication Path'
    },
    '/communication-plan/engagement-plan/impact-monitoring': {
      component: () => import('../pages/communication-plan/engagement/ImpactMonitoring'),
      title: 'Impact Monitoring'
    },
    '/communication-plan/engagement-plan/internal-engagement-strategies': {
      component: () => import('../pages/communication-plan/engagement/InternalEngagementStrategies'),
      title: 'Internal Engagement Strategies'
    },
    '/communication-plan/engagement-plan/internal-feedback': {
      component: () => import('../pages/communication-plan/engagement/InternalFeedback'),
      title: 'Internal Feedback'
    },
  
    // Internal Onboarding
    '/internal-onboarding': {
      component: () => import('../pages/internal-onboarding/index'),
      title: 'Internal Onboarding'
    },
    '/internal-onboarding/objectives': {
      component: () => import('../pages/internal-onboarding/Objectives'),
      title: 'Onboarding Objectives'
    },
    '/internal-onboarding/deepen-engagement': {
      component: () => import('../pages/internal-onboarding/DeepenEngagement'),
      title: 'Deepen Engagement'
    },
    '/internal-onboarding/full-integration': {
      component: () => import('../pages/internal-onboarding/FullIntegration'),
      title: 'Full Integration'
    },
    '/internal-onboarding/immerse,-contribute': {
      component: () => import('../pages/internal-onboarding/Immerse'),
      title: 'Immerse & Contribute'
    },
    '/internal-onboarding/pre-integration-prep': {
      component: () => import('../pages/internal-onboarding/PrePrep'),
      title: 'Pre-Integration Prep'
    },
    '/internal-onboarding/external-links': {
      component: () => import('../pages/internal-onboarding/ExternalLinks'),
      title: 'External Links'
    },
    '/internal-onboarding/ongoing-support': {
      component: () => import('../pages/internal-onboarding/OngoingSupport'),
      title: 'Ongoing Support'
    },
    '/internal-onboarding/welcome-orientation': {
      component: () => import('../pages/internal-onboarding/WelcomeOrientation'),
      title: 'Welcome Orientation'
    },
  
    // Processes
    '/processes': {
      component: () => import('../pages/processes/index'),
      title: 'Processes Overview'
    },
    '/processes/objectives': {
      component: () => import('../pages/processes/Objectives'),
      title: 'Process Objectives'
    },
    '/processes/processes-&-governance': {
      component: () => import('../pages/processes/ProcessesGovernance'),
      title: 'Processes & Governance'
    },
    '/processes/compliance-guidance': {
      component: () => import('../pages/processes/ComplianceGuidance'),
      title: 'Compliance Guidance'
    },
    '/processes/link-to-sops,-guidance,-forms,-etc.': {
      component: () => import('../pages/processes/RandD'),
      title: 'Links to SOPs, Guidance & Forms'
    },
  
    // Systems
    '/systems': {
      component: () => import('../pages/systems/index'),
      title: 'Systems Overview'
    },
    '/systems/objectives': {
      component: () => import('../pages/systems/Objectives'),
      title: 'Systems Objectives'
    },
    '/systems/internal-platforms': {
      component: () => import('../pages/systems/InternalPlatforms'),
      title: 'Internal Platforms'
    }
  };
  
  export async function initializeSearchIndex() {
    const pages = {};
    
    for (const [path, config] of Object.entries(pageRegistry)) {
      try {
        const module = await config.component();
        
        pages[path] = {
          title: config.title,
          path,
          metadata: config.metadata || ''
        };
      } catch (error) {
        console.error(`Error loading page ${path}:`, error);
      }
    }
  
    return pages;
  }
  