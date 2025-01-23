import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  
  const pathMap = {
    'communication-plan': {
      display: 'Communication Plan',
      parent: null
    },
    'engagement-plan': {
      display: 'Engagement Plan',
      parent: 'communication-plan'
    },
    'impact-monitoring': {
      display: 'Impact Monitoring',
      parent: 'engagement-plan'
    },
    'internal': {
      display: 'Internal',
      parent: 'communication-plan'
    }
    // Add more mappings as needed
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
      const mappedSegment = pathMap[segment] || {
        display: segment
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
        text: mappedSegment.display,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="px-8 py-4 text-sm text-gray-500">
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
