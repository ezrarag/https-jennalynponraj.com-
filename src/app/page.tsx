'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturedWorks from '@/components/FeaturedWorks'
import MusicLinks from '@/components/MusicLinks'
import BioSection from '@/components/BioSection'
import Gallery from '@/components/Gallery'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <FeaturedWorks />
        <MusicLinks />
        <BioSection />
        <Gallery />
        <ContactSection />
      </motion.div>
    </main>
  )
}