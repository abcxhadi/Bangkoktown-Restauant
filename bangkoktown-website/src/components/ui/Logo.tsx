import { Link } from "react-router-dom";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  className?: string;
  showText?: boolean;
  linkTo?: string | null;
  noBorder?: boolean;
  withBackground?: boolean;
}

export const Logo = ({
  size = "md",
  className = "",
  showText = true,
  linkTo = "/",
  noBorder = false,
  withBackground = false,
}: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
    xxl: "w-24 h-24",
    xxxl: "w-[300px] h-[95px] sm:w-[400px] sm:h-[127px] md:w-[600px] md:h-[190px]",
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl lg:text-2xl",
    lg: "text-2xl lg:text-3xl",
    xl: "text-3xl lg:text-4xl",
    xxl: "text-4xl lg:text-5xl",
    xxxl: "text-5xl lg:text-6xl",
  };

  const borderClasses = !noBorder
    ? "border-2 border-thai-gold/50 ring-4 ring-thai-gold/30 group-hover:ring-thai-gold/60"
    : "";

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Logo Image with Curved Borders */}
      <div
        className={`
        ${sizeClasses[size]} 
        overflow-hidden 
        ${borderClasses}
        ${withBackground && "bg-gradient-to-br from-purple-300 to-purple-400"}
        transition-all duration-300 
        group-hover:scale-105
        
      `}
      >
        <img
          src={"/images/logo.png"}
          alt="Bangkok Town Thai Restaurant"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient background with initials if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const parent = target.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-300 to-purple-400 text-white font-bold text-sm">
                  BT
                </div>
              `;
            }
          }}
        />
      </div>

      {/* Restaurant Name */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`
            font-thai-serif ${textSizeClasses[size]} font-bold text-white 
            group-hover:text-thai-gold transition-colors duration-200
          `}
          >
            Bangkok Town
          </span>
          {size !== "sm" && (
            <span className="text-xs text-white/80 font-thai-sans tracking-wider">
              THAI RESTAURANT
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (linkTo) {
    return (
      <Link to={linkTo} className="block">
        <LogoContent />
      </Link>
    );
  }

  return <LogoContent />;
};
