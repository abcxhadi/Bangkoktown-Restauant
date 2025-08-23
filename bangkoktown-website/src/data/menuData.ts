import { MenuItem, MenuCategory } from '../types';

export const menuCategories: { id: MenuCategory; name: string; icon: string }[] = [
  { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
  { id: 'soups', name: 'Soups', icon: '🍜' },
  { id: 'salads', name: 'Salads', icon: '🥗' },
  { id: 'rice', name: 'Rice Dishes', icon: '🍚' },
  { id: 'noodles', name: 'Noodles', icon: '🍝' },
  { id: 'curry', name: 'Curry', icon: '🍛' },
  { id: 'stirfried', name: 'Stir-Fried', icon: '🥘' },
  { id: 'combos', name: 'Combos', icon: '🍱' },
  { id: 'seafood', name: 'Seafood', icon: '🦐' },
  { id: 'sides', name: 'Sides', icon: '🥢' },
  { id: 'desserts', name: 'Desserts', icon: '🍮' },
  { id: 'beverages', name: 'Beverages', icon: '🧋' }
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: 1,
    name: 'Thai Spring Rolls',
    price: 28,
    category: 'appetizers',
    isVeg: true,
    hasVegOption: false,
    description: 'Fresh vegetables wrapped in rice paper, served with sweet chili sauce',
    spiceLevel: 1,
    image: '/images/thai_spring_rolls.jpg'
  },
  {
    id: 2,
    name: 'Chicken Satay',
    price: 35,
    category: 'appetizers',
    isVeg: false,
    hasVegOption: true,
    description: 'Grilled chicken skewers marinated in Thai spices, served with peanut sauce',
    spiceLevel: 2
  },
  {
    id: 3,
    name: 'Thai Fish Cakes',
    price: 32,
    category: 'appetizers',
    isVeg: false,
    hasVegOption: false,
    description: 'Spicy fish cakes served with cucumber relish and crushed peanuts',
    spiceLevel: 3
  },

  // Soups
  {
    id: 4,
    name: 'Tom Yum Goong',
    price: 42,
    category: 'soups',
    isVeg: false,
    hasVegOption: true,
    description: 'Spicy and sour soup with prawns, mushrooms, and aromatic herbs',
    spiceLevel: 3,
    image: '/images/tom_yum_goong.jpg'
  },
  {
    id: 5,
    name: 'Tom Kha Gai',
    price: 38,
    category: 'soups',
    isVeg: false,
    hasVegOption: true,
    description: 'Creamy coconut soup with chicken, galangal, and lime leaves',
    spiceLevel: 1
  },
  {
    id: 6,
    name: 'Vegetable Clear Soup',
    price: 28,
    category: 'soups',
    isVeg: true,
    hasVegOption: false,
    description: 'Light and refreshing soup with mixed vegetables and tofu',
    spiceLevel: 1
  },

  // Salads
  {
    id: 7,
    name: 'Som Tam (Papaya Salad)',
    price: 32,
    category: 'salads',
    isVeg: true,
    hasVegOption: false,
    description: 'Fresh green papaya salad with tomatoes, carrots, and peanuts',
    spiceLevel: 3
  },
  {
    id: 8,
    name: 'Larb Gai',
    price: 38,
    category: 'salads',
    isVeg: false,
    hasVegOption: true,
    description: 'Spicy minced chicken salad with herbs and toasted rice powder',
    spiceLevel: 3
  },

  // Rice Dishes
  {
    id: 9,
    name: 'Thai Fried Rice',
    price: 35,
    category: 'rice',
    isVeg: false,
    hasVegOption: true,
    description: 'Wok-fried rice with egg, vegetables, and your choice of protein',
    spiceLevel: 1
  },
  {
    id: 10,
    name: 'Pineapple Fried Rice',
    price: 45,
    category: 'rice',
    isVeg: false,
    hasVegOption: true,
    description: 'Fragrant fried rice with pineapple, cashews, and curry powder',
    spiceLevel: 1
  },
  {
    id: 11,
    name: 'Green Curry Fried Rice',
    price: 42,
    category: 'rice',
    isVeg: false,
    hasVegOption: true,
    description: 'Aromatic fried rice with green curry paste and Thai basil',
    spiceLevel: 2
  },

  // Noodles
  {
    id: 12,
    name: 'Pad Thai',
    price: 38,
    category: 'noodles',
    isVeg: false,
    hasVegOption: true,
    description: 'Classic stir-fried rice noodles with tamarind sauce and peanuts',
    spiceLevel: 1,
    image: '/images/pad_thai.jpg'
  },
  {
    id: 13,
    name: 'Pad See Ew',
    price: 35,
    category: 'noodles',
    isVeg: false,
    hasVegOption: true,
    description: 'Wide rice noodles stir-fried with dark soy sauce and Chinese broccoli',
    spiceLevel: 1
  },
  {
    id: 14,
    name: 'Drunken Noodles',
    price: 40,
    category: 'noodles',
    isVeg: false,
    hasVegOption: true,
    description: 'Spicy stir-fried noodles with Thai basil and chili',
    spiceLevel: 3
  },

  // Curry
  {
    id: 15,
    name: 'Green Curry',
    price: 45,
    category: 'curry',
    isVeg: false,
    hasVegOption: true,
    description: 'Creamy coconut curry with Thai eggplant and basil',
    spiceLevel: 3,
    image: '/images/green_curry.jpg'
  },
  {
    id: 16,
    name: 'Red Curry',
    price: 45,
    category: 'curry',
    isVeg: false,
    hasVegOption: true,
    description: 'Rich and aromatic curry with bamboo shoots and bell peppers',
    spiceLevel: 2
  },
  {
    id: 17,
    name: 'Massaman Curry',
    price: 48,
    category: 'curry',
    isVeg: false,
    hasVegOption: true,
    description: 'Mild curry with potatoes, peanuts, and warm spices',
    spiceLevel: 1
  },

  // Stir-Fried
  {
    id: 18,
    name: 'Pad Krapow',
    price: 38,
    category: 'stirfried',
    isVeg: false,
    hasVegOption: true,
    description: 'Spicy stir-fry with Thai holy basil and chili, served with rice',
    spiceLevel: 3
  },
  {
    id: 19,
    name: 'Cashew Chicken',
    price: 42,
    category: 'stirfried',
    isVeg: false,
    hasVegOption: true,
    description: 'Stir-fried with roasted cashews, bell peppers, and onions',
    spiceLevel: 1
  },

  // Combos
  {
    id: 20,
    name: 'Bangkok Combo',
    price: '65-85',
    category: 'combos',
    isVeg: false,
    hasVegOption: true,
    description: 'Choice of curry or stir-fry with jasmine rice and spring roll',
    spiceLevel: 2,
    image: '/images/bangkok_combo.avif'
  },
  {
    id: 21,
    name: 'Thai Feast',
    price: '95-120',
    category: 'combos',
    isVeg: false,
    hasVegOption: true,
    description: 'Tom yum soup, pad thai, green curry, and dessert',
    spiceLevel: 2
  },

  // Seafood
  {
    id: 22,
    name: 'Grilled Fish with Herbs',
    price: 65,
    category: 'seafood',
    isVeg: false,
    hasVegOption: false,
    description: 'Fresh fish grilled with lemongrass and Thai herbs',
    spiceLevel: 2
  },
  {
    id: 23,
    name: 'Prawns in Tamarind Sauce',
    price: 58,
    category: 'seafood',
    isVeg: false,
    hasVegOption: false,
    description: 'Crispy prawns in sweet and tangy tamarind glaze',
    spiceLevel: 1
  },

  // Sides
  {
    id: 24,
    name: 'Jasmine Rice',
    price: 8,
    category: 'sides',
    isVeg: true,
    hasVegOption: false,
    description: 'Fragrant Thai jasmine rice',
    spiceLevel: 1
  },
  {
    id: 25,
    name: 'Sticky Rice',
    price: 12,
    category: 'sides',
    isVeg: true,
    hasVegOption: false,
    description: 'Traditional Thai sticky rice',
    spiceLevel: 1
  },

  // Desserts
  {
    id: 26,
    name: 'Mango Sticky Rice',
    price: 28,
    category: 'desserts',
    isVeg: true,
    hasVegOption: false,
    description: 'Sweet sticky rice with fresh mango and coconut milk',
    spiceLevel: 1,
    image: '/images/mango_sticky_rice.jpg'
  },
  {
    id: 27,
    name: 'Thai Coconut Ice Cream',
    price: 22,
    category: 'desserts',
    isVeg: true,
    hasVegOption: false,
    description: 'Creamy coconut ice cream with toasted coconut flakes',
    spiceLevel: 1
  },

  // Beverages
  {
    id: 28,
    name: 'Thai Iced Tea',
    price: 18,
    category: 'beverages',
    isVeg: true,
    hasVegOption: false,
    description: 'Traditional Thai tea with condensed milk and ice',
    spiceLevel: 1
  },
  {
    id: 29,
    name: 'Fresh Coconut Water',
    price: 15,
    category: 'beverages',
    isVeg: true,
    hasVegOption: false,
    description: 'Fresh coconut water served in the shell',
    spiceLevel: 1
  },
  {
    id: 30,
    name: 'Lemongrass Ginger Tea',
    price: 16,
    category: 'beverages',
    isVeg: true,
    hasVegOption: false,
    description: 'Refreshing herbal tea with lemongrass and ginger',
    spiceLevel: 1
  }
];

export const getFeaturedItems = (maxItems: number = 6): MenuItem[] => {
  return menuItems
    .filter(item => [1, 4, 12, 15, 20, 26].includes(item.id))
    .slice(0, maxItems);
};

export const getItemsByCategory = (category: MenuCategory): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

export const searchItems = (query: string): MenuItem[] => {
  const lowercaseQuery = query.toLowerCase();
  return menuItems.filter(item => 
    item.name.toLowerCase().includes(lowercaseQuery) ||
    item.description?.toLowerCase().includes(lowercaseQuery)
  );
};

export const getVegetarianItems = (): MenuItem[] => {
  return menuItems.filter(item => item.isVeg || item.hasVegOption);
};