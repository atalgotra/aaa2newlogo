import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AAA2Logo from '../common/AAA2Logo';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Small delay before hiding
          return 100;
        }
        // Randomize the progress increments for a more organic feel
        const increment = Math.floor(Math.random() * 15) + 5; 
        return Math.min(prevProgress + increment, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#220150',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFFFFF'
          }}
        >
          {/* Subtle grid background for the preloader */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}
            >
               <AAA2Logo mode="dark" size={160} />
            </motion.div>

            {/* Progress counter */}
            <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'center' }}>
               <motion.div
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.5, delay: 0.4 }}
                 style={{ fontSize: '64px', fontWeight: 800, fontFamily: 'Outfit', display: 'flex', alignItems: 'baseline' }}
               >
                 {progress}<span style={{ fontSize: '24px', color: '#9CA3AF', marginLeft: '4px' }}>%</span>
               </motion.div>
            </div>
            
            {/* Loading Bar */}
            <div style={{ width: '200px', height: '2px', backgroundColor: 'rgba(255,255,255,0.1)', marginTop: '32px', borderRadius: '2px', overflow: 'hidden', margin: '32px auto 0 auto' }}>
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2 }}
                style={{ height: '100%', backgroundColor: 'var(--brand-orange)' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
