
import React from 'react';
import { VegIcon } from '../ui/ThaiIcons';

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

interface SearchBarProps {
  searchTerm: string;
  isVegOnly: boolean;
  onSearchChange: (term: string) => void;
  onVegToggle: (vegOnly: boolean) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  searchTerm, 
  isVegOnly, 
  onSearchChange, 
  onVegToggle 
}) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative flex items-center bg-company-secondary/10 backdrop-blur-md border border-company-secondary/20 rounded-full px-6 py-3 max-w-md w-full shadow-lg hover:shadow-xl transition-shadow duration-200">
        <SearchIcon className="text-company-secondary/50 mr-3" size={20} />
        <input
          type="text"
          placeholder="Search our delicious menu..."
          className="bg-transparent flex-1 text-company-secondary placeholder-company-secondary/50 focus:outline-none netflix-body"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        
        <div className="flex items-center ml-3 pl-3 border-l border-company-secondary/20">
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
                  : 'bg-company-secondary/20 group-hover:bg-company-secondary/30 justify-start'
              }`}>
                <div className="w-5 h-5 bg-company-secondary rounded-full shadow-lg mx-1 transition-all duration-300 ease-in-out transform hover:scale-110"></div>
              </div>
            </div>
            <span className="ml-2 text-sm font-medium text-company-secondary">🌱</span>
          </label>
        </div>
      </div>
    </div>
  );
};
