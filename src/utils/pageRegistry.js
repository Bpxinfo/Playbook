import { createRoot, unmountComponentAtNode } from 'react-dom/client';

export const pageRegistry = {
    // Home
    '/ccc-playbook': {
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
    '/playbook-overview': {
      component: () => import('@/pages/playbook-app/index'),
      title: 'Playbook Overview'
    },
  
    // CCC Initiative
    '/ccc-overview': {
      component: () => import('@/pages/ccc-initiative/index'),
      title: 'CCC Initiative Overview'
    },

    '/ccc-overview/strategic-pillars': {
      component: () => import('@/pages/ccc-initiative/StrategicPillars'),
      title: 'Strategic Pillars'
    },
    '/ccc-overview/key-messaging': {
      component: () => import('@/pages/ccc-initiative/KeyMessaging'),
      title: 'Key Messaging'
    },
    '/ccc-overview/stakeholders': {
      component: () => import('@/pages/ccc-initiative/Stakeholders'),
      title: 'Stakeholders'
    },
    '/ccc-overview/patient-impact': {
      component: () => import('@/pages/ccc-initiative/PatientImpact'),
      title: 'Patient Impact'
    },
  
    // Communication Plan
    '/communications': {
      component: () => import('@/pages/communications/index'),
      title: 'Communication Plan'
    },
    '/communications/channels': {
      component: () => import('@/pages/communications/Channels'),
      title: 'Channels'
    },
    '/communications/cadence': {
      component: () => import('@/pages/communications/Cadence'),
      title: 'Cadence'
    },
    '/communications/ccc-stakeholders': {
      component: () => import('@/pages/communications/CCCStakeholders'),
      title: 'CCC Stakeholders'
    },
    '/communications/communication-path': {
      component: () => import('@/pages/communications/CommunicationPath'),
      title: 'Communication Path'
    },
    '/communications/internal-engagement-strategies': {
      component: () => import('@/pages/communications/InternalEngagementStrategies'),
      title: 'Internal Engagement Strategies'
    },
  
    // Internal Onboarding
    '/internal-onboarding': {
      component: () => import('@/pages/internal-onboarding/index'),
      title: 'Internal Onboarding'
    },
    '/internal-onboarding/ccc-core': {
      component: () => import('@/pages/internal-onboarding/CombinedOnboarding'),
      title: 'CCC Core Onboarding'
    },
    '/internal-onboarding/ccc-core/onboarding-checklist': {
      component: () => import('@/pages/internal-onboarding/OnboardingChecklist'),
      title: 'Onboarding Checklist'
    },
    '/internal-onboarding/ccc-core/welcome-orientation': {
      component: () => import('@/pages/internal-onboarding/WelcomeOrientation'),
      title: 'Welcome Orientation'
    },
    '/internal-onboarding/ccc-core/immerse-contribute': {
      component: () => import('@/pages/internal-onboarding/Immerse'),
      title: 'Immerse & Contribute'
    },
    '/internal-onboarding/ccc-core/deepen-engagement': {
      component: () => import('@/pages/internal-onboarding/DeepenEngagement'),
      title: 'Deepen Engagement'
    },
    '/internal-onboarding/ccc-core/full-integration': {
      component: () => import('@/pages/internal-onboarding/FullIntegration'),
      title: 'Full Integration'
    },
    '/internal-onboarding/ccc-extended': {
      component: () => import('@/pages/internal-onboarding/OWCombined'),
      title: 'CCC Extended Onboarding'
    },
    '/internal-onboarding/ccc-extended/onboarding-checklist': {
      component: () => import('@/pages/internal-onboarding/OnboardingChecklist'),
      title: 'Onboarding Checklist'
    },
    '/internal-onboarding/ccc-extended/welcome-orientation': {
      component: () => import('@/pages/internal-onboarding/WelcomeOrientation'),
      title: 'Welcome Orientation'
    },
    '/internal-onboarding/ccc-leadership-steerco': {
      component: () => import('@/pages/internal-onboarding/OWCombined'),
      title: 'CCC Leadership SteerCo'
    },
    '/internal-onboarding/field-team': {
      component: () => import('@/pages/internal-onboarding/OWCombined'),
      title: 'CCC Field Team'
    },
    '/internal-onboarding/field-team/onboarding-checklist': {
      component: () => import('@/pages/internal-onboarding/OnboardingChecklist'),
      title: 'Onboarding Checklist'
    },
    '/internal-onboarding/field-team/welcome-orientation': {
      component: () => import('@/pages/internal-onboarding/WelcomeOrientation'),
      title: 'Welcome Orientation'
    },
    '/internal-onboarding/project-leads': {
      component: () => import('@/pages/internal-onboarding/CombinedOnboarding'),
      title: 'Project Leads'
    },
    '/internal-onboarding/ongoing-support': {
      component: () => import('@/pages/internal-onboarding/OngoingSupport'),
      title: 'Ongoing Support'
    },
    '/internal-onboarding/external-links': {
      component: () => import('@/pages/internal-onboarding/ExternalLinks'),
      title: 'External Links'
    },
  
    // Processes
    '/processes': {
      component: () => import('@/pages/processes/index'),
      title: 'Processes Overview'
    },
    '/processes/processes-and-governance': {
      component: () => import('@/pages/processes/Processes'),
      title: 'Processes & Governance'
    },
    '/processes/sops-and-resources': {
      component: () => import('@/pages/processes/RandD'),
      title: 'SOPs and Resources'
    },
  
    // Compliance
    '/compliance': {
      component: () => import('@/pages/compliance/index'),
      title: 'Compliance Overview'
    },
    // '/compliance/resources-and-support': {
    //   component: () => import('@/pages/compliance/ComplianceGuidance'),
    //   title: 'Compliance Guidance'
    // },
  
    // Systems
    '/systems': {
      component: () => import('@/pages/systems/index'),
      title: 'Systems Overview'
    },
    // '/systems/internal-platforms': {
    //   component: () => import('@/pages/systems/InternalPlatforms'),
    //   title: 'Internal Platforms'
    // },
    // '/systems/manual-systems': {
    //   component: () => import('@/pages/systems/ManualSystems'),
    //   title: 'Manual Systems'
    // },
    // '/systems/links-to-process': {
    //   component: () => import('@/pages/systems/LinkstoProcess'),
    //   title: 'Links to Process'
    // },
  
    // Project Archetype
    '/project-archetype': {
      component: () => import('@/pages/project-archetype/index'),
      title: 'Project Archetype Overview'
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

    // Glossary
    '/glossary': {
      component: () => import('@/pages/glossary/GlossaryOfTerms'),
      title: 'Glossary of Terms'
    },

    // FAQs
    '/faqs': {
      component: () => import('@/pages/faqs/FAQs'),
      title: 'FAQs'
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
  