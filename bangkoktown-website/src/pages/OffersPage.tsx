import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container, NetflixButton } from "../components/ui";

const offersPageCss = `
.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.offer-card {
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.offer-card:hover {
  transform: scale(1.02);
  border-color: rgba(221, 135, 255, 0.5);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
`;

type Offer = {
  id: number;
  title: string;
  image: string;
};

const offers: Offer[] = [
  { id: 1, title: "Lunch Special", image: "/images/offer1.jpeg" },
  { id: 2, title: "Family Feast", image: "/images/offer2.jpeg" },

  { id: 3, title: "Lunch Special", image: "/images/offer1.jpeg" },
];

export const OffersPage = () => {
  const [selected, setSelected] = useState<Offer | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-company-neutral relative overflow-hidden">
      <style>{offersPageCss}</style>

      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#b066cc] to-[#b066cc] rounded-full blur-3xl animate-pulse"></div>
      </div>

      <section className="relative pt-32 pb-20 z-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="netflix-heading text-5xl md:text-6xl text-company-secondary mb-6">
              Exclusive Offers
            </h1>
            <p className="netflix-body text-company-secondary/70 text-xl max-w-2xl mx-auto">
              Savor the authentic taste of Thailand with our special deals and
              promotions.
            </p>
          </motion.div>

          <div className="offers-grid">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="offer-card cursor-pointer"
                onClick={() => setSelected(offer)}
              >
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Want more updates?
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Follow us on Instagram to be the first to know about our upcoming
              events and seasonal menus.
            </p>
            <div className="flex justify-center gap-4">
              <NetflixButton
                onClick={() =>
                  window.open("https://instagram.com/bangkoktownuae", "_blank")
                }
                variant="outline"
              >
                Follow @bangkoktown
              </NetflixButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox — outside everything so it covers navbar too */}
      {selected && (
        <div
          style={{ zIndex: 9999 }}
          className="fixed inset-0 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            style={{ zIndex: 10000 }}
            className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-[#dd87ff] text-white text-2xl rounded-full transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setSelected(null);
            }}
          >
            ✕
          </button>
          <img
            src={selected.image}
            alt={selected.title}
            className="max-w-full max-h-screen object-contain rounded-xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
