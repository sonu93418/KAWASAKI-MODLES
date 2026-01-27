#!/bin/bash

echo "🏍️  Setting up Kawasaki Ninja 3D Showcase..."
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "📁 Creating required directories..."
mkdir -p public/models
mkdir -p public/images

echo ""
echo "📄 Creating placeholder model files..."
echo "// Placeholder - Replace with actual GLB files" > public/models/README.txt
echo "// Add your Kawasaki Ninja GLB/GLTF models here:" >> public/models/README.txt
echo "// - ninja_300.glb" >> public/models/README.txt
echo "// - ninja_400.glb" >> public/models/README.txt
echo "// - ninja_650.glb" >> public/models/README.txt
echo "// - ninja_zx6r.glb" >> public/models/README.txt
echo "// - ninja_zx10r.glb" >> public/models/README.txt

echo "// Placeholder - Replace with actual thumbnail images" > public/images/README.txt
echo "// Add your bike thumbnail images here:" >> public/images/README.txt
echo "// - ninja-300-thumb.jpg" >> public/images/README.txt
echo "// - ninja-400-thumb.jpg" >> public/images/README.txt
echo "// - ninja-650-thumb.jpg" >> public/images/README.txt
echo "// - ninja-zx6r-thumb.jpg" >> public/images/README.txt
echo "// - ninja-zx10r-thumb.jpg" >> public/images/README.txt

echo ""
echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Add your GLB/GLTF model files to public/models/"
echo "2. Add thumbnail images to public/images/ (optional)"
echo "3. Run 'npm run dev' to start the development server"
echo ""
echo "🚀 Ready to ride with the Ninja 3D showcase!"
echo ""