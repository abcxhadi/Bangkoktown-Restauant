import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import {
  PremiumAboutSection,
  PremiumLocationsSection,
  Container,
  Card,
  TickerCarousel,
  Logo,
  InstagramFeed,
} from "../components/ui";
import { fadeIn } from "../utils/animations";
import { TypewriterEffect } from "../components/ui/TypewriterEffect";

import { getFeaturedItems } from "../data/menuData";
import "../currency.css";
import "../components/ui/Carousel.css";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { NetflixButton } from "../components/ui/NetflixButton";

import { MenuItem } from "../types";

// The AnimatedSection component is a reusable wrapper that applies a fade-in animation to its children.
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  // The `useInView` hook triggers the animation when the component is in the viewport.
  // `once: true` ensures the animation only runs once.
  // `margin: "-100px"` triggers the animation when the component is 100px into the viewport.
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      // The `controls.start("visible")` function starts the animation.
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn}
      // The `transition` prop defines the animation's duration, easing, and stagger effect.
      // `duration: 0.8` sets the animation duration to 800ms.
      // `ease: "easeOut"` creates a professional and smooth motion.
      // `staggerChildren: 0.1` adds a 100ms delay between each child's animation.
      transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

interface HomePageProps {
  setIsPlayerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HomePage = ({ setIsPlayerOpen }: HomePageProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleViewMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="min-h-screen bg-company-neutral relative">
      {/* Netflix-style gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-company-neutral/60 via-transparent to-company-neutral/80 pointer-events-none z-10"></div>

      <motion.div>
        <HeroVideoSection
          videoSrc="/videos/hero.mp4"
          audioSrc="/videos/music.mp3"
          dramaticEntry={true}
          overlayText=""
          className="relative hero-banner"
          buttons={[
            <NetflixButton
              onClick={handleViewMenu}
              variant="primary"
              size="large"
            >
              View Full Menu
            </NetflixButton>,
          ]}
        />
      </motion.div>

      {/* Main Content Section */}
      <main className="relative bg-company-neutral z-30">
        <Container>
          <AnimatedSection>
            <section className="pt-24 pb-0">
              <div className="text-center mb-10">
                <TypewriterEffect
                  text="Taste the Authentic Flavors"
                  speed={50}
                  className="netflix-heading text-5xl lg:text-6xl mb-8 text-company-secondary"
                  animateOnInView={true}
                />

                <TypewriterEffect
                  text="Discover our most beloved dishes, crafted with traditional recipes and the finest ingredients imported directly from Thailand."
                  speed={20}
                  className="netflix-body text-company-secondary/80 text-xl max-w-3xl mx-auto leading-relaxed font-light"
                  animateOnInView={true}
                />
              </div>
            </section>
          </AnimatedSection>
        </Container>
        <motion.div variants={fadeIn} className="mt-[-2rem]">
          <TickerCarousel />
        </motion.div>
        <div className="text-center mt-12">
          <NetflixButton
            onClick={handleViewMenu}
            variant="secondary"
            size="large"
          >
            View Full Menu
          </NetflixButton>
        </div>
        <Container>
          <AnimatedSection>
            <PremiumAboutSection />
          </AnimatedSection>

          <AnimatedSection>
            <InstagramFeed setIsPlayerOpen={setIsPlayerOpen} />
          </AnimatedSection>

          <AnimatedSection>
            <PremiumLocationsSection />
          </AnimatedSection>
        </Container>
      </main>
    </div>
  );
};

const FeaturedDishesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const featuredItems = getFeaturedItems();
  const totalSlides = featuredItems.length;

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  return (
    <div>
      <div
        className="carousel-container relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* @ts-ignore */}
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            className="dish-card absolute top-0 left-0"
            style={{
              backgroundImage: `url(${featuredItems[currentSlide].image})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="dish-overlay">
              <h3 className="dish-name">{featuredItems[currentSlide].name}</h3>
              <p className="dish-description">
                {featuredItems[currentSlide].description}
              </p>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-indicators">
        {featuredItems.map((_: MenuItem, index: number) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

interface HeroVideoSectionProps {
  videoSrc: string;
  posterSrc?: string;
  audioSrc?: string;
  className?: string;
  overlayText: string;
  buttons?: React.ReactNode[];
  dramaticEntry?: boolean;
}

const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  videoSrc,
  posterSrc,
  audioSrc,
  className,
  overlayText,
  buttons,
  dramaticEntry = false,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      video.play().catch(() => setHasVideoError(true));
    };

    const handleError = () => {
      setHasVideoError(true);
    };

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (dramaticEntry && audio) {
      audio.play().catch((err) => console.error("Audio play failed:", err));
      setIsMusicPlaying(true);

      const handleBeforeUnload = () => {
        audio.pause();
      };

      window.addEventListener('beforeunload', handleBeforeUnload);

      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }
  }, [dramaticEntry]);

  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  // Overlay gradient animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`relative w-full h-screen ${className}`}>
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-screen object-cover"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay for Text Readability */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-company-neutral/30 via-company-neutral/20 to-company-neutral/50 -z-10"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Thai Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div
          className="w-full h-full bg-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3b742' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center text-center px-4 h-full">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-4">
            <Logo size="xxxl" showText={false} noBorder={true} />
          </div>

          {/* Tagline */}
          <motion.p
            className="netflix-heading text-xl md:text-2xl lg:text-3xl text-company-secondary/95 mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8,
                },
              },
            }}
          >
            {overlayText}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            className="flex flex-row gap-4 justify-center items-center mb-8"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 1.5,
                },
              },
            }}
          >
            {buttons}
          </motion.div>
        </motion.div>
      </div>

      {/* Music Player */}
      {audioSrc && (
        <audio ref={audioRef} loop muted>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};
