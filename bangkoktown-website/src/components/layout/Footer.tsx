
import { Logo } from '../ui';
import { FacebookIcon, InstagramIcon, BackToTopIcon } from '../../assets/icons';

export const Footer = () => {
  const handleBackToTop = () => {
    document.body.scrollIntoView({ behavior: 'smooth' });
  };

  const locations = [
    {
      name: "Bangkok Town (Behind Amphitheatre, Majaz 3, sharjah)",
      phone: "06 556 8282",
    },
    {
      name: "Bangkok Town (Zawaya Walk , Sharjah)",
      phone: "06 546 8383",
    },
    {
      name: "Bangkok Town (Al Manar Hotel , Abu Hail ,Dubai)",
      phone: "04 239 7242",
    }
  ];

  return (
    <footer className="bg-company-neutral text-company-secondary relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3b742' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start col-span-1">
            <Logo size="lg" />
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/bangkoktownuae/" target="_blank" rel="noopener noreferrer" className="text-company-secondary/70 hover:text-thai-gold transition-colors">
                <FacebookIcon size={28} />
              </a>
              <a href="https://www.instagram.com/bangkoktownuae/" target="_blank" rel="noopener noreferrer" className="text-company-secondary/70 hover:text-thai-gold transition-colors">
                <InstagramIcon size={28} />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="col-span-2">
            <h3 className="netflix-subheading text-xl mb-4">Our Locations</h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index}>
                  <p className="font-semibold text-lg">{location.name}</p>
                  <p className="text-company-secondary/70">{location.phone}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Times */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="netflix-subheading text-xl mb-4">Opening Times</h3>
            <p className="text-lg">12:00 PM - 12:00 AM</p>
          </div>
        </div>

        {/* Copyright and Back to Top */}
        <div className="mt-16 pt-8 border-t border-company-secondary/20 flex justify-between items-center">
          <p className="text-sm text-company-secondary/70">&copy; {new Date().getFullYear()} Bangkok Town. All Rights Reserved.</p>
          <button onClick={handleBackToTop} className="bg-thai-gold/80 hover:bg-thai-gold text-company-neutral rounded-full p-3 transition-all duration-300 transform hover:scale-110">
            <BackToTopIcon size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
