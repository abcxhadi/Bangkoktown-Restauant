
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FadingSectionProps {
  children: React.ReactNode;
}

export const FadingSection: React.FC<FadingSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity, scale }}
    >
      {children}
    </motion.div>
  );
};
