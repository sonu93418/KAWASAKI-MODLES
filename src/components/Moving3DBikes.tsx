import { motion } from 'framer-motion'
import { BikeModel } from '../data/bikeModels'

interface Moving3DBikesProps {
  bikes: BikeModel[]
  className?: string
}

interface Bike3DProps {
  bike: BikeModel
  index: number
  delay: number
}

// Enhanced Rider Component
function RiderFigure({ index, isLeaning }: { index: number, isLeaning: boolean }) {
  return (
    <div className="absolute -top-8 left-6 transform -translate-x-1/2">
      {/* Rider Body */}
      <motion.div
        animate={{
          rotateZ: isLeaning ? [0, -15, 0, 15, 0] : [0, -5, 0, 5, 0],
          y: [0, -2, 0, -1, 0]
        }}
        transition={{
          duration: 3 + index,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Helmet */}
        <div className="w-4 h-4 bg-gradient-to-br from-gray-800 via-gray-600 to-black rounded-full border-2 border-kawasaki-green/50 relative">
          {/* Helmet Visor */}
          <div className="absolute inset-1 bg-gradient-to-b from-blue-900/60 to-black/80 rounded-full" />
          {/* Helmet Reflection */}
          <div className="absolute top-0 left-1 w-2 h-1 bg-white/30 rounded-full blur-sm" />
        </div>
        
        {/* Body/Torso */}
        <div className="w-5 h-6 bg-gradient-to-b from-gray-900 to-black rounded-lg mt-1 relative">
          {/* Racing Jacket Details */}
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-1 bg-kawasaki-green rounded-full" />
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-white/40 rounded-full" />
        </div>
        
        {/* Arms in Racing Position */}
        <motion.div
          animate={{
            rotateZ: [0, -10, 0, 10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 -left-1 w-2 h-4 bg-gray-800 rounded-full transform -rotate-45"
        />
        <motion.div
          animate={{
            rotateZ: [0, 10, 0, -10, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 -right-1 w-2 h-4 bg-gray-800 rounded-full transform rotate-45"
        />
        
        {/* Legs */}
        <div className="absolute top-5 left-0 w-2 h-4 bg-gray-900 rounded-full transform rotate-12" />
        <div className="absolute top-5 right-0 w-2 h-4 bg-gray-900 rounded-full transform -rotate-12" />
        
        {/* Racing Boots */}
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-kawasaki-green rounded-sm" />
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-kawasaki-green rounded-sm" />
      </motion.div>
    </div>
  )
}

function Moving3DBike({ bike, index, delay }: Bike3DProps) {
  const isLeaning = index % 2 === 0 // Alternate leaning patterns
  
  return (
    <motion.div
      initial={{ 
        x: '-120vw',
        rotateY: -30,
        scale: 0.8,
        y: Math.random() * 100 - 50
      }}
      animate={{ 
        x: '120vw',
        rotateY: [30, 0, -30, 0],
        scale: [0.8, 1.3, 1.0, 0.8],
        y: [0, -20, 10, 0]
      }}
      transition={{
        x: {
          duration: 15 + (index * 2),
          repeat: Infinity,
          ease: "linear",
          delay: delay
        },
        rotateY: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        scale: {
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        },
        y: {
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }
      }}
      className={`absolute top-1/2 transform -translate-y-1/2`}
      style={{
        zIndex: 10 - index,
        filter: `hue-rotate(${index * 40}deg) brightness(${1.1 - index * 0.1})`
      }}
    >
      {/* 3D Bike Container */}
      <div className="relative">
        {/* Bike Shadow */}
        <motion.div
          animate={{
            scaleX: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
          }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black/40 rounded-full blur-sm"
        />

        {/* Rider Figure */}
        <RiderFigure index={index} isLeaning={isLeaning} />
        
        {/* Enhanced Main Bike Body */}
        <div className="relative w-24 h-14 bg-gradient-to-r from-kawasaki-green via-green-400 to-kawasaki-green rounded-lg transform perspective-1000 shadow-lg">
          
          {/* Kawasaki Ninja Fairing */}
          <div className="absolute -left-3 top-0 w-8 h-6 bg-gradient-to-br from-kawasaki-green via-green-300 to-kawasaki-green rounded-l-2xl transform skew-y-2">
            {/* Headlight */}
            <div className="absolute top-2 left-1 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50" />
          </div>
          
          {/* Fuel Tank with Kawasaki Logo */}
          <div className="absolute left-2 -top-2 w-14 h-5 bg-gradient-to-r from-gray-900 via-kawasaki-green to-gray-900 rounded-full relative">
            {/* Kawasaki Logo */}
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white/80 rounded-full text-xs" />
          </div>
          
          {/* Racing Handlebars */}
          <div className="absolute -left-2 -top-3 w-6 h-2 bg-gradient-to-r from-gray-700 to-gray-500 rounded-full transform -rotate-12" />
          
          {/* Mirrors */}
          <div className="absolute -left-1 -top-4 w-1 h-1 bg-gray-600 rounded-full" />
          <div className="absolute left-1 -top-4 w-1 h-1 bg-gray-600 rounded-full" />
          
          {/* Dual Exhaust System */}
          <div className="absolute right-0 top-8 w-8 h-3 bg-gradient-to-r from-gray-700 to-gray-900 rounded-r-full" />
          <div className="absolute right-0 top-11 w-6 h-2 bg-gradient-to-r from-gray-600 to-gray-800 rounded-r-full" />
          
          {/* Exhaust Smoke Effect */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
              x: [0, -10, -20]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute right-8 top-9 w-4 h-2 bg-gray-500/40 rounded-full blur-sm"
          />
          
          {/* Front Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -left-4 top-6 w-8 h-8 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 rounded-full border-2 border-kawasaki-green/50"
          >
            <div className="absolute inset-2 border border-kawasaki-green/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-kawasaki-green/40 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-kawasaki-green/40 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
          
          {/* Rear Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute right-4 top-6 w-8 h-8 bg-gradient-to-br from-gray-800 via-gray-600 to-gray-800 rounded-full border-2 border-kawasaki-green/50"
          >
            <div className="absolute inset-2 border border-kawasaki-green/30 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-kawasaki-green/40 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-1/2 left-1/2 w-6 h-1 bg-kawasaki-green/40 transform -translate-x-1/2 -translate-y-1/2" />
          </motion.div>

          {/* Enhanced Speed Lines */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: [0, 1, 0.5, 0],
              scaleX: [0, 1.5, 1, 0],
              x: [0, -30, -60, -100]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: delay
            }}
            className="absolute -right-12 top-1 space-y-1"
          >
            <div className="w-16 h-1 bg-gradient-to-l from-kawasaki-green via-green-400 to-transparent rounded-full" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-kawasaki-green/80 via-green-400/60 to-transparent rounded-full" />
            <div className="w-8 h-0.5 bg-gradient-to-l from-kawasaki-green/60 via-green-400/40 to-transparent rounded-full" />
            <div className="w-6 h-0.5 bg-gradient-to-l from-kawasaki-green/40 via-green-400/20 to-transparent rounded-full" />
          </motion.div>
          
          {/* Wind Effect */}
          <motion.div
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0.8, 1.2, 0.8],
              x: [0, -15, -30]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: delay + 0.5
            }}
            className="absolute -right-6 -top-2 w-8 h-8 bg-kawasaki-green/10 rounded-full blur-md"
          />
        </div>

        {/* Bike Info Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay + 2
          }}
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-kawasaki-green/30 whitespace-nowrap"
        >
          <div className="text-kawasaki-green text-sm font-semibold">{bike.name}</div>
          <div className="text-gray-300 text-xs">{bike.engine.split(' ')[0]}</div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Moving3DBikes({ bikes, className = '' }: Moving3DBikesProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-kawasaki-green/5 to-transparent" />
      
      {/* Road Lines */}
      <motion.div
        animate={{ x: [-100, 100] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 left-0 right-0 h-1"
      >
        <div className="flex space-x-8 h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-1 bg-kawasaki-green/30 rounded-full"
            />
          ))}
        </div>
      </motion.div>

      {/* Moving Bikes */}
      {bikes.slice(0, 3).map((bike, index) => (
        <Moving3DBike
          key={bike.id}
          bike={bike}
          index={index}
          delay={index * 4}
        />
      ))}

      {/* Additional Background Bikes (smaller, faster) */}
      {bikes.slice(3).map((bike, index) => (
        <motion.div
          key={`bg-${bike.id}`}
          initial={{ x: '-50vw', opacity: 0.3 }}
          animate={{ x: '150vw' }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            delay: (index + 3) * 6
          }}
          className="absolute top-1/4 transform scale-50 opacity-40"
        >
          <Moving3DBike
            bike={bike}
            index={index + 3}
            delay={0}
          />
        </motion.div>
      ))}

      {/* Enhanced Racing Track */}
      <div className="absolute bottom-1/3 left-0 right-0 h-2 bg-gray-800 opacity-60">
        <div className="h-full bg-gradient-to-r from-transparent via-kawasaki-green/20 to-transparent" />
      </div>
      
      {/* Track Barriers */}
      <div className="absolute bottom-1/4 left-0 right-0 h-1">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            animate={{ x: [-50, window.innerWidth + 50] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
            className="absolute w-8 h-1 bg-red-500 rounded-full"
            style={{ left: `${i * 120}px` }}
          />
        ))}
      </div>
      
      {/* Enhanced Particle System */}
      <div className="absolute inset-0">
        {/* Speed Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: window.innerWidth + 50,
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              x: -50,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            className="absolute w-2 h-0.5 bg-kawasaki-green/60 rounded-full"
          />
        ))}
        
        {/* Dust Particles */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            initial={{ 
              x: -20,
              y: window.innerHeight * 0.7 + Math.random() * 100,
              opacity: 0.6,
              scale: 0.5
            }}
            animate={{ 
              x: window.innerWidth + 20,
              y: window.innerHeight * 0.7 + Math.random() * 100,
              opacity: [0.6, 0.3, 0],
              scale: [0.5, 1, 1.5]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 6
            }}
            className="absolute w-1 h-1 bg-gray-500 rounded-full"
          />
        ))}
      </div>

      {/* Multiple Speed Burst Effects */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`burst-${i}`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 3, 0],
            opacity: [0, 0.4, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2 + i * 1.5
          }}
          className={`absolute top-1/2 transform -translate-y-1/2 w-40 h-40 bg-gradient-radial from-kawasaki-green/30 to-transparent rounded-full`}
          style={{
            right: `${20 + i * 15}%`,
            filter: `hue-rotate(${i * 30}deg)`
          }}
        />
      ))}
      
      {/* Racing Atmosphere Effects */}
      <motion.div
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-kawasaki-green/5 via-transparent to-kawasaki-green/10 pointer-events-none"
      />
      
      {/* Track Lighting Effects */}
      <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-kawasaki-green/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-kawasaki-green/10 to-transparent pointer-events-none" />
    </div>
  )
}