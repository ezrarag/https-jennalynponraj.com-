'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const MusicLinks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const platforms = [
    {
      name: 'Spotify',
      description: 'Stream on Spotify',
      link: 'https://spotify.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.414c-.39.39-1.024.39-1.414 0L12 13.414l-3.172 3.172c-.39.39-1.024.39-1.414 0s-.39-1.024 0-1.414L10.586 12 7.414 8.828c-.39-.39-.39-1.024 0-1.414s1.024-.39 1.414 0L12 10.586l3.172-3.172c.39-.39 1.024-.39 1.414 0s.39 1.024 0 1.414L13.414 12l3.172 3.172c.39.39.39 1.024 0 1.414z"/>
        </svg>
      ),
      color: 'bg-green-500'
    },
    {
      name: 'Apple Music',
      description: 'Listen on Apple Music',
      link: 'https://music.apple.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
          <path d="M12 6c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z"/>
        </svg>
      ),
      color: 'bg-red-500'
    }
  ]

  return (
    <section id="music" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Music
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Stream Jennalyn's latest releases across all major platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden bg-white rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-300">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 ${platform.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                      <div className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                        {platform.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {platform.name}
                    </h3>
                    
                    <p className="text-gray-600 text-sm font-medium tracking-wide uppercase">
                      {platform.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent group-hover:border-gray-200 rounded-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm">
            More platforms coming soon
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default MusicLinks
