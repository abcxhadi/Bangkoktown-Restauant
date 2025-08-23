import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

export const LanternIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <span 
    style={{ fontSize: `${size}px`, lineHeight: 1 }} 
    className={className}
  >
    🏮
  </span>
);

export const ThaiPatternIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <img 
    src="/images/ornament-pattern.png"
    alt="Thai Ornament Pattern"
    width={size} 
    height={size} 
    className={className}
    onError={(e) => {
      // Fallback to emoji if image fails to load
      const target = e.target as HTMLImageElement;
      target.outerHTML = `<span style="font-size: ${size}px; line-height: 1;" class="${className}">🌸</span>`;
    }}
  />
);

export const SpiceIcon: React.FC<IconProps> = ({ 
  size = 16, 
  className = '', 
  color = '#FF6B35' 
}) => (
  <span 
    style={{ fontSize: `${size}px`, lineHeight: 1 }} 
    className={className}
  >
    🌶️
  </span>
);

export const VegIcon: React.FC<IconProps> = ({ 
  size = 16, 
  className = '', 
  color = '#2D5016' 
}) => (
  <span 
    style={{ fontSize: `${size}px`, lineHeight: 1 }} 
    className={className}
  >
    🥬
  </span>
);

// New Thai-themed icons using images and emojis
export const ThaiCrownIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <span 
    style={{ fontSize: `${size}px`, lineHeight: 1 }} 
    className={className}
  >
    👑
  </span>
);

export const ThaiBowlIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <img 
    src="/images/thai-bowl.png"
    alt="Thai Bowl"
    width={size} 
    height={size} 
    className={className}
    onError={(e) => {
      // Fallback to emoji if image fails to load
      const target = e.target as HTMLImageElement;
      target.outerHTML = `<span style="font-size: ${size}px; line-height: 1;" class="${className}">🍜</span>`;
    }}
  />
);

export const ChopsticksIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <img 
    src="/images/chopsticks.png"
    alt="Chopsticks"
    width={size} 
    height={size} 
    className={className}
    onError={(e) => {
      // Fallback to emoji if image fails to load
      const target = e.target as HTMLImageElement;
      target.outerHTML = `<span style="font-size: ${size}px; line-height: 1;" class="${className}">🥢</span>`;
    }}
  />
);

export const LotusIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <img 
    src="/images/lotus.png"
    alt="Lotus Flower"
    width={size} 
    height={size} 
    className={className}
    onError={(e) => {
      // Fallback to emoji if image fails to load
      const target = e.target as HTMLImageElement;
      target.outerHTML = `<span style="font-size: ${size}px; line-height: 1;" class="${className}">🌺</span>`;
    }}
  />
);

export const ThaiTempleIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <span 
    style={{ fontSize: `${size}px`, lineHeight: 1 }} 
    className={className}
  >
    🏛️
  </span>
);

export const ThaiStarIcon: React.FC<IconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => (
  <img 
    src="/images/star-pattern.png"
    alt="Thai Star Pattern"
    width={size} 
    height={size} 
    className={className}
    onError={(e) => {
      // Fallback to emoji if image fails to load
      const target = e.target as HTMLImageElement;
      target.outerHTML = `<span style="font-size: ${size}px; line-height: 1;" class="${className}">⭐</span>`;
    }}
  />
);