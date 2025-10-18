'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  const backgroundImages = [
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2FJennalyn%20main%20site%20mood%20board.png?alt=media&token=cc957b4b-ef9c-4116-8dd5-29c791b03c29',
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2F2%20-%20Jennalyn%20main%20site%20mood%20board.png?alt=media&token=0caa404c-14f5-476d-979b-6623d032b410',
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2FJennalyn%20-%20Portfolio%20Site%20-%20horse.png?alt=media&token=a53d52c8-8bc4-45b9-bbb1-956cdc846b31',
    'https://firebasestorage.googleapis.com/v0/b/readyaimgo-clients-temp.firebasestorage.app/o/jennalyn%2FJennalyn%20-%20Portfolio%20Site%20-%20apocolypse.png?alt=media&token=f86eb9da-d162-490d-a6bc-54b11319f5b4'
  ]

  useEffect(() => {
    const getRandomInterval = () => Math.floor(Math.random() * (4 - 3 + 1)) + 3 // 3-4 seconds
    
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
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut",
              // Optimize for mobile performance
              type: "tween"
            }}
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              zIndex: 0,
              // Add will-change for better performance
              willChange: 'opacity'
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
        {/* Hero content can be added here later - keeping it clean for now */}
      </div>

      {/* Social Media Links - Bottom Right */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50">
        <div className="flex gap-2 sm:gap-4 bg-black/50 p-2 sm:p-4 rounded-lg border border-white/20">
          {/* IMDb */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="IMDb"
          >
            <span className="text-white text-xs font-bold group-hover:text-gray-300">IMDb</span>
          </a>
          
          {/* Instagram */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="Instagram"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          {/* TikTok */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="TikTok"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>
          
          {/* Email */}
          <a
            href="mailto:hello@jennalynponraj.com"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="Email"
          >
            <span className="text-white text-sm sm:text-lg font-bold group-hover:text-gray-300">@</span>
          </a>
          
          {/* LinkedIn */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="LinkedIn"
          >
            <span className="text-white text-xs font-bold group-hover:text-gray-300">in</span>
          </a>
          
          {/* YouTube */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="YouTube"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          
          {/* Music Note */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="Music"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </a>
          
          {/* Spotify */}
          <a
            href="#"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
            title="Spotify"
          >
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white group-hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection