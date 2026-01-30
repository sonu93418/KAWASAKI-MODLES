<div align="center">

# 🏍️ Kawasaki Ninja 3D Showcase

### Experience the Future of Motorcycle Showrooms

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/sonu93418/KAWASAKI-MODLES)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.2-61dafb.svg)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/Three.js-0.160-black.svg?logo=three.js" alt="Three.js"/>
  <img src="https://img.shields.io/badge/Vite-5.0-646CFF.svg?logo=vite" alt="Vite"/>
  <img src="https://img.shields.io/badge/TailwindCSS-3.3-06B6D4.svg?logo=tailwindcss" alt="Tailwind"/>
</p>

[Live Demo](#) • [Report Bug](https://github.com/sonu93418/KAWASAKI-MODLES/issues) • [Request Feature](https://github.com/sonu93418/KAWASAKI-MODLES/issues)


</div>

<div align="center">
  <img src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" alt="Kawasaki Ninja Animated" width="320"/>
</div>

<div align="center">
  <h3>🚀 <a href="https://model.sonuray.me" target="_blank">Live 3D Demo</a> | Developed by <b>Sonu Kumar Ray</b></h3>
  <img src="https://img.shields.io/badge/sonuray.me-Visit-green?style=for-the-badge" alt="Sonu Kumar Ray"/>
</div>

## 🌟 Overview

An immersive, production-ready 3D web application showcasing Kawasaki Ninja motorcycles with cutting-edge web technologies. Features interactive 3D models, smooth animations, and a premium user interface optimized for all devices.

<div align="center">
  <img src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif" alt="Animated Motorcycle" width="220"/>
</div>

## ✨ Key Features

🎮 **Interactive 3D Models** - Fully explorable motorcycle models with realistic lighting and shadows  
🎬 **Cinematic Animations** - Smooth transitions powered by Framer Motion and GSAP  
🏍️ **5 Ninja Models** - From entry-level 300 to the legendary ZX-10R  
📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices  
⚡ **Lightning Fast** - Built with Vite for optimal performance  
🎨 **Premium UI/UX** - Dark theme with signature Kawasaki green accents  
🔧 **TypeScript** - Type-safe codebase for reliability and maintainability  

## 🚀 Tech Stack

<table>
<tr>
<td width="50%">

**Frontend Framework**
- React 18.2 - Modern React with Concurrent Features
- TypeScript 5.2 - Type-safe development
- Vite 5.0 - Next-gen build tool

**3D Graphics**
- Three.js 0.160 - WebGL 3D library
- React Three Fiber 8.15 - React renderer for Three.js
- @react-three/drei 9.88 - R3F helpers & components

</td>
<td width="50%">

**Animation Libraries**
- Framer Motion 10.16 - Production-ready animations
- GSAP 3.12 - Professional-grade timelines

**Styling**
- Tailwind CSS 3.3 - Utility-first CSS
- PostCSS - CSS transformations
- Autoprefixer - Browser compatibility

</td>
</tr>
</table>

## 📁 Project Structure

```
kawasaki-ninja-3d-showcase/
├── 📂 public/
│   ├── 📂 images/           # Motorcycle thumbnails and assets
│   └── 📂 models/           # 3D models (.glb/.gltf files)
├── 📂 src/
│   ├── 📂 components/
│   │   ├── App.tsx                      # Main application component
│   │   ├── Navbar.tsx                   # Navigation with mobile menu
│   │   ├── InteractiveHeroSection.tsx   # Hero with mouse tracking
│   │   ├── BikeSelector.tsx             # Model selection cards
│   │   ├── BikeViewer3D.tsx             # 3D viewer with Three.js
│   │   ├── SpecsPanel.tsx               # Technical specifications
│   │   ├── Footer.tsx                   # Footer section
│   │   └── ErrorBoundary.tsx            # Error handling
│   ├── 📂 data/
│   │   └── bikeModels.ts                # Bike models data & types
│   ├── 📂 animations/
│   │   └── gsapAnimations.ts            # GSAP animation utilities
│   ├── 📂 utils/
│   │   └── performanceConfig.ts         # Performance settings
│   ├── main.tsx                         # Application entry point
│   └── index.css                        # Global styles & Tailwind
├── index.html                           # HTML entry point
├── tailwind.config.js                   # Tailwind configuration
├── tsconfig.json                        # TypeScript configuration
├── vite.config.ts                       # Vite build configuration
└── package.json                         # Dependencies & scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/sonu93418/KAWASAKI-MODLES.git
cd KAWASAKI-MODLES

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser
# Visit: http://localhost:5173
```

## 📦 Build Process

### Development Build
```bash
# Start dev server with hot reload
npm run dev
```
- Fast HMR (Hot Module Replacement)
- Source maps for debugging
- Development optimizations

### Production Build
```bash
# Build optimized production bundle
npm run build
```

**Build Process:**
1. ✅ TypeScript compilation (`tsc`)
2. ✅ Vite bundling & optimization
3. ✅ Asset minification
4. ✅ Code splitting
5. ✅ Tree shaking
6. ✅ Output to `/dist` folder

**Build Output:**
```
dist/
├── index.html                    # Entry HTML (minified)
├── assets/
│   ├── index-[hash].js          # Main JS bundle (~287KB gzipped: 90KB)
│   └── index-[hash].css         # Styles (~44KB gzipped: 7KB)
├── images/                       # Optimized images
└── models/                       # 3D model files
```

### Preview Production Build
```bash
# Build and preview locally
npm run build
npm run preview
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on port 5173 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Build Settings for Vercel:**
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Node Version:** 18.x

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Build Settings for Netlify:**
- **Build Command:** `npm run build`
- **Publish Directory:** `dist`

## 🎮 Usage Guide

### 3D Viewer Controls
- **🖱️ Drag:** Rotate camera around the motorcycle
- **🔍 Scroll/Pinch:** Zoom in and out
- **📱 Touch:** Fully touch-optimized for mobile

### Model Selection
- Click any bike card to switch models
- Smooth camera transitions between models
- Real-time specification updates

### Responsive Breakpoints
- **Desktop (1024px+):** Side-by-side layout
- **Tablet (768px-1023px):** Optimized stacked layout
- **Mobile (<768px):** Touch-friendly compact view

## 🎨 Customization

### Adding New Bike Models

**Step 1:** Add model data in `src/data/bikeModels.ts`
```typescript
export const bikeModels: BikeModel[] = [
  // ... existing models
  {
    id: 'ninja-h2',
    name: 'Ninja H2',
    modelFile: '/models/ninja_h2.glb',
    engine: '998cc Supercharged Inline-4',
    power: '228 HP @ 11,500 RPM',
    torque: '142 Nm @ 10,500 RPM',
    topSpeed: '337 km/h',
    weight: '238 kg',
    price: '$29,000',
    description: 'Supercharged performance monster',
    image: '/images/ninja-h2.jpg'
  }
]
```

**Step 2:** Add 3D model to `public/models/ninja_h2.glb`

### Color Customization

Edit `tailwind.config.js` for brand colors:
```javascript
theme: {
  extend: {
    colors: {
      'kawasaki-green': '#00FF41',
      'kawasaki-dark': '#0A0A0A',
      // Add custom colors
    }
  }
}
```

## ⚙️ Performance Optimization

### Build Optimizations
- ✅ Code splitting for lazy loading
- ✅ Tree shaking for minimal bundle size
- ✅ Asset compression (gzip/brotli)
- ✅ CSS purging via Tailwind

### Runtime Optimizations
- React.memo() for expensive components
- Suspense boundaries for 3D models
- Debounced mouse tracking
- Optimized re-renders

### 3D Model Guidelines
- **Format:** GLB (recommended) or GLTF
- **File Size:** < 5MB per model
- **Textures:** Compressed (< 2048px)
- **Geometry:** Optimized polygon count
- **Compression:** Use Draco compression

## 🔧 Configuration

### Environment Variables
Create `.env` file in root:
```env
VITE_API_URL=your_api_url
VITE_ANALYTICS_ID=your_analytics_id
```

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured
- Module resolution: ESNext

### Vite Configuration
- React plugin with Fast Refresh
- Build optimizations enabled
- Asset inlining for small files

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Fully Supported |
| Firefox | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Edge | 90+ | ✅ Fully Supported |
| Mobile Safari | iOS 14+ | ✅ Fully Supported |
| Chrome Mobile | Android 8+ | ✅ Fully Supported |

**Requirements:**
- WebGL 2.0 support
- ES6+ JavaScript
- CSS Grid & Flexbox

## 📊 Performance Metrics

**Lighthouse Scores (Production Build):**
- 🟢 Performance: 95+
- 🟢 Accessibility: 100
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

**Bundle Analysis:**
- Main JS: ~287 KB (gzipped: ~90 KB)
- CSS: ~44 KB (gzipped: ~7 KB)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.0s

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**TypeScript Errors:**
```bash
# Ensure TypeScript is properly configured
npm run build  # This runs tsc before vite build
```

**3D Models Not Loading:**
- Verify model files are in `public/models/`
- Check file paths in `bikeModels.ts`
- Ensure GLB/GLTF format

**Performance Issues:**
- Reduce model complexity
- Compress textures
- Enable Draco compression
- Use lower poly models on mobile

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Maintain consistent code style
- Add comments for complex logic
- Test on multiple devices
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** Kawasaki is a registered trademark of Kawasaki Heavy Industries, Ltd. This project is for educational and demonstration purposes only.

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [Three.js](https://threejs.org/) - JavaScript 3D library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- [GSAP](https://greensock.com/gsap/) - Professional-grade JavaScript animation
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## 📞 Support

- 📧 Email: sonukumarray1009@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/sonu93418/KAWASAKI-MODLES/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/sonu93418/KAWASAKI-MODLES/discussions)

---


---

<div align="center">
  <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="Animated Heart" width="120"/>
  <h2 style="color:#00FF41;">Thank you! ❤️</h2>
</div>

## Built with ❤️ for the motorcycle community

### Created by [Sonu Kumar Ray](https://model.sonuray.me)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-model.sonuray.me-green?style=for-the-badge)](https://model.sonuray.me)

**Enjoy the ride! 🏍️**

[⬆ Back to Top](#-kawasaki-ninja-3d-showcase)
