import { useState, useEffect } from 'react';
import { LanternIcon, ThaiPatternIcon } from '../ui';

interface SimpleNavigationProps {
  className?: string;
}

export const SimpleNavigation = ({ className = '' }: SimpleNavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Reservations', href: '#reservations' }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${isScrolled 
            ? 'bg-thai-red/90 backdrop-blur-md shadow-thai' 
            : 'bg-transparent'
          }
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <a 
              href="#home" 
              className="flex items-center space-x-2 group"
            >
              <LanternIcon 
                size={32} 
                color="#FFD700" 
                className="group-hover:animate-float transition-all duration-200" 
              />
              <span className="font-thai-serif text-xl lg:text-2xl font-bold text-white">
                Bangkok Town
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="
                    relative font-thai-sans font-medium transition-all duration-200
                    text-white hover:text-thai-gold group
                  "
                >
                  {item.name}
                  {/* Hover indicator */}
                  <span 
                    className="
                      absolute -bottom-1 left-0 h-0.5 bg-thai-gold transition-all duration-200
                      w-0 group-hover:w-full
                    "
                  />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 relative">
                <span 
                  className={`
                    absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-200
                    ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}
                  `}
                />
                <span 
                  className={`
                    absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-200
                    ${isMobileMenuOpen ? 'opacity-0' : ''}
                  `}
                />
                <span 
                  className={`
                    absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-200
                    ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}
                  `}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`
            md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden fixed top-16 lg:top-20 left-0 right-0 bg-thai-red/95 backdrop-blur-md
            border-t border-thai-gold/20 transition-all duration-300 ease-in-out
            ${isMobileMenuOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-4 pointer-events-none'
            }
          `}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="
                  block px-4 py-3 rounded-lg font-thai-sans font-medium transition-all duration-200
                  text-white hover:bg-white/10 hover:text-thai-gold
                "
              >
                <div className="flex items-center space-x-3">
                  {item.name === 'Home' && <LanternIcon size={20} />}
                  {item.name === 'Menu' && <ThaiPatternIcon size={20} />}
                  {item.name === 'About Us' && <LanternIcon size={20} />}
                  {item.name === 'Contact' && <ThaiPatternIcon size={20} />}
                  {item.name === 'Reservations' && <LanternIcon size={20} />}
                  <span>{item.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation - Apple-like curved design */}
      <nav 
        className="
          fixed bottom-0 left-0 right-0 z-50 md:hidden
          bg-thai-red/95 backdrop-blur-md border-t border-thai-gold/20
        "
        style={{
          borderRadius: '20px 20px 0 0',
          boxShadow: '0 -4px 20px rgba(139, 0, 0, 0.3)'
        }}
      >
        {/* Curved top decoration */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-3 bg-thai-gold rounded-b-full opacity-60" />
        </div>

        <div className="px-4 py-3">
          <div className="flex justify-around items-center">
            {navigationItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  flex flex-col items-center space-y-1 px-3 py-2 rounded-xl
                  transition-all duration-200 min-w-0 flex-1
                  text-white/80 hover:text-thai-gold hover:bg-white/5
                "
              >
                <div className="transition-all duration-200">
                  {item.name === 'Home' && <LanternIcon size={24} />}
                  {item.name === 'Menu' && <ThaiPatternIcon size={24} />}
                  {item.name === 'About Us' && <LanternIcon size={24} />}
                  {item.name === 'Contact' && <ThaiPatternIcon size={24} />}
                  {item.name === 'Reservations' && <LanternIcon size={24} />}
                </div>
                <span className="text-xs font-thai-sans font-medium truncate">
                  {item.name === 'About Us' ? 'About' : item.name === 'Reservations' ? 'Reserve' : item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom safe area for devices with home indicator */}
        <div className="h-safe-area-inset-bottom bg-thai-red/95" />
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      <div className="h-16 lg:h-20" />
      {/* Mobile bottom nav spacer */}
      <div className="h-20 md:hidden" />
    </>
  );
};