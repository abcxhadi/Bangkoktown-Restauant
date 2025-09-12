
import { useRef, useEffect, useCallback } from 'react';

export const useAutoScroll = (isHovered: boolean) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | null>(null);
  const scrollSpeed = 0.05; // Adjust for faster or slower scrolling

  const smoothScroll = useCallback(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const animate = (time: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = time;
      }

      const elapsedTime = time - startTimeRef.current;
      const scrollOffset = Math.sin(elapsedTime * scrollSpeed * 0.001) * 0.5 + 0.5;

      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollElement.scrollLeft = 0;
        startTimeRef.current = null; // Reset for seamless loop
      } else {
        scrollElement.scrollLeft += scrollOffset;
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);
  }, [scrollSpeed]);

  const stopScrolling = useCallback(() => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = undefined;
      startTimeRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!isHovered) {
      smoothScroll();
    } else {
      stopScrolling();
    }

    return () => stopScrolling();
  }, [isHovered, smoothScroll, stopScrolling]);

  const scrollByPercentage = (percentage: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * percentage;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      stopScrolling();
    }
  };

  const scrollLeft = () => scrollByPercentage(-0.8);
  const scrollRight = () => scrollByPercentage(0.8);

  return { scrollRef, stopScrolling, scrollLeft, scrollRight };
};
