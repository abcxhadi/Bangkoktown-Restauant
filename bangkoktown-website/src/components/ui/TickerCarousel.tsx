import React, { useState, useEffect, useRef } from "react";
import { getFeaturedItems } from "../../data/menuData";
import { MenuItem } from "../../types";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TickerCarousel = () => {
  const featuredItems = getFeaturedItems();
  const totalItems = featuredItems.length;
  const extendedItems = [...featuredItems, ...featuredItems, ...featuredItems];
  const [currentIndex, setCurrentIndex] = useState(totalItems);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

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
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 1000);
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

  return (
    <>
      <div
        ref={carouselRef}
        className="relative w-full max-w-6xl mx-auto bg-black overflow-hidden shadow-2xl
                   h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px]
                   rounded-xl sm:rounded-2xl lg:rounded-3xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <style jsx>{`
          @keyframes card-enter {
            0% {
              transform: translateX(100px) rotateY(-30deg) scale(0.9);
              opacity: 0.3;
              filter: blur(4px) brightness(0.7);
            }
            50% {
              transform: translateX(10px) rotateY(-5deg) scale(1.02);
              opacity: 0.8;
              filter: blur(1px) brightness(0.9);
            }
            100% {
              transform: translateX(0px) rotateY(0deg) scale(1.05);
              opacity: 1;
              filter: blur(0px) brightness(1);
            }
          }

          @keyframes card-exit {
            0% {
              transform: translateX(0px) rotateY(0deg) scale(1.05);
              opacity: 1;
              filter: blur(0px) brightness(1);
            }
            50% {
              transform: translateX(-20px) rotateY(15deg) scale(0.95);
              opacity: 0.6;
              filter: blur(2px) brightness(0.8);
            }
            100% {
              transform: translateX(-150px) rotateY(45deg) scale(0.8);
              opacity: 0.2;
              filter: blur(4px) brightness(0.6);
            }
          }

          @media (max-width: 768px) {
            @keyframes card-enter {
              0% {
                transform: translateX(50px) rotateY(-20deg) scale(0.95);
                opacity: 0.4;
                filter: blur(2px) brightness(0.8);
              }
              100% {
                transform: translateX(0px) rotateY(0deg) scale(1);
                opacity: 1;
                filter: blur(0px) brightness(1);
              }
            }

            @keyframes card-exit {
              0% {
                transform: translateX(0px) rotateY(0deg) scale(1);
                opacity: 1;
                filter: blur(0px) brightness(1);
              }
              100% {
                transform: translateX(-50px) rotateY(20deg) scale(0.95);
                opacity: 0.4;
                filter: blur(2px) brightness(0.8);
              }
            }
          }

          .animate-card-enter {
            animation: card-enter 1s ease-out forwards;
          }

          .animate-card-exit {
            animation: card-exit 1s ease-in-out forwards;
          }

          .perspective-1000 {
            perspective: 1000px;
          }

          @media (max-width: 768px) {
            .perspective-1000 {
              perspective: 600px;
            }
          }

          .dirhams-gold {
            color: #f59e0b;
          }
        `}</style>

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20 transition-all duration-1000 ease-out">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black"></div>

          {/* Animated particles effect */}
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
        <div className="relative z-10 h-full flex flex-col p-2 sm:p-4 lg:p-6">
          {/* Main card area */}
          <div className="flex-1 flex items-center justify-center relative overflow-visible py-4 sm:py-6">
            <div className="relative w-full h-full perspective-1000">
              {extendedItems.map((item: MenuItem, index: number) => {
                let transform = "";
                let opacity = 0;
                let scale = 0.75;
                let zIndex = 0;
                let blur = "blur(6px)";
                let rotateY = 0;
                let translateZ = 0;
                let brightness = 0.7;

                if (index === currentIndex) {
                  // Current card - center stage
                  transform = "translateX(0px)";
                  opacity = 1;
                  scale = 1.05;
                  zIndex = 30;
                  blur = "blur(0px)";
                  rotateY = 0;
                  translateZ = 0;
                  brightness = 1;
                } else if (
                  index === currentIndex + 1 ||
                  (currentIndex === extendedItems.length - 1 && index === 0)
                ) {
                  // Next card - mobile: smaller offset, desktop: larger offset
                  transform = "translateX(180px) sm:translateX(280px)";
                  opacity = isTransitioning ? 0.9 : 0.6;
                  scale = isTransitioning ? 0.98 : 0.88;
                  zIndex = 20;
                  blur = isTransitioning ? "blur(0.5px)" : "blur(2px)";
                  rotateY = isTransitioning ? -20 : -35;
                  translateZ = -100;
                  brightness = isTransitioning ? 0.95 : 0.8;
                } else if (
                  index === currentIndex - 1 ||
                  (currentIndex === 0 && index === extendedItems.length - 1)
                ) {
                  // Previous card
                  transform = "translateX(-180px) sm:translateX(-280px)";
                  opacity = isTransitioning ? 0.3 : 0.6;
                  scale = isTransitioning ? 0.85 : 0.88;
                  zIndex = 15;
                  blur = isTransitioning ? "blur(3px)" : "blur(2px)";
                  rotateY = isTransitioning ? 35 : 35;
                  translateZ = -150;
                  brightness = isTransitioning ? 0.6 : 0.8;
                } else if (
                  index === currentIndex + 2 ||
                  (currentIndex >= extendedItems.length - 2 &&
                    ((currentIndex === extendedItems.length - 2 &&
                      index === 0) ||
                      (currentIndex === extendedItems.length - 1 &&
                        index === 1)))
                ) {
                  // Far next card - hidden on mobile
                  transform = "translateX(320px)";
                  opacity = 0.3;
                  scale = 0.8;
                  zIndex = 10;
                  blur = "blur(4px)";
                  rotateY = -45;
                  translateZ = -200;
                  brightness = 0.6;
                } else if (
                  index === currentIndex - 2 ||
                  (currentIndex <= 1 &&
                    ((currentIndex === 1 &&
                      index === extendedItems.length - 1) ||
                      (currentIndex === 0 &&
                        index === extendedItems.length - 2)))
                ) {
                  // Far previous card - hidden on mobile
                  transform = "translateX(-400px)";
                  opacity = 0.1;
                  scale = 0.7;
                  zIndex = 5;
                  blur = "blur(6px)";
                  rotateY = 60;
                  translateZ = -300;
                  brightness = 0.4;
                }

                return (
                  <div
                    key={item.id}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                               transition-all duration-1000 ease-in-out cursor-pointer
                               md:block"
                    style={{
                      transform: `translate(-50%, -50%) ${transform.replace("translateX(", "translateX(").replace("sm:", "")} scale(${scale}) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                      opacity,
                      zIndex,
                      filter: `${blur} brightness(${brightness})`,
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => goToSlide(index)}
                  >
                    {/* Responsive card container */}
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
                        width: "min(calc(100vw - 120px), 350px)",
                        height: "calc(100% - 40px)",
                        minWidth: "280px",
                        minHeight: "380px",
                        maxWidth: "380px",
                        maxHeight: "500px",
                      }}
                    >
                      {/* Enhanced gradient border */}
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-500 to-red-500 
                                       rounded-2xl opacity-60 group-hover:opacity-90 transition-all duration-500 ${
                                         index === currentIndex
                                           ? "animate-pulse shadow-lg shadow-amber-500/30"
                                           : ""
                                       }`}
                      ></div>

                      {/* Main card */}
                      <div
                        className={`relative bg-gradient-to-br from-gray-900 to-gray-800 
                                       rounded-2xl overflow-hidden h-full border border-gray-700 
                                       group-hover:border-gray-600 transition-all duration-500 shadow-2xl ${
                                         index === currentIndex
                                           ? "shadow-amber-500/20"
                                           : ""
                                       }`}
                      >
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover transition-all duration-700 
                                       group-hover:scale-115 group-hover:brightness-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                          {/* Content overlay - responsive */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 space-y-2 sm:space-y-4">
                            <div className="space-y-1 sm:space-y-2">
                              <h3
                                className="text-lg sm:text-xl font-bold text-white 
                                             group-hover:text-transparent group-hover:bg-gradient-to-r 
                                             group-hover:from-white group-hover:via-gray-100 
                                             group-hover:to-gray-300 group-hover:bg-clip-text 
                                             transition-all duration-500 leading-tight"
                              >
                                {item.name}
                              </h3>
                              <p
                                className="text-gray-300 text-sm leading-relaxed 
                                            group-hover:text-gray-200 transition-colors duration-300
                                            line-clamp-2 sm:line-clamp-3"
                              >
                                {item.description}
                              </p>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-300">
                              <div className="flex items-center gap-1">
                                <img
                                  src="/images/dirhams.svg"
                                  alt="Dirhams"
                                  className="w-4 h-4 dirhams-gold"
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                                <span className="dirhams-gold font-semibold text-base">
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

          {/* Enhanced dots indicator */}
          <div className="flex justify-center gap-2 mt-2 sm:mt-4 pb-2">
            {featuredItems.map((_, index) => {
              const isActive = currentIndex % totalItems === index;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(totalItems + index)}
                  className={`rounded-full transition-all duration-500 ${
                    isActive
                      ? "bg-gradient-to-r from-red-500 to-amber-500 w-6 sm:w-8 h-2 shadow-lg shadow-current/50"
                      : "bg-white/30 hover:bg-white/50 w-2 h-2"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-4 mt-6 sm:mt-8">
        <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                     text-white hover:bg-white/15 hover:border-white/20 disabled:opacity-50 
                     transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 
                     text-white hover:bg-white/15 hover:border-white/20 disabled:opacity-50 
                     transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </>
  );
};

export default TickerCarousel;
