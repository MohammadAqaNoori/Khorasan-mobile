# Khorasan Mobile - خراسان موبایل

A modern, responsive e-commerce website for mobile phones and technology products in Afghanistan, built with React and Tailwind CSS.

## 🌟 Project Overview

Khorasan Mobile is a demo frontend website created for Algoryum startup company to showcase an online mobile services platform for Afghanistan. The website features a clean, modern design with full RTL (Right-to-Left) support for Dari/Pashto languages.

## 🎯 Features

### Pages Included
1. **Homepage** - Hero section, featured products, categories, trust badges, and newsletter signup
2. **About Us** - Company story, mission, vision, and core values
3. **Product Detail** - Detailed product information with image gallery, specifications, and purchase options
4. **Category Page** - Product listing with filters (brand, RAM, storage) and sorting options
5. **Shopping Cart** - Cart management with quantity controls and order summary
6. **Contact Page** - Contact form, WhatsApp integration, location map, and business hours

### Key Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ RTL (Right-to-Left) layout support for Dari/Pashto
- ✅ Dark mode support
- ✅ Modern UI with Tailwind CSS
- ✅ React Router for navigation
- ✅ Material Icons integration
- ✅ Product filtering and sorting
- ✅ Shopping cart functionality
- ✅ WhatsApp integration for customer support
- ✅ Trust badges and security features
- ✅ Newsletter subscription
- ✅ Multi-language support (Dari/Pashto toggle)

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Icons**: Google Material Icons
- **Fonts**: Inter (Google Fonts)
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/MohammadAqaNoori/Khorasan-mobile.git
cd Khorasan-mobile/khorasan-mobile-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm start
```

The application will open at `http://localhost:3000`

4. **Build for production**
```bash
npm run build
```

## 📁 Project Structure

```
khorasan-mobile-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Global navigation header
│   │   └── Footer.jsx          # Global footer
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page
│   │   ├── AboutPage.jsx       # About us page
│   │   ├── ProductDetailPage.jsx  # Product details
│   │   ├── CategoryPage.jsx    # Product category listing
│   │   ├── CartPage.jsx        # Shopping cart
│   │   └── ContactPage.jsx     # Contact form
│   ├── App.js                  # Main app component with routing
│   ├── index.js                # React entry point
│   └── index.css               # Global styles with Tailwind
├── tailwind.config.js          # Tailwind configuration
├── package.json
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: `#3c0f8f` (Purple)
- **Background Light**: `#f6f6f8`
- **Background Dark**: `#171121`

### Typography
- **Font Family**: Inter (system-ui fallback)
- **RTL Support**: Full support for Dari/Pashto text

### Components
- Responsive grid layouts
- Card-based product displays
- Modal-ready architecture
- Form components with validation styling
- Button variants (primary, secondary, outline)

## 🌐 Supported Languages

- **Dari (دری)** - Primary language
- **Pashto (پښتو)** - Secondary language
- Language toggle in header

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized production build will be in the `build/` directory.

### Deployment Options
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use `gh-pages` package
- **Traditional Hosting**: Upload build folder to your web server

## 🔧 Configuration

### Tailwind CSS
Customize colors, fonts, and other design tokens in `tailwind.config.js`

### Routing
Add or modify routes in `src/App.js`

### API Integration
Currently using static data. To integrate with a backend:
1. Create an `api/` directory
2. Add API service files
3. Replace static data with API calls
4. Add state management (Redux/Context API)

## 📊 Features Roadmap

### Phase 1 (Current - Demo)
- ✅ Static frontend pages
- ✅ Responsive design
- ✅ RTL support

### Phase 2 (Future)
- ⏳ Backend API integration
- ⏳ User authentication
- ⏳ Real payment gateway
- ⏳ Order management system
- ⏳ Admin dashboard
- ⏳ Product search functionality
- ⏳ User reviews and ratings
- ⏳ Wishlist feature
- ⏳ Email notifications

### Phase 3 (Advanced)
- ⏳ Mobile app (React Native)
- ⏳ Real-time inventory management
- ⏳ Multi-vendor support
- ⏳ Advanced analytics
- ⏳ AI-powered recommendations

## 🤝 Contributing

This is a demo project for Algoryum startup. For contributions or suggestions:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created as a demo for Algoryum startup company.

## 👥 About Algoryum

Algoryum is a startup company specializing in creating modern websites,  mobile applications, AI chatbots, and whatsApp aoutomations for businesses. This project serves as a demonstration of our capabilities in building e-commerce platforms.

## 📞 Contact

**Project Creator**: Mohammad Aqa Noori
**GitHub**: [@MohammadAqaNoori](https://github.com/MohammadAqaNoori)
**Repository**: [Khorasan Mobile](https://github.com/MohammadAqaNoori/Khorasan-mobile)

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Tailwind CSS for the utility-first CSS framework
- React community for excellent documentation
- Google Fonts for Inter typeface
- Material Design for icon system

---

**Built with ❤️ by Algoryum for the Afghan tech community**
