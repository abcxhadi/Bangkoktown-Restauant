import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// TypewriterEffect component (simplified version)
const TypewriterEffect = ({
  text,
  className,
  speed = 50,
  animateOnInView = false,
}: {
  text: string;
  className: string;
  speed?: number;
  animateOnInView?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayText, setDisplayText] = React.useState("");

  React.useEffect(() => {
    if (!animateOnInView || isInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [text, speed, animateOnInView, isInView]);

  return (
    <div ref={ref} className={className}>
      {displayText}
    </div>
  );
};

// Awards Slider Component
const AwardsSlider = () => {
  const awards = [
    {
      id: 1,
      name: "Thai SELECT Certification",
      logo: "/images/thai-select.png",
      description: "Certified Authentic Thai Cuisine",
    },
    {
      id: 2,
      name: "Google 4.6 Stars",
      logo: "/images/google.png",
      description: "4.6/5 Rating",
    },
    {
      id: 3,
      name: "TripAdvisor Choice",
      logo: "/images/trip_advisor.png",
      description: "Travelers' Choice Award",
    },
    
  ];

  // Triple the awards for seamless loop
  const extendedAwards = [...awards, ...awards, ...awards];

  return (
    <div className="awards-slider-wrapper">
      <div className="awards-slider-container">
        {/* Gradient overlays for fade effect */}
        <div className="gradient-left"></div>
        <div className="gradient-right"></div>

        {/* Scrolling track */}
        <div className="awards-track">
          {extendedAwards.map((award, index) => (
            <div key={`${award.id}-${index}`} className="award-item">
              <div className="award-content">
                <img src={award.logo} alt={award.name} className="award-logo" />
                <div className="award-text">
                  <span className="award-name">{award.name}</span>
                  <span className="award-desc">{award.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

            <style jsx>{`
        .awards-slider-wrapper {
          margin: 4rem 0;
          position: relative;
          width: 100%;
        }

        .awards-slider-container {
          height: 120px;
          overflow: hidden;
          position: relative;
          width: 100%;
          border-top: 1px solid rgba(253, 254, 255, 0.1);
          border-bottom: 1px solid rgba(253, 254, 255, 0.1);
          background: rgba(253, 254, 255, 0.02);
          backdrop-filter: blur(10px);
        }

        .gradient-left,
        .gradient-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 150px;
          z-index: 2;
          pointer-events: none;
        }

        .gradient-left {
          left: 0;
          background: linear-gradient(
            to right,
            #353535 0%,
            rgba(53, 53, 53, 0.8) 50%,
            transparent 100%
          );
        }

        .gradient-right {
          right: 0;
          background: linear-gradient(
            to left,
            #353535 0%,
            rgba(53, 53, 53, 0.8) 50%,
            transparent 100%
          );
        }

        .awards-track {
          display: flex;
          align-items: center;
          height: 100%;
          animation: scroll 40s linear infinite;
          width: fit-content;
        }

        .awards-track:hover {
          animation-play-state: paused;
        }

        .award-item {
          flex-shrink: 0;
          margin: 0 3rem;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .award-item:hover {
          opacity: 1;
          transform: translateY(-5px);
        }

        .award-content {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 12px;
          background: rgba(253, 254, 255, 0.05);
          border: 1px solid rgba(253, 254, 255, 0.1);
          transition: all 0.3s ease;
          min-width: 280px;
        }

        .award-content:hover {
          background: rgba(253, 254, 255, 0.08);
          border-color: rgba(253, 254, 255, 0.2);
        }

        .award-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          filter: brightness(0.9);
        }

        .award-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }

        .award-name {
          color: #fdfeff;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.2;
        }

        .award-desc {
          color: rgba(253, 254, 255, 0.7);
          font-size: 0.875rem;
          font-weight: 300;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        @media (max-width: 768px) {
          .awards-slider-container {
            height: 100px;
          }

          .award-content {
            min-width: 240px;
            padding: 0.75rem;
          }

          .award-logo {
            width: 50px;
            height: 50px;
          }

          .award-name {
            font-size: 0.9rem;
          }

          .award-desc {
            font-size: 0.8rem;
          }

          .gradient-left,
          .gradient-right {
            width: 100px;
          }
        }

        @media (max-width: 480px) {
          .awards-slider-container {
            height: 90px;
          }

          .award-content {
            min-width: 200px;
            padding: 0.5rem;
          }

          .award-item {
            margin: 0 1.5rem;
          }
        }
      `}</style>
    </div>
  );
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
    <section ref={ref} className="py-24 sm:py-32 bg-company-neutral">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <TypewriterEffect
            text="Why Bangkok Town?"
            speed={50}
            className="netflix-heading text-5xl lg:text-6xl mb-8 text-company-secondary font-bold"
            animateOnInView={true}
          />
          <p className="text-company-secondary/80 text-xl max-w-3xl mx-auto leading-relaxed font-light">
            Excellence recognized. Tradition honored. Experience perfected.
          </p>
        </motion.div>

        {/* Awards Slider */}
        <AwardsSlider />

        {/* Main Container */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:order-1">
                <TypewriterEffect
                  text="A Taste of Bangkok in the Heart of the UAE"
                  speed={50}
                  className="text-4xl font-bold text-company-secondary mb-6"
                  animateOnInView={true}
                />
                <TypewriterEffect
                  text="Since 2001, Bangkok Town has been a premier destination for authentic Thai cuisine in the UAE. We are proud to be recognized for our traditional flavors, a dedication that has earned us the prestigious Thai SELECT certification from the Royal Thai Government."
                  speed={20}
                  className="text-company-secondary/80 leading-relaxed text-lg font-light"
                  animateOnInView={true}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:order-2">
                <img
                  src="/images/about.jpg"
                  alt="Authentic Heritage"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp} className="lg:order-2">
                <TypewriterEffect
                  text="Crafted with Passion, Served with Pride"
                  speed={50}
                  className="text-4xl font-bold text-company-secondary mb-6"
                  animateOnInView={true}
                />
                <TypewriterEffect
                  text="Our commitment to culinary excellence is reflected in our consistently high ratings, including 4.6 stars on both Google Reviews and TripAdvisor. Join us for a truly authentic taste of Thailand, crafted by our expert chefs and beloved by the community for over two decades."
                  speed={20}
                  className="text-company-secondary/80 leading-relaxed text-lg font-light"
                  animateOnInView={true}
                />
              </motion.div>
              <motion.div variants={fadeInUp} className="lg:order-1">
                <img
                  src="/images/about1.jpg"
                  alt="Genuine Hospitality"
                  className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumAboutSection;
