# Design Document

## Overview

The Bangkoktown Restaurant Website will be built as a modern React-based single-page application that combines premium hotel-style aesthetics with traditional Thai design elements. The architecture follows a component-based approach with responsive design principles, integrating payment processing, email services, and real-time table availability management.

## Architecture

### Frontend Architecture
- **Framework**: React 18 with functional components and hooks
- **Styling**: Tailwind CSS for utility-first styling with custom Thai-themed components
- **State Management**: React Context API for global state (reservations, menu filters)
- **Routing**: React Router for navigation between sections
- **Animations**: Framer Motion for smooth transitions and scroll-triggered animations

### Frontend-Only Architecture
- **Static Data**: Menu data and restaurant information stored in JSON/JavaScript objects
- **Form Validation**: React Hook Form with Yup schema validation
- **Local State**: React Context API and useState for all application state

### External Integrations
- **Maps**: Google Maps embed links for location display
- **Social Media**: Direct links to Instagram and Facebook
- **Video Hosting**: Self-hosted video files or embedded content
- **Table Reservation**: Will be implemented as final task with full backend integration

## Components and Interfaces

### Core Layout Components

#### 1. Navigation Component
```typescript
interface NavigationProps {
  isScrolled: boolean;
  isMobile: boolean;
}
```
- **Desktop**: Transparent overlay becoming translucent on scroll
- **Mobile**: Curved bottom navigation with Apple-style design
- **Features**: Smooth transitions, active state indicators, Thai-inspired icons

#### 2. Hero Video Section
```typescript
interface HeroSectionProps {
  videoUrl: string;
  overlayText: string;
  animationDelay: number;
}
```
- **Video**: Full-viewport background video with fallback image
- **Text Animation**: Typewriter or fade-in effect for tagline
- **Overlay**: Subtle gradient for text readability
- **Controls**: Auto-play with mute, loop functionality

#### 3. Menu System Components

##### MenuContainer Component
```typescript
interface MenuContainerProps {
  isPreview?: boolean;
  maxItems?: number;
}
```
- Integrates existing menu code with enhanced styling
- Preview mode for homepage, full mode for dedicated page
- Thai-inspired category icons and color schemes

##### MenuItem Component (Enhanced)
```typescript
interface MenuItemProps {
  item: MenuItem;
  showImage?: boolean;
  layout: 'grid' | 'list';
}
```
- Enhanced version of existing MenuItem component
- Image placeholders with Thai food photography
- Improved pricing display for multiple options
- Vegetarian indicators with Thai-style badges

##### MenuFilters Component
```typescript
interface MenuFiltersProps {
  categories: Category[];
  activeCategory: string;
  searchTerm: string;
  isVegOnly: boolean;
  onCategoryChange: (category: string) => void;
  onSearchChange: (term: string) => void;
  onVegToggle: (isVeg: boolean) => void;
}
```

#### 4. About Us Components

##### ImageGallery Component
```typescript
interface ImageGalleryProps {
  images: GalleryImage[];
  layout: 'masonry' | 'grid' | 'carousel';
  autoPlay?: boolean;
}
```
- Responsive image gallery with lazy loading
- Multiple layout options based on device
- Thai cultural imagery integration

##### StorySection Component
```typescript
interface StorySectionProps {
  content: string;
  images: string[];
  layout: 'side-by-side' | 'stacked';
}
```

#### 5. Contact Components

##### LocationCard Component
```typescript
interface LocationCardProps {
  location: RestaurantLocation;
  showMap?: boolean;
}

interface RestaurantLocation {
  name: string;
  phone: string;
  address: string;
  mapUrl: string;
  hours: string;
}
```

#### 6. Reservation System Components
*Note: Table reservation system will be implemented as the final task with full backend integration including payment processing, email notifications, and real-time availability management.*

##### ReservationPlaceholder Component
```typescript
interface ReservationPlaceholderProps {
  onComingSoon: () => void;
}
```
- Placeholder component indicating "Coming Soon" for reservations
- Will be replaced with full reservation system in final implementation phase

## Data Models

### Menu Data Structure
```typescript
interface MenuItem {
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
}

type MenuCategory = 
  | 'appetizers' | 'soups' | 'salads' | 'rice' 
  | 'noodles' | 'curry' | 'stirfried' | 'combos' 
  | 'seafood' | 'sides' | 'desserts' | 'beverages';
```

### Static Data Structures
```typescript
interface RestaurantInfo {
  locations: RestaurantLocation[];
  socialMedia: SocialMediaLinks;
  aboutUs: AboutUsContent;
}

interface SocialMediaLinks {
  instagram: string;
  facebook: string;
}

interface AboutUsContent {
  story: string;
  images: string[];
  highlights: string[];
}
```

*Note: Reservation data structures will be defined during the final task implementation.*

## Error Handling

### Frontend Error Boundaries
- **Global Error Boundary**: Catches and displays user-friendly error messages
- **Component-Level**: Specific error handling for payment, form validation, and API calls
- **Network Errors**: Retry mechanisms and offline state handling

### Form Validation
- **Real-time Validation**: Immediate feedback for form inputs
- **Schema Validation**: Yup schemas for consistent validation rules
- **Error Messages**: Thai-themed, user-friendly error messaging

### Navigation and UI Error Handling
- **Route Errors**: Graceful fallbacks for navigation issues
- **Image Loading**: Fallback images for broken or missing content
- **Video Loading**: Fallback images when video fails to load

## Testing Strategy

### Unit Testing
- **Component Testing**: React Testing Library for all components
- **Utility Functions**: Jest for menu filtering, time calculations, form validation
- **Custom Hooks**: Testing for reservation logic and state management

### Integration Testing
- **Navigation Flow**: End-to-end testing for page transitions and routing
- **Menu Interactions**: Search, filter, and category navigation testing
- **Responsive Behavior**: Cross-device functionality testing

### Visual Testing
- **Responsive Design**: Testing across device breakpoints
- **Thai Design Elements**: Visual regression testing for design consistency
- **Animation Testing**: Smooth transitions and loading states

### Performance Testing
- **Image Loading**: Lazy loading and optimization testing
- **Video Performance**: Hero video loading and fallback testing
- **Menu Filtering**: Real-time search and filter performance

## Thai Design System

### Color Palette
- **Primary**: Deep red (#8B0000) and gold (#FFD700) - traditional Thai colors
- **Secondary**: Warm oranges (#FF6B35) and deep greens (#2D5016)
- **Neutrals**: Warm grays and creams for backgrounds
- **Accent**: Bright gold for highlights and call-to-action elements

### Typography
- **Headings**: Modern serif font with Thai-inspired character
- **Body Text**: Clean sans-serif for readability
- **Decorative**: Thai-style script for special elements

### Visual Elements
- **Lanterns**: SVG lantern icons throughout the interface
- **Patterns**: Subtle Thai geometric patterns as background elements
- **Imagery**: High-quality Thai food photography and cultural elements
- **Icons**: Custom Thai-inspired iconography for navigation and features

### Animation Principles
- **Smooth Transitions**: 300ms ease-in-out for most interactions
- **Scroll Animations**: Fade-in and slide-up effects for content sections
- **Loading States**: Thai-themed loading animations
- **Micro-interactions**: Subtle hover effects with Thai design elements

## Performance Optimization

### Image Optimization
- **Lazy Loading**: Progressive loading for gallery images
- **WebP Format**: Modern image formats with fallbacks
- **Responsive Images**: Multiple sizes for different devices
- **CDN Integration**: Fast image delivery

### Code Splitting
- **Route-based**: Separate bundles for different sections
- **Component-based**: Lazy loading for heavy components
- **Third-party Libraries**: Dynamic imports for payment processors

### Caching Strategy
- **Static Assets**: Long-term caching for images and fonts
- **API Responses**: Smart caching for menu data and time slots
- **Service Worker**: Offline functionality for core features