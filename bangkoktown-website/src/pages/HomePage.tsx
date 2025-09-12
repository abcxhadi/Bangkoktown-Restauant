import { useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { PremiumAboutSection } from '../components/ui';
import { Card, PremiumLocationsSection, Container } from "../components/ui";
import { getFeaturedItems } from "../data/menuData";
import "../currency.css";

import { motion, useInView } from "framer-motion";
import { NetflixButton } from "../components/ui/NetflixButton";

import { MenuItem } from "../types";

const carouselCss = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

/* Netflix-inspired font system */
:root {
  --netflix-font: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --netflix-display: 'Poppins', 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.dish-card {
    min-width: 100%;
    position: relative;
    height: 60vh;
    min-height: 400px;
    max-height: 600px;
    display: flex;
    align-items: end;
    cursor: pointer;
    transition: transform 0.3s ease;
    overflow: hidden;
}

.dish-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    z-index: -1;
    background-image: var(--bg-image);
}

.dish-card:hover {
    transform: scale(1.02);
}

.dish-overlay {
    background: linear-gradient(transparent 0%, rgba(0, 0, 0, 0.4) 40%, rgba(0, 0, 0, 0.9) 100%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding: clamp(20px, 5vw, 40px);
}

.dish-name {
    font-family: var(--netflix-display);
    font-size: clamp(1.5rem, 4vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 10px;
    color: #d4af37;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: -0.5px;
}

.dish-description {
    font-family: var(--netflix-font);
    font-size: clamp(0.9rem, 2.5vw, 1.1rem);
    font-weight: 400;
    line-height: 1.5;
    color: #f5f5f5;
    max-width: 80%;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    margin-bottom: 15px;
}

.dish-price {
    font-family: var(--netflix-display);
    font-size: clamp(1.2rem, 3vw, 1.6rem);
    font-weight: 700;
    color: #d4af37;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    letter-spacing: -0.5px;
}

 @media (max-width: 768px) {
    .dish-card {
        height: 50vh;
        min-height: 350px;
    }
}

 @media (max-width: 480px) {
    .dish-card {
        height: 45vh;
        min-height: 320px;
    }
    
    .dish-description {
        max-width: 95%;
    }
}

.carousel-container {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    margin-bottom: 40px;
}

.carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-indicators {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin: 30px 0;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(212, 175, 55, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.indicator.active {
    background: #d4af37;
    transform: scale(1.2);
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
}

/* Netflix-style typography classes */
.netflix-heading {
    font-family: var(--netflix-display);
    font-weight: 800;
    letter-spacing: -1px;
    line-height: 1.1;
}

.netflix-subheading {
    font-family: var(--netflix-display);
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.2;
}

.netflix-body {
    font-family: var(--netflix-font);
    font-weight: 400;
    line-height: 1.5;
}

.netflix-body-medium {
    font-family: var(--netflix-font);
    font-weight: 500;
    line-height: 1.4;
}

.netflix-caption {
    font-family: var(--netflix-font);
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    font-size: 0.875rem;
}
`;

export const HomePage = () => {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu");
  };

  const handleMakeReservation = () => {
    navigate("/reservations");
  };

  return (
    <div className="min-h-screen bg-black relative">
      <style>{carouselCss}</style>
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

      {/* Hero Video Section */}
      <HeroVideoSection
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/hero-fallback.jpg"
        audioSrc="/videos/music.mp3"
        overlayText="Where Every Bite Tells a Thai Story"
        className="relative z-20 hero-banner"
        buttons={[
          <NetflixButton
            onClick={handleViewMenu}
            variant="primary"
            size="large"
          >
            Explore Menu
          </NetflixButton>,
          <NetflixButton
            onClick={handleMakeReservation}
            variant="secondary"
            size="large"
          >
            Make Reservation
          </NetflixButton>,
        ]}
      />

      {/* Main Content Section */}
      <main className="relative bg-black z-30">
        <Container>
          {/* Featured Menu Section */}
          <section className="py-24">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-full border border-amber-500/30 mb-12">
                <div className="text-3xl animate-bounce">🍜</div>
                <span className="netflix-caption text-amber-400">
                  Featured Culinary Experience
                </span>
              </div>

              <h2 className="netflix-heading text-5xl lg:text-6xl mb-8 text-white">
                Taste the Authentic Flavors
              </h2>

              <p className="netflix-body text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
                Discover our most beloved dishes, crafted with traditional
                recipes and the finest ingredients imported directly from
                Thailand.
              </p>
            </div>

            <FeaturedDishesCarousel />

            <div className="mt-12 text-center">
              <NetflixButton
                onClick={handleViewMenu}
                variant="primary"
                size="large"
              >
                View Full Menu
              </NetflixButton>
            </div>
          </section>

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced About Section */}
          <PremiumAboutSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced Why Choose Us Section */}
          <PremiumWhyChooseUsSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent h-px"></div>
          </div>

          {/* Enhanced Locations Section */}
          <PremiumLocationsSection />

          <div className="relative py-16">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent h-px"></div>
          </div>
        </Container>
      </main>
    </div>
  );
};



// Premium Why Choose Us Section
const PremiumWhyChooseUsSection = () => (
  <section className="py-24">
    <div className="relative overflow-hidden rounded-3xl group">
      <div className="absolute inset-0">
        <img
          src="/images/gradient-hero-prerender.webp"
          alt="Thai cuisine background"
          className="w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-black/80 rounded-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 via-transparent to-amber-600/30 rounded-3xl"></div>
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
            <div key={index} className="group/card">
              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl h-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-white/10">
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
            </div>
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
              <div
                key={index}
                className="group/award bg-white/5 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 hover:scale-105"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturedDishesCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div>
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="carousel-track" ref={trackRef}>
          {featuredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="dish-card"
              style={
                { "--bg-image": `url(${item.image})` } as React.CSSProperties
              }
            >
              <div className="dish-overlay">
                <h3 className="dish-name">{item.name}</h3>
                <p className="dish-description">{item.description}</p>
                <div className="dish-price flex items-center">
                  <img
                    src="/images/dirhams.svg"
                    alt="Dirhams"
                    className="w-6 h-6 mr-1 dirhams-gold"
                  />
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
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
        className="fixed inset-0 w-full h-full object-cover -z-10"
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
          fixed inset-0 w-full h-full transition-opacity duration-1000 -z-10
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






