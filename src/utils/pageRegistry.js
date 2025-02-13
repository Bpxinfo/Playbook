import { createRoot, unmountComponentAtNode } from 'react-dom/client';

export const pageRegistry = {
    // Home
    '/': {
      component: () => import('@/pages/index'),
      title: 'CCC Playbook Home'
    },
  
    // Core Pages
    '/feedback': {
      component: () => import('@/pages/feedback/Feedback'),
      title: 'Submit Feedback'
    },
    '/search': {
      component: () => import('@/pages/SearchPage'),
      title: 'Search Results'
    },
  
    // Playbook App Overview
    '/playbook-app-overview': {
      component: () => import('@/pages/playbook-app/index'),
      title: 'Playbook Overview'
    },
    '/playbook-app-overview/objectives': {
      component: () => import('@/pages/playbook-app/Objectives'),
      title: 'Playbook Objectives'
    },
  
    // CCC Initiative
    '/ccc-initiative': {
      component: () => import('@/pages/ccc-initiative/index'),
      title: 'CCC Initiative Overview'
    },
    '/ccc-initiative/objectives-and-ccc-overview': {
      component: () => import('@/pages/ccc-initiative/Objectives'),
      title: 'CCC Overview & Objectives'
    },
    '/ccc-initiative/strategic-pillars': {
      component: () => import('@/pages/ccc-initiative/StrategicPillars'),
      title: 'Strategic Pillars'
    },
    '/ccc-initiative/key-messaging': {
      component: () => import('@/pages/ccc-initiative/KeyMessaging'),
      title: 'Key Messaging'
    },
    '/ccc-initiative/stakeholders': {
      component: () => import('@/pages/ccc-initiative/Stakeholders'),
      title: 'Stakeholders'
    },
  
    // Communication Plan
    '/communications': {
      component: () => import('@/pages/communications/index'),
      title: 'Communication Plan'
    },
  
    // Communication Plan - Internal
    '/communications/internal-comms-plan': {
      component: () => import('@/pages/communications/internal-comms-plan/InternalIndex'),
      title: 'Internal Communications'
    },
    '/communications/internal-comms-plan/objectives': {
      component: () => import('@/pages/communications/internal-comms-plan/Objectives'),
      title: 'Objectives'
    },
    '/communications/internal-comms-plan/ccc-communications': {
      component: () => import('@/pages/communications/internal-comms-plan/Channels'),
      title: 'Channels'
    },
    '/communications/internal-comms-plan/ccc-stakeholders': {
      component: () => import('@/pages/communications/internal-comms-plan/CCCStakeholders'),
      title: 'CCC Stakeholders'
    },
    '/communications/internal-comms-plan/communication-streams': {
      component: () => import('@/pages/communications/internal-comms-plan/Cadence'),
      title: 'Cadence'
    },
    '/communications/internal-comms-plan/strategies-&-tactics': {
      component: () => import('@/pages/communications/internal-comms-plan/StrategiesNTactics'),
      title: 'Strategies & Tactics'
    },
    '/communications/internal-comms-plan/timeline': {
      component: () => import('@/pages/communications/internal-comms-plan/Timeline'),
      title: 'Timeline'
    },
  
    // Communication Plan - Engagement
    '/communications/internal-engagement': {
      component: () => import('@/pages/communications/internal-engagement/EngIndex'),
      title: 'Internal Engagement'
    },
    '/communications/internal-engagement/objectives': {
      component: () => import('@/pages/communications/internal-engagement/Objectives'),
      title: 'Objectives'
    },
    '/communications/internal-engagement/communication-path': {
      component: () => import('@/pages/communications/internal-engagement/CommunicationPath'),
      title: 'Communication Path'
    },
    '/communications/internal-engagement/impact-monitoring': {
      component: () => import('@/pages/communications/internal-engagement/ImpactMonitoring'),
      title: 'Impact Monitoring'
    },
    '/communications/internal-engagement/internal-engagement-strategies': {
      component: () => import('@/pages/communications/internal-engagement/InternalEngagementStrategies'),
      title: 'Internal Engagement Strategies'
    },
    '/communications/internal-engagement/internal-engagement-plan': {
      component: () => import('@/pages/communications/internal-engagement/InternalEngagementPlan'),
      title: 'Internal Engagement Plan'
    },
  

    // Internal Onboarding
    '/internal-onboarding': {
      component: () => import('@/pages/internal-onboarding/index'),
      title: 'Internal Onboarding'
    },
    '/internal-onboarding/objectives': {
      component: () => import('@/pages/internal-onboarding/Objectives'),
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
    '/processes/resources-&-documentation': {
      component: () => import('../pages/processes/RandD'),
      title: 'SOPs & Resources'
    },
  
    // Compliance
    '/compliance': {
      component: () => import('../pages/compliance/ComplianceGuidance'),
      title: 'Compliance Guidance'
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
  