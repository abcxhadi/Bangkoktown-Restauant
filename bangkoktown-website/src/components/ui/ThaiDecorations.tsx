import React from 'react';

interface DecorationProps {
  className?: string;
}

export const ThaiDivider: React.FC<DecorationProps> = ({ className = '' }) => (
  <div className={`flex items-center justify-center my-8 ${className}`}>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-thai-gold to-transparent"></div>
    <div className="mx-4">
      <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
        <path 
          d="M16 2L18 6L22 4L20 8L24 10L20 12L22 16L18 14L16 18L14 14L10 16L12 12L8 10L12 8L10 4L14 6L16 2Z" 
          fill="#FFD700"
        />
      </svg>
    </div>
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-thai-gold to-transparent"></div>
  </div>
);

export const ThaiCornerDecoration: React.FC<DecorationProps> = ({ className = '' }) => (
  <div className={`absolute ${className}`}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <path 
        d="M0 0L20 0C20 0 30 10 30 30L30 60L0 60L0 40C0 40 10 30 20 30C10 30 0 20 0 0Z" 
        fill="#FFD700" 
        fillOpacity="0.3"
      />
      <path 
        d="M5 5L15 5C15 5 25 15 25 25L25 55L5 55L5 35C5 35 15 25 15 25C15 25 5 15 5 5Z" 
        stroke="#8B0000" 
        strokeWidth="1" 
        fill="none"
      />
    </svg>
  </div>
);



export const ThaiPattern: React.FC<DecorationProps> = ({ className = '' }) => (
  <div className={`opacity-10 ${className}`}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <pattern id="thaiPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
        <path 
          d="M10 2L11 6L15 5L13 9L17 10L13 11L15 15L11 14L10 18L9 14L5 15L7 11L3 10L7 9L5 5L9 6L10 2Z" 
          fill="#8B0000"
        />
      </pattern>
      <rect width="100" height="100" fill="url(#thaiPattern)"/>
    </svg>
  </div>
);