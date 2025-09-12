import { useNavigate } from "react-router-dom";
import { Heading2, Heading3, BodyText } from ".";
import { NetflixButton } from "./NetflixButton";

// Premium Locations Section
export const PremiumLocationsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="text-center mb-20">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600/20 to-purple-600/20 backdrop-blur-xl rounded-full border border-violet-500/30 mb-12">
          <div className="text-3xl animate-bounce">📍</div>
          <span className="text-sm font-semibold text-violet-400 tracking-wider uppercase">
            Our Locations
          </span>
        </div>

        <Heading2 className="text-5xl lg:text-6xl mb-8 text-white font-black tracking-tight">
          Visit Us Across the UAE
        </Heading2>

        <BodyText className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
          Experience authentic Thai cuisine at any of our beautifully designed
          locations, each offering a unique ambiance and the same exceptional
          quality you love.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            name: "Dubai",
            tag: "Doha Street",
            phone: "04 239 7242",
          },
          {
            name: "Majaz Qasba",
            tag: "Qasba Street",
            phone: "06 556 8282",
          },
          {
            name: "Zawaya Walk",
            tag: "Zawaya Walk",
            phone: "06 546 8383",
          },
        ].map((location, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl h-80 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              {/* Dimmed Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/images/logo.png"
                  alt={`${location.name} location`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8">
                {/* Location Badge */}
                <div className="self-start">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                    <span className="text-xs font-medium text-white/90 tracking-wider uppercase">
                      {location.tag}
                    </span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="text-center">
                  <Heading3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {location.name}
                  </Heading3>

                  <div className="text-white/80 text-sm mb-6 flex items-center justify-center gap-2">
                    <span>📞</span>
                    <span>{location.phone}</span>
                  </div>

                  <NetflixButton
                    variant="outline"
                    onClick={() => navigate("/contact")}
                    size="small"
                    className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                  >
                    <span className="mr-2">📍</span>
                    Get Directions
                  </NetflixButton>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium CTA Section - Keeping as requested */}
      <div className="mt-24">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/40 via-amber-600/40 to-red-600/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl p-16 rounded-3xl border border-gray-700/50 text-center">
            <Heading3 className="text-3xl lg:text-4xl mb-6 text-white font-bold">
              Ready to Taste Authentic Thailand?
            </Heading3>
            <BodyText className="text-gray-300 text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Choose your preferred location and join thousands of satisfied
              customers who have made us their favorite Thai destination.
            </BodyText>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NetflixButton
                variant="primary"
                onClick={() => navigate("/reservations")}
                icon="🍽️"
              >
                Book Your Experience
              </NetflixButton>
              <NetflixButton
                variant="outline"
                onClick={() => navigate("/contact")}
                icon="📍"
              >
                Find Us
              </NetflixButton>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-24 text-center">
        <Heading3 className="text-2xl lg:text-3xl text-white mb-8 font-bold">
          Follow Us
        </Heading3>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com/bangkoktownuae/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-amber-400 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/bangkoktown/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

