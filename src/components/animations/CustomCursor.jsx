import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth <= 768) return;

    setIsVisible(true);

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if we are hovering over an interactive element
      const target = e.target;
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('magnetic') ||
        target.closest('.magnetic') ||
        getComputedStyle(target).cursor === 'pointer';

      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Small dot that perfectly follows the cursor */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '9px',
          height: '9px',
          backgroundColor: '#220150',
          background: 'radial-gradient(circle, #220150 0%, #140038 75%, #0a001a 100%)',
          borderRadius: '50%',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          boxShadow: '0 0 12px rgba(34, 1, 80, 1), 0 0 5px rgba(34, 1, 80, 0.9), 0 0 1px #FFFFFF',
          pointerEvents: 'none',
          zIndex: 9999
        }}
      />

      {/* Outer ring with smooth trailing and hover expansion */}
      <motion.div
        className="custom-cursor-ring"
        animate={{
          x: mousePosition.x - (isHovering ? 30 : 20),
          y: mousePosition.y - (isHovering ? 30 : 20),
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          backgroundColor: isHovering ? 'rgba(34, 1, 80, 0.40)' : 'rgba(34, 1, 80, 0.08)',
          border: isHovering ? '1.5px solid rgba(34, 1, 80, 0.95)' : '1px solid rgba(255, 255, 255, 0.55)',
          boxShadow: isHovering ? '0 0 22px rgba(34, 1, 80, 0.8), 0 0 10px rgba(34, 1, 80, 0.8)' : '0 0 10px rgba(34, 1, 80, 0.35)'
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: isHovering ? 'blur(4px)' : 'none'
        }}
      />
    </>
  );
};

export default CustomCursor;
