import { motion, useInView } from "framer-motion";
import { FC, useRef } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  animateOnInView?: boolean;
}

export const TypewriterEffect: FC<TypewriterEffectProps> = ({ text, speed = 50, className, animateOnInView = false }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * (speed / 1000),
      },
    }),
  };

  const animation = animateOnInView ? (inView ? "visible" : "hidden") : "visible";

  return (
    <motion.div ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={variants} initial="hidden" animate={animation} custom={i}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};