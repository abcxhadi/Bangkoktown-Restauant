import { Link } from 'react-router-dom';


interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showText?: boolean;
  linkTo?: string | null;
}

export const Logo = ({ 
  size = 'md', 
  className = '', 
  showText = true,
  linkTo = '/'
}: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl lg:text-2xl',
    lg: 'text-2xl lg:text-3xl',
    xl: 'text-3xl lg:text-4xl'
  };

  const LogoContent = () => (
    <div className={`flex items-center space-x-3 group ${className}`}>
      {/* Logo Image with Curved Borders */}
      <div className={`
        ${sizeClasses[size]} 
        rounded-full overflow-hidden 
        border-2 border-thai-gold/50
        ring-4 ring-thai-gold/30 
        group-hover:ring-thai-gold/60 
        transition-all duration-300 
        group-hover:scale-105
        shadow-lg
        bg-gradient-to-br from-purple-300 to-purple-400
      `}>
        <img
          src={'/logo.png'}
          alt="Bangkok Town Thai Restaurant"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient background with initials if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
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
          <span className={`
            font-thai-serif ${textSizeClasses[size]} font-bold text-white 
            group-hover:text-thai-gold transition-colors duration-200
          `}>
            Bangkok Town
          </span>
          {size !== 'sm' && (
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