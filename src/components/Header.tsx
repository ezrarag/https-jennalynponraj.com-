'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button, Box } from '@mui/material'
import { gsap } from 'gsap'

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.15], [0, 1, 0.8])
  const blur = useTransform(scrollYProgress, [0, 0.1], [0, 10])
  const y = useTransform(scrollYProgress, [0, 0.1], [0, -10])

  const menuItems = [
    { name: 'Bio', href: '#bio' },
    { name: 'Acting', href: '#acting' },
    { name: 'Music', href: '#music' },
    { name: 'VO', href: '#voice' },
    { name: 'Writing', href: '#writing' }
  ]

  useEffect(() => {
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      )
    }
  }, [])


  return (
    <motion.header 
      ref={headerRef}
      className="fixed bottom-0 right-0 z-50 bg-transparent"
      style={{ opacity, y, backdropFilter: `blur(${blur}px)` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <Box className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
        <Box className="flex items-end justify-end">
          {/* Navigation menu */}
          <Box component="nav" className="flex items-center">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                href={item.href}
                className="text-white/90 text-xs sm:text-sm font-light tracking-[0.15em] uppercase hover:text-white transition-all duration-500"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.7rem',
                  fontWeight: 300,
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  minWidth: 'auto',
                  padding: '8px 12px',
                  marginRight: '16px',
                  textShadow: '0 2px 12px rgba(0,0,0,0.4)',
                  '@media (min-width: 640px)': {
                    fontSize: '0.75rem',
                    padding: '10px 16px',
                    marginRight: '20px',
                  },
                  '@media (min-width: 1024px)': {
                    fontSize: '0.875rem',
                    padding: '12px 20px',
                    marginRight: '24px',
                  },
                  '&:hover': {
                    color: 'white',
                    backgroundColor: 'transparent',
                    textShadow: '0 2px 20px rgba(255,255,255,0.3)',
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </motion.header>
  )
}

export default Header
