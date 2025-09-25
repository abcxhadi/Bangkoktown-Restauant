// Menu Types
export type MenuCategory = 
  | 'appetizers' | 'soups' | 'salads' | 'rice' 
  | 'noodles' | 'curry' | 'stirfried' | 'combos' 
  | 'seafood' | 'sides' | 'desserts' | 'beverages';

export interface MenuItem {
  id: number;
  name: string;
  price: number | string;
  category: MenuCategory;
  isVeg: boolean;
  hasVegOption: boolean;
  description?: string;
  image?: string;
  spiceLevel?: 1 | 2 | 3;
  allergens?: string[];
  gradient?: string;
  bgColor?: string;
}

// Restaurant Types
export interface RestaurantLocation {
  name: string;
  phone: string;
  address: string;
  mapUrl: string;
  hours: string;
}

export interface SocialMediaLinks {
  instagram: string;
  facebook: string;
}

export interface AboutUsContent {
  story: string;
  images: string[];
  highlights: string[];
}

export interface RestaurantInfo {
  locations: RestaurantLocation[];
  socialMedia: SocialMediaLinks;
  aboutUs: AboutUsContent;
}

// Gallery Types
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

// Component Props Types
export interface NavigationProps {
  isScrolled: boolean;
  isMobile: boolean;
}

export interface HeroSectionProps {
  videoUrl: string;
  overlayText: string;
  animationDelay: number;
}

export interface MenuContainerProps {
  isPreview?: boolean;
  maxItems?: number;
}

export interface MenuItemProps {
  item: MenuItem;
}

export interface MenuFiltersProps {
  categories: MenuCategory[];
  activeCategory: string;
  searchTerm: string;
  isVegOnly: boolean;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
  onVegToggle: (isVeg: boolean) => void;
}

export interface ImageGalleryProps {
  images: GalleryImage[];
  layout: 'masonry' | 'grid' | 'carousel';
  autoPlay?: boolean;
}

export interface StorySectionProps {
  content: string;
  images: string[];
  layout: 'side-by-side' | 'stacked';
}

export interface LocationCardProps {
  location: RestaurantLocation;
  showMap?: boolean;
}

// Reservation Types (placeholder for future implementation)
export interface ReservationPlaceholderProps {
  onComingSoon: () => void;
}