import React from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { ThaiStarIcon } from './ThaiIcons';

const deliveryServices = [
  {
    name: 'Talabat',
    logo: '/images/talabat.png',
    url: 'https://www.talabat.com/uae/restaurant/22506/bangkok-town-al-majaz-3?aid=1587',
    glowColor: 'rgba(255, 90, 0, 0.4)',
    extraClass: '',
  },
  {
    name: 'Noon Food',
    logo: '/images/noon.png',
    url: 'https://food.noon.com/en-ae/outlet/BNGKKTIAOO',
    glowColor: 'rgba(254, 238, 0, 0.4)',
    extraClass: '',
  },
  {
    name: 'Keeta',
    logo: '/images/keeta.png',
    url: 'https://url-eu.mykeeta.com/ofrxlogz',
    glowColor: 'rgba(255, 210, 0, 0.4)',
    extraClass: 'scale-125', // Zoom Keeta more
  },
  {
    name: 'Smiles',
    logo: '/images/smiles.png',
    url: 'https://smilesuae.go.link/restaurant?restaurantId=25956&orderType=DELIVERY&adj_t=1o3q4d6q_1opvc7d0/',
    glowColor: 'rgba(0, 118, 182, 0.4)',
    extraClass: 'scale-90', // Zoom out Smiles slightly
  }
];

export const DeliveryBanner: React.FC = () => {
  return (
    <div className="w-full bg-company-neutral py-16 sm:py-24 border-y border-thai-gold/20 relative overflow-hidden">
      {/* Enhanced Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
        <div className="absolute top-1/2 left-10 -translate-y-1/2">
          <ThaiStarIcon size={180} />
        </div>
        <div className="absolute top-1/2 right-10 -translate-y-1/2">
          <ThaiStarIcon size={180} />
        </div>
      </div>

      <Container size="xl">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-6"
          >
            <div className="h-px w-12 sm:w-24 bg-gradient-to-r from-transparent via-thai-gold to-thai-gold"></div>
            <ThaiStarIcon size={32} className="text-thai-gold animate-pulse-slow" />
            <h3 className="text-thai-gold text-xl sm:text-2xl uppercase tracking-[0.4em] font-black text-center">
              Order Online
            </h3>
            <ThaiStarIcon size={32} className="text-thai-gold animate-pulse-slow" />
            <div className="h-px w-12 sm:w-24 bg-gradient-to-l from-transparent via-thai-gold to-thai-gold"></div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-company-secondary text-center max-w-3xl mx-auto text-lg sm:text-xl font-medium leading-relaxed px-4"
          >
            Savor the authentic taste of Bangkok Town from the comfort of your home. 
            <br className="hidden sm:block" />
            Available now on your favorite delivery platforms.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 lg:gap-24">
          {deliveryServices.map((service, index) => (
            <motion.a
              key={service.name}
              href={service.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1, translateY: -10 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1 
              }}
              className="group relative flex flex-col items-center"
            >
              {/* Vibrant Glow Effect behind the image */}
              <div 
                className="absolute inset-0 blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-full"
                style={{ backgroundColor: service.glowColor }}
              ></div>

              {/* Logo Wrapper to force curved borders */}
              <div className="w-32 h-32 sm:w-48 sm:h-48 overflow-hidden rounded-2xl sm:rounded-[2.5rem] shadow-2xl border border-white/10 group-hover:border-thai-gold/50 transition-all duration-300">
                <img 
                  src={service.logo} 
                  alt={service.name} 
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${service.extraClass}`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://ui-avatars.com/api/?name=${service.name}&background=990000&color=fff&size=128`;
                  }}
                />
              </div>
              
              {/* Tooltip for brand name */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-thai-gold text-company-neutral text-[10px] sm:text-xs font-black px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-widest whitespace-nowrap shadow-xl z-20">
                Order via {service.name}
              </div>

              {/* Name indicator below */}
              <span className="mt-4 text-company-secondary/60 group-hover:text-thai-gold transition-colors duration-300 font-bold tracking-widest text-[10px] uppercase">
                {service.name}
              </span>
            </motion.a>
          ))}
        </div>
      </Container>
    </div>
  );
};
