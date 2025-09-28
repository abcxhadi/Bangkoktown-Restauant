import { Logo } from "../ui";
import { FacebookIcon, InstagramIcon, BackToTopIcon } from "../../assets/icons";

export const Footer = () => {
  const handleBackToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth" });
  };



  return (
    <footer className="bg-gradient-to-br from-company-neutral via-gray-800 to-company-neutral text-company-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-company-accent/20 to-company-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-company-primary/10 to-company-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Subtle pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f3b742' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-company-accent/50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Logo and Social Section */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start space-y-8">
            <div className="group">
              <Logo size="lg" />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/bangkoktown/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-company-secondary/5 backdrop-blur-sm rounded-full border border-company-secondary/10 hover:border-company-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-company-accent/20"
              >
                <FacebookIcon className="w-5 h-5 text-company-secondary/70 group-hover:text-company-accent transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-company-accent/20 to-company-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
              <a
                href="https://www.instagram.com/bangkoktownuae/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-company-secondary/5 backdrop-blur-sm rounded-full border border-company-secondary/10 hover:border-company-accent/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-company-accent/20"
              >
                <InstagramIcon className="w-5 h-5 text-company-secondary/70 group-hover:text-company-accent transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-company-accent/20 to-company-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              </a>
            </div>

            {/* Tagline */}
            <p className="text-company-secondary/60 text-center lg:text-left max-w-sm leading-relaxed">
              Authentic Thai cuisine crafted with passion, served with tradition
              across the UAE.
            </p>
          </div>



          {/* Opening Times Section */}
          <div className="lg:col-span-8 flex flex-col items-center lg:items-end">
            <div className="text-center lg:text-right w-full">
              <h3 className="netflix-subheading text-xl mb-4 bg-gradient-to-r from-company-accent to-company-primary bg-clip-text text-transparent">
                Opening Times
              </h3>
              <div className="inline-flex items-center justify-center lg:justify-end w-full">
                <div className="bg-company-secondary/5 backdrop-blur-sm rounded-xl border border-company-secondary/10 p-4 min-w-[200px]">
                  <div className="flex items-center justify-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-company-accent to-company-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-company-secondary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="text-xs font-semibold text-company-accent tracking-wider uppercase">
                      Daily
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-company-secondary">
                      <span className="text-lg font-bold">12:00 PM</span>
                      <span className="text-company-secondary/40">-</span>
                      <span className="text-lg font-bold">12:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 pt-8 border-t border-company-secondary/10">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-company-secondary/60">
              <p>
                &copy; {new Date().getFullYear()} Bangkok Town. All Rights
                Reserved.
              </p>
              <div className="hidden sm:block w-px h-4 bg-company-secondary/20"></div>
              <p className="text-sm">Made with ❤️ in the UAE</p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={handleBackToTop}
              className="group relative p-4 bg-gradient-to-r from-company-accent to-company-primary rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-company-accent/30 focus:outline-none focus:ring-2 focus:ring-company-accent/50 focus:ring-offset-2 focus:ring-offset-company-neutral"
            >
              <BackToTopIcon className="w-5 h-5 text-company-secondary group-hover:animate-bounce" />
              <div className="absolute inset-0 rounded-full bg-company-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
