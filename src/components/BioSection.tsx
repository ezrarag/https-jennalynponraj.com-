'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const BioSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const bioText = `Jennalyn Ponraj is a multifaceted creative force, seamlessly blending the worlds of music, film, and entrepreneurship. As a visionary artist and founder, she has carved out a unique space in the entertainment industry, consistently pushing boundaries and redefining what it means to be a creative professional in the modern era.

Her journey began with an innate passion for storytelling, which she has masterfully translated across multiple mediums. As a musician, Jennalyn brings raw emotion and authentic expression to her work, creating soundscapes that resonate deeply with audiences worldwide. Her compositions are not just songs, but emotional narratives that capture the essence of human experience.

In the realm of film and commercial work, Jennalyn has established herself as a director with a distinctive voice. Her projects, including notable campaigns for major brands and contributions to film projects like "The Exorcist" on Amazon Prime, showcase her ability to translate complex narratives into compelling visual stories. Each project reflects her commitment to excellence and her unwavering dedication to authentic storytelling.

Beyond her artistic endeavors, Jennalyn is a forward-thinking entrepreneur who has built successful ventures that bridge the gap between creativity and commerce. Her innovative approach to business has allowed her to maintain creative integrity while building sustainable platforms for artistic expression.

What sets Jennalyn apart is her ability to seamlessly integrate her various roles—artist, director, entrepreneur—into a cohesive creative vision. She understands that true innovation comes from the intersection of different disciplines, and she continues to explore these intersections with fearless creativity and unwavering passion.

Her work is characterized by a commitment to authenticity, a dedication to pushing creative boundaries, and an understanding that the most powerful stories are those that connect us to our shared human experience. As she continues to evolve and expand her creative reach, Jennalyn Ponraj remains a beacon of inspiration for aspiring artists and entrepreneurs alike.`

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            About
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The story behind the creative vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-8 sm:p-12 border border-white/10">
            <div className="font-serif text-gray-300 leading-relaxed space-y-6">
              {bioText.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                  className="text-base sm:text-lg leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-white mb-2">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-white mb-2">10+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-serif font-bold text-white mb-2">Global</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Reach</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BioSection
