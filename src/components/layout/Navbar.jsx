import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import AAA2Logo from '../common/AAA2Logo';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [pastHero, setPastHero] = useState(false);
  const [heroProgress, setHeroProgress] = useState(0); // 0 = top of hero, 1 = past hero
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState(null);
  const [mobileOpenDropdownIndex, setMobileOpenDropdownIndex] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  const isSubpage = location.pathname !== '/';
  const isSolid = pastHero || isSubpage;

  const isManualScrollRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    setActiveDropdownIndex(null);
    setMobileOpenDropdownIndex(null);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('hero');
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : window.innerHeight;
      const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
      // Ramp from 0→1 through the bottom 50% of the hero
      const rawProgress = Math.min(1, Math.max(0, (window.scrollY - heroHeight * 0.5) / (heroHeight * 0.5)));
      setHeroProgress(rawProgress);
      setPastHero(window.scrollY + 90 >= heroBottom);

      // Skip updating activeSection if user initiated a click-to-scroll
      if (isManualScrollRef.current) return;

      const sections = ['hero', 'about', 'services', 'products', 'ethical-sourcing', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (location.pathname !== '/') {
      isManualScrollRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isManualScrollRef.current = false;
      }, 900);

      if (id === 'hero') {
        navigate('/');
      } else {
        navigate('/', { state: { scrollTo: id } });
      }
      return;
    }

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    isManualScrollRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollRef.current = false;
    }, 900);

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    {
      name: 'Company',
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', path: '/about' },
        { name: 'Our Team', path: '/team' }
      ]
    },
    {
      name: 'Capabilities',
      path: '/capabilities',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Overview', path: '/capabilities' },
        { name: 'Sourcing', path: '/capabilities/sourcing' },
        { name: 'Design & PD', path: '/capabilities/design' },
        { name: 'Manufacturing', path: '/capabilities/manufacturing' },
        { name: 'Inspection & Compliance', path: '/capabilities/quality-control-compliance' },
        { name: 'Warehousing', path: '/capabilities/warehousing' },
        { name: 'Global Logistics', path: '/capabilities/logistics' },
        { name: 'Gen-Z Tech', path: '/capabilities/tech' }
      ]
    },
    { name: 'Products', path: '/products' },
    { name: 'Ethical Sourcing', path: '/ethical-sourcing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className="navbar-header"
        style={{
          top: isSolid ? '10px' : '16px',
          backgroundColor: isSolid
            ? 'rgba(34, 1, 80, 0.95)'
            : `rgba(34, 1, 80, ${(heroProgress * 0.45).toFixed(2)})`,
          backdropFilter: (heroProgress > 0.1 || isSolid)
            ? `blur(${Math.round(heroProgress * 10 + (isSolid ? 10 : 0))}px)`
            : 'none',
          border: isSolid
            ? '1px solid rgba(255, 255, 255, 0.15)'
            : `1px solid rgba(255, 255, 255, ${(0.08 + heroProgress * 0.18).toFixed(2)})`,
          boxShadow: isSolid ? '0 15px 40px rgba(0, 0, 0, 0.6)' : 'none'
        }}
      >
        <div className="navbar-container">

          {/* AAA2 Logo */}
          <button
            type="button"
            className="navbar-logo-btn"
            onClick={() => scrollToSection('hero')}
            aria-label="AAA2 Home"
          >
            <AAA2Logo mode="dark" size={36} />
          </button>

          {/* Desktop Floating Navigation Items */}
          <nav className="desktop-nav">
            {navLinks.map((link, index) => {
              if (link.hasDropdown) {
                const isActive = location.pathname.startsWith(link.path) || (location.pathname === '/' && activeSection === link.sectionId);
                const isOpen = activeDropdownIndex === index;
                return (
                  <div
                    key={index}
                    className="nav-dropdown-container"
                    onMouseEnter={() => setActiveDropdownIndex(index)}
                    onMouseLeave={() => setActiveDropdownIndex(null)}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        navigate(link.path);
                      }}
                      className={`desktop-nav-link ${isActive ? 'active' : ''}`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        size={14}
                        style={{
                          transition: 'transform 0.25s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          opacity: 0.85
                        }}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="nav-dropdown-menu">
                        {link.dropdownItems.map((item, subIdx) => {
                          const isSubActive = location.pathname === item.path;
                          return (
                            <button
                              key={subIdx}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                navigate(item.path);
                                setActiveDropdownIndex(null);
                              }}
                              className={`nav-dropdown-item ${isSubActive ? 'active' : ''}`}
                            >
                              {item.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.path) {
                const isActive = location.pathname === link.path;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      navigate(link.path);
                    }}
                    className={`desktop-nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.name}
                  </button>
                );
              }

              const isActive = location.pathname === '/' && activeSection === link.sectionId;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => scrollToSection(link.sectionId)}
                  className={`desktop-nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Action Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={() => {
                navigate('/contact');
              }}
              className="btn-primary desktop-action-btn"
              style={{ padding: '8px 18px', fontSize: '13px' }}
            >
              Get In Touch
            </button>

            {/* Mobile Menu Toggle */}
            <div className="mobile-menu-toggle" style={{ display: 'none' }}>
              <button
                type="button"
                aria-label="Toggle Mobile Menu"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ color: '#FFFFFF', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: '4px' }}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sliding Drawer */}
      <div
        className="mobile-menu-drawer"
        style={{
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          visibility: mobileMenuOpen ? 'visible' : 'hidden'
        }}
      >
        {/* Drawer Header with Logo & Close Button */}
        <div className="mobile-drawer-header">
          <AAA2Logo mode="dark" size={32} />
          <button
            type="button"
            aria-label="Close Mobile Menu"
            className="mobile-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Links inside Drawer */}
        <nav className="mobile-nav-list">
          {navLinks.map((link, index) => {
            if (link.hasDropdown) {
              const isActive = location.pathname.startsWith(link.path) || (location.pathname === '/' && activeSection === link.sectionId);
              const isOpen = mobileOpenDropdownIndex === index;
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                  <button
                    type="button"
                    onClick={() => setMobileOpenDropdownIndex(isOpen ? null : index)}
                    className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.25s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div className="mobile-submenu-list">
                      {link.dropdownItems.map((subItem, subIndex) => {
                        const isSubActive = location.pathname === subItem.path;
                        return (
                          <button
                            key={subIndex}
                            type="button"
                            onClick={() => {
                              navigate(subItem.path);
                              setMobileMenuOpen(false);
                            }}
                            className={`mobile-submenu-btn ${isSubActive ? 'active' : ''}`}
                          >
                            {subItem.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            if (link.path) {
              const isActive = location.pathname === link.path;
              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    navigate(link.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </button>
              );
            }

            const isActive = location.pathname === '/' && activeSection === link.sectionId;
            return (
              <button
                key={index}
                type="button"
                onClick={() => {
                  scrollToSection(link.sectionId);
                  setMobileMenuOpen(false);
                }}
                className={`mobile-nav-btn ${isActive ? 'active' : ''}`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
