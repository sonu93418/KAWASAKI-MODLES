import { useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion'

interface Real3DBikeViewerProps {
  mousePosition: { x: number; y: number }
  isLoaded: boolean
}

// Heavy 3D bike viewer: multiple depth layers, scanning beams, particle bursts, and interactive tilt.
export default function Real3DBikeViewer({ mousePosition, isLoaded: _isLoaded }: Real3DBikeViewerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)


  // Motion values for mouse-driven parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 22, stiffness: 180 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  // Stronger 3D transforms for "heavy" feel
  const rotateX = useTransform(y, [-0.6, 0.6], [18, -18])
  const rotateY = useTransform(x, [-0.6, 0.6], [-28, 28])
  const rotateZ = useTransform(x, [-0.6, 0.6], [-6, 6])
  const scale = useTransform(x, [-0.6, 0.6], [0.92, 1.18])

  // Animation controls for entrance/idle
  const controls = useAnimation()

  useEffect(() => {
    mouseX.set(mousePosition.x)
    mouseY.set(mousePosition.y)
  }, [mousePosition.x, mousePosition.y])

  // Immediate animation start with preloading
  useEffect(() => {
    // Start animations immediately when component mounts
    const startAnimations = async () => {
      // Fast entrance burst
      await controls.start({ 
        opacity: 1, 
        scale: 1, 
        transition: { duration: 0.4, ease: 'backOut' } 
      })
      
      // Start idle animations immediately after entrance
      controls.start({
        rotateZ: [0, 1.2, 0, -1.2, 0],
        transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' }
      })
    }
    
    // Start animations immediately, don't wait for isLoaded
    startAnimations()
  }, [controls])

  // Helper to render particle bursts around bike
  const renderParticles = (count = 14) => {
    return Array.from({ length: count }).map((_, i) => {
      const left = 10 + Math.random() * 80
      const top = 20 + Math.random() * 60
      const delay = Math.random() * 2
      const size = 1 + Math.random() * 6
      return (
        <motion.div
          key={`heavy-p-${i}`}
          className="absolute bg-green-400 rounded-full"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            boxShadow: `0 0 ${4 + size}px rgba(0,255,80,0.9)`,
            pointerEvents: 'none'
          }}
          initial={{ opacity: 0.3, scale: 0.4 }}
          animate={{ opacity: [0.3, 1, 0], scale: [0.4, 1, 0.3], y: [-6, -18, -30] }}
          transition={{ duration: 1.5 + Math.random() * 1, repeat: Infinity, delay: delay * 0.3 }}
        />
      )
    })
  }

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center perspective-2000 overflow-hidden">
      {/* Deep glow layer (behind bike) */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background: 'radial-gradient(ellipse at 50% 60%, rgba(0,255,70,0.18), transparent 30%)'
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
      />

      {/* Scanning beam (fast) */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,255,80,0.25) 45%, rgba(0,255,80,0.05) 60%, transparent 100%)',
          mixBlendMode: 'screen'
        }}
        animate={{ x: ['-120%', '120%'] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0 }}
      />

      {/* Heavy 3D bike container with multiple depth layers */}
      <motion.div
        className="relative w-full max-w-6xl mx-auto"
        style={{
          rotateX,
          rotateY,
          rotateZ,
          scale,
          transformStyle: 'preserve-3d'
        }}
        animate={controls}
        initial={{ opacity: 0.8, scale: 0.95, rotateZ: 0 }}
      >
        {/* Depth layer: faint reflection / floor */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{ width: '90%', height: 90, borderRadius: 12, transform: 'rotateX(85deg) translateZ(-30px)' }}
          animate={{ opacity: [0.2, 0.6, 0.2], scaleX: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Mid depth: subtle blurred halo */}
        <motion.div
          className="absolute inset-0 -z-5"
          style={{
            background: 'radial-gradient(ellipse at 50% 55%, rgba(0,255,70,0.12), transparent 25%)',
            filter: 'blur(18px)'
          }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Bike main image - kept as inline base64 fallback for now */}
        <motion.div
          className="relative z-0"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.14, rotateY: 6 }}
          transition={{ duration: 0.45 }}
        >
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA"
            // NOTE: short placeholder data URL above — keep existing large base64 image in repo if needed.
            alt="Kawasaki H2"
            className="w-full h-auto object-contain"
            style={{ maxHeight: 640, filter: 'contrast(1.15) saturate(1.25) drop-shadow(0 30px 60px rgba(0,255,70,0.35))' }}
          />
        </motion.div>

        {/* Foreground depth layer: rotating rings */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: 'translateZ(40px)'
          }}
        >
          <motion.div
            style={{
              width: 420,
              height: 420,
              borderRadius: '50%',
              border: '2px solid rgba(0,255,70,0.07)',
              boxShadow: '0 0 30px rgba(0,255,70,0.05)'
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            style={{
              position: 'absolute',
              width: 260,
              height: 260,
              borderRadius: '50%',
              border: '1px dashed rgba(0,255,70,0.06)'
            }}
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Energy particle bursts */}
        {renderParticles(18)}

        {/* Speed streaks (foreground) - exaggerated for heavy effect */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${-30 + i * 18}%`,
              top: `${28 + i * 8}%`,
              width: 160 + i * 40,
              height: 2 + Math.round(i / 2),
              background: `linear-gradient(90deg, transparent 0%, rgba(0,255,70,${0.9 - i * 0.12}) 50%, transparent 100%)`,
              transform: `skewX(${ -20 + i * 6 }deg) translateZ(${30 + i * 10}px)`
            }}
            animate={{ x: [0, 350, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2 + i * 0.15, repeat: Infinity, delay: i * 0.05 }}
          />
        ))}

      </motion.div>
    </div>
  )
}