import { motion } from 'framer-motion'
import { BikeModel } from '../data/bikeModels'

interface BikeSelectorProps {
  models: BikeModel[]
  selectedModel: BikeModel
  onModelSelect: (model: BikeModel) => void
}

export default function BikeSelector({ models, selectedModel, onModelSelect }: BikeSelectorProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const handleModelClick = (model: BikeModel) => {
    if (model.id !== selectedModel.id) {
      onModelSelect(model)
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
    >
      {models.map((model) => {
        const isSelected = model.id === selectedModel.id
        
        return (
          <motion.div
            key={model.id}
            variants={cardVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative cursor-pointer rounded-xl overflow-hidden
              transition-all duration-300 group
              ${isSelected 
                ? 'ring-2 ring-kawasaki-green shadow-lg shadow-kawasaki-green/30' 
                : 'hover:ring-2 hover:ring-kawasaki-green/50'
              }
            `}
            onClick={() => handleModelClick(model)}
          >
            {/* Card Background */}
            <div className={`
              bg-gradient-to-br from-kawasaki-gray-800 to-kawasaki-gray-900 
              p-6 h-full relative overflow-hidden
              ${isSelected ? 'bg-opacity-100' : 'bg-opacity-80'}
            `}>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-kawasaki-green/5 via-transparent to-kawasaki-green/5" />
              </div>

              {/* Selected indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-3 right-3 w-6 h-6 bg-kawasaki-green rounded-full flex items-center justify-center"
                >
                  <svg 
                    className="w-4 h-4 text-black" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </motion.div>
              )}

              {/* Model Image Placeholder */}
              <div className="relative mb-4 h-32 bg-kawasaki-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-kawasaki-gray-900/80 to-transparent"></div>
                
                {/* Bike silhouette placeholder */}
                <div className="text-kawasaki-green/30 group-hover:text-kawasaki-green/50 transition-colors duration-300">
                  <svg 
                    className="w-16 h-16" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L13.09 8.26L19 7L17.74 13.74L22 15.74L17.74 17.74L19 23L13.09 21.74L12 28L10.91 21.74L5 23L6.26 17.74L2 15.74L6.26 13.74L5 7L10.91 8.26L12 2Z"/>
                  </svg>
                </div>
                
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="text-xs text-kawasaki-green/70">
                    3D Model Preview
                  </div>
                </div>
              </div>

              {/* Model Info */}
              <div className="space-y-3">
                <div>
                  <h3 className={`
                    font-display text-lg font-bold transition-colors duration-300
                    ${isSelected ? 'text-kawasaki-green' : 'text-white group-hover:text-kawasaki-green'}
                  `}>
                    {model.name}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {model.description}
                  </p>
                </div>

                {/* Quick specs */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Engine:</span>
                    <span className="text-gray-300 font-medium">{model.engine.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Power:</span>
                    <span className="text-gray-300 font-medium">{model.power.split(' ')[0]}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Price:</span>
                    <span className="text-kawasaki-green font-bold">{model.price}</span>
                  </div>
                </div>

                {/* Action button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    w-full py-2 px-4 rounded-lg text-sm font-semibold
                    transition-all duration-300
                    ${isSelected 
                      ? 'bg-kawasaki-green text-black' 
                      : 'bg-transparent border border-kawasaki-green/50 text-kawasaki-green hover:bg-kawasaki-green hover:text-black'
                    }
                  `}
                >
                  {isSelected ? 'Selected' : 'View Model'}
                </motion.button>
              </div>

              {/* Hover glow effect */}
              <div className={`
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                transition-opacity duration-500 pointer-events-none
                bg-gradient-to-r from-kawasaki-green/5 via-transparent to-kawasaki-green/5
              `}></div>
            </div>

            {/* Loading indicator when switching */}
            {isSelected && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-kawasaki-green to-green-400"
              />
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}