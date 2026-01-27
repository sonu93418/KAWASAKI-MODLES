import { motion } from 'framer-motion'
import { BikeModel } from '../data/bikeModels'

interface SpecsPanelProps {
  selectedModel: BikeModel
}

export default function SpecsPanel({ selectedModel }: SpecsPanelProps) {
  const specs = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      label: 'Engine',
      value: selectedModel.engine,
      highlight: true
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Power',
      value: selectedModel.power,
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      label: 'Torque',
      value: selectedModel.torque,
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      label: 'Mileage',
      value: selectedModel.mileage,
      highlight: false
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      label: 'Price',
      value: selectedModel.price,
      highlight: true
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 bg-gradient-to-b from-kawasaki-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={titleVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-display text-gradient mb-4"
          >
            Technical Specifications
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-transparent via-kawasaki-green to-transparent mx-auto max-w-xs"
          />
        </motion.div>

        {/* Model Header */}
        <motion.div
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.h3 
            key={selectedModel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display text-kawasaki-green mb-3"
          >
            {selectedModel.name}
          </motion.h3>
          <motion.p
            key={`desc-${selectedModel.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            {selectedModel.description}
          </motion.p>
        </motion.div>

        {/* Specs Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12"
        >
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              className={`
                relative bg-kawasaki-gray-800 rounded-xl p-6 text-center
                border border-kawasaki-gray-700 hover:border-kawasaki-green/50
                transition-all duration-300 group overflow-hidden
                ${spec.highlight ? 'ring-1 ring-kawasaki-green/30' : ''}
              `}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-kawasaki-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`
                  inline-flex items-center justify-center w-12 h-12 rounded-full mb-4
                  ${spec.highlight 
                    ? 'bg-kawasaki-green text-black' 
                    : 'bg-kawasaki-gray-700 text-kawasaki-green'
                  }
                  transition-colors duration-300
                `}
              >
                {spec.icon}
              </motion.div>

              {/* Label */}
              <h4 className="text-gray-400 text-sm font-medium mb-2 uppercase tracking-wide">
                {spec.label}
              </h4>

              {/* Value */}
              <motion.p
                key={`${spec.label}-${selectedModel.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className={`
                  text-lg font-bold leading-tight
                  ${spec.highlight ? 'text-kawasaki-green' : 'text-white'}
                `}
              >
                {spec.value}
              </motion.p>

              {/* Highlight indicator */}
              {spec.highlight && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-kawasaki-green to-green-400"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="btn-primary text-lg px-10 py-4 rounded-xl font-display">
              Book Test Ride
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-kawasaki-green rounded-full"></div>
              Free consultation
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-kawasaki-green rounded-full"></div>
              Expert guidance
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-kawasaki-green rounded-full"></div>
              No commitment
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}