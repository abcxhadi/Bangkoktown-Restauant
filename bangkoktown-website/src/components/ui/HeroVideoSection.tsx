import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroVideoSectionProps {
  videoSrc: string;
  posterSrc: string;
  audioSrc?: string; // Optional audio source
  children: React.ReactNode;
  className?: string; // Added className prop
  overlayText: string; // Added overlayText prop
}

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  videoSrc,
  posterSrc,
  audioSrc,
  children,
  className, // Destructure className
  overlayText, // Destructure overlayText
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

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.error("Audio play failed:", err));
    }
    setIsMusicPlaying(!isMusicPlaying);
  };


  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.5
      }
    }
  };

  // Overlay gradient animation
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden ${className}`}>
      {/* Video Background */}
      {!hasVideoError && (
        <video
          ref={videoRef}
          className={`
            absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
            ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Background */}
      <div
        className={`
          absolute inset-0 w-full h-full transition-opacity duration-1000
          ${(!isVideoLoaded || hasVideoError) ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {/* Gradient Background as Ultimate Fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-thai-red via-thai-red/90 to-thai-red/80" />

        {/* Thai Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-16.569-13.431-30-30-30s-30 13.431-30 30 13.431 30 30 30 30-13.431 30-30zm0 0c0 16.569 13.431 30 30 30s30-13.431 30-30-13.431-30-30-30-30 13.431-30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        {/* Fallback Image (if available) */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url(${posterSrc})`
          }}
          onError={(e) => {
            // Hide the image if it fails to load
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      </div>

      {/* Loading State */}
      {!isVideoLoaded && !hasVideoError && (
        <div className="absolute inset-0 bg-thai-red flex items-center justify-center">
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-thai-gold border-t-transparent rounded-full mx-auto mb-4"
            />
            <p className="text-white text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Dark Overlay for Text Readability */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
      />

      {/* Thai Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1
            className="font-thai-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center tracking-wider"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.3
                }
              }
            }}
          >
            <span className="block text-white drop-shadow-lg">
              Bangkok Town
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-white/80 uppercase tracking-widest">
              Thai Restaurant
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-thai-sans text-xl md:text-2xl lg:text-3xl text-white/95 mb-8 font-light tracking-wide"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8
                }
              }
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
                  delay: 1.5
                }
              }
            }}
          >
            <button className="px-6 py-2 bg-[#800020] text-white font-thai-sans font-semibold rounded-lg hover:bg-[#A52A2A] transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
              Explore Menu
            </button>
            <button className="px-6 py-2 border-2 border-white text-white font-thai-sans font-semibold rounded-lg hover:bg-white hover:text-thai-red transition-all duration-300 transform hover:scale-105 text-sm">
              Make Reservation
            </button>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.54 12.46a5 5 0 0 1-1.13 1.13l-4.34 2.5a3 3 0 0 1-4.13-4.13l2.5-4.34a5 5 0 0 1 1.13-1.13 5 5 0 0 1 5.96 5.97Z"/><path d="M12 12v.01"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5v0a5 5 0 0 1-5-5v0a5 5 0 0 1 5-5v0Z"/><path d="M12 12V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v0"/></svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
