import { useNavigate } from "react-router-dom";
import { Heading2, Heading3, BodyText } from ".";
import { NetflixButton } from "./NetflixButton";

// Premium Locations Section
export const PremiumLocationsSection = () => {
  const navigate = useNavigate();

  const locations = [
    {
      name: "Dubai",
      tag: "Doha Street",
      phone: "04 239 7242",
      image: "/images/dubai.jpg",
    },
    {
      name: "Majaz Qasba",
      tag: "Qasba Street",
      phone: "06 556 8282",
      image: "/images/al_majaz_waterfront.jpg",
    },
    {
      name: "Zawaya Walk",
      tag: "Zawaya Walk",
      phone: "06 546 8383",
      image: "/images/zawaya.jpg",
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-20">
        <h2 className="netflix-heading text-5xl lg:text-6xl mb-8 text-white">
          Our Locations
        </h2>
        <p className="netflix-body text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Find us in various locations across the UAE, each offering a unique ambiance and the same exceptional quality you love.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl h-80 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              {/* Dimmed Background Image */}
              <div className="absolute inset-0">
                <img
                  src={location.image}
                  alt={`${location.name} location`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="text-center">
                  <h3 className="netflix-subheading text-3xl text-white mb-2 drop-shadow-lg">
                    {location.name}
                  </h3>

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
            <h3 className="netflix-subheading text-3xl lg:text-4xl mb-6 text-white">
              Ready to Taste Authentic Thailand?
            </h3>
            <p className="netflix-body text-gray-300 text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Choose your preferred location and join thousands of satisfied
              customers who have made us their favorite Thai destination.
            </p>
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
    </section>
  );
};