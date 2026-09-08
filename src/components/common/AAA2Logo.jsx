import React, { useState } from 'react';

const AAA2Logo = ({ 
  mode = 'light', 
  size = 52, 
  className = '',
  style = {}
}) => {
  const [loaded, setLoaded] = useState(false);
  const logoSrc = mode === 'dark' ? '/logo-dark.webp' : '/logo-light.webp';
  const fallbackPng = mode === 'dark' ? '/logo-dark.png' : '/logo-light.png';

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
      <picture>
        <source srcSet={logoSrc} type="image/webp" />
        <img 
          src={fallbackPng} 
          alt="AAA 2 Innovate Logo" 
          width="78"
          height="52"
          loading="eager"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className={`aaa2-logo-img ${className}`}
          style={{ 
            height: `${size}px`, 
            width: 'auto', 
            objectFit: 'contain',
            display: loaded ? 'block' : 'none',
            filter: mode === 'dark' ? 'brightness(0) invert(1)' : 'none',
            transition: 'all 0.2s ease',
            ...style 
          }} 
        />
      </picture>
    </div>
  );
};

export default AAA2Logo;
