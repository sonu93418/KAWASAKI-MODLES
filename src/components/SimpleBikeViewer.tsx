import { motion } from 'framer-motion'
import { BikeModel } from '../data/bikeModels'

interface SimpleBikeViewerProps {
  selectedModel: BikeModel
  className?: string
}

export default function SimpleBikeViewer({ selectedModel, className = '' }: SimpleBikeViewerProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* 3D Placeholder Container */}
      <div className="relative w-full h-full bg-gradient-to-br from-kawasaki-gray-900 to-black rounded-xl overflow-hidden">
        
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="w-full h-full"
            style={{
              background: 'radial-gradient(circle at 30% 70%, rgba(0, 255, 65, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 255, 65, 0.1) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center h-full p-8">
          
          {/* 3D Model Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="text-center max-w-md"
          >
            {/* Bike Icon */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateY: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-kawasaki-green to-green-400 rounded-full flex items-center justify-center shadow-lg shadow-kawasaki-green/30">
                <svg 
                  className="w-20 h-20 text-black" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L13.09 8.26L19 7L17.74 13.74L22 15.74L17.74 17.74L19 23L13.09 21.74L12 28L10.91 21.74L5 23L6.26 17.74L2 15.74L6.26 13.74L5 7L10.91 8.26L12 2Z"/>
                </svg>
              </div>
            </motion.div>

            {/* Model Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-3xl font-display text-kawasaki-green mb-4">
                {selectedModel.name}
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                {selectedModel.description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-kawasaki-gray-800/50 rounded-lg p-4 border border-kawasaki-green/20">
                  <div className="text-kawasaki-green text-2xl font-bold">{selectedModel.engine.split(' ')[0]}</div>
                  <div className="text-gray-400 text-sm">Engine</div>
                </div>
                <div className="bg-kawasaki-gray-800/50 rounded-lg p-4 border border-kawasaki-green/20">
                  <div className="text-kawasaki-green text-2xl font-bold">{selectedModel.power.split(' ')[0]}</div>
                  <div className="text-gray-400 text-sm">Power</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D Loading Message */}
        <div className="absolute bottom-4 left-4 right-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-black/50 backdrop-blur-sm rounded-lg p-4 text-center border border-kawasaki-green/30"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-5 h-5 border-2 border-kawasaki-green border-t-transparent rounded-full"
              />
              <span className="text-kawasaki-green font-semibold">3D Model Ready</span>
            </div>
            <p className="text-gray-400 text-sm">
              Add GLB files to <code className="text-kawasaki-green">public/models/</code> for full 3D experience
            </p>
          </motion.div>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-kawasaki-green/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-kawasaki-green/30 rounded-bl-lg"></div>
      </div>
    </div>
  )
}