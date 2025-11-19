# Menu Import Guide

This guide explains how to add menu items and modifiers to your restaurant website.

## 📍 Location

All menu data is stored in: `src/data/menuData.ts`

## 🍽️ Adding Menu Items

To add a new menu item, simply add a new object to the `menuItems` array in `menuData.ts`:

```typescript
{
  id: 'unique-id',                    // Unique identifier (e.g., '7', 'pizza-margherita')
  name: 'Item Name',                   // Display name
  description: 'Item description',    // Brief description
  price: 24.99,                       // Base price (number, not string)
  category: 'Main Course',            // Category (must match one of your categories)
  image: '🍕',                        // Emoji or image URL (optional)
  available: true,                    // Whether item is currently available
  modifiers: [                        // Optional: modifiers array
    // See "Adding Modifiers" section below
  ]
}
```

### Example:

```typescript
{
  id: '7',
  name: 'Margherita Pizza',
  description: 'Classic pizza with fresh mozzarella and basil',
  price: 18.99,
  category: 'Main Course',
  image: '🍕',
  available: true
}
```

## 🎛️ Adding Modifiers

Modifiers allow customers to customize their orders (sizes, add-ons, etc.).

### Modifier Structure:

```typescript
modifiers: [
  {
    id: 'size',                       // Unique modifier ID
    name: 'Size',                      // Display name
    required: true,                    // Must customer select an option?
    options: [
      {
        id: 'small',                   // Unique option ID
        name: 'Small',                 // Display name
        price: 0                       // Additional price (0 = no extra charge)
      },
      {
        id: 'large',
        name: 'Large',
        price: 3.00                    // Adds $3.00 to base price
      }
    ]
  }
]
```

### Modifier Types:

- **Required Modifiers** (`required: true`): Customer MUST select one option (uses radio buttons)
  - Example: Size (Small/Medium/Large), Cooking preference (Rare/Medium/Well-done)
  
- **Optional Modifiers** (`required: false`): Customer can select multiple options (uses checkboxes)
  - Example: Add-ons (Extra cheese, Bacon, Avocado)

### Complete Example with Modifiers:

```typescript
{
  id: '8',
  name: 'Custom Burger',
  description: 'Build your perfect burger',
  price: 15.99,
  category: 'Main Course',
  image: '🍔',
  available: true,
  modifiers: [
    {
      id: 'size',
      name: 'Size',
      required: true,
      options: [
        { id: 'regular', name: 'Regular', price: 0 },
        { id: 'large', name: 'Large', price: 2.00 }
      ]
    },
    {
      id: 'add-ons',
      name: 'Add-ons',
      required: false,
      options: [
        { id: 'bacon', name: 'Bacon', price: 2.00 },
        { id: 'cheese', name: 'Extra Cheese', price: 1.50 },
        { id: 'avocado', name: 'Avocado', price: 1.00 }
      ]
    }
  ]
}
```

## 📂 Categories

Categories are automatically generated from your menu items. To add a new category, simply use it in a menu item's `category` field:

```typescript
{
  category: 'New Category Name'  // Will automatically appear in category filter
}
```

Common categories:
- `Appetizers`
- `Main Course`
- `Desserts`
- `Beverages`
- `Salads`
- `Soups`
- etc.

## 🔄 Making Items Unavailable

To temporarily hide an item from the menu:

```typescript
{
  available: false  // Item won't appear in menu
}
```

## 💡 Tips

1. **IDs**: Use unique IDs for each item and modifier option (e.g., 'item-1', 'burger-1', etc.)

2. **Prices**: Always use numbers, not strings (e.g., `24.99` not `"$24.99"`)

3. **Images**: You can use:
   - Emojis: `'🍕'`, `'🍔'`, `'🥗'`
   - Image URLs: `'https://example.com/image.jpg'`
   - Leave empty to use default emoji

4. **Bulk Import**: You can import from a JSON file or API by replacing the `menuItems` array

5. **Modifier Pricing**: Set `price: 0` for options that don't add extra cost

## 🚀 Quick Start

1. Open `src/data/menuData.ts`
2. Find the `menuItems` array
3. Add your menu items following the structure above
4. Save the file
5. The website will automatically update!

## 📝 Example: Complete Menu Item

```typescript
{
  id: 'pizza-pepperoni',
  name: 'Pepperoni Pizza',
  description: 'Classic pepperoni pizza with mozzarella cheese',
  price: 22.99,
  category: 'Main Course',
  image: '🍕',
  available: true,
  modifiers: [
    {
      id: 'size',
      name: 'Size',
      required: true,
      options: [
        { id: 'small', name: 'Small (10")', price: 0 },
        { id: 'medium', name: 'Medium (12")', price: 3.00 },
        { id: 'large', name: 'Large (14")', price: 6.00 }
      ]
    },
    {
      id: 'toppings',
      name: 'Extra Toppings',
      required: false,
      options: [
        { id: 'mushrooms', name: 'Mushrooms', price: 2.00 },
        { id: 'olives', name: 'Olives', price: 1.50 },
        { id: 'peppers', name: 'Bell Peppers', price: 1.50 }
      ]
    }
  ]
}
```

That's it! Your menu items will appear on the website automatically. 🎉

