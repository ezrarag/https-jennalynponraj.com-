'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { bioContent, newsPressArticles, magazineSpread } from '@/data/sections'

const BioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-transparent px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto py-16 w-full">
        {/* Press Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white/85 italic leading-[1.7] max-w-[800px] mx-auto">
            "Jennalyn takes fierceness and fragility, what seem to be diametrically opposing concepts, and unites them."
          </blockquote>
          <cite className="text-gray-400/80 text-sm mt-4 block tracking-wider">— Clique Magazine</cite>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              style={{ y }}
              className="relative overflow-hidden rounded-lg"
            >
              <img 
                src="/bio.jpg" 
                alt="Jennalyn Ponraj portrait"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-light tracking-widest uppercase text-white/90 mb-6">
              About
            </h2>
            
            <div className="space-y-4">
              {bioContent.content.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  className="text-white/85 text-base sm:text-lg leading-[1.7] max-w-[800px]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">50+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">10+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">Global</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Reach</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* News + Press Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-white text-center mb-12">
            News + Press
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsPressArticles.slice(0, 3).map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.4 + (index * 0.1) }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-900/50 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div className="p-4">
                    <h4 className="text-white font-serif text-lg mb-2 line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {article.source}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Gradient Bridge */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
      </div>
    </section>
  )
}

export default BioSection
