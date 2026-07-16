import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SchemaInjector from './SchemaInjector';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Generate JSON-LD Schema
  const schemaListElements = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.aaa2innovate.com/',
    }
  ];

  let currentUrl = 'https://www.aaa2innovate.com';
  
  pathnames.forEach((name, index) => {
    currentUrl += `/${name}`;
    schemaListElements.push({
      '@type': 'ListItem',
      position: index + 2,
      name: name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
      item: currentUrl,
    });
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaListElements,
  };

  return (
    <nav aria-label="Breadcrumb" style={{ padding: '20px 0', fontSize: '14px', position: 'relative', zIndex: 10 }}>
      <SchemaInjector schema={breadcrumbSchema} />
      <div className="container" style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', color: '#9CA3AF' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
          <Home size={14} style={{ marginRight: '4px' }} />
          Home
        </Link>
        
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const title = name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');

          return (
            <React.Fragment key={name}>
              <ChevronRight size={14} style={{ opacity: 0.5, color: '#9CA3AF' }} />
              {isLast ? (
                <span style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.5px' }} aria-current="page">
                  {title}
                </span>
              ) : (
                <Link to={routeTo} style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--brand-orange)'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  {title}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
