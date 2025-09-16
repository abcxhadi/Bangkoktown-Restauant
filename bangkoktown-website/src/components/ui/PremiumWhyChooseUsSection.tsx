import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Feather, Heart, Award, Star, Users, Trophy } from "lucide-react";

// Data for the section
const features = [
  {
    icon: <Globe className="w-12 h-12 text-amber-300" />,
    title: "Authentic Flavors",
    description: "Experience the true taste of Thailand with recipes passed down through generations.",
  },
  {
    icon: <Feather className="w-12 h-12 text-amber-300" />,
    title: "Exquisite Ambiance",
    description: "Our restaurant is designed to transport you to the heart of Bangkok.",
  },
  {
    icon: <Heart className="w-12 h-12 text-amber-300" />,
    title: "Warm Hospitality",
    description: "We treat our guests like family, ensuring a memorable dining experience.",
  },
];

const stats = [
  {
    icon: <Trophy className="w-10 h-10 text-amber-400" />,
    value: "Best Thai Restaurant",
    label: "UAE Food Awards 2024",
  },
  {
    icon: <Star className="w-10 h-10 text-amber-400" />,
    value: "4.8/5 Rating",
    label: "2,500+ Google Reviews",
  },
  {
    icon: <Users className="w-10 h-10 text-amber-400" />,
    value: "50,000+",
    label: "Happy Customers Annually",
  },
  {
    icon: <Award className="w-10 h-10 text-amber-400" />,
    value: "Hall of Fame",
    label: "TripAdvisor Excellence",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 80 }
  },
};

export const PremiumWhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-red-600/50 to-amber-600/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-amber-600/50 to-red-600/50 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }}></div>
      </div>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="netflix-heading text-4xl sm:text-5xl lg:text-6xl text-white">
            Why Bangkok Town?
          </h2>
          <p className="netflix-body text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mt-4">
            We are more than just a restaurant; we are a gateway to the vibrant culture and rich flavors of Thailand.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-stretch"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Feature Cards */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex flex-col text-center p-8 bg-gray-900/70 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg shadow-amber-500/10 hover:border-amber-300/50 transition-all duration-300"
            >
              <div className="flex-grow">
                <div className="mx-auto mb-6 bg-gradient-to-br from-red-600/20 to-amber-600/20 w-24 h-24 rounded-full flex items-center justify-center border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-16 sm:mt-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative text-center p-4 sm:p-6 bg-gray-800/60 backdrop-blur-sm rounded-xl border border-white/15"
              >
                <div className="flex justify-center items-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-gray-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};