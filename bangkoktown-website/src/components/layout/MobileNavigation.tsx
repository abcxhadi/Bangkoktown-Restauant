import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Logo } from '../ui';
import { useScrollDirection } from '../../hooks/useScrollDirection';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/#about-us' },
  
];

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-6 h-6 flex flex-col justify-around items-center">
    <span
      className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
    ></span>
    <span
      className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
    ></span>
    <span
      className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
    ></span>
  </div>
);

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const scrollDirection = useScrollDirection();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

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
    setIsOpen(false);
  };

  return (
    <>
      <div className={`fixed top-4 left-4 z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-20' : 'translate-y-0'}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`p-3 rounded-full shadow-lg transition-colors duration-300 ${scrollDirection === 'top' ? '!bg-transparent' : 'bg-black/80 backdrop-blur-md'}`}
        >
          <HamburgerIcon isOpen={isOpen} />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`fixed top-0 left-0 h-full w-3/4 max-w-sm bg-thai-cream/70 backdrop-blur-md shadow-2xl z-50 p-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
          >
            <div className="flex justify-between items-center mb-12">
              <Logo />
              <button onClick={() => setIsOpen(false)} className="p-2">
                <HamburgerIcon isOpen={isOpen} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleLinkClick(e, link.path)}
                  className={({ isActive }) =>
                    `text-2xl font-semibold transition-colors py-2 block 
                    ${isActive ? 'text-thai-gold' : 'text-white/80 hover:text-white'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
};