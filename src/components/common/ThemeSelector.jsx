import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, Check, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeSelector = ({ isMobileDrawer = false, className = '' }) => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredThemeId, setHoveredThemeId] = useState(null);
  const containerRef = useRef(null);
  const triggerRef = useRef(null);
  const listRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setHoveredThemeId(null);
      }
    };

    if (isOpen && !isMobileDrawer) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen, isMobileDrawer]);

  // Keyboard navigation & accessibility (ESC to close, arrows to select)
  const handleKeyDown = useCallback((e) => {
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
        e.preventDefault();
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      setHoveredThemeId(null);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const currentIndex = availableThemes.findIndex(t => t.id === currentTheme);
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      setTheme(availableThemes[nextIndex].id);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const currentIndex = availableThemes.findIndex(t => t.id === currentTheme);
      const prevIndex = (currentIndex - 1 + availableThemes.length) % availableThemes.length;
      setTheme(availableThemes[prevIndex].id);
    }
  }, [isOpen, availableThemes, currentTheme, setTheme]);

  const activeThemeObj = availableThemes.find(t => t.id === currentTheme) || availableThemes[0];

  const handleSelect = (themeId) => {
    setTheme(themeId);
    setIsOpen(false);
    setHoveredThemeId(null);
    triggerRef.current?.focus();
  };

  /* ── Miniature Atmospheric Material Orbs (14px) ── */
  const renderAtmosphereOrb = (theme, isHovered = false) => {
    let background = 'linear-gradient(135deg, #220150 0%, #140038 60%, #6366F1 100%)';
    let border = '1px solid rgba(99, 102, 241, 0.55)';
    let boxShadow = isHovered
      ? '0 0 8px rgba(99, 102, 241, 0.55), 0 2px 5px rgba(0,0,0,0.4)'
      : '0 2px 5px rgba(0,0,0,0.3)';

    if (theme.id === 'atelier') {
      background = 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #F6F2E9 45%, #17202A 95%)';
      border = '1px solid #B89B62';
      boxShadow = isHovered
        ? '0 0 8px rgba(184, 155, 98, 0.45), 0 2px 5px rgba(0,0,0,0.15)'
        : '0 2px 4px rgba(23, 32, 42, 0.12)';
    } else if (theme.id === 'forge') {
      background = 'radial-gradient(circle at 35% 35%, #45B8FF 0%, #202A33 50%, #0B0F14 95%)';
      border = '1px solid rgba(69, 184, 255, 0.55)';
      boxShadow = isHovered
        ? '0 0 8px rgba(69, 184, 255, 0.50), 0 2px 5px rgba(0,0,0,0.5)'
        : '0 2px 5px rgba(0,0,0,0.4)';
    } else if (theme.id === 'nexus') {
      background = 'radial-gradient(circle at 35% 35%, #39C6E8 0%, #102B4A 50%, #05070B 95%)';
      border = '1px solid rgba(57, 198, 232, 0.60)';
      boxShadow = isHovered
        ? '0 0 8px rgba(57, 198, 232, 0.55), 0 2px 5px rgba(0,0,0,0.6)'
        : '0 2px 5px rgba(0,0,0,0.5)';
    } else if (theme.id === 'aurelis') {
      background = 'radial-gradient(circle at 35% 35%, #FFFFFF 0%, #DCE3E7 40%, #155A8A 90%)';
      border = '1px solid rgba(21, 90, 138, 0.35)';
      boxShadow = isHovered
        ? '0 0 8px rgba(21, 90, 138, 0.35), 0 2px 5px rgba(23, 35, 45, 0.15)'
        : '0 2px 4px rgba(23, 35, 45, 0.12)';
    } else {
      // Default (Royal Indigo / Cosmic Midnight)
      background = 'radial-gradient(circle at 35% 35%, #6366F1 0%, #220150 50%, #140038 95%)';
      border = '1px solid rgba(99, 102, 241, 0.55)';
      boxShadow = isHovered
        ? '0 0 8px rgba(99, 102, 241, 0.55), 0 2px 5px rgba(0,0,0,0.4)'
        : '0 2px 4px rgba(34, 1, 80, 0.4)';
    }

    return (
      <span
        className="atmosphere-swatch-orb"
        style={{
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          display: 'inline-flex',
          background,
          border,
          boxShadow,
          flexShrink: 0,
        }}
        aria-hidden="true"
      />
    );
  };

  return (
    <div
      ref={containerRef}
      className={`theme-selector-wrapper ${className} ${isMobileDrawer ? 'is-mobile-drawer' : ''}`}
      style={{
        position: 'relative',
        display: isMobileDrawer ? 'block' : 'inline-block',
        width: isMobileDrawer ? '100%' : 'auto'
      }}
      onKeyDown={handleKeyDown}
    >
      {/* Atmosphere Console Trigger Button */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={`Select atmosphere. Current atmosphere is ${activeThemeObj.name}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className="atmosphere-console-trigger"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: isMobileDrawer ? 'space-between' : 'center',
          width: isMobileDrawer ? '100%' : 'auto',
          gap: '8px',
          padding: '7px 14px',
          borderRadius: '30px',
          fontSize: '11px',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          minHeight: '38px',
          outline: 'none',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
          {renderAtmosphereOrb(activeThemeObj, false)}
          <span
            className="theme-trigger-label"
            style={{
              fontFamily: "var(--font-heading, 'Chakra Petch', sans-serif)",
              letterSpacing: '0.08em'
            }}
          >
            {activeThemeObj.name}
          </span>
        </div>
        <ChevronDown
          size={13}
          style={{
            transition: 'transform 0.25s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            opacity: 0.75
          }}
        />
      </button>

      {/* Atmosphere Console Panel */}
      {isOpen && (
        <div
          ref={listRef}
          role="listbox"
          aria-label="Atmospheres"
          className="atmosphere-console-panel"
          style={{
            position: isMobileDrawer ? 'static' : 'absolute',
            top: isMobileDrawer ? 'auto' : 'calc(100% + 10px)',
            right: 0,
            width: isMobileDrawer ? '100%' : '326px',
            boxSizing: 'border-box',
            borderRadius: '20px',
            padding: isMobileDrawer ? '12px 10px' : '14px',
            marginTop: isMobileDrawer ? '10px' : '0',
            zIndex: 1100,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '10px',
              borderBottom: '1px solid var(--border-light, rgba(255,255,255,0.08))',
              marginBottom: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={12} style={{ color: 'var(--accent-primary, #E87522)', opacity: 0.9 }} />
              <span
                style={{
                  fontFamily: "var(--font-display, 'Orbitron', sans-serif)",
                  fontSize: '10px',
                  fontWeight: 800,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'var(--selector-panel-text, #FFFFFF)'
                }}
              >
                SELECT ATMOSPHERE
              </span>
            </div>
            <span
              style={{
                fontSize: '9px',
                fontWeight: 700,
                letterSpacing: '0.10em',
                padding: '2.5px 7px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--border-light, rgba(255, 255, 255, 0.08))',
                color: 'var(--text-secondary, #94A3B8)',
                textTransform: 'uppercase'
              }}
            >
              05 WORLDS
            </span>
          </div>

          {/* Atmosphere Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {availableThemes.map((theme) => {
              const isSelected = theme.id === currentTheme;
              const isHovered = hoveredThemeId === theme.id;
              const preview = theme.preview || {};

              return (
                <button
                  key={theme.id}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(theme.id)}
                  onMouseEnter={() => setHoveredThemeId(theme.id)}
                  onMouseLeave={() => setHoveredThemeId(null)}
                  className={`atmosphere-console-row ${isSelected ? 'selected' : ''}`}
                  style={{
                    backgroundColor: isSelected
                      ? 'var(--theme-item-active-bg, rgba(232, 117, 34, 0.08))'
                      : (isHovered ? (preview.hoverBg || 'rgba(255,255,255,0.04)') : 'transparent'),
                    borderColor: isSelected
                      ? (preview.accent || 'var(--accent-primary, #E87522)')
                      : (isHovered ? (preview.hoverBorder || 'rgba(255,255,255,0.15)') : 'transparent'),
                    boxShadow: isHovered
                      ? `0 4px 16px ${preview.glow || 'rgba(0,0,0,0.1)'}`
                      : 'none'
                  }}
                >
                  {/* Atmospheric Left Preview Accent Line */}
                  <span
                    className="row-accent-bar"
                    style={{
                      backgroundColor: preview.accent || 'var(--accent-primary, #E87522)'
                    }}
                  />

                  {/* Left: Swatch Orb & Center: Name + Concise Descriptor */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '11px', minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '20px' }}>
                      {renderAtmosphereOrb(theme, isHovered)}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-heading, 'Chakra Petch', sans-serif)",
                          fontSize: '12px',
                          fontWeight: isSelected ? 800 : 700,
                          letterSpacing: '0.07em',
                          color: isSelected ? 'var(--selector-panel-text)' : (isHovered ? 'var(--selector-panel-text)' : 'var(--text-secondary)'),
                          lineHeight: 1.25,
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {theme.name}
                      </div>
                      <div
                        style={{
                          fontSize: '10.5px',
                          color: 'var(--text-secondary, #94A3B8)',
                          marginTop: '2px',
                          lineHeight: 1.25,
                          letterSpacing: '0.015em',
                          opacity: isSelected ? 0.95 : 0.80,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {theme.subtitle}
                      </div>
                    </div>
                  </div>

                  {/* Right: Refined Check Indicator (Only when Active) */}
                  {isSelected && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginLeft: '8px',
                        color: preview.accent || 'var(--accent-primary, #E87522)'
                      }}
                      aria-label="Active atmosphere"
                    >
                      <Check size={14} strokeWidth={2.8} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
