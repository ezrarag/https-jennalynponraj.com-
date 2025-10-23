'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const SoundVisual = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const [waveformData, setWaveformData] = useState<number[]>([])

  // Generate waveform data
  useEffect(() => {
    const generateWaveform = () => {
      const data = Array.from({ length: 100 }, (_, i) => {
        const baseHeight = Math.sin(i * 0.1) * 0.5 + 0.5
        const noise = Math.random() * 0.3
        return Math.max(0.1, baseHeight + noise)
      })
      setWaveformData(data)
    }
    generateWaveform()
  }, [])

  const waveformOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-transparent py-8 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Animated Waveform Background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: waveformOpacity }}
        >
          <div className="flex items-end space-x-1 h-64">
            {waveformData.map((height, index) => (
              <motion.div
                key={index}
                className="bg-white/20 rounded-t"
                style={{
                  width: '4px',
                  height: `${height * 200}px`,
                }}
                animate={{
                  height: [`${height * 200}px`, `${height * 300}px`, `${height * 200}px`],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.02,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Caption Overlay */}
        <motion.div
          className="relative z-10 text-center"
          style={{ opacity: textOpacity, y: textY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-white/85 tracking-wider">
              Voice is vibration.
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white/70 tracking-widest uppercase">
              Frequency. Resonance.
            </h3>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <p className="text-white/85 text-lg leading-[1.7] max-w-[800px] mx-auto">
                Every word carries weight. Every pause holds meaning. 
                Through voice, we connect across distances, cultures, and experiences.
              </p>
            </motion.div>

            {/* Audio Samples Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
            >
              {[
                { title: "Commercial", description: "Brand voice & narration" },
                { title: "Character", description: "Animation & gaming" },
                { title: "Documentary", description: "Storytelling & education" },
                { title: "Audiobook", description: "Literary performance" }
              ].map((sample, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.1) }}
                  className="bg-gray-900/50 border border-white/10 rounded-lg p-6 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-white font-serif text-xl">{sample.title}</h4>
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{sample.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ambient Particles */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: waveformOpacity }}
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
        
        {/* Gradient Bridge */}
        <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
      </div>
    </section>
  )
}

export default SoundVisual
