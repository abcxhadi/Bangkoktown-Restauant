import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';

interface ResponsiveNavigationProps {
  className?: string;
}

export const ResponsiveNavigation = ({ 
  className = '' 
}: ResponsiveNavigationProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Desktop Navigation - always rendered but hidden on mobile */}
      <div className="hidden md:block">
        <Navigation className={className} showSpacer={false} />
      </div>

      {/* Mobile Navigation - always rendered but hidden on desktop */}
      <div className="block md:hidden">
        <MobileNavigation />
        {/* Add bottom padding to prevent content from hiding behind mobile nav - only on non-home pages */}
        
      </div>
    </>
  );
};