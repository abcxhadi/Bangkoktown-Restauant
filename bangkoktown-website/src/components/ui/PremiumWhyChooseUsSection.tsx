import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Premium Why Choose Us Section with Netflix aesthetics
export const PremiumWhyChooseUsSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://www.istockphoto.com/photo/assorted-thai-food-in-bowls-and-plates-gm1333230133-415808956)`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative p-16 md:p-24">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-12">
            <div className="w-3 h-3 bg-gradient-to-r from-white to-amber-300 rounded-full animate-pulse"></div>
            <span className="netflix-caption text-white">
              Why Choose Bangkok Town
            </span>
            <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-white rounded-full animate-pulse"></div>
          </div>

          <h2 className="netflix-heading text-5xl lg:text-7xl text-white mb-8">
            Experience the Difference
          </h2>

          <p className="netflix-body text-white/80 text-2xl max-w-4xl mx-auto leading-relaxed font-light">
            Discover what makes us the UAE's most beloved destination for
            authentic Thai cuisine and exceptional dining experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: "🌶️",
              title: "100% Authentic",
              desc: "Traditional recipes passed down through generations, using imported spices and authentic cooking techniques straight from Thailand's kitchens.",
            },
            {
              icon: "⭐",
              title: "Premium Quality",
              desc: "Only the freshest ingredients, carefully sourced and prepared daily. Our commitment to quality means no compromises, ever.",
            },
            {
              icon: "❤️",
              title: "Thai Hospitality",
              desc: "Experience the genuine warmth of Thai culture with our friendly service and welcoming family atmosphere that feels like home.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="group/card"
              initial={{ opacity: 0, y: 50 }}
              animate={
                isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-gray-800/50 backdrop-blur-xl p-10 rounded-3xl h-full border border-white/10 hover:bg-gray-700/70 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
                <div className="text-center">
                  <div className="text-7xl mb-8 group-hover/card:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h3 className="netflix-subheading text-2xl lg:text-3xl text-white mb-6">
                    {item.title}
                  </h3>
                  <p className="netflix-body text-white/80 text-lg leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="netflix-subheading text-3xl lg:text-4xl text-white mb-12">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏆",
                title: "Best Thai Restaurant",
                subtitle: "UAE Food Awards 2024",
              },
              { icon: "⭐", title: "4.8/5 Rating", subtitle: "Google Reviews" },
              { icon: "👥", title: "50,000+", subtitle: "Happy Customers" },
              {
                icon: "🌟",
                title: "TripAdvisor",
                subtitle: "Certificate of Excellence",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                className="group/award bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/30 hover:bg-gray-700/70 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-5xl mb-4 group-hover/award:scale-110 transition-transform duration-500">
                  {award.icon}
                </div>
                <h3 className="netflix-subheading text-xl mb-3 text-white">
                  {award.title}
                </h3>
                <p className="netflix-body-medium text-sm text-white/70">
                  {award.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
