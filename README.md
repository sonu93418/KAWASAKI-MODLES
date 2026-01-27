# 🏍️ Kawasaki Ninja 3D Showcase

A modern, interactive 3D website showcasing Kawasaki Ninja motorcycles with React Three Fiber, Framer Motion, and GSAP animations.

## ✨ Features

- **3D Interactive Models**: Fully interactive 3D Kawasaki Ninja models with realistic lighting and shadows
- **Smooth Animations**: Advanced animations using Framer Motion and GSAP for UI and camera movements
- **Model Selector**: Switch between 5 different Ninja models with smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Premium UI**: Dark theme with Kawasaki green accents and modern typography
- **Performance Optimized**: Preloaded models and efficient rendering

## 🚀 Tech Stack

- **React 18** - Latest React with hooks and suspense
- **TypeScript** - Type-safe development
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions for R3F
- **Framer Motion** - Production-ready motion library for React
- **GSAP (GreenSock)** - Advanced animations for 3D scenes and camera movements
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
src/
├── main.tsx                 # App entry point
├── App.tsx                  # Main app component with state management
├── index.css               # Global styles and Tailwind imports
├── data/
│   └── bikeModels.ts       # Bike models data and types
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── HeroSection.tsx     # Hero section with 3D viewer
│   ├── BikeViewer3D.tsx    # Main 3D model viewer component
│   ├── BikeSelector.tsx    # Model selection cards
│   ├── SpecsPanel.tsx      # Technical specifications display
│   └── Footer.tsx          # Footer with contact info
└── animations/
    └── gsapAnimations.ts   # GSAP animation utilities and timelines
```

## 🛠️ Installation

1. **Clone or create the project directory:**
   ```bash
   mkdir kawasaki-ninja-3d && cd kawasaki-ninja-3d
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add 3D model files:**
   Create a `public/models/` directory and add your GLB/GLTF files:
   ```
   public/
   └── models/
       ├── ninja_300.glb
       ├── ninja_400.glb
       ├── ninja_650.glb
       ├── ninja_zx6r.glb
       └── ninja_zx10r.glb
   ```

4. **Add thumbnail images (optional):**
   ```
   public/
   └── images/
       ├── ninja-300-thumb.jpg
       ├── ninja-400-thumb.jpg
       ├── ninja-650-thumb.jpg
       ├── ninja-zx6r-thumb.jpg
       └── ninja-zx10r-thumb.jpg
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   ```

## 🎮 Usage

### 3D Viewer Controls
- **Drag**: Rotate the camera around the model
- **Scroll/Pinch**: Zoom in and out
- **Auto-rotate**: Disabled by default, models have subtle floating animations

### Model Selection
- Click on any bike card to switch models
- Smooth camera transitions and model animations
- Real-time spec updates

### Responsive Behavior
- **Desktop**: Side-by-side layout with 3D viewer and content
- **Mobile**: Stacked layout with touch-friendly controls
- **Tablet**: Optimized middle-ground layout

## 🎨 Customization

### Adding New Bike Models

1. **Add model data** in `src/data/bikeModels.ts`:
   ```typescript
   {
     id: 'new-model',
     name: 'New Model Name',
     modelFile: '/models/new_model.glb',
     engine: '600cc Inline-4',
     power: '120 HP @ 12,000 RPM',
     torque: '80 Nm @ 10,000 RPM',
     mileage: '18-22 km/l',
     price: '$12,999',
     description: 'Description of the new model',
     image: '/images/new-model-thumb.jpg'
   }
   ```

2. **Update camera positions** in `src/animations/gsapAnimations.ts`:
   ```typescript
   const positions = {
     'new-model': { x: 4, y: 1.5, z: 4 },
     // ... existing positions
   }
   ```

### Styling Customization

The project uses Tailwind CSS with custom color variables defined in `tailwind.config.js`:

```javascript
colors: {
  kawasaki: {
    green: '#00FF41',  // Primary brand color
    dark: '#0A0A0A',   // Dark background
    gray: {
      900: '#111111',  // Card backgrounds
      800: '#1a1a1a',  // Secondary backgrounds
      // ... more grays
    }
  }
}
```

### Animation Customization

Modify animations in:
- **Framer Motion**: Component-level animations in individual components
- **GSAP**: 3D scene animations in `src/animations/gsapAnimations.ts`

## 🔧 Development Notes

### Model Requirements
- **Format**: GLB or GLTF
- **Size**: Optimized for web (< 5MB per model recommended)
- **Positioning**: Models should be centered at origin (0,0,0)
- **Scale**: Adjust scale in `BikeViewer3D.tsx` if needed

### Performance Tips
- Models are preloaded for smooth switching
- Use `React.memo()` for heavy components
- Optimize textures and geometry in your 3D software
- Consider using Draco compression for GLB files

### Browser Support
- **Modern browsers** with WebGL 2.0 support
- **Mobile Safari**: iOS 12+
- **Chrome/Firefox**: Last 2 versions
- **Edge**: Chromium-based versions

## 🚧 Known Issues & Limitations

1. **3D Model Loading**: Placeholder paths are used - you need to provide actual GLB/GLTF files
2. **Mobile Performance**: Complex models may affect performance on older mobile devices
3. **Loading States**: Basic loading indicators - can be enhanced with progress tracking

## 📝 Future Enhancements

- [ ] Add sound effects for interactions
- [ ] Implement AR/VR viewing modes
- [ ] Add configurator for bike colors/accessories
- [ ] Integrate with CMS for dynamic content
- [ ] Add performance analytics
- [ ] Implement lazy loading for models
- [ ] Add bike comparison feature

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📜 License

This project is for demonstration purposes. Kawasaki is a registered trademark of Kawasaki Motors Corp.

## 🙏 Acknowledgments

- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **GSAP** - Professional animation library
- **Tailwind CSS** - Utility-first CSS framework

---

**Note**: This is a showcase project. Replace placeholder 3D models with actual Kawasaki Ninja GLB/GLTF files for full functionality.# KAWASAKI-MODLES
