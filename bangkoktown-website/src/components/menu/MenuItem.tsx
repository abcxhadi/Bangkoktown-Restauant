import React from 'react';
import { MenuItemProps } from '../../types';
import { Card, BodyText } from '../ui';
import { VegIcon } from '../ui/ThaiIcons';

import '../../currency.css';

export const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const renderPrice = () => {
    return (
      <span className="text-white font-bold text-lg flex items-center">
        <img src="/images/dirhams.svg" alt="Dirhams" className="w-5 h-5 mr-1 dirhams-gold" />
        {item.price}
      </span>
    );
  };

  const renderSpiceLevel = () => {
    return null;
  };

  const renderVegBadge = () => {
    if (item.isVeg) {
      return (
        <div className="inline-flex items-center gap-1 bg-thai-green text-white px-2 py-1 rounded-full text-xs font-medium">
          <VegIcon size={12} />
          <span>Vegetarian</span>
        </div>
      );
    }
    
    if (item.hasVegOption) {
      return (
        <div className="inline-flex items-center gap-1 bg-thai-orange text-white px-2 py-1 rounded-full text-xs font-medium">
          <VegIcon size={12} />
          <span>Veg Option</span>
        </div>
      );
    }
    
    return null;
  };

  

  return (
    <Card variant="transparent" className="relative group h-full flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-thai-gold/5 to-thai-orange/5 p-1 hover:shadow-2xl transition-all duration-500">
      <div className="relative overflow-hidden rounded-3xl h-full">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="relative z-10 flex flex-col h-full p-6 text-white">
          <div className="flex-grow">
            <h3 className="font-thai-serif text-2xl font-bold mb-2 group-hover:text-thai-gold transition-colors duration-300">
              {item.name}
            </h3>
            {item.description && (
              <BodyText className="text-white/90 text-sm leading-relaxed mb-4">
                {item.description}
              </BodyText>
            )}
          </div>
          <div className="mt-auto">
            <div className="flex items-center justify-between mb-4">
              {renderPrice()}
              {renderVegBadge()}
            </div>
            
          </div>
        </div>
      </div>
    </Card>
  );
};