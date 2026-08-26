import React from 'react';

const CapabilitiesBentoCard = ({
  image,
  title,
  description,
  isWide = false,
  width,
  height,
  onClick
}) => {
  return (
    <div
      className={`service-bento-card ${isWide ? 'wide' : ''}`}
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={image}
        alt={title}
        width={width}
        height={height}
      />
      <div className="service-bento-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CapabilitiesBentoCard;
