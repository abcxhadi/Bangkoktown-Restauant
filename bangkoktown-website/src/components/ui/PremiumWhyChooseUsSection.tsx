import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Globe,
  Heart,
  Award,
  Star,
  Users,
  Trophy,
  Sparkles,
} from "lucide-react";

// Data for the sections
const achievements = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Best Thai Restaurant",
    subtitle: "UAE Food Awards 2024",
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "4.8★ Rating",
    subtitle: "2,500+ Reviews",
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Hall of Fame",
    subtitle: "TripAdvisor Excellence",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "50,000+",
    subtitle: "Happy Customers",
  },
];

const values = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Authentic Heritage",
    description:
      "Traditional recipes from Bangkok's finest kitchens, unchanged for generations.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Genuine Hospitality",
    description:
      "Every guest is welcomed like family, creating connections that last.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Thoughtful Experience",
    description:
      "Every detail carefully crafted to transport you to the heart of Thailand.",
  },
];

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

const PremiumWhyChooseUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 sm:py-32">
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
          {/* Achievements Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 via-amber-600/40 to-red-600/40 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full text-center p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50">
                  <div className="flex justify-center mb-4">
                    <div className="p-2 rounded-full bg-white/[0.08] text-amber-300">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-gray-100 mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {achievement.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 via-amber-600/40 to-red-600/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-full text-left p-8 rounded-3xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50">
                  <div className="flex justify-start mb-6">
                    <div className="inline-flex p-3 rounded-xl bg-white/[0.06] text-amber-300">
                      {value.icon}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-100">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed font-light text-[15px]">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { PremiumWhyChooseUsSection };
export default PremiumWhyChooseUsSection;
