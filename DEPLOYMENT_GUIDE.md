# Khorasan Mobile - Deployment Guide

## Prerequisites
- Git installed on your computer
- GitHub account
- Netlify account (free tier is sufficient)

## Step 1: Prepare Your Repository

### Files to Keep:
✅ All files in `khorasan-mobile-app/` folder
✅ README.md, PROJECT_SUMMARY.md, QUICK_START.md
✅ .gitignore file

### Files Already Excluded (by .gitignore):
- `node_modules/` - Will be installed during build
- `build/` - Will be generated during deployment
- `.env` files
- Log files

## Step 2: Push to GitHub

1. **Check your current status:**
   ```bash
   cd Khorasan-mobile
   git status
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Commit your changes:**
   ```bash
   git commit -m "Prepare for deployment - Complete Khorasan Mobile website"
   ```

4. **Push to GitHub:**
   ```bash
   git push origin main
   ```
   
   (If your branch is named `master`, use `git push origin master`)

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify:**
   - Visit https://app.netlify.com/
   - Sign in with your GitHub account

2. **Create New Site:**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your repositories
   - Select your `Khorasan-mobile` repository

3. **Configure Build Settings:**
   ```
   Base directory: khorasan-mobile-app
   Build command: npm run build
   Publish directory: khorasan-mobile-app/build
   ```

4. **Deploy:**
   - Click "Deploy site"
   - Wait 2-3 minutes for the build to complete
   - Your site will be live at: `https://random-name-123.netlify.app`

5. **Custom Domain (Optional):**
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Follow instructions to connect your domain

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Navigate to your app:**
   ```bash
   cd khorasan-mobile-app
   ```

4. **Build your app:**
   ```bash
   npm run build
   ```

5. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

## Step 4: Verify Deployment

After deployment, test these pages:
- ✅ Home page: `/`
- ✅ About page: `/about`
- ✅ Products: `/category/mobile`
- ✅ Product details: `/product/1`, `/product/2`, etc.
- ✅ Cart: `/cart`
- ✅ Contact: `/contact`
- ✅ Profile: `/profile`
- ✅ Language switching (دری ↔ پښتو)

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node version is 16 or higher
- Check build logs in Netlify dashboard

### 404 Errors on Page Refresh
- Verify `_redirects` file exists in `public/` folder
- Check `netlify.toml` configuration

### Styling Issues
- Clear browser cache
- Check that Tailwind CSS is properly configured
- Verify all CSS files are imported

## Environment Variables (If Needed)

If you add API keys or secrets later:

1. In Netlify Dashboard:
   - Go to "Site settings" → "Environment variables"
   - Add your variables (e.g., `REACT_APP_API_KEY`)

2. In your code:
   ```javascript
   const apiKey = process.env.REACT_APP_API_KEY;
   ```

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically triggers a new deployment
- Pull requests create preview deployments
- You can rollback to previous deployments anytime

## Your Site is Ready! 🎉

Your Khorasan Mobile website is now live and accessible worldwide!

Share your link:
- `https://your-site-name.netlify.app`
- Or your custom domain

---

**Need Help?**
- Netlify Docs: https://docs.netlify.com/
- React Deployment: https://create-react-app.dev/docs/deployment/
