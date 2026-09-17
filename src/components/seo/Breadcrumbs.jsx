import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import SchemaInjector from './SchemaInjector';

const Breadcrumbs = ({ style = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  const [activeTooltip, setActiveTooltip] = useState(null);

  useEffect(() => {
    const handleOutsideClick = () => setActiveTooltip(null);
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  if (pathnames.length === 0 || location.pathname.startsWith('/ethical-sourcing')) return null;

  const customNames = {
    'capabilities': 'Capabilities',
    'services': 'Capabilities',
    'quality-control-compliance': 'Inspection & Compliance',
    'tech': 'Gen-Z Tech',
    'logistics': 'Global Logistics',
    'design': 'Design & PD'
  };

  const getDisplayName = (name) => {
    return customNames[name.toLowerCase()] || (name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '));
  };

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
      name: getDisplayName(name),
      item: currentUrl,
    });
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaListElements,
  };

  const isAllowedOnDesktop =
    location.pathname.startsWith('/capabilities')

  return (
    <nav
      aria-label="Breadcrumb"
      className={!isAllowedOnDesktop ? 'breadcrumb-desktop-hidden' : ''}
      style={{ padding: '0 0 16px 0', fontSize: '14px', position: 'relative', zIndex: 10, ...style }}
    >
      <SchemaInjector schema={breadcrumbSchema} />
      <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px', color: '#9CA3AF' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#FFFFFF'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
          <Home size={14} style={{ marginRight: '4px' }} />
          Home
        </Link>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const title = getDisplayName(name);
          const isLong = title.length > 13;
          const truncatedTitle = isLong ? `${title.slice(0, 10)}...` : title;
          const isTooltipOpen = activeTooltip === name;

          const toggleTooltip = (e) => {
            if (isLong && typeof window !== 'undefined' && window.innerWidth <= 576) {
              e.stopPropagation();
              setActiveTooltip(isTooltipOpen ? null : name);
            }
          };

          const renderTitleContent = () => (
            <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <span className="desktop-breadcrumb-title">{title}</span>
              <span className="mobile-breadcrumb-title">{truncatedTitle}</span>

              {isTooltipOpen && (
                <span
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    backgroundColor: 'var(--brand-indigo, #220150)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    zIndex: 100,
                    pointerEvents: 'none'
                  }}
                >
                  {title}
                </span>
              )}
            </span>
          );

          return (
            <React.Fragment key={name}>
              <ChevronRight size={14} style={{ opacity: 0.5, color: '#9CA3AF' }} />
              {isLast ? (
                <span
                  onClick={toggleTooltip}
                  style={{ color: '#FFFFFF', fontWeight: 500, letterSpacing: '0.5px', cursor: isLong ? 'pointer' : 'default' }}
                  aria-current="page"
                  title={title}
                >
                  {renderTitleContent()}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  onClick={(e) => {
                    if (isLong && isTooltipOpen) {
                      e.preventDefault();
                      toggleTooltip(e);
                    }
                  }}
                  style={{ color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}
                  onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
                  onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
                  title={title}
                >
                  {renderTitleContent()}
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
