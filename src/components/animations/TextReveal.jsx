import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ text, delay = 0, style = {}, className = '', elementType = 'h1', justifyContent = 'flex-start' }) => {
  // Split text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  };

  const MotionComponent = motion[elementType];

  return (
    <MotionComponent
      style={{ ...style, display: 'flex', flexWrap: 'wrap', overflow: 'hidden', justifyContent }}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "0.25em", display: 'inline-block' }}
          key={index}
        >
          {word === '<br/>' ? <br /> : word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};

export default TextReveal;
