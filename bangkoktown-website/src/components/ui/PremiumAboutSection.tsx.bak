import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "./Card";

// Premium About Section with Netflix aesthetics and stack animation
export const PremiumAboutSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const stackedCardVariants = {
    hidden: {
      opacity: 0,
      y: 120,
      rotateX: -20,
      rotateY: 5,
      scale: 0.9,
    },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 80,
        duration: 1,
        delay: custom * 0.4,
      },
    }),
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-amber-600/10 to-red-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="netflix-heading text-5xl lg:text-7xl mb-8 bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            About Us
          </h2>
          <p className="netflix-body text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
            Where authentic Thai traditions meet modern culinary innovation
          </p>
        </motion.div>

        <motion.div
          className="space-y-20"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Heritage Card - Enhanced Stacked Design */}
          <motion.div
            className="relative perspective-1000"
            variants={stackedCardVariants}
            custom={0}
          >
            {/* Background Layers for Stacked Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-amber-600/15 to-red-600/15 rounded-3xl transform rotate-1 scale-105 blur-sm"
              animate={{
                rotate: [1, 2, 1],
                scale: [1.05, 1.08, 1.05],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-amber-600/10 rounded-3xl transform -rotate-1 scale-102 blur-sm"
              animate={{
                rotate: [-1, -2, -1],
                scale: [1.02, 1.05, 1.02],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Floating Glow Effect */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-3xl blur-3xl"
              animate={
                isVisible
                  ? {
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <Card
              variant="transparent"
              className="relative p-16 bg-gray-900/70 backdrop-blur-2xl border border-amber-500/30 rounded-3xl shadow-2xl
                       hover:shadow-amber-500/40 hover:border-amber-500/50 transition-all duration-700 transform-gpu
                       hover:-translate-y-2 hover:scale-[1.02] group"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-red-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }
                  }
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <h3
                    className="netflix-subheading text-3xl lg:text-4xl mb-8 bg-gradient-to-r from-amber-400 to-red-400
                               bg-clip-text text-transparent"
                  >
                    Our Heritage
                  </h3>

                  <p className="netflix-body mb-10 text-xl leading-relaxed text-gray-300 font-light">
                    Rooted in centuries-old Thai culinary traditions, we bring
                    you the authentic tastes of Thailand. Our recipes have been
                    passed down through generations, preserving the essence of
                    Thai culture in every bite.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        emoji: "🏛️",
                        text: "Traditional Recipes",
                        color: "amber",
                      },
                      { emoji: "👨‍🍳", text: "Master Chefs", color: "orange" },
                      { emoji: "🇹🇭", text: "Thai Culture", color: "red" },
                    ].map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        className={`group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-${tag.color}-600/20 to-
                                  ${tag.color === "amber" ? "orange" : tag.color === "orange" ? "red" : "rose"}-600/20 
                                  backdrop-blur-sm rounded-full border border-${tag.color}-500/30 
                                  hover:border-${tag.color}-500/60 hover:bg-${tag.color}-600/30 
                                  transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={
                          isVisible
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0.8, y: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.8 + tagIndex * 0.1,
                          type: "spring",
                          damping: 15,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="text-xl"
                          animate={{
                            rotate: [0, 10, -10, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: tagIndex * 0.3,
                          }}
                        >
                          {tag.emoji}
                        </motion.span>
                        <span
                          className={`netflix-caption text-${tag.color}-400 font-medium`}
                        >
                          {tag.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  className="relative group/image"
                  initial={{ opacity: 0, x: 80, rotateY: 15 }}
                  animate={
                    isVisible
                      ? { opacity: 1, x: 0, rotateY: 0 }
                      : { opacity: 0, x: 80, rotateY: 15 }
                  }
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <div
                    className="absolute -inset-6 bg-gradient-to-br from-amber-600/20 to-red-600/20 rounded-3xl blur-2xl
                               opacity-60 group-hover/image:opacity-100 group-hover/image:scale-110 transition-all duration-700"
                  ></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <motion.img
                      src="/images/thai-temple.jpg"
                      alt="Thai heritage and tradition"
                      className="w-full h-96 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                 group-hover/image:from-black/30 transition-all duration-700"
                    ></div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 right-4 bg-amber-500/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span className="text-2xl">🏛️</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Philosophy Card - Enhanced Stacked Design */}
          <motion.div
            className="relative perspective-1000"
            variants={stackedCardVariants}
            custom={1}
          >
            {/* Background Layers for Stacked Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-emerald-600/15 to-teal-600/15 rounded-3xl transform -rotate-1 scale-105 blur-sm"
              animate={{
                rotate: [-1, -2, -1],
                scale: [1.05, 1.08, 1.05],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-bl from-teal-600/10 to-emerald-600/10 rounded-3xl transform rotate-1 scale-102 blur-sm"
              animate={{
                rotate: [1, 2, 1],
                scale: [1.02, 1.05, 1.02],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />

            {/* Floating Glow Effect */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-3xl"
              animate={
                isVisible
                  ? {
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1],
                    }
                  : {}
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />

            <Card
              variant="transparent"
              className="relative p-16 bg-gray-900/70 backdrop-blur-2xl border border-emerald-500/30 rounded-3xl shadow-2xl
                       hover:shadow-emerald-500/40 hover:border-emerald-500/50 transition-all duration-700 transform-gpu
                       hover:-translate-y-2 hover:scale-[1.02] group"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-bl from-emerald-600/5 to-teal-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <motion.div
                  className="relative group/image"
                  initial={{ opacity: 0, x: -80, rotateY: -15 }}
                  animate={
                    isVisible
                      ? { opacity: 1, x: 0, rotateY: 0 }
                      : { opacity: 0, x: -80, rotateY: -15 }
                  }
                  transition={{
                    duration: 1,
                    delay: 0.6,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <div
                    className="absolute -inset-6 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-3xl blur-2xl
                               opacity-60 group-hover/image:opacity-100 group-hover/image:scale-110 transition-all duration-700"
                  ></div>
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                    <motion.img
                      src="/images/thai-bowl.png"
                      alt="Traditional Thai cuisine philosophy"
                      className="w-full h-96 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent 
                                 group-hover/image:from-black/30 transition-all duration-700"
                    ></div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                      }}
                    >
                      <span className="text-2xl">🥘</span>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  animate={
                    isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }
                  }
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    type: "spring",
                    damping: 20,
                  }}
                >
                  <h3
                    className="netflix-subheading text-3xl lg:text-4xl mb-8 bg-gradient-to-r from-emerald-400 to-teal-400
                               bg-clip-text text-transparent"
                  >
                    Our Philosophy
                  </h3>

                  <p className="netflix-body mb-10 text-xl leading-relaxed text-gray-300 font-light">
                    We believe food is a universal language that connects hearts
                    and cultures. Every dish we create is a bridge between
                    Thailand's rich culinary heritage and the vibrant
                    multicultural spirit of the UAE.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {[
                      {
                        emoji: "🥘",
                        text: "Authentic Flavors",
                        color: "amber",
                      },
                      {
                        emoji: "🌿",
                        text: "Fresh Ingredients",
                        color: "emerald",
                      },
                      { emoji: "❤️", text: "Thai Hospitality", color: "rose" },
                    ].map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        className={`group/tag flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-${tag.color}-600/20 to-
                                  ${tag.color === "amber" ? "orange" : tag.color === "emerald" ? "teal" : "pink"}-600/20 
                                  backdrop-blur-sm rounded-full border border-${tag.color}-500/30 
                                  hover:border-${tag.color}-500/60 hover:bg-${tag.color}-600/30 
                                  transition-all duration-300 cursor-pointer transform hover:scale-105 hover:-translate-y-1`}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={
                          isVisible
                            ? { opacity: 1, scale: 1, y: 0 }
                            : { opacity: 0, scale: 0.8, y: 20 }
                        }
                        transition={{
                          duration: 0.5,
                          delay: 1 + tagIndex * 0.1,
                          type: "spring",
                          damping: 15,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          className="text-xl"
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: tagIndex * 0.4,
                          }}
                        >
                          {tag.emoji}
                        </motion.span>
                        <span
                          className={`netflix-caption text-${tag.color}-400 font-medium`}
                        >
                          {tag.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};
