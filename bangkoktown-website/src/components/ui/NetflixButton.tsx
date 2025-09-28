import React from 'react';

// Netflix-style Button Component
interface NetflixButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  size?: "large" | "medium" | "small";
  icon?: string;
}

export const NetflixButton: React.FC<NetflixButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  size = "large",
  icon,
}) => {
  const baseClasses =
    "group relative overflow-hidden font-semibold tracking-wide transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white/20";

  const variants = {
    primary:
      "bg-company-primary text-company-secondary hover:bg-company-primary/80 hover:shadow-lg hover:shadow-company-primary/50",
    secondary:
      "bg-company-neutral/50 text-company-secondary backdrop-blur-sm border border-company-secondary/20 hover:bg-company-secondary/10 hover:border-company-secondary/40",
    outline:
      "border-2 border-company-secondary/60 text-company-secondary bg-company-neutral/20 backdrop-blur-sm hover:border-company-secondary hover:bg-company-secondary/10 hover:shadow-2xl hover:shadow-company-secondary/10",
  };

  const sizes = {
    large: "px-8 md:px-12 py-3 md:py-4 text-xs md:text-lg rounded-xl",
    medium: "px-6 md:px-8 py-2 md:py-3 text-xs md:text-base rounded-lg",
    small: "px-4 md:px-6 py-1.5 md:py-2 text-xxs md:text-sm rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      <div className="relative z-10 flex items-center justify-center gap-3">
        {icon && (
          <span className="text-xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </div>
    </button>
  );
};