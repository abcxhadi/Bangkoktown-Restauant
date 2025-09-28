import { useNavigate } from "react-router-dom";
import { Heading2, Heading3, BodyText } from ".";
import { NetflixButton } from "./NetflixButton";

// Premium Locations Section
export const PremiumLocationsSection = () => {
  const navigate = useNavigate();

  const locations = [
    {
      name: "Bangkok Town (Behind Amphitheatre, Majaz 3, sharjah)",
      tag: "Qasba Street",
      phone: "06 556 8282",
      image: "/images/al_majaz_waterfront.jpg",
      mapUrl: "https://maps.google.com/?cid=18060991473853659174"
    },
    {
      name: "Bangkok Town (Zawaya Walk , Sharjah)",
      tag: "Zawaya Walk",
      phone: "06 546 8383",
      image: "/images/zawaya.jpg",
      mapUrl: "https://maps.google.com/?cid=14419931823407026958"
    },
    {
      name: "Bangkok Town (Al Manar Hotel , Abu Hail ,Dubai)",
      tag: "Doha Street",
      phone: "04 239 7242",
      image: "/images/dubai.jpg",
      mapUrl: "https://maps.google.com/?cid=6000500049375453234"
    }
  ];

  return (
    <section id="locations" className="py-24">
      <div className="text-center mb-20">
        <h2 className="netflix-heading text-4xl lg:text-5xl mb-8 text-company-secondary">
          Our Locations
        </h2>
        <p className="netflix-body text-company-secondary/80 text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Find us in various locations across the UAE, each offering a unique ambiance and the same exceptional quality you love.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {locations.map((location, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl h-56 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
              {/* Dimmed Background Image */}
              <div className="absolute inset-0">
                <img
                  src={location.image}
                  alt={`${location.name} location`}
                  className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-company-neutral/90 via-company-neutral/60 to-company-neutral/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <div className="text-center">
                  <h3 className="netflix-subheading text-2xl text-company-secondary mb-2 drop-shadow-lg">
                    Bangkok Town
                    <span className="block text-sm text-company-secondary/80">
                      ({location.name.split('(')[1]}
                    </span>
                  </h3>

                  <div className="text-company-secondary/80 text-sm mb-6 flex items-center justify-center gap-2">
                    <span>📞</span>
                    <span>{location.phone}</span>
                  </div>

                  <NetflixButton
                    variant="outline"
                    onClick={() => window.open(location.mapUrl, "_blank")}
                    size="small"
                    className="bg-company-secondary/10 backdrop-blur-md border-company-secondary/30 text-company-secondary hover:bg-company-secondary/20 hover:border-company-secondary/50 transition-all duration-300"
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
          <div className="absolute -inset-1 bg-gradient-to-r from-company-primary/40 via-company-accent/40 to-company-primary/40 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative bg-gradient-to-br from-company-neutral/80 to-company-neutral/80 backdrop-blur-xl p-16 rounded-3xl border border-company-secondary/50 text-center">
            <h3 className="netflix-subheading text-2xl lg:text-3xl mb-6 text-company-secondary">
              Ready to Taste Authentic Thailand?
            </h3>
            <p className="netflix-body text-company-secondary/80 text-lg max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Choose your preferred location and join thousands of satisfied
              customers who have made us their favorite Thai destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <NetflixButton
                variant="primary"
                onClick={() => navigate("/menu")}
                icon="🍽️"
              >
                Menu
              </NetflixButton>
              <NetflixButton
                variant="outline"
                onClick={() => {
                  window.location.href = 'tel:06 556 8282';
                }}
                icon="📞"
              >
                Call Us
              </NetflixButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};