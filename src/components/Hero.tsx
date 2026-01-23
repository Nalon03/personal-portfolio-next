'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedBackground from './AnimatedBackground'

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <section 
      className="hero-section relative min-h-screen flex flex-col"
      aria-labelledby="hero-title"
    >
      <AnimatedBackground />
      
      <div className="hero-content relative z-10 flex items-center justify-center h-full my-24">
        <motion.article
          className="hero-card relative w-[629px] h-[491px] md:w-[699px] md:h-[434px] lg:w-[639px] lg:h-[440px] rounded-2xl border border-white/30 flex flex-col items-center px-6 py-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ opacity: 1 }}
          aria-label="Introduction card"
        >
          <div className="hero-intro flex flex-col items-center text-center space-y-5 mb-2">
            <motion.figure
              className="hero-avatar w-36 h-36 md:w-34 md:h-34 rounded-full overflow-hidden border-2 border-white shadow-2xl flex items-center justify-center bg-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/proff-profile.jpg"
                alt="Portrait photo of Grace Yaa Nalon, Full-Stack Developer"
                width={85}
                height={85}
                className="hero-avatar-img object-cover rounded-full"
                priority
              />
            </motion.figure>
            
            <motion.p
              className="hero-label text-xs text-white/70 font-light tracking-widest uppercase font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              aria-hidden="true"
            >
              MY NAME IS
            </motion.p>
            
            <motion.h1
              id="hero-title"
              className="hero-name text-lg md:text-xl lg:text-2xl font-bold text-white tracking-tight leading-tight font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GRACE YAA NALON
            </motion.h1>
            
            <motion.div
              className="hero-divider w-16 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: "4rem" }}
              transition={{ duration: 1, delay: 1.0 }}
              aria-hidden="true"
              role="presentation"
            />
            
            <motion.p
              className="hero-role text-xs text-white/80 font-medium tracking-wide font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <span className="sr-only">Profession: </span>
              FULL-STACK DEVELOPER
            </motion.p>
          </div>

          <motion.div
            className="hero-actions mt-3 py-6 flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            role="group"
            aria-label="Call to action buttons"
          >
            <motion.button
              className="hero-btn-primary px-5 py-2 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-sans focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              onKeyDown={(e) => handleKeyDown(e, scrollToProjects)}
              aria-label="View my projects portfolio"
              type="button"
            >
              Explore My Work
            </motion.button>
            
            <motion.button
              className="hero-btn-secondary px-5 py-2 bg-transparent border border-white/60 text-white text-xs font-medium rounded-md hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 font-sans focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              onKeyDown={(e) => handleKeyDown(e, scrollToContact)}
              aria-label="Go to contact section to reach out"
              type="button"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.article>
      </div>
    </section>
  )
}

export default Hero
