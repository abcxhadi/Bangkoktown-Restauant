
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const LightingEffect: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 215, 0, 0.15), transparent 80%)`,
      }}
      animate={{
        x: mousePosition.x - 300,
        y: mousePosition.y - 300,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
};
