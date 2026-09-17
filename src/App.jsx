import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/animations/SmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const EthicalSourcing = lazy(() => import('./pages/EthicalSourcing'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

import CookieConsent from './components/cookie/CookieConsent';
import HomeSkeleton from './components/common/HomeSkeletons';
import { ThemeProvider } from './context/ThemeContext';

const Capabilities = lazy(() => import('./pages/Capabilities'));
const Sourcing = lazy(() => import('./pages/services/Sourcing'));
const Design = lazy(() => import('./pages/services/Design'));
const Manufacturing = lazy(() => import('./pages/services/Manufacturing'));
const QualityControl = lazy(() => import('./pages/services/QualityControl'));
const Logistics = lazy(() => import('./pages/services/Logistics'));
const Warehousing = lazy(() => import('./pages/services/Warehousing'));
const Tech = lazy(() => import('./pages/services/Tech'));

// Simple Loading Component for secondary routes
const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--app-bg, #0d1f30)' }}>
    <div style={{ width: '36px', height: '36px', border: '2.5px solid rgba(99, 102, 241, 0.2)', borderTopColor: '#6366F1', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    <style>{`@keyframes spin { 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: 'var(--app-bg, #0d1f30)' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Suspense fallback={<HomeSkeleton />}><Home /></Suspense>} />
          <Route path="/about" element={<Navigate to="/" replace />} />
          <Route path="/team" element={<Navigate to="/" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ethical-sourcing" element={<EthicalSourcing />} />
          <Route path="/contact" element={<Contact />} />
          {/* Capabilities Routes */}
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/capabilities/sourcing" element={<Sourcing />} />
          <Route path="/capabilities/design" element={<Design />} />
          <Route path="/capabilities/manufacturing" element={<Manufacturing />} />
          <Route path="/capabilities/quality-control-compliance" element={<QualityControl />} />
          <Route path="/capabilities/logistics" element={<Logistics />} />
          <Route path="/capabilities/warehousing" element={<Warehousing />} />
          <Route path="/capabilities/tech" element={<Tech />} />

          {/* Redirects for legacy services routes */}
          <Route path="/services" element={<Navigate to="/capabilities" replace />} />
          <Route path="/services/sourcing" element={<Navigate to="/capabilities/sourcing" replace />} />
          <Route path="/services/design" element={<Navigate to="/capabilities/design" replace />} />
          <Route path="/services/manufacturing" element={<Navigate to="/capabilities/manufacturing" replace />} />
          <Route path="/services/quality-control-compliance" element={<Navigate to="/capabilities/quality-control-compliance" replace />} />
          <Route path="/services/logistics" element={<Navigate to="/capabilities/logistics" replace />} />
          <Route path="/services/warehousing" element={<Navigate to="/capabilities/warehousing" replace />} />
          <Route path="/services/tech" element={<Navigate to="/capabilities/tech" replace />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/favicon" element={null} />
          <Route path="/favicon.png" element={null} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const VALID_ROUTES = new Set([
  '/',
  '/products',
  '/ethical-sourcing',
  '/contact',
  '/capabilities',
  '/capabilities/sourcing',
  '/capabilities/design',
  '/capabilities/manufacturing',
  '/capabilities/quality-control-compliance',
  '/capabilities/logistics',
  '/capabilities/warehousing',
  '/capabilities/tech',
  '/privacy-policy',
  '/terms-of-service',
  '/favicon',
  '/favicon.png'
]);

const REDIRECT_MAP = {
  '/about': '/',
  '/team': '/',
  '/services': '/capabilities',
  '/services/sourcing': '/capabilities/sourcing',
  '/services/design': '/capabilities/design',
  '/services/manufacturing': '/capabilities/manufacturing',
  '/services/quality-control-compliance': '/capabilities/quality-control-compliance',
  '/services/logistics': '/capabilities/logistics',
  '/services/warehousing': '/capabilities/warehousing',
  '/services/tech': '/capabilities/tech'
};

const AppLayout = () => {
  const location = useLocation();
  const normalizedPath = location.pathname.length > 1 ? location.pathname.replace(/\/+$/, '') : location.pathname;
  const isKnownRoute = VALID_ROUTES.has(normalizedPath) || Boolean(REDIRECT_MAP[normalizedPath]);

  // On non-existent route: perform a clean hard reload to '/' so VideoHero and UI render with 100% consistency
  useEffect(() => {
    if (!isKnownRoute) {
      window.location.replace('/');
    }
  }, [isKnownRoute]);

  if (!isKnownRoute) {
    return <PageLoader />;
  }

  const isLogoRoute = ['/favicon', '/favicon.png'].includes(location.pathname);

  if (isLogoRoute) {
    return (
      <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#140038', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <img
          src="/favicon.png"
          alt="AAA 2 Innovate Logo"
          style={{ maxWidth: '240px', maxHeight: '240px', width: 'auto', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    );
  }

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--app-bg, #0d1f30)' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--app-bg, #0d1f30)' }}>
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#220150',
              color: '#FFFFFF',
              border: '1px solid rgba(99, 102, 241, 0.5)',
              boxShadow: '0 12px 35px rgba(0, 0, 0, 0.6)',
              fontSize: '14px',
              fontWeight: 600,
              borderRadius: '14px',
              padding: '14px 20px'
            }
          }}
        />
        <Router>
          <ScrollToTop />
          <AppLayout />
        </Router>
      </SmoothScroll>
    </ThemeProvider>
  );
}

export default App;
