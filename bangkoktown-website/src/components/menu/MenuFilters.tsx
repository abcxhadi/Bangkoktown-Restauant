import React from 'react';
import { MenuFiltersProps } from '../../types';
import { Button } from '../ui';
import { VegIcon } from '../ui/ThaiIcons';
import { menuCategories } from '../../data/menuData';

// Search Icon Component
const SearchIcon: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

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
      {/* Search Bar with Veg Toggle */}
      <div className="flex justify-center mb-8">
        <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 max-w-md w-full shadow-lg hover:shadow-xl transition-shadow duration-200">
          <SearchIcon className="text-white/50 mr-3" size={20} />
          <input
            type="text"
            placeholder="Search our delicious menu..."
            className="bg-transparent flex-1 text-white placeholder-white/50 focus:outline-none netflix-body"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          
          <div className="flex items-center ml-3 pl-3 border-l border-white/20">
            <label className="flex items-center cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isVegOnly}
                  onChange={(e) => onVegToggle(e.target.checked)}
                  className="sr-only"
                />
                <div className={`w-12 h-6 rounded-full transition-all duration-300 ease-in-out flex items-center ${
                  isVegOnly
                    ? 'bg-thai-green justify-end'
                    : 'bg-white/20 group-hover:bg-white/30 justify-start'
                }`}>
                  <div className="w-5 h-5 bg-white rounded-full shadow-lg mx-1 transition-all duration-300 ease-in-out transform hover:scale-110"></div>
                </div>
              </div>
              <span className="ml-2 text-sm font-medium text-white">🌱</span>
            </label>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3">
        <Button
          variant="outline"
          onClick={() => onCategoryChange('all')}
          className={`${activeCategory === 'all' ? 'bg-red-500 text-white' : 'text-white'} hover:bg-white hover:text-black netflix-caption`}
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
            className={`${activeCategory === category ? 'bg-red-500 text-white' : 'text-white'} hover:bg-white hover:text-black netflix-caption`}
          >
            <span className="text-lg">{getCategoryIcon(category)}</span>
            <span className="hidden sm:inline">{getCategoryName(category)}</span>
            <span className="sm:hidden text-xs">{getCategoryName(category).split(' ')[0]}</span>
          </Button>
        ))}
      </div>

      {/* Active Filters Display */}
      {(activeCategory !== 'all' || isVegOnly || searchTerm) && (
        <div className="flex flex-wrap justify-center gap-2 text-sm items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 max-w-md w-full shadow-lg">
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