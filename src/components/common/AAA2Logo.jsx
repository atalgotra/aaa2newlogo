import React, { useState } from 'react';

const AAA2Logo = ({ 
  mode = 'light', 
  size = 52, 
  className = '',
  style = {}
}) => {
  const [loaded, setLoaded] = useState(false);
  const logoSrc = mode === 'dark' ? '/logo-dark.png' : '/logo-light.png';

  return (
    <div style={{ position: 'relative', height: `${size}px`, display: 'inline-flex', alignItems: 'center' }}>
      {!loaded && (
        <div
          className={mode === 'dark' ? 'skeleton-dark' : 'skeleton-light'}
          style={{
            height: `${size}px`,
            width: `${size}px`,
            borderRadius: '8px'
          }}
        />
      )}
      <img 
        src={logoSrc} 
        alt="AAA 2 Innovate Logo" 
        onLoad={() => setLoaded(true)}
        className={`aaa2-logo-img ${className}`}
        style={{ 
          height: `${size}px`, 
          width: 'auto', 
          objectFit: 'contain',
          borderRadius: '6px',
          display: loaded ? 'block' : 'none',
          filter: mode === 'dark' 
            ? 'brightness(0) invert(1) drop-shadow(0.5px 0 0 #ffffff) drop-shadow(-0.5px 0 0 #ffffff) drop-shadow(0 0.5px 0 #ffffff) drop-shadow(0 -0.5px 0 #ffffff)' 
            : 'drop-shadow(0.5px 0 0 #000000) drop-shadow(-0.5px 0 0 #000000) drop-shadow(0 0.5px 0 #000000) drop-shadow(0 -0.5px 0 #000000)',
          transform: 'scale(1.05)',
          transformOrigin: 'left center',
          transition: 'all 0.2s ease',
          ...style 
        }} 
      />
    </div>
  );
};

export default AAA2Logo;
