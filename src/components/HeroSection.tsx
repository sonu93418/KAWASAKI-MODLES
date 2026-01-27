import { motion } from 'framer-motion'
import BikeViewer3D from './BikeViewer3D'
import SimpleBikeViewer from './SimpleBikeViewer'
import Moving3DBikes from './Moving3DBikes'
import { BikeModel, bikeModels } from '../data/bikeModels'

export default function HeroSection() {
  // Use the top-tier model for hero display
  const heroModel = bikeModels[4] // Ninja ZX-10R
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  }

  return (
    <section id="home" className="min-h-screen pt-16 relative overflow-hidden">
      {/* Simple Black Background */}
      <div className="absolute inset-0 bg-black"></div>



      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center">
          {/* Left side - Text content */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 z-10 relative"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 bg-kawasaki-green/10 border border-kawasaki-green/30 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-kawasaki-green rounded-full animate-pulse"></div>
                <span className="text-kawasaki-green text-sm font-medium">
                  New 2024 Collection
                </span>
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-tight"
            >
              <span className="text-white">KAWASAKI</span>
              <br />
              <span className="text-gradient">NINJA</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg"
            >
              Experience the perfect fusion of power, precision, and pure adrenaline. 
              <span className="text-kawasaki-green font-semibold"> The legend continues.</span>
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-lg px-8 py-4 rounded-xl font-display"
              >
                Book Test Ride
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-8 py-4 rounded-xl font-display group"
              >
                <span className="flex items-center gap-2">
                  Explore Models
                  <motion.svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.button>
            </motion.div>

            {/* Enhanced Stats with Motion */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-kawasaki-gray-700 relative"
            >
              <div>
                <div className="text-2xl md:text-3xl font-bold text-kawasaki-green">203</div>
                <div className="text-sm text-gray-400 font-medium">HP Power</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-kawasaki-green">5</div>
                <div className="text-sm text-gray-400 font-medium">Models</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-kawasaki-green">50+</div>
                <div className="text-sm text-gray-400 font-medium">Years Legacy</div>
              </div>
              

            </motion.div>
          </motion.div>

          {/* Right side - Moving 3D Bikes Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[600px] lg:h-[700px]"
          >
              {/* 3D Animated Bike Container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-kawasaki-green/20 flex items-center justify-center">
              
              {/* 3D Bike Image with Motion */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Main Bike Image with 3D Effects */}
                <motion.div
                  className="relative transform-gpu"
                  animate={{
                    rotateY: [0, 5, -5, 0],
                    rotateX: [0, 2, -2, 0],
                    z: [0, 20, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    transition: { duration: 0.5 }
                  }}
                  style={{
                    perspective: '1000px',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* High-Quality Kawasaki Ninja Image */}
                  <motion.div
                    className="relative w-full h-auto max-w-2xl"
                    animate={{
                      rotateX: [0, 5, 0, -5, 0],
                      rotateZ: [0, 2, 0, -2, 0]
                    }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <img
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDgwMCA1MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9ImJpa2VHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMmEyYTJhIi8+CjxzdG9wIG9mZnNldD0iMzAlIiBzdG9wLWNvbG9yPSIjMDBGRjQxIi8+CjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMDBGRjQxIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzJhMmEyYSIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cmFkaWFsR3JhZGllbnQgaWQ9IndoZWVsR3JhZGllbnQiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjNDQ0Ii8+CjxzdG9wIG9mZnNldD0iNzAlIiBzdG9wLWNvbG9yPSIjMDAwIi8+CjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzAwRkY0MSIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cgo8IS0tIE1haW4gQmlrZSBCb2R5IC0tPgo8cGF0aCBkPSJNMTgwLDI4MCBRIDI1MCwyNDAgNDUwLDI1MABRNTU2MCwyNTggNjgwLDI4MCBRIDY2NSwyOTUgNjQwLDMxMCBRNTUwLDMyMCA0NTAsMzE1IFE0NTAsMTUgMjUwLDMxNSBRMjAwLDMxMCAxODAsMjk1IFoiIGZpbGw9InVybCgjYmlrZUdyYWRpZW50KSIgc3Ryb2tlPSIjMDBGRjQxIiBzdHJva2Utd2lkdGg9IjMiLz4KCjwhLS0gRnVlbCBUYW5rIC0tPgo8ZWxsaXBzZSBjeD0iNDIwIiBjeT0iMjY1IiByeD0iODAiIHJ5PSIzNSIgZmlsbD0iIzAwRkY0MSIgb3BhY2l0eT0iMC45NSIvPgo8ZWxsaXBzZSBjeD0iNDIwIiBjeT0iMjY1IiByeD0iNjUiIHJ5PSIyOCIgZmlsbD0iIzFhMWExYSIvPgoKPCEtLSBGcm9udCBGYWlyaW5nIC0tPgo8cGF0aCBkPSJNNjIwLDI2MCBRIDI3MCwyNDUgNjkwLDI3MCBRIDY4NSwyOTAgNjcwLDMwNSBRNjUwLDMxNSA2MjAsMzAwIFoiIGZpbGw9IiMwMEZGNDEiIHN0cm9rZT0iIzQwRkY3MCIgc3Ryb2tlLXdpZHRoPSIyIi8+Cgo8IS0tIFdpbmRzY3JlZW4gLS0+CjxwYXRoIGQ9Ik02NDAsODAgUTY3NiwyIDY5NSwxOSUgUTY3NiwyNDAgNjQwLDI1NSBaIiBmaWxsPSJyZ2JhKDAsRQU1LgU1LDAuNCkiIHN0cm9rZT0iIzAwRkY0MSIgc3Ryb2tlLXdpZHRoPSIyIi8+Cgo8IS0tIEZyb250IFdoZWVsIC0tPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIzNzUiIHI9IjYwIiBmaWxsPSJ1cmwoI3doZWVsR3JhZGllbnQpIiBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iNCIvPgo8Y2lyY2xlIGN4PSI2MDAiIGN5PSIzNzUiIHI9IjQ1IiBmaWxsPSIjMjIyIi8+CjxjaXJjbGUgY3g9IjYwMCIgY3k9IjM3NSIgcj0iMzAiIGZpbGw9IiMwMDAiLz4KCjwhLS0gRnJvbnQgV2hlZWwgU3Bva2VzIC0tPgo8ZyBzdHJva2U9IiMwMEZGNDEiIHN0cm9rZS13aWR0aD0iMyIgb3BhY2l0eT0iMC44Ij4KPGxpbmUgeDE9IjYwMCIgeTE9IjMyNSIgeDI9IjYwMCIgeTI9IjQyNSIvPgo8bGluZSB4MT0iNTUwIiB5MT0iMzc1IiB4Mj0iNjUwIiB5Mj0iMzc1Ii8+CjxsaW5lIHgxPSI1NjUiIHkxPSIzNDAiIHgyPSI2MzUiIHkyPSI0MTAiLz4KPGxpbmUgeDE9IjU2NSIgeTE9IjQxMCIgeDI9IjYzNSIgeTI9IjM0MCIvPgo8L2c+Cgo8IS0tIFJlYXIgV2hlZWwgLS0+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjM3NSIgcj0iNjAiIGZpbGw9InVybCgjd2hlZWxHcmFkaWVudCkiIHN0cm9rZT0iIzAwRkY0MSIgc3Ryb2tlLXdpZHRoPSI0Ii8+CjxjaXJjbGUgY3g9IjI0MCIgY3k9IjM3NSIgcj0iNDUiIGZpbGw9IiMyMjIiLz4KPGNpcmNsZSBjeD0iMjQwIiBjeT0iMzc1IiByPSIzMCIgZmlsbD0iIzAwMCIvPgoKPCEtLSBSZWFyIFdoZWVsIFNwb2tlcyAtLT4KPGcgc3Ryb2tlPSIjMDBGRjQxIiBzdHJva2Utd2lkdGg9IjMiIG9wYWNpdHk9IjAuOCI+CjxsaW5lIHgxPSIyNDAiIHkxPSIzMjUiIHgyPSIyNDAiIHkyPSI0MjUiLz4KPGxpbmUgeDE9IjE5MCIgeTE9IjM3NSIgeDI9IjI5MCIgeTI9IjM3NSIvPgo8bGluZSB4MT0iMjA1IiB5MT0iMzQwIiB4Mj0iMjc1IiB5Mj0iNDEwIi8+CjxsaW5lIHgxPSIyMDUiIHkxPSI0MTAiIHgyPSIyNzUiIHkyPSIzNDAiLz4KPC9nPgoKPCEtLSBTZWF0IC0tPgo8ZWxsaXBzZSBjeD0iMzgwIiBjeT0iMjU1IiByeD0iNzAiIHJ5PSIyMCIgZmlsbD0iIzMzMyIvPgo8ZWxsaXBzZSBjeD0iMzgwIiBjeT0iMjU1IiByeD0iNjAiIHJ5PSIxNSIgZmlsbD0iIzFhMWExYSIvPgoKPCEtLSBIYW5kbGViYXJzIC0tPgo8bGluZSB4MT0iNTgwIiB5MT0iMjMwIiB4Mj0iNjMwIiB5Mj0iMjIwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8Y2lyY2xlIGN4PSI1NzAiIGN5PSIyMzIiIHI9IjUiIGZpbGw9IiMwMEZGNDEiLz4KPGNpcmNsZSBjeD0iNjQwIiBjeT0iMjE4IiByPSI1IiBmaWxsPSIjMDBGRjQxIi8+Cgo8IS0tIEVuZ2luZSAtLT4KPHJlY3QgeD0iMzIwIiB5PSIyODAiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSIxMiIgZmlsbD0iIzMzMyIgc3Ryb2tlPSIjNTU1IiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMzM1IiB5PSIyOTUiIHdpZHRoPSI5MCIgaGVpZ2h0PSIzMCIgcng9IjYiIGZpbGw9IiM1NTUiLz4KCjwhLS0gRXhoYXVzdCAtLT4KPGVsbGlwc2UgY3g9IjIyMCIgY3k9IjMxMCIgcng9IjM1IiByeT0iMTIiIGZpbGw9IiM0NDQiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIzIi8+CjxlbGxpcHNlIGN4PSIyMDAiIGN5PSIzMTAiIHJ4PSIyMCIgcnk9IjgiIGZpbGw9IiM2NjYiLz4KCjwhLS0gS2F3YXNha2kgTG9nbyAtLT4KPHRleHQgeD0iNDIwIiB5PSIyNzUiIGZpbGw9IndoaXRlIiBmb250LXNpemU9IjE4IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5LQVdBU0FLSTY8L3RleHQ+Cgo8IS0tIEhlYWRsaWdodCAtLT4KPGNpcmNsZSBjeD0iNjcwIiBjeT0iMjYwIiByPSIxOCIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC45NSIvPgo8Y2lyY2xlIGN4PSI2NzAiIGN5PSIyNjAiIHI9IjEyIiBmaWxsPSIjZjBmMGYwIi8+Cgo8IS0tIFNpZGUgUmVmbGVjdGlvbnMgLS0+CjxwYXRoIGQ9Ik0yNDAsMjYwIFE4OCwyNDUgMzgwLDI2MCBRIDI2MCwyNzAgMzIwLDI3NSBRMjgwLDI3NSAyNDAsMjYwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIi8+CjxwYXRoIGQ9Ik01MDAsMjYwIFE1NzAsMjUyIDU4MCwyNzUgUTU2MCwyODUgNTMwLDI4NSBRNTEwLDI3NSA1MDAsMjYwIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpIi8+CjwvY3ZnPg=="
                      alt="Kawasaki Ninja H2"
                      className="w-full h-auto drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 30px 60px rgba(0, 255, 65, 0.3)) brightness(1.05) contrast(1.1)'
                      }}
                    />
                    
                    {/* 3D Shadow Layer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-kawasaki-green/10 rounded-lg"
                      animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.01, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* 3D Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-kawasaki-green/20 via-transparent to-kawasaki-green/20 rounded-lg"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* 3D Ground Reflection */}
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full"
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      scaleY: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div
                      className="w-full h-32 bg-gradient-to-b from-kawasaki-green/20 to-transparent rounded-full blur-xl"
                      style={{
                        transform: 'scaleY(-0.3) skewX(10deg)'
                      }}
                    />
                  </motion.div>
                  
                  {/* Dynamic Speed Lines */}
                  <motion.div
                    className="absolute -left-20 top-1/2 transform -translate-y-1/2"
                    animate={{
                      opacity: [0, 1, 0],
                      x: [0, 80]
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  >
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="mb-3 bg-gradient-to-r from-kawasaki-green to-transparent rounded-full"
                        style={{
                          width: `${50 - i * 7}px`,
                          height: '3px',
                          opacity: 0.8 - i * 0.12
                        }}
                        animate={{
                          width: [50 - i * 7, 80 - i * 10, 50 - i * 7],
                          rotateZ: [0, 2, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.15
                        }}
                      />
                    ))}
                  </motion.div>
                  
                  {/* 3D Particle System */}
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-kawasaki-green rounded-full"
                        style={{
                          left: `${20 + i * 8}%`,
                          top: `${25 + (i % 4) * 15}%`
                        }}
                        animate={{
                          y: [0, -30, 0],
                          x: [0, 15, 0],
                          opacity: [0.2, 1, 0.2],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: 5 + i * 0.3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.8
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
                
                {/* 3D Interactive Hover Zone */}
                <motion.div
                  className="absolute inset-0 cursor-pointer"
                  whileHover={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,255,65,0.15) 0%, transparent 70%)',
                    transition: { duration: 0.3 }
                  }}
                  animate={{
                    background: [
                      'radial-gradient(circle at 30% 70%, rgba(0,255,65,0.08) 0%, transparent 60%)',
                      'radial-gradient(circle at 70% 30%, rgba(0,255,65,0.08) 0%, transparent 60%)',
                      'radial-gradient(circle at 30% 70%, rgba(0,255,65,0.08) 0%, transparent 60%)'
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Dynamic 3D Lighting Effects */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                  animate={{
                    background: [
                      'linear-gradient(45deg, transparent 0%, rgba(0,255,65,0.05) 25%, transparent 50%)',
                      'linear-gradient(135deg, transparent 0%, rgba(0,255,65,0.05) 25%, transparent 50%)',
                      'linear-gradient(225deg, transparent 0%, rgba(0,255,65,0.05) 25%, transparent 50%)',
                      'linear-gradient(315deg, transparent 0%, rgba(0,255,65,0.05) 25%, transparent 50%)'
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* 3D Depth Indicators */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-kawasaki-green rounded-full"
                    style={{
                      width: `${4 + i * 0.5}px`,
                      height: `${4 + i * 0.5}px`,
                      left: `${15 + i * 10}%`,
                      top: `${25 + (i % 4) * 18}%`,
                      zIndex: 10 - i
                    }}
                    animate={{
                      y: [0, -25 - i * 2, 0],
                      x: [0, 12 + i * 2, 0],
                      opacity: [0.2, 0.9, 0.2],
                      scale: [1, 1.3 + i * 0.1, 1],
                      rotateZ: [0, 180, 360]
                    }}
                    transition={{
                      duration: 5 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                  />
                ))}
                
                {/* Motion Trails */}
                <motion.div
                  className="absolute top-1/2 right-0 transform -translate-y-1/2"
                  animate={{
                    opacity: [0, 0.6, 0],
                    x: [0, -50]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeOut",
                    repeatDelay: 1
                  }}
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="mb-4 bg-gradient-to-l from-kawasaki-green/60 to-transparent rounded-full"
                      style={{
                        width: `${35 + i * 8}px`,
                        height: `${2 + i * 0.5}px`,
                        opacity: 0.7 - i * 0.12
                      }}
                      animate={{
                        scaleX: [0.5, 1.2, 0.5],
                        opacity: [0.2, 0.8, 0.2]
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>              {/* 3D Info Panel with Depth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, z: -100 }}
                animate={{ opacity: 1, scale: 1, z: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ 
                  z: 50, 
                  scale: 1.02,
                  boxShadow: '0 25px 50px rgba(0, 255, 65, 0.3)'
                }}
                className="absolute top-6 left-6 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-kawasaki-green/40 z-20 transform-gpu"
                style={{ 
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.div
                  animate={{
                    rotateX: [0, 2, 0],
                    rotateY: [0, 1, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="text-kawasaki-green text-xs font-medium mb-1 flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-2 h-2 border border-kawasaki-green rounded-full"
                    />
                    Flagship Model
                  </div>
                  <div className="text-white text-lg font-semibold">{heroModel.name}</div>
                  <div className="text-gray-300 text-sm">{heroModel.engine}</div>
                  <motion.div
                    animate={{
                      textShadow: [
                        '0 0 10px rgba(0, 255, 65, 0.5)',
                        '0 0 20px rgba(0, 255, 65, 0.8)',
                        '0 0 10px rgba(0, 255, 65, 0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-kawasaki-green text-sm font-bold mt-1"
                  >
                    {heroModel.power}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Enhanced 3D Interactive Button */}
              <motion.div
                initial={{ opacity: 0, y: 20, z: -30 }}
                animate={{ opacity: 1, y: 0, z: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-6 right-6 z-20"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.08,
                    z: 40,
                    rotateX: -10,
                    boxShadow: '0 20px 40px rgba(0, 255, 65, 0.4)'
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    z: 10
                  }}
                  animate={{
                    boxShadow: [
                      '0 10px 20px rgba(0, 255, 65, 0.2)',
                      '0 15px 30px rgba(0, 255, 65, 0.3)',
                      '0 10px 20px rgba(0, 255, 65, 0.2)'
                    ]
                  }}
                  transition={{
                    boxShadow: { duration: 3, repeat: Infinity }
                  }}
                  className="bg-gradient-to-r from-kawasaki-green to-green-400 text-black px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-3 transform-gpu relative overflow-hidden"
                  style={{
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* 3D Icon */}
                  <motion.svg
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity }
                    }}
                    className="w-5 h-5 transform-gpu" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </motion.svg>
                  
                  <span className="relative z-10">Experience 3D</span>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3
                    }}
                  />
                </motion.button>
              </motion.div>

              {/* 3D Speed Indicator */}
              <motion.div
                initial={{ opacity: 0, x: 20, z: -50 }}
                animate={{ opacity: 1, x: 0, z: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                whileHover={{ 
                  z: 30,
                  scale: 1.05,
                  rotateY: -10
                }}
                className="absolute top-6 right-6 bg-black/70 backdrop-blur-md rounded-xl p-4 border border-kawasaki-green/30 z-20 transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '800px'
                }}
              >
                <div className="text-center relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.15, 1],
                      rotateZ: [0, 5, 0],
                      textShadow: [
                        '0 0 15px rgba(0, 255, 65, 0.6)',
                        '0 0 25px rgba(0, 255, 65, 0.9)',
                        '0 0 15px rgba(0, 255, 65, 0.6)'
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="text-kawasaki-green text-3xl font-black mb-1 transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {heroModel.power.split(' ')[0]}
                  </motion.div>
                  <div className="text-gray-400 text-xs font-medium">MAX POWER</div>
                  
                  {/* 3D Power Bars */}
                  <div className="flex justify-center mt-2 gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-kawasaki-green rounded-full"
                        initial={{ height: 4 }}
                        animate={{ 
                          height: [4, 12, 4],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>


          </motion.div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-kawasaki-green/70">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}