import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LanternIcon, ThaiPatternIcon, Logo } from '../ui';
import { useScrollDirection } from '../../hooks/useScrollDirection';

interface NavigationProps {
  className?: string;
  showSpacer?: boolean;
}

export const Navigation = ({ className = '', showSpacer = true }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/#about-us' },
    
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
          ${scrollDirection === 'top'
            ? '!bg-transparent'
            : 'bg-black/80 backdrop-blur-md shadow-thai'
          }
          ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}
          ${className}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Logo size="md" linkTo="/" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`
                    relative font-thai-sans font-medium transition-all duration-200
                    hover:text-thai-gold group
                    ${isActive(item.path)
                      ? 'text-thai-gold'
                      : 'text-white hover:text-thai-gold'
                    }
                  `}
                >
                  {item.name}
                  {/* Active indicator */}
                  <span
                    className={`
                      absolute -bottom-1 left-0 h-0.5 bg-thai-gold transition-all duration-200
                      ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}
                    `}
                  />
                </Link>
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
              <Link
                key={item.path}
                to={item.path}
                onClick={(e) => {
                  handleLinkClick(e, item.path);
                  setIsMobileMenuOpen(false);
                }}
                className={`
                  block px-4 py-3 rounded-lg font-thai-sans font-medium transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-thai-gold/20 text-thai-gold border-l-4 border-thai-gold'
                    : 'text-white hover:bg-white/10 hover:text-thai-gold'
                  }
                `}
              >
                <div className="flex items-center space-x-3">
                  {item.name === 'Home' && <LanternIcon size={20} />}
                  {item.name === 'Menu' && <ThaiPatternIcon size={20} />}
                  {item.name === 'About Us' && <LanternIcon size={20} />}
                  {item.name === 'Contact' && <ThaiPatternIcon size={20} />}
                  {item.name === 'Reservations' && <LanternIcon size={20} />}
                  <span>{item.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed nav */}
      {showSpacer && <div className="h-16 lg:h-20" />}
    </>
  );
};