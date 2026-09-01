import React from 'react';
import { motion } from 'framer-motion';

const CapabilitiesBentoCard = ({
  image,
  title,
  description,
  isWide = false,
  width,
  height,
  onClick,
  imageStyle
}) => {
  const baseScale = imageStyle?.scale !== undefined ? imageStyle.scale : 1.0;
  const hoverScale = baseScale * 1.08;

  const cleanImageStyle = { ...imageStyle };
  delete cleanImageStyle.scale;

  return (
    <div
      className={`service-bento-card ${isWide ? 'wide' : ''}`}
      onClick={onClick}
    >
      <motion.img
        loading="lazy"
        src={image}
        alt={title}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          ...cleanImageStyle,
          scale: baseScale
        }}
        whileHover={{ scale: hoverScale }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
      <div className="service-bento-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CapabilitiesBentoCard;
