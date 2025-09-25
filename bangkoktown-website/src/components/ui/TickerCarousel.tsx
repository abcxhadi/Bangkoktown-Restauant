import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Mock data for demonstration
const getFeaturedItems = () => [
  {
    id: 1,
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon grilled to perfection with herbs and lemon",
    price: "85 AED",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Wagyu Steak",
    description:
      "Premium Japanese wagyu beef with truffle butter and seasonal vegetables",
    price: "225 AED",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Lobster Thermidor",
    description:
      "Classic French lobster dish with creamy sauce and gruyere cheese",
    price: "165 AED",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Truffle Pasta",
    description:
      "Handmade pasta with black truffle shavings and parmesan cream",
    price: "125 AED",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
  },
];

const TickerCarousel = () => {
  const featuredItems = getFeaturedItems();
  const totalItems = featuredItems.length;
  const extendedItems = [...featuredItems, ...featuredItems, ...featuredItems];
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  const touchStartX = useRef(0);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-scrolling effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  // Loop correction effect
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
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
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

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div
        ref={carouselRef}
        className="relative w-full max-w-7xl mx-auto bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          height: isMobile ? "400px" : "500px",
          minHeight: "350px",
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style jsx>{`
          @keyframes card-enter {
            0% {
              transform: translateX(${isMobile ? "50px" : "100px"})
                rotateY(-30deg) scale(0.9);
              opacity: 0.3;
              filter: blur(4px) brightness(0.7);
            }
            50% {
              transform: translateX(${isMobile ? "5px" : "10px"}) rotateY(-5deg)
                scale(1.02);
              opacity: 0.8;
              filter: blur(1px) brightness(0.9);
            }
            100% {
              transform: translateX(0px) rotateY(0deg)
                scale(${isMobile ? "1" : "1.05"});
              opacity: 1;
              filter: blur(0px) brightness(1);
            }
          }

          @keyframes card-exit {
            0% {
              transform: translateX(0px) rotateY(0deg)
                scale(${isMobile ? "1" : "1.05"});
              opacity: 1;
              filter: blur(0px) brightness(1);
            }
            50% {
              transform: translateX(${isMobile ? "-10px" : "-20px"})
                rotateY(15deg) scale(0.95);
              opacity: 0.6;
              filter: blur(2px) brightness(0.8);
            }
            100% {
              transform: translateX(${isMobile ? "-75px" : "-150px"})
                rotateY(45deg) scale(0.8);
              opacity: 0.2;
              filter: blur(4px) brightness(0.6);
            }
          }

          .animate-card-enter {
            animation: card-enter 0.8s ease-out forwards;
          }

          .animate-card-exit {
            animation: card-exit 0.8s ease-in-out forwards;
          }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>

          {/* Particles - reduced on mobile */}
          {!isMobile && (
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
          )}
        </div>

        {/* Main content area */}
        <div className="relative z-10 h-full p-3 sm:p-6 lg:p-8 flex flex-col">
          {/* Main card area */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            <div
              className="relative w-full h-full max-w-5xl"
              style={{ perspective: isMobile ? "800px" : "1200px" }}
            >
              {extendedItems.map((item, index) => {
                let transform = "";
                let opacity = 0;
                let scale = 0.75;
                let zIndex = 0;
                let blur = "blur(6px)";
                let rotateY = 0;
                let brightness = 0.7;

                // Mobile-optimized positioning
                const mobileOffset = isMobile ? 120 : 280;
                const mobileScale = isMobile ? 0.9 : 1.05;

                if (index === currentIndex) {
                  transform = "translateX(0px)";
                  opacity = 1;
                  scale = mobileScale;
                  zIndex = 30;
                  blur = "blur(0px)";
                  rotateY = 0;
                  brightness = 1;
                } else if (
                  index === currentIndex + 1 ||
                  (currentIndex === extendedItems.length - 1 && index === 0)
                ) {
                  transform = `translateX(${mobileOffset}px)`;
                  opacity = isTransitioning ? 0.9 : isMobile ? 0.4 : 0.6;
                  scale = isTransitioning ? 0.98 : isMobile ? 0.7 : 0.88;
                  zIndex = 20;
                  blur = isTransitioning ? "blur(0.5px)" : "blur(2px)";
                  rotateY = isTransitioning ? -20 : isMobile ? -20 : -35;
                  brightness = isTransitioning ? 0.95 : 0.8;
                } else if (
                  index === currentIndex - 1 ||
                  (currentIndex === 0 && index === extendedItems.length - 1)
                ) {
                  transform = `translateX(-${mobileOffset}px)`;
                  opacity = isTransitioning ? 0.3 : isMobile ? 0.4 : 0.6;
                  scale = isTransitioning ? 0.85 : isMobile ? 0.7 : 0.88;
                  zIndex = 15;
                  blur = isTransitioning ? "blur(3px)" : "blur(2px)";
                  rotateY = isTransitioning ? 35 : 35;
                  brightness = isTransitioning ? 0.6 : 0.8;
                } else {
                  // Hide other cards on mobile
                  if (isMobile) {
                    opacity = 0;
                    scale = 0;
                  } else {
                    transform = "translateX(320px)";
                    opacity = 0.3;
                    scale = 0.8;
                    zIndex = 10;
                    blur = "blur(4px)";
                    rotateY = -45;
                    brightness = 0.6;
                  }
                }

                return (
                  <div
                    key={item.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out cursor-pointer"
                    style={{
                      transform: `translate(-50%, -50%) ${transform} scale(${scale}) rotateY(${rotateY}deg)`,
                      opacity,
                      zIndex,
                      filter: `${blur} brightness(${brightness})`,
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    <div
                      className={`relative group ${
                        isTransitioning && index === currentIndex
                          ? "animate-card-enter"
                          : ""
                      } ${
                        isTransitioning && index === currentIndex - 1
                          ? "animate-card-exit"
                          : ""
                      }`}
                      style={{
                        width: isMobile ? "280px" : "340px",
                        height: isMobile ? "320px" : "420px",
                      }}
                    >
                      {/* Enhanced gradient border */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 rounded-xl sm:rounded-2xl opacity-60 group-hover:opacity-90 transition-all duration-500 ${
                          index === currentIndex
                            ? "animate-pulse shadow-lg shadow-amber-500/30"
                            : ""
                        }`}
                      ></div>

                      {/* Main card */}
                      <div
                        className={`relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl overflow-hidden h-full border border-gray-700 group-hover:border-gray-600 transition-all duration-500 shadow-2xl ${
                          index === currentIndex ? "shadow-amber-500/20" : ""
                        }`}
                      >
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                          {/* Content overlay - responsive padding */}
                          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 space-y-2 sm:space-y-4">
                            <div className="space-y-1 sm:space-y-2">
                              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-gray-100 group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500 line-clamp-2">
                                {item.name}
                              </h3>
                              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-300">
                              <div className="flex items-center gap-1">
                                <span className="text-amber-400 font-semibold">
                                  {item.price}
                                </span>
                              </div>
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

          {/* Dots indicator - responsive */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-6">
            {featuredItems.map((_, index) => {
              const isActive = currentIndex % totalItems === index;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(totalItems + index)}
                  className={`rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-amber-500 shadow-lg shadow-current/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  style={{
                    width: isActive
                      ? isMobile
                        ? "20px"
                        : "32px"
                      : isMobile
                        ? "6px"
                        : "8px",
                    height: isMobile ? "6px" : "8px",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls - responsive */}
      <div className="flex justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-8">
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
    </div>
  );
};

export default TickerCarousel;
