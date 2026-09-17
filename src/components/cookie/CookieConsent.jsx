import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Settings, Check, X } from 'lucide-react';

const GA_TRACKING_ID = 'G-LDP4XDVPSG';
const CLARITY_PROJECT_ID = 'x7xw2gsgac';

// Compact premium animated Toggle Switch component in Brand Indigo
const ToggleSwitch = ({ checked, onChange, disabled }) => (
  <div
    onClick={(e) => {
      e.stopPropagation();
      if (!disabled && onChange) onChange();
    }}
    style={{
      width: '36px',
      height: '20px',
      background: disabled
        ? 'rgba(99, 102, 241, 0.3)'
        : checked
          ? 'var(--brand-indigo, #220150)'
          : 'rgba(255, 255, 255, 0.12)',
      borderRadius: '20px',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: checked ? '0 0 10px rgba(0, 0, 0, 0.4)' : 'inset 0 2px 4px rgba(0,0,0,0.25)',
      border: checked ? '1px solid rgba(255, 255, 255, 0.15)' : '1px solid rgba(255, 255, 255, 0.08)',
      flexShrink: 0
    }}
  >
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
      style={{
        width: '16px',
        height: '16px',
        background: '#ffffff',
        borderRadius: '50%',
        position: 'absolute',
        top: '1px',
        left: checked ? '17px' : '1px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {checked && <Check size={10} color="var(--brand-indigo, #220150)" strokeWidth={3} />}
    </motion.div>
  </div>
);

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    compulsory: true,
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    const savedConsent = localStorage.getItem('aaa2_cookie_consent');
    if (!savedConsent) {
      setTimeout(() => setIsVisible(true), 1500);
    } else {
      const parsedConsent = JSON.parse(savedConsent);
      if (parsedConsent.analytical) {
        injectTrackingScripts();
      }
    }
  }, []);

  const injectTrackingScripts = () => {
    const executeInjection = () => {
      if (!document.getElementById('ga-script')) {
        const gaScript = document.createElement('script');
        gaScript.id = 'ga-script';
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(gaScript);

        const gaInline = document.createElement('script');
        gaInline.id = 'ga-inline';
        gaInline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `;
        document.head.appendChild(gaInline);
      }

      if (!document.getElementById('clarity-script')) {
        const clarityInline = document.createElement('script');
        clarityInline.id = 'clarity-script';
        clarityInline.type = 'text/javascript';
        clarityInline.innerHTML = `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
        `;
        document.head.appendChild(clarityInline);
      }
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(executeInjection, { timeout: 3500 });
      } else {
        setTimeout(executeInjection, 1500);
      }
    }
  };

  const saveConsent = (newPreferences) => {
    localStorage.setItem('aaa2_cookie_consent', JSON.stringify(newPreferences));
    if (newPreferences.analytical) {
      injectTrackingScripts();
    }
    setIsVisible(false);
  };

  const handleAcceptAll = () => saveConsent({ compulsory: true, analytical: true, marketing: true });
  const handleRejectAll = () => saveConsent({ compulsory: true, analytical: false, marketing: false });
  const handleSavePreferences = () => saveConsent(preferences);

  const togglePreference = (key) => {
    if (key === 'compulsory') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div style={{ position: 'fixed', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', zIndex: 999999, padding: '0 16px', pointerEvents: 'none' }}>
        <motion.div
          initial={{ y: 120, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 120, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          style={{
            background: 'linear-gradient(135deg, var(--section-darker-bg, rgba(20, 0, 56, 0.95)) 0%, var(--section-dark-bg, rgba(34, 1, 80, 0.92)) 100%)',
            backdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            padding: showPreferences ? '16px 18px' : '14px 18px',
            borderRadius: '14px',
            maxWidth: showPreferences ? '490px' : '520px',
            width: '100%',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.7)',
            pointerEvents: 'auto',
            color: 'white',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Subtle glowing orb in background */}
          <div/>

          {!showPreferences ? (
            // Layer 1: Minimalist Premium Compact Banner
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}>
              <div>
                <h3 style={{ margin: '0 0 3px 0', fontSize: '0.92rem', fontWeight: '700', color: '#FFFFFF', letterSpacing: '-0.01em' }}>
                  Cookie Preferences
                </h3>
                <p style={{ margin: 0, color: '#CBD5E1', fontSize: '0.8rem', lineHeight: '1.45', fontWeight: '400' }}>
                  We use cookies to optimize site experience and analyze the traffic. View our <Link to="/privacy-policy" style={{ color: '#93C5FD', textDecoration: 'none', fontWeight: '600', borderBottom: '1px solid rgba(147, 197, 253, 0.4)', paddingBottom: '1px', transition: 'all 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseLeave={(e) => e.currentTarget.style.color = '#93C5FD'}>Privacy Policy</Link>.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-end', alignItems: 'center', paddingTop: '2px' }}>
                <button
                  onClick={() => setShowPreferences(true)}
                  style={{ background: 'transparent', color: '#CBD5E1', border: 'none', padding: '6px 10px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#CBD5E1'; e.currentTarget.style.background = 'transparent' }}
                >
                  <Settings size={13} /> Customize
                </button>
                <button
                  onClick={handleRejectAll}
                  style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#CBD5E1', border: '1px solid rgba(255, 255, 255, 0.12)', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '0.8rem', fontWeight: '600', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
                >
                  Reject Non-Essential
                </button>
                <button
                  onClick={handleAcceptAll}
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-indigo, #220150) 0%, var(--section-darker-bg, #140038) 100%)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '6px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255,255,255,0.25)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255,255,255,0.25)' }}
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            // Layer 2: Compact Granular Preferences in Brand Indigo
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '10px', position: 'relative', zIndex: 1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                <h3 style={{ margin: 0, fontSize: '0.92rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', color: '#FFFFFF' }}>
                  <Settings size={15} color="#93C5FD" /> Preferences
                </h3>
                <button
                  onClick={() => setShowPreferences(false)}
                  style={{ background: 'rgba(255,255,255,0.06)', border: 'none', color: '#CBD5E1', cursor: 'pointer', padding: '5px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
                >
                  <X size={15} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '60vh', overflowY: 'auto' }}>
                {/* Compulsory */}
                <div style={{ background: 'rgba(255,255,255,0.04)', padding: '10px 12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                      <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600' }}>Essential Cookies</h4>
                      <span style={{ fontSize: '0.68rem', color: '#94A3B8', background: 'rgba(255,255,255,0.08)', padding: '1px 5px', borderRadius: '4px' }}>Required</span>
                    </div>
                    <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.76rem', lineHeight: '1.35' }}>
                      Strictly necessary for site security and functionality.
                    </p>
                  </div>
                  <ToggleSwitch checked={true} disabled={true} />
                </div>

                {/* Analytical */}
                <div
                  onClick={() => togglePreference('analytical')}
                  style={{
                    background: preferences.analytical ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255,255,255,0.04)',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: `0.5px solid ${preferences.analytical ? '#FFFFFF' : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', transition: 'all 0.25s',
                    boxShadow: preferences.analytical ? 'inset 0 0 15px rgba(0, 0, 0, 0.25)' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = preferences.analytical ? '#FFFFFF' : 'rgba(255,255,255,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = preferences.analytical ? '#FFFFFF' : 'rgba(255,255,255,0.08)'}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600' }}>Analytics & Performance</h4>
                    <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.76rem', lineHeight: '1.35' }}>
                      Helps us analyze visitor usage securely via Google Analytics and Clarity.
                    </p>
                  </div>
                  <ToggleSwitch checked={preferences.analytical} onChange={() => togglePreference('analytical')} />
                </div>

                {/* Marketing */}
                <div
                  onClick={() => togglePreference('marketing')}
                  style={{
                    background: preferences.marketing ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255,255,255,0.04)',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    border: `0.5px solid ${preferences.marketing ? '#FFFFFF' : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', gap: '10px', alignItems: 'center', cursor: 'pointer', transition: 'all 0.25s',
                    boxShadow: preferences.marketing ? 'inset 0 0 15px rgba(0, 0, 0, 0.25)' : 'none'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = preferences.marketing ? '#FFFFFF' : 'rgba(255,255,255,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = preferences.marketing ? '#FFFFFF' : 'rgba(255,255,255,0.08)'}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h4 style={{ margin: '0 0 2px 0', fontSize: '0.85rem', color: '#FFFFFF', fontWeight: '600' }}>Marketing & Advertising</h4>
                    <p style={{ margin: 0, color: '#94A3B8', fontSize: '0.76rem', lineHeight: '1.35' }}>
                      Delivers relevant campaigns and tracks promotional performance.
                    </p>
                  </div>
                  <ToggleSwitch checked={preferences.marketing} onChange={() => togglePreference('marketing')} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
                <button
                  onClick={handleSavePreferences}
                  style={{
                    background: 'linear-gradient(135deg, var(--brand-indigo, #220150) 0%, var(--section-darker-bg, #140038) 100%)',
                    color: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '7px 20px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255,255,255,0.25)',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 18px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255,255,255,0.3)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 14px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255,255,255,0.25)' }}
                >
                  Save Choices
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
