'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FeaturedWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const works = [
    {
      title: 'Taco Bell Commercial',
      description: 'Creative Direction & Production',
      link: 'https://ispot.tv',
      image: '/placeholder-taco-bell.jpg',
      category: 'Commercial'
    },
    {
      title: 'Music Video',
      description: 'Director & Creative Vision',
      link: 'https://youtube.com',
      image: '/placeholder-music-video.jpg',
      category: 'Music Video'
    },
    {
      title: 'The Exorcist',
      description: 'Amazon Prime Original',
      link: 'https://amazon.com',
      image: '/placeholder-exorcist.jpg',
      category: 'Film'
    },
    {
      title: 'Nike Campaign',
      description: 'Brand Partnership',
      link: '#',
      image: '/placeholder-nike.jpg',
      category: 'Campaign'
    }
  ]

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Featured Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A curated selection of creative projects spanning commercial, film, and music video direction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
            >
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden bg-gray-900 rounded-lg aspect-video mb-6">
                  {/* Placeholder image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z" />
                        </svg>
                      </div>
                      <p className="text-white/40 text-sm">{work.title}</p>
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                  
                  {/* Play button overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-serif font-semibold text-white group-hover:text-gray-300 transition-colors">
                      {work.title}
                    </h3>
                    <span className="text-xs text-gray-500 uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    {work.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-links font-bold tracking-wide"
          >
            View All Projects
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedWorks
