import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import InteractiveHeroSection from './components/InteractiveHeroSection'
import Footer from './components/Footer'
import { bikeModels } from './data/bikeModels'

function App() {

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-kawasaki-dark"
      >
        <Navbar />
        
        <main>
          <InteractiveHeroSection />
          
          {/* Individual Bike Model Sections */}
          {bikeModels.map((bike, index) => (
            <motion.section
              key={bike.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="py-20 border-b border-kawasaki-green/10 relative"
              id={bike.id}
              style={{ zIndex: 10 }}
            >
              <div className="container mx-auto px-4 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  
                  {/* 3D Image Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, rotateY: -20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-96 lg:h-[500px] perspective-2000 relative"
                    style={{ transformStyle: 'preserve-3d', zIndex: 5 }}
                  >
                    <motion.div
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 10, 
                        rotateX: -5,
                        z: 50
                      }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="relative w-full h-full rounded-2xl overflow-hidden group transform-style-3d"
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: 'rotateY(-5deg) rotateX(5deg)',
                        boxShadow: '0 25px 50px rgba(0, 255, 65, 0.3), 0 0 80px rgba(0, 255, 65, 0.1)',
                        zIndex: 5
                      }}
                    >
                      {/* Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-kawasaki-gray-900 via-black to-kawasaki-gray-800" />
                      
                      {/* Bike Image with 3D Effect */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ transform: 'translateZ(50px)' }}
                      >
                        <img
                          src={bike.image}
                          alt={bike.name}
                          className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                          style={{
                            filter: 'drop-shadow(0 0 30px rgba(0, 255, 65, 0.5))'
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = `https://via.placeholder.com/800x600/1a1a1a/00FF41?text=${encodeURIComponent(bike.name)}`;
                          }}
                        />
                      </div>
                      
                      {/* 3D Overlay Effects */}
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-kawasaki-green/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ transform: 'translateZ(30px)' }}
                      />
                      
                      {/* Floating Model Badge */}
                      <motion.div
                        className="absolute top-4 right-4 bg-kawasaki-green text-black font-bold px-4 py-2 rounded-lg"
                        style={{ 
                          transform: 'translateZ(80px)',
                          boxShadow: '0 10px 30px rgba(0, 255, 65, 0.4)'
                        }}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {bike.name}
                      </motion.div>
                      
                      {/* Border Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-kawasaki-green/30 group-hover:border-kawasaki-green/60 transition-colors duration-500" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Bike Information */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="space-y-6 relative z-30"
                    style={{ position: 'relative' }}
                  >
                    <div>
                      {/* Category Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="inline-flex items-center gap-2 bg-kawasaki-green/20 border border-kawasaki-green/40 rounded-full px-4 py-2 mb-4 relative z-40"
                      >
                        <span className="w-2 h-2 bg-kawasaki-green rounded-full animate-pulse" />
                        <span className="text-kawasaki-green text-sm font-bold uppercase tracking-wider">{bike.category}</span>
                      </motion.div>

                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="text-4xl md:text-5xl font-display text-kawasaki-green mb-4 relative z-40"
                        style={{
                          textShadow: '0 0 30px rgba(0, 255, 65, 0.3)'
                        }}
                      >
                        {bike.name}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-lg text-gray-300 mb-6 leading-relaxed relative z-40"
                      >
                        {bike.description}
                      </motion.p>
                    </div>
                    
                    {/* Specifications Grid */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="grid grid-cols-2 lg:grid-cols-3 gap-5 relative z-40"
                    >
                      {/* Engine */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-kawasaki-green/30 hover:border-kawasaki-green/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(0, 255, 65, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-kawasaki-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h4 className="text-kawasaki-green font-bold text-xs uppercase tracking-wider">Engine</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.engine}</p>
                      </motion.div>

                      {/* Power */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-red-500/30 hover:border-red-500/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(239, 68, 68, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          <h4 className="text-red-500 font-bold text-xs uppercase tracking-wider">Power</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.power}</p>
                      </motion.div>

                      {/* Torque */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-blue-500/30 hover:border-blue-500/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          <h4 className="text-blue-500 font-bold text-xs uppercase tracking-wider">Torque</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.torque}</p>
                      </motion.div>

                      {/* ABS Brakes */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-yellow-500/30 hover:border-yellow-500/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(234, 179, 8, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                          </svg>
                          <h4 className="text-yellow-500 font-bold text-xs uppercase tracking-wider">ABS Brakes</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.brakes}</p>
                      </motion.div>

                      {/* Top Speed */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                          </svg>
                          <h4 className="text-purple-500 font-bold text-xs uppercase tracking-wider">Top Speed</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.topSpeed}</p>
                      </motion.div>

                      {/* Weight */}
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-kawasaki-gray-800/80 to-kawasaki-gray-900/80 rounded-xl p-5 border border-orange-500/30 hover:border-orange-500/70 transition-all duration-300 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.08, 
                          y: -8,
                          boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)'
                        }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                          </svg>
                          <h4 className="text-orange-500 font-bold text-xs uppercase tracking-wider">Weight</h4>
                        </div>
                        <p className="text-white font-semibold text-sm leading-tight">{bike.weight}</p>
                      </motion.div>
                    </motion.div>
                    
                    {/* Price and Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="pt-6 border-t border-kawasaki-green/20"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <p className="text-gray-400 text-sm mb-1">Starting from</p>
                          <span className="text-4xl font-black text-kawasaki-green" style={{
                            textShadow: '0 0 20px rgba(0, 255, 65, 0.5)'
                          }}>
                            {bike.price}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-16 h-16 bg-gradient-to-br from-kawasaki-green to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-kawasaki-green/50"
                        >
                          <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 65, 0.5)' }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-kawasaki-green text-black font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Learn More
                        </motion.button>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-kawasaki-green text-kawasaki-green font-bold py-4 rounded-xl transition-all hover:bg-kawasaki-green hover:text-black flex items-center justify-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          Test Ride
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          ))}
        </main>
        
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

export default App