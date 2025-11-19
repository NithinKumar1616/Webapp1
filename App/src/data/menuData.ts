// Menu Data Structure
// To add menu items, simply add new objects to the menuItems array below
// Each item can have modifiers (like size options, add-ons, etc.)

export interface MenuModifier {
  id: string;
  name: string;
  options: {
    id: string;
    name: string;
    price: number; // Additional price for this option
  }[];
  required: boolean; // If true, customer must select an option
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string; // URL or emoji
  modifiers?: MenuModifier[]; // Optional modifiers for this item
  available: boolean; // Whether the item is currently available
}

// Menu Categories
export const menuCategories = [
  'All',
  'Appetizers',
  'Main Course',
  'Desserts',
  'Beverages'
];

// Sample Menu Items - Replace this with your actual menu data
export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Dish',
    description: 'A delightful combination of fresh ingredients and authentic flavors',
    price: 24.99,
    category: 'Main Course',
    image: '🍕',
    available: true,
    modifiers: [
      {
        id: 'size',
        name: 'Size',
        required: true,
        options: [
          { id: 'small', name: 'Small', price: 0 },
          { id: 'medium', name: 'Medium', price: 3.00 },
          { id: 'large', name: 'Large', price: 6.00 }
        ]
      },
      {
        id: 'extras',
        name: 'Add Extras',
        required: false,
        options: [
          { id: 'cheese', name: 'Extra Cheese', price: 2.00 },
          { id: 'pepperoni', name: 'Extra Pepperoni', price: 2.50 }
        ]
      }
    ]
  },
  {
    id: '2',
    name: "Chef's Special",
    description: "Our chef's carefully crafted specialty dish",
    price: 28.99,
    category: 'Main Course',
    image: '🍝',
    available: true
  },
  {
    id: '3',
    name: 'Fresh Salad',
    description: 'Crisp, fresh greens with house-made dressing',
    price: 16.99,
    category: 'Appetizers',
    image: '🥗',
    available: true,
    modifiers: [
      {
        id: 'dressing',
        name: 'Dressing',
        required: true,
        options: [
          { id: 'ranch', name: 'Ranch', price: 0 },
          { id: 'caesar', name: 'Caesar', price: 0 },
          { id: 'vinaigrette', name: 'Balsamic Vinaigrette', price: 0 }
        ]
      }
    ]
  },
  {
    id: '4',
    name: 'Decadent Dessert',
    description: 'A sweet ending to your perfect meal',
    price: 12.99,
    category: 'Desserts',
    image: '🍰',
    available: true
  },
  {
    id: '5',
    name: 'Refreshing Drink',
    description: 'Handcrafted beverages to complement your meal',
    price: 8.99,
    category: 'Beverages',
    image: '🍹',
    available: true,
    modifiers: [
      {
        id: 'size',
        name: 'Size',
        required: true,
        options: [
          { id: 'small', name: 'Small (12oz)', price: 0 },
          { id: 'medium', name: 'Medium (16oz)', price: 1.50 },
          { id: 'large', name: 'Large (20oz)', price: 2.50 }
        ]
      },
      {
        id: 'ice',
        name: 'Ice Level',
        required: false,
        options: [
          { id: 'no-ice', name: 'No Ice', price: 0 },
          { id: 'light-ice', name: 'Light Ice', price: 0 },
          { id: 'regular-ice', name: 'Regular Ice', price: 0 },
          { id: 'extra-ice', name: 'Extra Ice', price: 0 }
        ]
      }
    ]
  },
  {
    id: '6',
    name: 'Classic Burger',
    description: 'Juicy, flavorful, and perfectly seasoned',
    price: 18.99,
    category: 'Main Course',
    image: '🍔',
    available: true,
    modifiers: [
      {
        id: 'cooking',
        name: 'Cooking Preference',
        required: true,
        options: [
          { id: 'rare', name: 'Rare', price: 0 },
          { id: 'medium-rare', name: 'Medium Rare', price: 0 },
          { id: 'medium', name: 'Medium', price: 0 },
          { id: 'well-done', name: 'Well Done', price: 0 }
        ]
      },
      {
        id: 'add-ons',
        name: 'Add-ons',
        required: false,
        options: [
          { id: 'bacon', name: 'Bacon', price: 2.00 },
          { id: 'avocado', name: 'Avocado', price: 1.50 },
          { id: 'egg', name: 'Fried Egg', price: 1.00 }
        ]
      }
    ]
  }
];

