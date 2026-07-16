import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Company', path: '/about', hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' }
      ]
    },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Ethical Sourcing', path: '/ethical-sourcing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
        zIndex: 1000,
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>

        {/* Text-based Logo for Perfect Fit */}
        <Link to="/" style={{ textDecoration: 'none', display: 'block', width: '220px', height: '90px' }}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '10px' }}>
            <img className="nav-logo-unified" src="https://aaawebisteimages.s3.ap-south-1.amazonaws.com/aaa2_logo.png" alt="AAA2 Innovate Logo" width="300" height="100" style={{ paddingTop: '5px', height: '100px', width: 'auto', transform: 'scale(3.2)', transformOrigin: 'left center', transition: 'all 0.3s', pointerEvents: 'none' }} />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'flex', alignItems: 'stretch', gap: '10px', height: '90px' }} className="desktop-nav">
          {navLinks.map((link, index) => {
            if (link.name === 'Services') {
              return (
                <div key={index} className="nav-dropdown-container" style={{ position: 'relative', display: 'flex', alignItems: 'stretch' }}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 20px',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: location.pathname === link.path ? 'var(--brand-orange)' : 'var(--text-primary)',
                      fontFamily: 'Inter',
                      borderTop: location.pathname === link.path ? '4px solid var(--brand-orange)' : '4px solid transparent',
                      marginTop: '0'
                    }}
                  >
                    {link.name}
                  </Link>
                  <div className="nav-dropdown-menu" style={{
                    position: 'absolute', top: '100%', left: 0,
                    backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '0 0 12px 12px', padding: '16px 0', minWidth: '240px',
                    display: 'none', flexDirection: 'column', borderTop: '2px solid var(--brand-orange)'
                  }}>
                    {[
                      { name: 'Sourcing', path: '/services/sourcing' },
                      { name: 'Design & PD', path: '/services/design' },
                      { name: 'Manufacturing', path: '/services/manufacturing' },
                      { name: 'Inspection & Compliance', path: '/services/quality-control-compliance' },
                      { name: 'Warehousing', path: '/services/warehousing' },
                      { name: 'Global Logistics', path: '/services/logistics' },
                      { name: 'Digital Ops & Gen-Z Tech', path: '/services/tech' }
                    ].map((subItem, subIdx) => (
                      <Link key={subIdx} to={subItem.path} className="nav-dropdown-item" style={{
                        padding: '12px 24px', fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'Inter', display: 'block', transition: 'background-color 0.2s, color 0.2s'
                      }}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            } else if (link.hasDropdown) {
              return (
                <div key={index} className="nav-dropdown-container" style={{ position: 'relative', display: 'flex', alignItems: 'stretch' }}>
                  <Link
                    to={link.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 20px',
                      fontSize: '15px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: location.pathname === link.path ? 'var(--brand-orange)' : 'var(--text-primary)',
                      fontFamily: 'Inter',
                      borderTop: location.pathname === link.path ? '4px solid var(--brand-orange)' : '4px solid transparent',
                      marginTop: '0'
                    }}
                  >
                    {link.name}
                  </Link>
                  <div className="nav-dropdown-menu" style={{
                    position: 'absolute', top: '100%', left: 0,
                    backgroundColor: '#FFFFFF', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '0 0 12px 12px', padding: '16px 0', minWidth: '200px',
                    display: 'none', flexDirection: 'column', borderTop: '2px solid var(--brand-orange)'
                  }}>
                    {link.dropdownItems.map((subItem, subIdx) => (
                      <Link key={subIdx} to={subItem.path} className="nav-dropdown-item" style={{
                        padding: '12px 24px', fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', textDecoration: 'none', fontFamily: 'Inter', display: 'block', transition: 'background-color 0.2s, color 0.2s'
                      }}>
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={index}
                to={link.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 20px',
                  fontSize: '15px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  color: location.pathname === link.path ? 'var(--brand-orange)' : 'var(--text-primary)',
                  fontFamily: 'Inter',
                  borderTop: location.pathname === link.path ? '4px solid var(--brand-orange)' : '4px solid transparent',
                  marginTop: '0'
                }}
              >
                {link.name}
              </Link>
            );
          })}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 10px' }}>
            <button aria-label="Search" style={{ color: 'var(--text-primary)', display: 'flex', alignItems: 'center', border: 'none', background: 'transparent', cursor: 'pointer' }}>
              <Search size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-menu-toggle" style={{ display: 'none' }}>
          <button aria-label="Toggle Mobile Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ color: 'var(--text-primary)', border: 'none', background: 'transparent', cursor: 'pointer' }}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Basic Mobile Navigation CSS & Logic (Inline for simplicity) */}
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-toggle { display: block !important; }
        }
        .nav-dropdown-container:hover .nav-dropdown-menu {
          display: flex !important;
        }
        .nav-dropdown-item:hover {
          background-color: rgba(255, 87, 34, 0.05);
          color: var(--brand-orange) !important;
        }
      `}</style>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{ position: 'absolute', top: '90px', left: 0, width: '100%', backgroundColor: '#FFFFFF', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', padding: '20px', borderTop: '1px solid var(--border-light)' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{ fontSize: '16px', fontWeight: 500, textDecoration: 'none', color: location.pathname === link.path ? 'var(--brand-orange)' : 'var(--text-primary)' }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
