import { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { 
  OrbitControls, 
  Environment, 
  PresentationControls,
  Stage
} from '@react-three/drei'
import { gsapAnimations } from '../animations/gsapAnimations'
import { BikeModel } from '../data/bikeModels'

// interface BikeModelProps {
//   selectedModel: BikeModel
//   onModelLoad?: (model: THREE.Group) => void
// }

function PlaceholderBike() {
  const bikeRef = useRef<THREE.Group>(null)
  const frontWheelRef = useRef<THREE.Group>(null)
  const rearWheelRef = useRef<THREE.Group>(null)
  
  useFrame((state: any) => {
    if (bikeRef.current) {
      // Smooth rotation with consistent timing
      bikeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      // Gentle floating motion
      bikeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.03
    }
    
    // Wheel rotation animations
    if (frontWheelRef.current) {
      frontWheelRef.current.rotation.x += 0.02
    }
    if (rearWheelRef.current) {
      rearWheelRef.current.rotation.x += 0.02
    }
  })
  
  return (
    <group ref={bikeRef}>
      {/* Main body with enhanced materials */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.6, 4]} />
        <meshStandardMaterial 
          color={0x00FF41}
          transparent 
          opacity={0.9}
          metalness={0.8}
          roughness={0.2}
          emissive={0x003311}
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Animated front wheel */}
      <group ref={frontWheelRef} position={[0, -0.3, 1.8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.15, 16]} />
          <meshPhongMaterial color={0x222222} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.16, 8]} />
          <meshPhongMaterial color={0x666666} />
        </mesh>
      </group>
      
      {/* Animated rear wheel */}
      <group ref={rearWheelRef} position={[0, -0.3, -1.8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.15, 16]} />
          <meshPhongMaterial color={0x222222} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.16, 8]} />
          <meshPhongMaterial color={0x666666} />
        </mesh>
      </group>
      
      {/* Enhanced components */}
      <mesh position={[0, 0.8, 1.2]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.2, 8]} />
        <meshPhongMaterial color={0x333333} />
      </mesh>
      
      <mesh position={[0, 0.4, -0.5]}>
        <boxGeometry args={[0.6, 0.2, 1.2]} />
        <meshPhongMaterial color={0x1a1a1a} />
      </mesh>
      
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1.2, 0.8, 1.5]} />
        <meshStandardMaterial 
          color={0x444444}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Animated pulsing indicator */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial 
          color={0x00FF41}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  )
}

// Enhanced model component with smooth animations
function SafeModelComponent({ selectedModel, onLoad }: { selectedModel: BikeModel, onLoad?: (group: THREE.Group) => void }) {
  const modelRef = useRef<THREE.Group>(null)
  const frontWheelRef = useRef<THREE.Group>(null)
  const rearWheelRef = useRef<THREE.Group>(null)
  
  useEffect(() => {
    // Simulate model loading completion for animations
    if (modelRef.current && onLoad) {
      onLoad(modelRef.current)
    }
  }, [onLoad])
  
  // Smooth wheel rotation animations
  useFrame(() => {
    if (frontWheelRef.current) {
      frontWheelRef.current.rotation.z += 0.01
    }
    if (rearWheelRef.current) {
      rearWheelRef.current.rotation.z += 0.01
    }
  })
  

  
  return (
    <group ref={modelRef}>
      {/* Use enhanced placeholder bike with SVG-like appearance */}
      <group>
        {/* Main body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 0.8, 1.6]} />
          <meshStandardMaterial 
            color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
            transparent 
            opacity={0.9}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Front wheel with smooth animations */}
        <group ref={frontWheelRef} position={[1.4, -0.4, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 0.18, 16]} />
            <meshPhongMaterial color={0x222222} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.19, 8]} />
            <meshPhongMaterial 
              color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
              emissive={selectedModel.id.includes('zx') ? 0x002211 : 0x002211}
              emissiveIntensity={0.1}
            />
          </mesh>
          {/* Enhanced spokes */}
          <group rotation={[Math.PI / 2, 0, 0]}>
            {Array.from({ length: 6 }).map((_, i) => (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
                <boxGeometry args={[0.02, 0.6, 0.02]} />
                <meshStandardMaterial 
                  color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            ))}
          </group>
        </group>
        
        {/* Rear wheel with smooth animations */}
        <group ref={rearWheelRef} position={[-1.4, -0.4, 0]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.45, 0.45, 0.18, 16]} />
            <meshPhongMaterial color={0x222222} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 0.19, 8]} />
            <meshPhongMaterial 
              color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
              emissive={selectedModel.id.includes('zx') ? 0x002211 : 0x002211}
              emissiveIntensity={0.1}
            />
          </mesh>
          {/* Enhanced spokes */}
          <group rotation={[Math.PI / 2, 0, 0]}>
            {Array.from({ length: 6 }).map((_, i) => (
              <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
                <boxGeometry args={[0.02, 0.6, 0.02]} />
                <meshStandardMaterial 
                  color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
                  metalness={0.8}
                  roughness={0.2}
                />
              </mesh>
            ))}
          </group>
        </group>
        
        {/* Fuel tank */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.6, 12, 8]} />
          <meshStandardMaterial 
            color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Front fairing */}
        <mesh position={[1.8, 0, 0]} rotation={[0, -0.3, 0]}>
          <boxGeometry args={[0.8, 1.2, 0.6]} />
          <meshStandardMaterial 
            color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        
        {/* Windscreen */}
        <mesh position={[2, 0.8, 0]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[0.3, 0.8, 0.4]} />
          <meshPhysicalMaterial 
            color={0x00FF41}
            transparent
            opacity={0.3}
            transmission={0.8}
          />
        </mesh>
        
        {/* Handlebars */}
        <mesh position={[1.8, 0.6, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
          <meshPhongMaterial color={0x333333} />
        </mesh>
        
        {/* Seat */}
        <mesh position={[-0.3, 0.3, 0]}>
          <boxGeometry args={[0.8, 0.15, 0.4]} />
          <meshPhongMaterial color={0x1a1a1a} />
        </mesh>
        
        {/* Engine block */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.8, 0.9, 1]} />
          <meshStandardMaterial 
            color={0x444444}
            metalness={0.95}
            roughness={0.05}
          />
        </mesh>
        
        {/* Exhaust */}
        <mesh position={[-2, -0.2, 0.3]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.08, 0.06, 0.4, 8]} />
          <meshStandardMaterial 
            color={0x666666}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        
        {/* Headlight */}
        <mesh position={[2.2, 0.1, 0]}>
          <sphereGeometry args={[0.12, 8, 6]} />
          <meshBasicMaterial 
            color={0xffffff}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Model identifier light */}
        <mesh position={[0, 0.8, 0]}>
          <sphereGeometry args={[0.04, 6, 4]} />
          <meshBasicMaterial 
            color={selectedModel.id.includes('zx') ? 0x00FF41 : 0x40FF70}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Brand text (simulated with a small floating element) */}
        <mesh position={[0, 0.05, 0.41]}>
          <boxGeometry args={[1.2, 0.08, 0.02]} />
          <meshBasicMaterial 
            color={0xffffff}
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  )
}



function BikeModel3D({ selectedModel, onModelLoad }: { selectedModel: BikeModel, onModelLoad?: (model: THREE.Group) => void }) {
  const groupRef = useRef<THREE.Group>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [animationsStarted, setAnimationsStarted] = useState(false)

  const handleModelLoad = (model: THREE.Group) => {
    if (onModelLoad) {
      onModelLoad(model)
    }
    
    // Start idle animations only once
    if (groupRef.current && !animationsStarted) {
      gsapAnimations.createFloatingAnimation(groupRef.current)
      gsapAnimations.createIdleRotation(groupRef.current)
      setAnimationsStarted(true)
    }
  }

  useEffect(() => {
    if (groupRef.current) {
      gsapAnimations.animateModelHover(groupRef.current, isHovered)
    }
  }, [isHovered])

  // Smooth frame-based animations that don't conflict with GSAP
  useFrame((state: any) => {
    if (groupRef.current && !animationsStarted) {
      // Only apply this if GSAP animations haven't started
      const subtleFloat = Math.sin(state.clock.elapsedTime * 0.4) * 0.02
      groupRef.current.position.y = subtleFloat
      
      // Very subtle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
    }
  })

  return (
    <group
      ref={groupRef}
      onPointerOver={() => setIsHovered(true)}
      onPointerOut={() => setIsHovered(false)}
    >
      <SafeModelComponent selectedModel={selectedModel} onLoad={handleModelLoad} />
    </group>
  )
}

interface LoadingSpinnerProps {
  progress?: number
}

function LoadingSpinner({ progress = 0 }: LoadingSpinnerProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-kawasaki-gray-900/80 backdrop-blur-sm rounded-xl">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <div className="text-kawasaki-green font-semibold">
          Preparing 3D View... {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
}

interface BikeViewer3DProps {
  selectedModel: BikeModel
  className?: string
}

export default function BikeViewer3D({ selectedModel, className = '' }: BikeViewer3DProps) {
  const [currentModel, setCurrentModel] = useState<THREE.Group | null>(null)
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [hasLoadingError, setHasLoadingError] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const cameraRef = useRef<THREE.Camera>()

  const handleModelLoad = (model: THREE.Group) => {
    try {
      setCurrentModel(model)
      setLoading(false)
      setHasLoadingError(false)
      
      // Animate model entrance
      gsapAnimations.animateModelSwitch({ model })
    } catch (error) {
      console.error('Error loading model:', error)
      setHasLoadingError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    setLoadingProgress(0)
    
    // Simulate faster loading since we're using placeholders
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setLoading(false)
          return 100
        }
        return prev + Math.random() * 30
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [selectedModel.modelFile])

  useEffect(() => {
    // Animate camera when model changes
    if (cameraRef.current && currentModel) {
      gsapAnimations.animateCameraToModel({
        camera: cameraRef.current,
        target: selectedModel.id as any
      })
    }
  }, [selectedModel.id, currentModel])

  // Show fallback UI for critical Canvas errors only
  if (hasLoadingError) {
    return (
      <div className={`relative w-full h-full ${className} flex items-center justify-center bg-kawasaki-gray-900 rounded-xl`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-500/20 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-red-400 text-lg font-semibold mb-2">WebGL Error</h3>
          <p className="text-gray-400 text-sm">3D rendering is not available</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-full ${className}`}>
      {loading && (
        <LoadingSpinner progress={loadingProgress} />
      )}
      
      <Canvas
        ref={canvasRef}
        camera={{ position: [4, 1.5, 4], fov: 50 }}
        className="rounded-xl overflow-hidden"
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true
        }}
        frameloop="always"
        performance={{
          min: 0.8,
          max: 1.0,
          debounce: 200
        }}
        onCreated={(state: any) => {
          console.log('Canvas created successfully')
          if (state.camera) {
            cameraRef.current = state.camera
          }
          // Enable shadows for better visual quality
          state.gl.shadowMap.enabled = true
          state.gl.shadowMap.type = THREE.PCFSoftShadowMap
          setLoading(false)
        }}
        onError={(error: any) => {
          console.error('Critical Canvas error:', error)
          setHasLoadingError(true)
          setLoading(false)
        }}
      >
        <fog attach="fog" args={['#111111', 5, 20]} />
        
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
        />
        <pointLight position={[-10, 0, -10]} intensity={0.5} color="#00FF41" />
        <spotLight
          position={[5, 5, 5]}
          intensity={0.8}
          angle={0.6}
          penumbra={0.5}
        />

        {/* Environment and staging */}
        <Environment preset="studio" background={false} />
        
        <Suspense fallback={<PlaceholderBike />}>
          <PresentationControls
            global={false}
            cursor={true}
            snap={false}
            speed={1}
            zoom={0.8}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Stage
              adjustCamera={false}
              intensity={0.5}
              environment="studio"
            >
              <BikeModel3D
                selectedModel={selectedModel}
                onModelLoad={handleModelLoad}
              />
            </Stage>
          </PresentationControls>
        </Suspense>

        {/* Ground plane for visual reference */}
        <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial 
            color={0x222222} 
            transparent 
            opacity={0.3}
          />
        </mesh>

        {/* Enhanced Controls */}
        <OrbitControls
          ref={(ref) => {
            if (ref?.object) {
              cameraRef.current = ref.object
            }
          }}
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI - Math.PI / 6}
          minDistance={2}
          maxDistance={8}
          autoRotate={false}
          autoRotateSpeed={0.5}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.8}
          zoomSpeed={0.6}
          panSpeed={0.8}
          target={[0, 0, 0]}
        />
      </Canvas>

      {/* Model info overlay */}
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-kawasaki-green/20">
          <h3 className="text-xl font-display text-kawasaki-green mb-1">
            {selectedModel.name}
          </h3>
          <p className="text-gray-300 text-sm">
            {selectedModel.description}
          </p>
          <div className="mt-2 text-xs text-kawasaki-green/70">
            3D Preview Model
          </div>
        </div>
      </div>

      {/* Controls hint */}
      <div className="absolute top-4 right-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-400">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 bg-kawasaki-green rounded-full"></div>
            Drag to rotate
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-kawasaki-green rounded-full"></div>
            Scroll to zoom
          </div>
        </div>
      </div>
    </div>
  )
}

// Note: This component currently uses placeholder 3D models
// To use actual GLB models, add them to public/models/ directory and update the GLTF loading logic