'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2FJennalyn%20main%20site%20mood%20board.png?alt=media&token=cc957b4b-ef9c-4116-8dd5-29c791b03c29',
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2F2%20-%20Jennalyn%20main%20site%20mood%20board.png?alt=media&token=0caa404c-14f5-476d-979b-6623d032b410'
  ]

  useEffect(() => {
    const getRandomInterval = () => Math.floor(Math.random() * (80 - 65 + 1)) + 65 // 65-80 seconds
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, getRandomInterval() * 1000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div 
        className="absolute z-0"
        style={{
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            className="absolute z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0
            }}
          >
            {/* Dark overlay for better text readability */}
            <div 
              className="absolute z-0 bg-black/40"
              style={{
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Jennalyn Ponraj
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-8"
        >
          Maverick Artist & Founder
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#work"
            className="px-8 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-medium tracking-wide"
          >
            View Work
          </a>
          <a
            href="#music"
            className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-medium tracking-wide"
          >
            Listen Now
          </a>
        </motion.div>
      </div>

      {/* Subtle sparkle animation */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { left: 20, top: 15, delay: 0 },
          { left: 80, top: 25, delay: 0.5 },
          { left: 15, top: 70, delay: 1 },
          { left: 90, top: 60, delay: 1.5 },
          { left: 50, top: 85, delay: 2 },
          { left: 70, top: 10, delay: 2.5 }
        ].map((sparkle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: sparkle.delay,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
