'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const FooterSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])

  const socialLinks = [
    { name: 'IMDb', href: '#', icon: 'IMDb' },
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'Spotify', href: '#', icon: '♪' },
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'YouTube', href: '#', icon: 'YT' }
  ]

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-transparent py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Signature */}
        <motion.div
          className="mb-16"
          style={{ opacity, scale }}
        >
          <motion.img
            src="/jennalyn-signature.svg"
            alt="Jennalyn Ponraj Signature"
            className="w-80 sm:w-96 lg:w-[28rem] h-auto mx-auto opacity-90"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="w-12 h-12 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center hover:bg-white/10 hover:border-white/50 transition-all duration-300 group"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                whileHover={{ scale: 1.1 }}
                title={link.name}
              >
                <span className="text-white text-sm font-bold group-hover:text-gray-300">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Footer Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="space-y-4"
        >
          <p className="text-gray-400 text-sm">
            © 2025 Jennalyn Ponraj · All Rights Reserved
          </p>
          <p className="text-gray-500 text-xs">
            Built with passion and precision
          </p>
        </motion.div>

        {/* Ambient Background Motion */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: useTransform(scrollYProgress, [0, 1], [0.1, 0.3]) }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent"
            animate={{
              background: [
                'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                'linear-gradient(225deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.05) 50%, transparent 100%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default FooterSection
