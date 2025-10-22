'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { actingVideos, musicContent, voSamples, writingPieces } from '@/data/sections'

const WorkCarousel = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [activeSection, setActiveSection] = useState<'acting' | 'music' | 'voice' | 'writing'>('acting')

  const sections = {
    acting: {
      title: 'Acting',
      items: actingVideos,
      type: 'video'
    },
    music: {
      title: 'Music',
      items: [musicContent],
      type: 'audio'
    },
    voice: {
      title: 'Voice Over',
      items: voSamples,
      type: 'audio'
    },
    writing: {
      title: 'Writing',
      items: writingPieces,
      type: 'text'
    }
  }

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-transparent py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center space-x-8 mb-8">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key as any)}
                className={`text-lg font-serif transition-all duration-300 ${
                  activeSection === key
                    ? 'text-white border-b-2 border-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Horizontal Scrolling Content */}
        <motion.div
          style={{ x }}
          className="overflow-hidden"
        >
          <div className="flex space-x-8 min-w-max">
            {sections[activeSection].items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-full bg-gray-900/50 rounded-lg border border-white/10 overflow-hidden">
                  {/* Background Image/Video */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    {sections[activeSection].type === 'video' && (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 5v10l8-5-8-5z" />
                          </svg>
                        </div>
                        <p className="text-white/40 text-sm">
                          {'title' in item ? item.title : 'albumTitle' in item ? item.albumTitle : 'Untitled'}
                        </p>
                      </div>
                    )}
                    {sections[activeSection].type === 'audio' && (
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" />
                          </svg>
                        </div>
                        <p className="text-white/40 text-sm">
                          {'title' in item ? item.title : 'albumTitle' in item ? item.albumTitle : 'Untitled'}
                        </p>
                      </div>
                    )}
                    {sections[activeSection].type === 'text' && (
                      <div className="text-center p-6">
                        <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center">
                          <svg className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                          </svg>
                        </div>
                        <p className="text-white/40 text-sm">
                          {'title' in item ? item.title : 'albumTitle' in item ? item.albumTitle : 'Untitled'}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-serif text-xl mb-2">
                      {'title' in item ? item.title : 'albumTitle' in item ? item.albumTitle : 'Untitled'}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {'description' in item ? item.description : 'excerpt' in item ? item.excerpt : 'No description available'}
                    </p>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">Drag to explore more</p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  dot === 1 ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Gradient Bridge */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
      </div>
    </section>
  )
}

export default WorkCarousel
