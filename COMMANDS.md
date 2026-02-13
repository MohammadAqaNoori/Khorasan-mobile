# Quick Command Reference

## Git Commands

### Check Status
```bash
git status
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Your commit message here"
```

### Push to GitHub
```bash
git push origin main
```
(Use `master` instead of `main` if that's your branch name)

### Check Remote URL
```bash
git remote -v
```

## NPM Commands

### Install Dependencies
```bash
cd khorasan-mobile-app
npm install
```

### Start Development Server
```bash
npm start
```
Opens at: http://localhost:3000

### Build for Production
```bash
npm run build
```
Creates optimized build in `build/` folder

### Run Tests
```bash
npm test
```

## Netlify CLI Commands (Optional)

### Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Login to Netlify
```bash
netlify login
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

### Open Netlify Dashboard
```bash
netlify open
```

## Troubleshooting Commands

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check Node Version
```bash
node --version
```
(Should be 16 or higher)

### Check npm Version
```bash
npm --version
```

## File Operations

### Navigate to Project
```bash
cd "f:/Algoryum/khurasan mobile/Khorasan-mobile"
```

### Navigate to App Folder
```bash
cd khorasan-mobile-app
```

### Go Back One Directory
```bash
cd ..
```

### List Files
```bash
dir          # Windows CMD
ls           # Git Bash/PowerShell
```

## Quick Deployment Workflow

```bash
# 1. Navigate to project
cd Khorasan-mobile

# 2. Check what's changed
git status

# 3. Add all changes
git add .

# 4. Commit with message
git commit -m "Ready for deployment"

# 5. Push to GitHub
git push origin main

# 6. Go to Netlify dashboard and deploy
# OR use CLI:
cd khorasan-mobile-app
npm run build
netlify deploy --prod
```

## Emergency Commands

### Undo Last Commit (before push)
```bash
git reset --soft HEAD~1
```

### Discard All Local Changes
```bash
git reset --hard HEAD
```

### Stop Development Server
Press `Ctrl + C` in the terminal

### Kill Process on Port 3000 (if stuck)
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

---

**Keep this file handy for quick reference!**
