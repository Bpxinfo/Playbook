import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  
  const pathConfig = {
    'playbook-app-overview': {
      label: 'Playbook Overview'
    },
    'ccc-overview': {
      label: 'CCC Overview'
    },
    'communications': {
      label: 'Communications'
    },
    'internal-comms-plan': {
      label: 'Internal Comms Plan',
      parent: 'communications'
    },
    'internal-engagement': {
      label: 'Internal Engagement',
      parent: 'communications'
    },
    'objectives': {
      label: 'Objectives',
      parent: null  // Will be determined by context
    },
    'ccc-stakeholders': {
      label: 'CCC Stakeholders',
      parent: 'internal-comms-plan'
    },
    'strategies-and-tactics': {
      label: 'Strategies and Tactics',
      parent: 'internal-comms-plan'
    },
    'timeline': {
      label: 'Timeline',
      parent: 'internal-comms-plan'
    },
    'ccc-communications': {
      label: 'Channels',
      parent: 'internal-comms-plan'
    },
    'communication-streams': {
      label: 'Cadence',
      parent: 'internal-comms-plan'
    },
    'communication-path': {
      label: 'Communication Path',
      parent: 'internal-engagement'
    },
    'internal-engagement-strategies': {
      label: 'Internal Engagement Strategies',
      parent: 'internal-engagement'
    },
    'internal-engagement-plan': {
      label: 'Internal Engagement Plan',
      parent: 'internal-engagement'
    },
    'impact-monitoring': {
      label: 'Impact Monitoring',
      parent: 'internal-engagement'
    },
    // Internal Onboarding
    'internal-onboarding': {
      label: 'Internal Onboarding'
    },
    'ccc-core': {
      label: 'CCC Core',
      parent: 'internal-onboarding'
    },
    'ccc-core/onboarding-checklist': {
      label: 'Onboarding Checklist',
      parent: 'ccc-core'
    },
    'ccc-core/welcome-orientation': {
      label: 'Welcome Orientation',
      parent: 'ccc-core'
    },
    'ccc-core/immerse-contribute': {
      label: 'Immerse & Contribute',
      parent: 'ccc-core'
    },
    'ccc-core/deepen-engagement': {
      label: 'Deepen Engagement',
      parent: 'ccc-core'
    },
    'ccc-core/full-integration': {
      label: 'Full Integration',
      parent: 'ccc-core'
    },
    'ccc-extended': {
      label: 'CCC Extended',
      parent: 'internal-onboarding'
    },
    'ccc-extended/onboarding-checklist': {
      label: 'Onboarding Checklist',
      parent: 'ccc-extended'
    },
    'ccc-extended/welcome-orientation': {
      label: 'Welcome Orientation',
      parent: 'ccc-extended'
    },
    'ccc-leadership-steerco': {
      label: 'CCC Leadership SteerCo',
      parent: 'internal-onboarding'
    },
    'ccc-leadership-steerco/onboarding-checklist': {
      label: 'Onboarding Checklist',
      parent: 'ccc-leadership-steerco'
    },
    'ccc-leadership-steerco/welcome-orientation': {
      label: 'Welcome Orientation',
      parent: 'ccc-leadership-steerco'
    },
    'ccc-field-team': {
      label: 'CCC Field Team',
      parent: 'internal-onboarding'
    },
    'ccc-field-team/onboarding-checklist': {
      label: 'Onboarding Checklist',
      parent: 'ccc-field-team'
    },
    'ccc-field-team/welcome-orientation': {
      label: 'Welcome Orientation',
      parent: 'ccc-field-team'
    },
    'project-leads': {
      label: 'Project Leads',
      parent: 'internal-onboarding'
    },
    'project-leads/onboarding-checklist': {
      label: 'Onboarding Checklist',
      parent: 'project-leads'
    },
    'project-leads/welcome-orientation': {
      label: 'Welcome Orientation',
      parent: 'project-leads'
    },
    'ongoing-support': {
      label: 'Ongoing Support',
      parent: 'internal-onboarding'
    },
    // Processes
    'processes': {
      label: 'Processes & Governance'
    },
    'processes-and-governance': {
      label: 'Processes & Governance',
      parent: 'processes'
    },
    'sops-and-resources': {
      label: 'SOPs and Resources',
      parent: 'processes'
    },
    // Compliance
    'compliance': {
      label: 'Compliance Guidance'
    },
    // Systems
    'systems': {
      label: 'Systems'
    },
    'internal-platforms': {
      label: 'Internal Platforms',
      parent: 'systems'
    },
    'manual-systems': {
      label: 'Manual Systems',
      parent: 'systems'
    },
    'links-to-process': {
      label: 'Links to Process',
      parent: 'systems'
    },
    // Projects Archetypes
    'project-archetype': {
      label: 'Projects Archetypes'
    },
    'core-principles': {
      label: 'CORE Principles',
      parent: 'project-archetype'
    },
    'ccc-project-lifecycle': {
      label: 'CCC Project Lifecycle',
      parent: 'project-archetype'
    },
    'ccc-project-types': {
      label: 'CCC Project Types',
      parent: 'project-archetype'
    },
    'collaborative-studies': {
      label: 'Collaborative Studies',
      parent: 'project-archetype'
    },
    'isrs': {
      label: 'ISRs',
      parent: 'project-archetype'
    },
    'fee-for-service': {
      label: 'Fee For Service',
      parent: 'project-archetype'
    },
    'sponsorships': {
      label: 'Sponsorships',
      parent: 'project-archetype'
    },
    'grants': {
      label: 'Grants',
      parent: 'project-archetype'
    },
    // Glossary
    'glossary': {
      label: 'Glossary of Terms'
    }
  };

  const generateBreadcrumbs = () => {
    const path = location.pathname.endsWith('/') 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
    
    const segments = path.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    let currentPath = '';
    segments.forEach((segment) => {
      currentPath += `/${segment}`;
      const mappedSegment = pathConfig[segment] || {
        label: segment
          .split('-')
          .map(word => {
            if (word.toLowerCase() === 'ccc') {
              return 'CCC'; // Ensure "CCC" is always fully capitalized
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' '),
        parent: null
      };
      
      breadcrumbs.push({
        text: mappedSegment.label || mappedSegment.display,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="px-4 py-2 text-sm text-gray-500">
      <div className="flex items-center">
        <Link to="/" className="hover:text-red-800">
          Playbook
        </Link>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span className="mx-2">/</span>
            <Link
              to={crumb.url}
              className="hover:text-red-800"
            >
              {crumb.text}
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
