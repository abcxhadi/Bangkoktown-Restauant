import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl font-thai-serif font-bold text-white ${className}`}>
    {children}
  </h1>
);

export const Heading2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-thai-serif font-semibold text-white ${className}`}>
    {children}
  </h2>
);

export const Heading3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`text-2xl md:text-3xl font-thai-serif font-semibold text-white ${className}`}>
    {children}
  </h3>
);

export const Heading4: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h4 className={`text-xl md:text-2xl font-thai-serif font-medium text-white ${className}`}>
    {children}
  </h4>
);

export const BodyText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-base md:text-lg font-thai-sans text-white leading-relaxed ${className}`}>
    {children}
  </p>
);

export const SmallText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`text-sm font-thai-sans text-white ${className}`}>
    {children}
  </p>
);

export const GradientText: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <span className={`thai-text-gradient ${className}`}>
    {children}
  </span>
);