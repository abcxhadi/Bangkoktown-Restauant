
import { useRef, useEffect, useState, useCallback } from 'react';

export const useAutoScroll = (isHovered: boolean) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const animationFrameId = useRef<number | undefined>(undefined);

  const stopScrolling = useCallback(() => {
    setIsScrolling(false);
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  }, []);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const animateScroll = () => {
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth) {
        scrollElement.scrollLeft = 0;
      } else {
        scrollElement.scrollLeft += 2.5;
      }
      animationFrameId.current = requestAnimationFrame(animateScroll);
    };

    if (isScrolling && !isHovered) {
      animationFrameId.current = requestAnimationFrame(animateScroll);
    } else {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isScrolling, isHovered]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      stopScrolling();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      stopScrolling();
    }
  };

  return { scrollRef, stopScrolling, scrollLeft, scrollRight };
};
