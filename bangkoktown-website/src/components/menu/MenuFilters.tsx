import React from 'react';
import { MenuFiltersProps } from '../../types';
import { Button } from '../ui';
import { VegIcon } from '../ui/ThaiIcons';
import { menuCategories } from '../../data/menuData';



export const MenuFilters: React.FC<MenuFiltersProps> = ({
  categories,
  activeCategory,
  searchTerm,
  isVegOnly,
  onCategoryChange,
  onSearchChange,
  onVegToggle
}) => {
  const getCategoryIcon = (categoryId: string) => {
    const category = menuCategories.find(cat => cat.id === categoryId);
    return category?.icon || '🍽️';
  };

  const getCategoryName = (categoryId: string) => {
    const category = menuCategories.find(cat => cat.id === categoryId);
    return category?.name || categoryId;
  };

  return (
    <div className="space-y-6">
      

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          onClick={() => onCategoryChange('all')}
          className={`${activeCategory === 'all' ? 'bg-[#c799d9] text-white' : 'text-white'} hover:bg-white hover:text-black netflix-caption`}
        >
          <span className="text-lg">🍽️</span>
          <span className="hidden sm:inline">All Items</span>
          <span className="sm:hidden">All</span>
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant="outline"
            onClick={() => onCategoryChange(category)}
            className={`${activeCategory === category ? 'bg-[#c799d9] text-white' : 'text-white'} hover:bg-white hover:text-black netflix-caption`}
          >
            <span className="text-lg">{getCategoryIcon(category)}</span>
            <span className="hidden sm:inline">{getCategoryName(category)}</span>
            <span className="sm:hidden text-xs">{getCategoryName(category).split(' ')[0]}</span>
          </Button>
        ))}
      </div>

      {/* Active Filters Display */}
      {(activeCategory !== 'all' || isVegOnly || searchTerm) && (
        <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 w-full shadow-lg overflow-x-auto">
          <span className="text-white/50 mr-3 netflix-caption">Active filters:</span>
          
          {activeCategory !== 'all' && (
            <span className="inline-flex items-center gap-1 bg-thai-gold/20 text-thai-gold px-2 py-1 rounded-full text-xs netflix-caption">
              <span>{getCategoryIcon(activeCategory)}</span>
              <span>{getCategoryName(activeCategory)}</span>
              <button
                onClick={() => onCategoryChange('all')}
                className="ml-1 hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}
          
          {isVegOnly && (
            <span className="inline-flex items-center gap-1 bg-thai-green/20 text-thai-green px-2 py-1 rounded-full text-xs netflix-caption">
              <VegIcon size={12} />
              <span>Vegetarian</span>
              <button
                onClick={() => onVegToggle(false)}
                className="ml-1 hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}
          
          {searchTerm && (
            <span className="inline-flex items-center gap-1 bg-thai-orange/20 text-thai-orange px-2 py-1 rounded-full text-xs netflix-caption">
              <span>"{searchTerm}"</span>
              <button
                onClick={() => onSearchChange('')}
                className="ml-1 hover:text-white transition-colors"
              >
                ×
              </button>
            </span>
          )}
        </div>
      )}
    </div>
  );
};