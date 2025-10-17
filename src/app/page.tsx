'use client'

import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
      </motion.div>
    </main>
  )
}