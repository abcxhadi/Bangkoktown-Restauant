import React, { useState, useEffect, useRef } from 'react';
import { getFeaturedItems } from '../../data/menuData';
import './FeaturedDishesCarousel.css';

import '../../currency.css';

export const FeaturedDishesCarousel: React.FC = () => {
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
          {featuredItems.map((item) => (
            <div
              key={item.id}
              className="dish-card"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="dish-overlay">
                <h3 className="dish-name">{item.name}</h3>
                <p className="dish-description">{item.description}</p>
                <div className="dish-price flex items-center">
                  <img src="/images/dirhams.svg" alt="Dirhams" className="w-6 h-6 mr-1 dirhams-gold" />
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {featuredItems.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
