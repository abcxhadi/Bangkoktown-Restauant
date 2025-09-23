import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const TypingParagraph = ({ text, className }) => {
  const typedText = useTypingEffect(text, 20);
  return <p className={className}>{typedText}</p>;
};


// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const PremiumAboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <h2 className="netflix-heading text-5xl lg:text-6xl mb-8 text-white">
            Why Bangkok Town?
          </h2>
          <p className="netflix-body text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Excellence recognized. Tradition honored. Experience perfected.
          </p>
        </motion.div>

        {/* Main Container - Transparent */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:order-1">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Authentic Heritage
                </h3>
                <TypingParagraph
                  text="Traditional recipes from Bangkok's finest kitchens, unchanged for generations. We bring the true taste of Thailand to your table, using only the freshest ingredients and time-honored techniques."
                  className="text-gray-300 leading-relaxed text-lg font-light"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:order-2">
                <img
                  src="/images/thai-temple.jpg"
                  alt="Authentic Heritage"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:order-2">
                <h3 className="text-4xl font-bold text-white mb-6">
                  Genuine Hospitality
                </h3>
                <TypingParagraph
                  text="Every guest is welcomed like family, creating connections that last. Our warm and attentive staff are dedicated to making your dining experience unforgettable, from the moment you step through our doors."
                  className="text-gray-300 leading-relaxed text-lg font-light"
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:order-1">
                <img
                  src="/images/thai-bowl.png"
                  alt="Genuine Hospitality"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PremiumAboutSection };
export default PremiumAboutSection;
