import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Premium About Section with Netflix aesthetics
export const PremiumAboutSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="netflix-heading text-5xl lg:text-7xl mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="netflix-body text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-8">
                Where authentic Thai traditions meet modern culinary innovation
              </p>
              <p className="netflix-body mb-10 text-xl leading-relaxed text-gray-300 font-light">
                Rooted in centuries-old Thai culinary traditions, we bring you
                the authentic tastes of Thailand. Our recipes have been passed
                down through generations, preserving the essence of Thai
                culture in every bite. We believe food is a universal language
                that connects hearts and cultures. Every dish we create is a
                bridge between Thailand's rich culinary heritage and the
                vibrant multicultural spirit of the UAE.
              </p>
            </div>
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isVisible
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/images/thai-temple.jpg"
                  alt="Thai heritage and tradition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
