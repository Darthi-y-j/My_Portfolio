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

