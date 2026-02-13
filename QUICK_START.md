# Quick Start Guide - Khorasan Mobile

## 🚀 Getting Started in 3 Steps

### Step 1: Navigate to Project Directory
```bash
cd Khorasan-mobile/khorasan-mobile-app
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Run Development Server
```bash
npm start
```

Your browser will automatically open to `http://localhost:3000`

## 📱 Available Pages

Once the app is running, you can navigate to:

- **Homepage**: `http://localhost:3000/`
- **About Us**: `http://localhost:3000/about`
- **Product Detail**: `http://localhost:3000/product/1`
- **Category**: `http://localhost:3000/category/mobile`
- **Shopping Cart**: `http://localhost:3000/cart`
- **Contact**: `http://localhost:3000/contact`

## 🛠️ Common Commands

### Development
```bash
npm start          # Start development server
npm test           # Run tests
npm run build      # Build for production
```

### Troubleshooting

**Port 3000 already in use?**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port
set PORT=3001 && npm start
```

**Dependencies not installing?**
```bash
# Clear npm cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Make sure you're in the correct directory
cd khorasan-mobile-app

# Check Node version (should be 14+)
node --version

# Reinstall dependencies
npm install
```

## 📦 Project Structure Overview

```
khorasan-mobile-app/
├── src/
│   ├── components/     # Reusable components (Header, Footer)
│   ├── pages/          # Page components (Home, About, etc.)
│   ├── App.js          # Main app with routing
│   └── index.js        # Entry point
├── public/             # Static files
└── package.json        # Dependencies
```

## 🎨 Customization Tips

### Change Primary Color
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: "#3c0f8f",  // Change this hex code
}
```

### Add New Page
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.js`:
```javascript
<Route path="/new" element={<NewPage />} />
```

### Modify Header/Footer
Edit files in `src/components/`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Run `npm run build`
2. Drag `build/` folder to [netlify.com/drop](https://app.netlify.com/drop)

## 📞 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review the code comments in each component
- Contact: Mohammad Aqa Noori

## ✅ Checklist

- [ ] Node.js installed (v14+)
- [ ] Git installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Development server running (`npm start`)
- [ ] Browser opened to localhost:3000

---

**Happy Coding! 🎉**
