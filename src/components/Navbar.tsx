import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const menuItems = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    },
    { 
      name: 'Models', 
      href: '#ninja-300', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    },
    { 
      name: 'Technology', 
      href: '#technology', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    },
    { 
      name: 'Racing', 
      href: '#racing', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>
    },
    { 
      name: 'Gallery', 
      href: '#gallery', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleScroll = (e: any, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    const handleScrollEffect = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScrollEffect)
    return () => window.removeEventListener('scroll', handleScrollEffect)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-kawasaki-green/30 shadow-lg' 
          : 'bg-black/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={(e) => handleScroll(e, '#home')}
          >
            <div className="relative w-12 h-12 bg-gradient-to-br from-kawasaki-green to-green-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-kawasaki-green/50 transition-all">
              <span className="text-black font-black text-xl">K</span>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <div className="hidden sm:block">
              <div className="text-kawasaki-green font-display text-xl font-bold tracking-wider">
                KAWASAKI
              </div>
              <div className="text-xs text-gray-400 -mt-1 tracking-widest font-semibold">NINJA MOTORSPORTS</div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2, color: '#00FF41' }}
                className="text-gray-300 hover:text-kawasaki-green transition-all duration-300 font-medium cursor-pointer relative group flex items-center gap-2"
              >
                <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                {item.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-kawasaki-green rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-kawasaki-green hover:bg-kawasaki-green/80 text-black font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-kawasaki-green/25"
            >
              Book Test Ride
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-8 h-8 flex flex-col items-center justify-center space-y-1"
          >
            <motion.span
              animate={{
                rotate: isMenuOpen ? 45 : 0,
                y: isMenuOpen ? 8 : 0,
              }}
              className="w-6 h-0.5 bg-kawasaki-green transition-all duration-300"
            />
            <motion.span
              animate={{
                opacity: isMenuOpen ? 0 : 1,
              }}
              className="w-6 h-0.5 bg-kawasaki-green transition-all duration-300"
            />
            <motion.span
              animate={{
                rotate: isMenuOpen ? -45 : 0,
                y: isMenuOpen ? -8 : 0,
              }}
              className="w-6 h-0.5 bg-kawasaki-green transition-all duration-300"
            />
          </button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t border-kawasaki-green/20 bg-black/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300 hover:text-kawasaki-green hover:bg-kawasaki-green/10 transition-all duration-300 font-medium py-3 px-4 mx-4 rounded-lg cursor-pointer"
                  >
                    {item.icon}
                    {item.name}
                  </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="px-4 pt-4"
                >
                  <button className="w-full bg-kawasaki-green hover:bg-kawasaki-green/80 text-black font-semibold py-3 rounded-lg transition-all duration-300">
                    Book Test Ride
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
