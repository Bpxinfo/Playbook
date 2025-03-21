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
  
    // CCC Initiative
    '/ccc-initiative': {
      component: () => import('@/pages/ccc-initiative/index'),
      title: 'CCC Initiative Overview'
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
    '/communications/channels': {
      component: () => import('@/pages/communications/Channels'),
      title: 'Channels'
    },
    '/communications/ccc-stakeholders': {
      component: () => import('@/pages/communications/CCCStakeholders'),
      title: 'CCC Stakeholders'
    },
    '/communications/cadence': {
      component: () => import('@/pages/communications/Cadence'),
      title: 'Cadence'
    },
  
    // Internal Onboarding
    '/internal-onboarding': {
      component: () => import('@/pages/internal-onboarding/index'),
      title: 'Internal Onboarding'
    },
    '/internal-onboarding/deepen-engagement': {
      component: () => import('@/pages/internal-onboarding/DeepenEngagement'),
      title: 'Deepen Engagement'
    },
    '/internal-onboarding/full-integration': {
      component: () => import('@/pages/internal-onboarding/FullIntegration'),
      title: 'Full Integration'
    },
    '/internal-onboarding/immerse,-contribute': {
      component: () => import('@/pages/internal-onboarding/Immerse'),
      title: 'Immerse & Contribute'
    },
    '/internal-onboarding/onboarding-checklist': {
      component: () => import('@/pages/internal-onboarding/OnboardingChecklist'),
      title: 'Pre-Integration Prep'
    },
    '/internal-onboarding/external-links': {
      component: () => import('@/pages/internal-onboarding/ExternalLinks'),
      title: 'External Links'
    },
    '/internal-onboarding/ongoing-support': {
      component: () => import('@/pages/internal-onboarding/OngoingSupport'),
      title: 'Ongoing Support'
    },
    '/internal-onboarding/welcome-orientation': {
      component: () => import('@/pages/internal-onboarding/WelcomeOrientation'),
      title: 'Welcome Orientation'
    },
  
    // Processes
    '/processes': {
      component: () => import('@/pages/processes/index'),
      title: 'Processes Overview'
    },
    '/processes/processes': {
      component: () => import('@/pages/processes/Processes'),
      title: 'Processes'
    },
    '/processes/governance': {
      component: () => import('@/pages/processes/Governance'),
      title: 'Governance'
    },
    '/processes/resources-&-documentation': {
      component: () => import('@/pages/processes/RandD'),
      title: 'SOPs & Resources'
    },
  
    // Compliance
    '/compliance': {
      component: () => import('@/pages/compliance/index'),
      title: 'Compliance Overview'
    },
    '/compliance/guidance': {
      component: () => import('@/pages/compliance/ComplianceGuidance'),
      title: 'Compliance Guidance'
    },
  
    // Systems
    '/systems': {
      component: () => import('@/pages/systems/index'),
      title: 'Systems Overview'
    },

    '/systems/internal-platforms': {
      component: () => import('@/pages/systems/InternalPlatforms'),
      title: 'Internal Platforms'
    },
  
    // Project Archetype
    '/project-archetype': {
      component: () => import('@/pages/project-archetype/index'),
      title: 'Project Archetype Overview'
    },
    '/project-archetype/core-principles': {
      component: () => import('@/pages/project-archetype/CorePrinciples'),
      title: 'CORE Principles'
    },
    '/project-archetype/ccc-project-lifecycle': {
      component: () => import('@/pages/project-archetype/ccc-project-lifecycle'),
      title: 'CCC Project Lifecycle'
    },
    '/project-archetype/ccc-project-types': {
      component: () => import('@/pages/project-archetype/ProjectTypes'),
      title: 'CCC Project Types'
    },
    '/project-archetype/collaborative-studies': {
      component: () => import('@/pages/project-archetype/CollaborativeStudies'),
      title: 'Collaborative Studies'
    },
    '/project-archetype/isrs': {
      component: () => import('@/pages/project-archetype/ISR'),
      title: 'Investigator Sponsored Research (ISR)'
    },
    '/project-archetype/fee-for-service': {
      component: () => import('@/pages/project-archetype/FeeForService'),
      title: 'Fee For Service'
    },
    '/project-archetype/sponsorships': {
      component: () => import('@/pages/project-archetype/Sponsorships'),
      title: 'Sponsorships'
    },
    '/project-archetype/grants': {
      component: () => import('@/pages/project-archetype/Grants'),
      title: 'Grants'
    },
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
  