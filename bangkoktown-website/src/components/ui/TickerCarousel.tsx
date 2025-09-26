import React, { useState, useEffect, useRef } from "react";
import { getFeaturedItems } from "../../data/menuData";
import { MenuItem } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TickerCarousel = () => {
  const featuredItems = getFeaturedItems();
  const totalItems = featuredItems.length;
  const extendedItems = [...featuredItems, ...featuredItems, ...featuredItems]; // Triple for seamless loop
  const [currentIndex, setCurrentIndex] = useState(totalItems); // Start in the middle section
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Slightly longer for better UX

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  // Loop correction effect with smoother transitions
  useEffect(() => {
    if (!isTransitioning) {
      if (currentIndex >= totalItems * 2) {
        setTimeout(() => {
          setCurrentIndex(totalItems + (currentIndex % totalItems));
        }, 50);
      } else if (currentIndex < totalItems) {
        setTimeout(() => {
          setCurrentIndex(totalItems + (currentIndex % totalItems));
        }, 50);
      }
    }
  }, [currentIndex, isTransitioning, totalItems]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 800); // Longer for smoother effect
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const currentTouchX = e.touches[0].clientX;
    const diff = touchStartX.current - currentTouchX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      touchStartX.current = 0;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
  };

  const currentItem = extendedItems[currentIndex];

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-6xl mx-auto h-[750px] sm:h-[650px] bg-black rounded-3xl overflow-hidden shadow-2xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Enhanced animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 transition-all duration-1000 ease-out">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>
        {/* Subtle animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-1 h-1 bg-red-400 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-40 w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Main content area */}
      <div className="relative z-10 h-full p-4 sm:p-8 flex flex-col">
        {/* Main card area with responsive height */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Cards container */}
          <div className="relative w-full max-w-5xl h-[580px] sm:h-[480px]">
            {extendedItems.map((item: MenuItem, index: number) => {
              const position =
                (index - currentIndex + extendedItems.length) %
                extendedItems.length;
              let transform = "";
              let opacity = 0;
              let scale = 0.75;
              let zIndex = 0;
              let blur = "blur(6px)";
              let rotateY = 0;

              if (index === currentIndex) {
                // Current card - enhanced presence with responsive sizing
                transform = "translateX(0px) translateZ(0px)";
                opacity = 1;
                scale = isMobile ? 0.95 : 1.05;
                zIndex = 30;
                blur = "blur(0px)";
                rotateY = 0;
              } else if (
                index === currentIndex + 1 ||
                (currentIndex === extendedItems.length - 1 && index === 0)
              ) {
                // Next card - responsive positioning
                const translateX = isMobile ? "140px" : "220px";
                transform = `translateX(${translateX}) translateZ(-100px)`;
                opacity = isMobile ? 0.5 : 0.7;
                scale = isMobile ? 0.85 : 0.92;
                zIndex = 20;
                blur = "blur(1px)";
                rotateY = isMobile ? -10 : -15;
              } else if (
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === extendedItems.length - 1)
              ) {
                // Previous card - responsive positioning
                const translateX = isMobile ? "-140px" : "-220px";
                transform = `translateX(${translateX}) translateZ(-100px)`;
                opacity = isMobile ? 0.5 : 0.7;
                scale = isMobile ? 0.85 : 0.92;
                zIndex = 20;
                blur = "blur(1px)";
                rotateY = isMobile ? 10 : 15;
              } else if (
                index === currentIndex + 2 ||
                (currentIndex === extendedItems.length - 2 && index === 0) ||
                (currentIndex === extendedItems.length - 1 && index === 1)
              ) {
                // Far next card
                const translateX = isMobile ? "240px" : "360px";
                transform = `translateX(${translateX}) translateZ(-200px)`;
                opacity = 0.35;
                scale = 0.8;
                zIndex = 10;
                blur = "blur(3px)";
                rotateY = isMobile ? -20 : -25;
              } else if (
                index === currentIndex - 2 ||
                (currentIndex === 1 && index === extendedItems.length - 1) ||
                (currentIndex === 0 && index === extendedItems.length - 2)
              ) {
                // Far previous card
                const translateX = isMobile ? "-240px" : "-360px";
                transform = `translateX(${translateX}) translateZ(-200px)`;
                opacity = 0.35;
                scale = 0.8;
                zIndex = 10;
                blur = "blur(3px)";
                rotateY = isMobile ? 20 : 25;
              }

              return (
                <div
                  key={item.id}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-800 ease-out cursor-pointer"
                  style={{
                    transform: `translate(-50%, -50%) ${transform} scale(${scale}) rotateY(${rotateY}deg)`,
                    opacity,
                    zIndex,
                    filter: blur,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => goToSlide(index)}
                >
                  {/* Responsive card container */}
                  <div className="w-[280px] sm:w-[340px] h-[480px] sm:h-[420px] relative group perspective-1000">
                    {/* Enhanced gradient border with animation */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 rounded-2xl opacity-60 group-hover:opacity-90 transition-all duration-500 animate-pulse"></div>

                    {/* Main card with enhanced styling */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden h-full border border-gray-700 group-hover:border-gray-600 transition-all duration-500 shadow-2xl">
                      {/* Dish image with responsive layout */}
                      <div className="relative h-full overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                        />
                        
                      </div>

                      {/* Content section - separate on mobile, overlay on desktop */}
                      <div className="absolute bottom-0 left-0 right-0 h-auto p-4 sm:p-6 space-y-2 sm:space-y-4 bg-gradient-to-t from-gray-900/90 to-transparent">
                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500">
                            {item.name}
                          </h3>
                            <p className="text-gray-300 text-xs leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                              {item.description}
                            </p>
                            
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                          <div className="flex items-center gap-1">
                            <img
                              src="/images/dirhams.svg"
                              alt="Dirhams"
                              className="w-5 h-5 dirhams-gold"
                            />
                            <span className="dirhams-gold font-semibold text-lg">
                              {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation controls and dots indicator */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          {/* Enhanced controls */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={isTransitioning}
              className="group p-2 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/15 hover:border-white/20 disabled:opacity-50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={handleNext}
              disabled={isTransitioning}
              className="group p-2 sm:p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white hover:bg-white/15 hover:border-white/20 disabled:opacity-50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Enhanced dots indicator */}
          <div className="flex gap-1 sm:gap-2">
            {featuredItems.map((_, index) => {
              const isActive = currentIndex % totalItems === index;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(totalItems + index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-amber-500 w-6 sm:w-8 shadow-lg shadow-current/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TickerCarousel;
