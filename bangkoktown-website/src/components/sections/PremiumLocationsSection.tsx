import { useNavigate } from "react-router-dom";
import { Heading2, BodyText } from "../ui";

export const PremiumLocationsSection = () => (
  <section className="py-24">
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-xl rounded-full border border-purple-500/30 mb-12">
        <div className="text-3xl animate-pulse">📍</div>
        <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">
          Our Premium Locations
        </span>
      </div>

      <Heading2 className="text-5xl lg:text-6xl mb-8 text-white font-black tracking-tight">
        Find Your Nearest Bangkok Town
      </Heading2>

      <BodyText className="text-gray-300 text-xl max-w-3xl mx-auto font-light leading-relaxed">
        Experience the authentic taste of Thailand at our conveniently located
        branches across the UAE.
      </BodyText>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          city: "Dubai",
          address: "Downtown Dubai, Sheikh Mohammed bin Rashid Blvd",
          phone: "+971 4 123 4567",
          image: "/images/dubai.avif",
        },
        {
          city: "Abu Dhabi",
          address: "Al Maryah Island, The Galleria Al Maryah Island",
          phone: "+971 2 987 6543",
          image: "/images/zawaya.jpg",
        },
        {
          city: "Sharjah",
          address: "Al Majaz Waterfront, Buhairah Corniche",
          phone: "+971 6 555 1234",
          image: "/images/al majaz waterfron.jpg",
        },
      ].map((location, index) => (
        <div
          key={index}
          className="group relative bg-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
        >
          <div className="relative h-60 overflow-hidden">
            <img
              src={location.image}
              alt={location.city}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {location.city}
              </h3>
              <p className="text-purple-300 text-lg font-medium">
                {location.address}
              </p>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-300 text-lg mb-4">
              Call us:{" "}
              <a
                href={`tel:${location.phone}`}
                className="text-purple-400 hover:underline"
              >
                {location.phone}
              </a>
            </p>
            <button className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
              Get Directions
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);
