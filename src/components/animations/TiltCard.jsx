import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const TiltCard = ({ children, className = '', style = {}, ...rest }) => {
  const ref = useRef(null);
  
  // Use framer-motion springs for extremely smooth dampening
  const x = useSpring(0, { stiffness: 300, damping: 30 });
  const y = useSpring(0, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    
    // Calculate distance from center (values from -1 to 1)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    
    // Max rotation is 15 degrees
    x.set(yPct * -15);
    y.set(xPct * 15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        rotateX: x,
        rotateY: y,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
