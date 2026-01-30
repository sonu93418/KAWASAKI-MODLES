import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MousePosition {
  x: number
  y: number
}

export default function InteractiveHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Spring animations for smooth cursor following
  const springConfig = { damping: 25, stiffness: 100 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)
  
  // Transform cursor position to rotation and parallax values
  const parallaxX = useTransform(x, [-0.5, 0.5], [-50, 50])
  const parallaxY = useTransform(y, [-0.5, 0.5], [-30, 30])

  // Advanced mouse tracking with velocity
  const previousMousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      
      const rect = heroRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const normalizedX = (e.clientX - centerX) / (rect.width / 2)
      const normalizedY = (e.clientY - centerY) / (rect.height / 2)
      
      // Calculate velocity
      previousMousePos.current = { x: normalizedX, y: normalizedY }
      setMousePosition({ x: normalizedX, y: normalizedY })
      mouseX.set(normalizedX)
      mouseY.set(normalizedY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    
    // Start animations immediately
    setIsLoaded(true)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Specs floating cards data
  const specs = [
    { label: '998cc Engine', value: 'Supercharged', position: { top: '20%', left: '10%' } },
    { label: '200+ km/h', value: 'Top Speed', position: { top: '40%', right: '8%' } },
    { label: 'ABS Brakes', value: 'Safety First', position: { bottom: '30%', left: '15%' } },
    { label: '203 HP', value: 'Raw Power', position: { bottom: '20%', right: '12%' } }
  ]

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)',
        perspective: '2000px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Simple Green Accent Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle green grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 h-full relative" style={{ transformStyle: 'preserve-3d', zIndex: 20 }}>
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 min-h-screen items-center py-12 lg:py-0" style={{ transformStyle: 'preserve-3d' }}>
          
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8 relative"
            style={{ transform: 'translateZ(100px)', transformStyle: 'preserve-3d', zIndex: 100 }}
          >
            {/* New collection badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.9 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="inline-flex items-center gap-3 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-green-400 text-sm font-medium tracking-wide">
                New 2025 Collection
              </span>
            </motion.div>

            {/* Enhanced main headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white relative mb-6"
              style={{ 
                transform: 'translateZ(80px) rotateX(2deg)', 
                transformStyle: 'preserve-3d',
                textShadow: '0 10px 30px rgba(0, 255, 65, 0.3), 0 5px 15px rgba(0, 0, 0, 0.8)'
              }}
            >
              <span className="block mb-2" style={{ transform: 'translateZ(20px)' }}>
                Experience The
              </span>
              <motion.span 
                className="block bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent font-black"
                style={{ 
                  transform: 'translateZ(40px)',
                  filter: 'drop-shadow(0 0 20px rgba(0, 255, 65, 0.5))'
                }}
              >
                Future of Power
              </motion.span>

            </motion.h1>

            {/* Enhanced Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl relative"
              style={{ 
                transform: 'translateZ(60px)',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
              }}
            >
              Experience unmatched speed, precision control, and cutting-edge technology. 
              <span className="font-semibold block mt-2 text-green-400">
                The ultimate fusion of power and innovation.
              </span>
            </motion.p>

            {/* Action buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
              style={{ transform: 'translateZ(70px)', transformStyle: 'preserve-3d' }}
            >
              <motion.button
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-black text-lg font-bold px-8 py-4 rounded-xl transition-all duration-300"
                style={{ 
                  transform: 'translateZ(30px)',
                  boxShadow: '0 10px 30px rgba(0, 255, 65, 0.4), 0 0 60px rgba(0, 255, 65, 0.2)'
                }}
              >
                <span className="flex items-center gap-2">
                  Explore Models
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, rotateY: -5, rotateX: -5 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500/10 text-lg font-bold px-8 py-4 rounded-xl transition-all duration-300"
                style={{ 
                  transform: 'translateZ(30px)',
                  boxShadow: '0 10px 20px rgba(0, 255, 65, 0.2)'
                }}
              >
                Book Test Ride
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-green-500/20"
              style={{ transform: 'translateZ(50px)', transformStyle: 'preserve-3d' }}
            >
              {[
                { value: '203', unit: 'HP', label: 'Power' },
                { value: '5', unit: '', label: 'Models' },
                { value: '50+', unit: '', label: 'Years' }
              ].map((stat, _index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, translateZ: 20, rotateY: 10 }}
                  className="text-center group cursor-pointer"
                  style={{ 
                    transform: 'translateZ(20px)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="text-3xl font-black text-green-500 group-hover:text-green-400 transition-colors">
                    {stat.value}{stat.unit}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Image Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              x: isLoaded ? 0 : 50,
              scale: isLoaded ? 1 : 0.9
            }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] md:h-[600px] lg:h-[650px] xl:h-[700px] w-full flex items-center justify-center perspective-2000"
            ref={viewerRef}
            style={{ 
              transform: 'translateZ(50px)',
              transformStyle: 'preserve-3d',
              zIndex: 40
            }}
          >
            {/* Main 3D Bike Image Card */}
            <motion.div
              className="relative w-full h-full"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateY: mousePosition.x * 15,
                rotateX: -mousePosition.y * 10,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            >
              {/* Background Card */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-kawasaki-gray-900 via-black to-kawasaki-green/10 rounded-3xl"
                style={{
                  transform: 'translateZ(-50px)',
                  boxShadow: '0 40px 100px rgba(0, 0, 0, 0.8)'
                }}
              />
              
              {/* Main Image Container */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center rounded-3xl overflow-hidden"
                style={{ 
                  transform: 'translateZ(100px)',
                  boxShadow: '0 50px 100px rgba(0, 255, 65, 0.3), 0 0 100px rgba(0, 255, 65, 0.2)'
                }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=1200&q=80"
                  alt="Kawasaki Ninja"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'drop-shadow(0 0 40px rgba(0, 255, 65, 0.6))'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/1200x800/1a1a1a/00FF41?text=Kawasaki+Ninja';
                  }}
                />
                
                {/* Green Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-kawasaki-green/30 via-transparent to-transparent" />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-kawasaki-green/20 rounded-full blur-3xl"
                style={{ transform: 'translateZ(0px)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute -top-10 -left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"
                style={{ transform: 'translateZ(0px)' }}
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

        </div>

        {/* Floating spec cards with parallax */}
        {specs.map((spec, index) => (
          <motion.div
            key={spec.label}
            className="absolute bg-black/70 backdrop-blur-md rounded-xl p-4 border border-green-500/30 hidden lg:block pointer-events-none"
            style={{
              ...spec.position,
              x: parallaxX,
              y: parallaxY,
              zIndex: 15,
              transform: 'translateZ(40px)',
              transformStyle: 'preserve-3d',
              boxShadow: '0 8px 32px rgba(0, 255, 65, 0.2), 0 0 20px rgba(0, 0, 0, 0.8)'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              scale: isLoaded ? 1 : 0.8
            }}
            transition={{ 
              opacity: { duration: 0.4, delay: 0.5 + index * 0.05 }
            }}
            whileHover={{ scale: 1.1, rotateY: 10, translateZ: 60 }}
          >
            <div className="text-green-500 text-sm font-bold">{spec.label}</div>
            <div className="text-white text-xs opacity-80">{spec.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-green-500/70 cursor-pointer"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}