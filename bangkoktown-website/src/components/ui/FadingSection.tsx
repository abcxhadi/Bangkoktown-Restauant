
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FadingSectionProps {
  children: React.ReactNode;
}

export const FadingSection: React.FC<FadingSectionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div 
      ref={ref} 
      style={{ opacity }}
    >
      {children}
    </motion.div>
  );
};
