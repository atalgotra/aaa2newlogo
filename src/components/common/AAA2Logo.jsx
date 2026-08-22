import React from 'react';

const AAA2Logo = ({ 
  mode = 'light', 
  size = 52, 
  className = '',
  style = {}
}) => {
  const logoSrc = mode === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <img 
      src={logoSrc} 
      alt="AAA 2 Innovate Logo" 
      className={`aaa2-logo-img ${className}`}
      style={{ 
        height: `${size}px`, 
        width: 'auto', 
        objectFit: 'contain',
        borderRadius: '6px',
        display: 'block',
        filter: mode === 'dark' 
          ? 'brightness(0) invert(1) drop-shadow(0.5px 0 0 #ffffff) drop-shadow(-0.5px 0 0 #ffffff) drop-shadow(0 0.5px 0 #ffffff) drop-shadow(0 -0.5px 0 #ffffff)' 
          : 'drop-shadow(0.5px 0 0 #000000) drop-shadow(-0.5px 0 0 #000000) drop-shadow(0 0.5px 0 #000000) drop-shadow(0 -0.5px 0 #000000)',
        transform: 'scale(1.05)',
        transformOrigin: 'left center',
        transition: 'all 0.2s ease',
        ...style 
      }} 
    />
  );
};

export default AAA2Logo;
