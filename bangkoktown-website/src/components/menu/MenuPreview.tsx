import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuItem } from './MenuItem';
import {
  Button,
  Heading2,
  Heading3,
  BodyText,
  Container,
  ScrollArrows
} from '../ui';
import { LanternIcon, ThaiPatternIcon } from '../ui/ThaiIcons';
import { ThaiDivider } from '../ui/ThaiDecorations';
import {
  menuCategories,
  getFeaturedItems,
  getItemsByCategory
} from '../../data/menuData';
import { MenuCategory } from '../../types';
import { useAutoScroll } from '../../hooks/useAutoScroll';


interface MenuPreviewProps {
  maxItems?: number;
  showCategoryPreviews?: boolean;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({
  maxItems = 6,
  showCategoryPreviews = false
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const { scrollRef, stopScrolling, scrollLeft, scrollRight } = useAutoScroll(isHovered);

  const featuredItems = getFeaturedItems(maxItems);

  // Get one featured item from each major category for category preview
  const categoryPreviews = [
    { category: 'appetizers', item: getItemsByCategory('appetizers')[0] },
    { category: 'soups', item: getItemsByCategory('soups')[0] },
    { category: 'curry', item: getItemsByCategory('curry')[0] },
    { category: 'noodles', item: getItemsByCategory('noodles')[0] },
    { category: 'desserts', item: getItemsByCategory('desserts')[0] },
    { category: 'beverages', item: getItemsByCategory('beverages')[0] }
  ].filter(preview => preview.item);

  const handleViewFullMenu = () => {
    navigate('/menu');
  };

  const handleCategoryClick = (category: MenuCategory) => {
    navigate(`/menu?category=${category}`);
  };

  if (showCategoryPreviews) {
    return (
       <section className="py-16 overflow-hidden">
        <Container>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <ThaiPatternIcon size={32} color="#8B0000" className="mr-3" />
              <Heading2 className="mb-0">Taste of Thailand</Heading2>
              <ThaiPatternIcon size={32} color="#8B0000" className="ml-3" />
            </div>
            <BodyText className="max-w-2xl mx-auto text-thai-warmGray">
              Explore our authentic Thai cuisine across different categories, each dish crafted with traditional recipes and premium ingredients.
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categoryPreviews.map(({ category, item }) => {
              const categoryInfo = menuCategories.find(cat => cat.id === category);
              return (
                <div
                  key={category}
                  className="rounded-lg shadow-xl border border-thai-gold border-opacity-20 p-6 group cursor-pointer category-card-hover"
                  onClick={() => handleCategoryClick(category as MenuCategory)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 transform transition-transform duration-300 group-hover:scale-110">
                      {categoryInfo?.icon}
                    </div>
                    <Heading3 className="text-lg mb-2 group-hover:text-thai-gold transition-colors">
                      {categoryInfo?.name}
                    </Heading3>
                    <div className="border-t border-thai-gold border-opacity-20 pt-4 mt-4">
                      <BodyText className="text-sm font-medium text-thai-red mb-1">
                        {item.name}
                      </BodyText>
                      <BodyText className="text-xs text-thai-warmGray mb-2 line-clamp-2">
                        {item.description}
                      </BodyText>
                      <div className="flex items-center justify-center">
                        <span className="text-thai-gold font-bold flex items-center">
                          <img src="/images/dirhams.svg" alt="Dirhams" className="w-5 h-5 mr-1" />
                          {typeof item.price === 'string' ? item.price : item.price}
                        </span>
                        {item.isVeg && (
                          <span className="ml-2 w-3 h-3 bg-green-500 rounded-full" title="Vegetarian"></span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <ThaiDivider />

          <div className="text-center mt-12">
            <Button
              variant="primary"
              size="lg"
              className="group transform transition-all duration-300 hover:scale-105"
              onClick={handleViewFullMenu}
            >
              <span>Explore Full Menu</span>
              <LanternIcon size={20} className="ml-2 group-hover:animate-bounce" />
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-16 overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <LanternIcon size={48} color="#D4AF37" className="mr-4" />
            <Heading2>Our Featured Dishes</Heading2>
            <LanternIcon size={48} color="#D4AF37" className="ml-4" />
          </div>
          <BodyText className="max-w-2xl mx-auto text-thai-warmGray">
            A selection of our most popular and highly-rated dishes, showcasing the best of Bangkoktown's culinary expertise.
          </BodyText>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8"
          >
            {featuredItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="w-80 flex-shrink-0">
                <MenuItem
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  isVeg={item.isVeg}
                  category={item.category}
                  isFeatured
                />
              </div>
            ))}
          </div>
          <ScrollArrows 
            onLeftClick={scrollLeft} 
            onRightClick={scrollRight} 
            isHovered={isHovered} 
          />
        </div>

                <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            className="netflix-button"
            onClick={handleViewFullMenu}
          >
            View Full Menu
          </Button>
        </div>
      </Container>
    </section>
  );
};
