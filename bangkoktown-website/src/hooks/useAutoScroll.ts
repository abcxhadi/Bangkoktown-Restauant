import { useRef, useEffect } from 'react';

export const useAutoScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const centerScrollLeft = Math.max(
      (scrollElement.scrollWidth - scrollElement.clientWidth) / 2,
      0
    );

    const frameId = requestAnimationFrame(() => {
      scrollElement.scrollLeft = centerScrollLeft;
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const scrollByPercentage = (percentage: number) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * percentage;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => scrollByPercentage(-0.8);
  const scrollRight = () => scrollByPercentage(0.8);

  return { scrollRef, scrollLeft, scrollRight };
};
