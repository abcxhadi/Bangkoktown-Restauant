import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { PremiumAboutSection, PremiumLocationsSection, Container, Card, TickerCarousel } from "../components/ui";
import { fadeIn } from "../utils/animations";
import { TypewriterEffect } from "../components/ui/TypewriterEffect";


import { getFeaturedItems } from "../data/menuData";
import "../currency.css";
import "../components/ui/Carousel.css";


import { motion, useInView, useScroll, useTransform, useAnimation, AnimatePresence } from "framer-motion";
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

export const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleViewMenu = () => {
    navigate("/menu");
  };

  const handleMakeReservation = () => {
    navigate("/reservations");
  };

  return (
    <div className="min-h-screen bg-black relative">
      
      
      {/* Subtle animated background patterns */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-red-600 to-amber-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-amber-600 to-red-600 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      {/* Netflix-style gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10"></div>

      
        <motion.div>
        <HeroVideoSection
          videoSrc="/videos/hero.mp4"
          posterSrc="/images/hero-fallback.jpg"
          overlayText="Where Every Bite Tells a Thai Story"
          className="relative z-20 hero-banner"
          buttons={[
            <NetflixButton
              onClick={handleViewMenu}
              variant="primary"
              size="large"
            >
              View Full Menu
            </NetflixButton>,
            <NetflixButton
              onClick={handleMakeReservation}
              variant="secondary"
              size="large"
            >
              Reservations
            </NetflixButton>,
          ]}
        />
      </motion.div>
      

      {/* Main Content Section */}
      <main className="relative bg-black z-30">
        <Container>
          <AnimatedSection>
            <section className="py-24">
              <div className="text-center mb-20">
                

                <TypewriterEffect
                  text="Taste the Authentic Flavors"
                  speed={50}
                  className="netflix-heading text-5xl lg:text-6xl mb-8 text-white"
                  animateOnInView={true}
                />

                <TypewriterEffect
                  text="Discover our most beloved dishes, crafted with traditional recipes and the finest ingredients imported directly from Thailand."
                  speed={20}
                  className="netflix-body text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light"
                  animateOnInView={true}
                />
              </div>

              <motion.div variants={fadeIn}>
                <TickerCarousel />
              </motion.div>

              <motion.div variants={fadeIn} className="mt-12 text-center">
                <NetflixButton
                  onClick={handleViewMenu}
                  variant="secondary"
                  size="large"
                >
                  View Full Menu
                </NetflixButton>
              </motion.div>
            </section>
          </AnimatedSection>
          

          
            <AnimatedSection>
            <PremiumAboutSection />
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
              <p className="dish-description">{featuredItems[currentSlide].description}</p>
              <div className="dish-price flex items-center">
                <img
                  src="/images/dirhams.svg"
                  alt="Dirhams"
                  className="w-6 h-6 mr-1 dirhams-gold"
                />
                {featuredItems[currentSlide].price}
              </div>
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
  posterSrc: string;
  audioSrc?: string;
  className?: string;
  overlayText: string;
  buttons?: React.ReactNode[];
}

const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  videoSrc,
  posterSrc,
  audioSrc,
  className,
  overlayText,
  buttons,
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

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch((err) => console.error("Audio play failed:", err));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

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
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src={videoSrc}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Fallback Background */}
      <div
        className={`
          fixed inset-0 w-full h-full transition-opacity duration-1000 -z-30
          ${!isVideoLoaded || hasVideoError ? "opacity-100" : "opacity-0"}
        `}
      >
        {/* Gradient Background as Ultimate Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-thai-red via-thai-red/90 to-thai-red/80" />

        {/* Thai Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm0 0c0 16.569 13.431 30 30 30s30-13.431 30-30-13.431-30-30-30-30 13.431-30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Fallback Image (if available) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url(${posterSrc})`,
          }}
          onError={(e) => {
            // Hide the image if it fails to load
            (e.target as HTMLElement).style.display = "none";
          }}
        />
      </div>

      {/* Dark Overlay for Text Readability */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50 -z-10"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Thai Pattern Overlay */}
      <div className="fixed inset-0 opacity-10 -z-10">
        <div
          className="w-full h-full bg-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
          {/* Main Heading */}
          <motion.h1
            className="netflix-heading text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3,
                },
              },
            }}
          >
            <span className="block text-white drop-shadow-2xl">
              Bangkok Town
            </span>
            <span className="block netflix-body-medium text-3xl md:text-4xl lg:text-5xl mt-2 text-white/90 uppercase tracking-widest">
              Thai Restaurant
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="netflix-body text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 font-light"
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
        <audio ref={audioRef} loop>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Music Toggle Button */}
      {audioSrc && (
        <div className="absolute bottom-8 right-8 z-20">
          <button
            onClick={toggleMusic}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-white/30"
          >
            {isMusicPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18.54 12.46a5 5 0 0 1-1.13 1.13l-4.34 2.5a3 3 0 0 1-4.13-4.13l2.5-4.34a5 5 0 0 1 1.13-1.13 5 5 0 0 1 5.96 5.97Z" />
                <path d="M12 12v.01" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0a5 5 0 0 1 5-5v0Z" />
                <path d="M12 12V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v0" />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};