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
      "bg-white text-black hover:bg-gray-200 hover:shadow-2xl hover:shadow-white/25",
    secondary:
      "bg-gray-600/80 text-white hover:bg-gray-500 hover:shadow-2xl hover:shadow-gray-600/25",
    outline:
      "border-2 border-white/60 text-white bg-black/20 backdrop-blur-sm hover:border-white hover:bg-white/10 hover:shadow-2xl hover:shadow-white/10",
  };

  const sizes = {
    large: "px-12 py-4 text-lg rounded-xl",
    medium: "px-8 py-3 text-base rounded-lg",
    small: "px-6 py-2 text-sm rounded-lg",
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