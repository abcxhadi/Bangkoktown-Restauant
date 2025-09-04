import { useState, useEffect, useRef } from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const currentScrollDirection = scrollY > lastScrollY.current ? "down" : "up";

      if (
        currentScrollDirection !== scrollDirection &&
        (Math.abs(scrollY - lastScrollY.current) > 10)
      ) {
        setScrollDirection(currentScrollDirection);
      }

      if (scrollY === 0) {
        setScrollDirection("top");
      }

      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []);

  return scrollDirection;
};
