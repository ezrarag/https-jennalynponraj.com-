'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'
import BioSection from '@/components/BioSection'
import WorkCarousel from '@/components/WorkCarousel'
import SoundVisual from '@/components/SoundVisual'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <motion.main
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ staggerChildren: 0.2 }}
      >
        <HeroSection />
        <BioSection />
        <WorkCarousel />
        <SoundVisual />
        <FooterSection />
      </motion.main>
    </main>
  )
}