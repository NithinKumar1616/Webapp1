# Restaurant Web Application

A modern, responsive restaurant web application with interactive menu management, gallery, and reservation features. Built with React, TypeScript, and Vite, and deployed to Netlify and AWS Amplify.

## 🚀 Live Demo

- **Netlify**: [Your Netlify URL]
- **AWS Amplify**: [Your Amplify URL]

## ✨ Features

### 🏠 Homepage & Navigation
- Modern hero section with call-to-action buttons
- Responsive navigation menu with smooth scrolling
- Professional header with restaurant branding

### 📖 About Section
- Restaurant story and mission
- Feature highlights (Fresh Ingredients, Expert Chefs, Made with Love)
- Engaging content presentation

### 🍽️ Interactive Menu System
- Dynamic menu display with category filtering (All, Appetizers, Main Course, Desserts, Beverages)
- Menu items with descriptions, prices, and images
- **Modifier system** for menu customization:
  - Size options (Small, Medium, Large)
  - Add-ons and extras
  - Required and optional modifiers
  - Price calculations for modifications
- Modal popup for detailed item customization
- Real-time price updates based on selections

### 🖼️ Gallery Section
- Visual showcase of restaurant offerings
- Grid-based layout for optimal presentation

### 📍 Hours & Location
- Operating hours display
- Contact information (address, phone, email)
- Clear presentation of business details

### 📝 Reservation System
- Contact form with validation
- Fields for name, email, phone, date, time, and number of guests
- Special requests section
- Professional form styling

## 🛠️ Technical Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript
- **Build Tool**: Vite 7.2.2
- **Styling**: CSS3 with modern responsive design
- **Deployment Platforms**: Netlify & AWS Amplify

## 📦 Installation

```bash
# Navigate to the App directory
cd App

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
Webapp1/
├── App/                    # Main application directory
│   ├── src/
│   │   ├── App.tsx        # Main application component
│   │   ├── data/
│   │   │   └── menuData.ts # Menu data structure
│   │   ├── App.css        # Application styles
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── dist/              # Build output
│   ├── package.json       # Dependencies
│   ├── vite.config.ts     # Vite configuration
│   └── tsconfig.json      # TypeScript configuration
├── netlify.toml           # Netlify deployment config
└── amplify.yml            # AWS Amplify deployment config
```

## 🚢 Deployment

### Netlify
The project includes a `netlify.toml` configuration file with:
- Base directory: `App`
- Publish directory: `App/dist`
- Build command: `cd App && npm install && npm run build`
- SPA routing configured

### AWS Amplify
The project includes an `amplify.yml` configuration file with:
- Pre-build: Navigate to App directory and install dependencies
- Build: Execute npm build command
- Artifacts: Publish from `App/dist`
- Caching: Node modules cached for faster builds

## ✅ Code Quality

- ✅ TypeScript for type safety
- ✅ ESLint configuration for code quality
- ✅ Responsive design for mobile and desktop
- ✅ Clean component structure
- ✅ Modular code organization
- ✅ No linter errors
- ✅ Proper error handling

## 🎯 Key Achievements

1. ✅ Fully functional restaurant website with interactive menu
2. ✅ Successfully deployed to two cloud platforms (Netlify & AWS Amplify)
3. ✅ Responsive design working across all devices
4. ✅ Clean, maintainable codebase with TypeScript
5. ✅ Proper deployment configurations for both platforms
6. ✅ SPA routing configured correctly
7. ✅ All navigation links and features working as expected

## 🔮 Future Enhancements

- Integration with backend API for dynamic menu updates
- Online ordering system integration
- Payment gateway integration
- Customer reviews and ratings
- Image gallery with actual restaurant photos
- Social media integration
- Email notification system for reservations
- Admin dashboard for menu management

## 📄 License

This project is private and proprietary.

## 👤 Author

Developed with modern web development practices, cloud deployment expertise, and attention to user experience and code quality.

---

**Status**: ✅ Complete and Deployed | **Date**: November 2024
