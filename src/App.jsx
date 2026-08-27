import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SmoothScroll from './components/animations/SmoothScroll';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Team = lazy(() => import('./pages/Team'));
const Products = lazy(() => import('./pages/Products'));
const EthicalSourcing = lazy(() => import('./pages/EthicalSourcing'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

import CookieConsent from './components/CookieConsent';
import HomeSkeleton from './components/common/HomeSkeletons';

const Services = lazy(() => import('./pages/Services'));
const Sourcing = lazy(() => import('./pages/services/Sourcing'));
const Design = lazy(() => import('./pages/services/Design'));
const Manufacturing = lazy(() => import('./pages/services/Manufacturing'));
const QualityControl = lazy(() => import('./pages/services/QualityControl'));
const Logistics = lazy(() => import('./pages/services/Logistics'));
const Warehousing = lazy(() => import('./pages/services/Warehousing'));
const Tech = lazy(() => import('./pages/services/Tech'));

// Simple Loading Component for secondary routes
const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#0a0015' }}>
    <div style={{ width: '36px', height: '36px', border: '2.5px solid rgba(99, 102, 241, 0.15)', borderTopColor: '#6366F1', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
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
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{ display: 'flex', flexDirection: 'column', flex: 1 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Suspense fallback={<HomeSkeleton />}><Home /></Suspense>} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ethical-sourcing" element={<EthicalSourcing />} />
          <Route path="/contact" element={<Navigate to="/" state={{ scrollTo: 'contact' }} replace />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/sourcing" element={<Sourcing />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/manufacturing" element={<Manufacturing />} />
          <Route path="/services/quality-control-compliance" element={<QualityControl />} />
          <Route path="/services/logistics" element={<Logistics />} />
          <Route path="/services/warehousing" element={<Warehousing />} />
          <Route path="/services/tech" element={<Tech />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
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
        <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Suspense fallback={<PageLoader />}>
              <AnimatedRoutes />
            </Suspense>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </SmoothScroll>
  );
}

export default App;
