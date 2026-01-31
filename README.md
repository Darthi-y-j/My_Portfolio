# Darthi Portfolio - React App

This is a modern React portfolio website built with Vite, React, and Tailwind CSS.

## Prerequisites

Before running this project, make sure you have:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - The app will be available at `http://localhost:5173`
   - Vite will automatically open it for you

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Project Structure

```
My_Portfolio/
├── src/
│   ├── App.jsx          # Main React component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Features

- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🎭 3D Neural Network Background (Three.js)
- 📱 Fully Responsive Design
- 🎯 Smooth Scroll Animations
- 🔥 React Hooks & Components

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Module Not Found Errors
If you encounter module errors, try:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Windows PowerShell Issues
If you're on Windows and having issues, try using Git Bash or Command Prompt instead of PowerShell.

## Building for Production

To create a production build:
```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy to any static hosting service.

## Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it (e.g., `my-portfolio` or `darthi-portfolio`)
4. Choose **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these)
6. Click **"Create repository"**

### Step 2: Push to GitHub

Run these commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

**Option A: Using GitHub Actions (Recommended)**

1. Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Commit and push:
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Pages deployment"
git push
```

**Option B: Manual Deploy**

1. Build the project:
```bash
npm run build
```

2. Go to your repository → **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"** or **"Deploy from a branch"**
4. Select `main` branch and `/dist` folder
5. Click **Save**

### Step 4: Access Your Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## Alternative: Deploy to Vercel/Netlify

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Build: `npm run build`
3. Deploy: `netlify deploy --prod --dir=dist`

