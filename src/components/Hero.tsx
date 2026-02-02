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
      className="hero-section relative min-h-0 md:min-h-screen flex flex-col overflow-hidden md:overflow-visible"
      aria-labelledby="hero-title"
    >
      <AnimatedBackground />
      
      <div className="hero-content relative z-10 flex items-center justify-center min-h-0 md:h-full my-10 sm:my-16 md:my-20 lg:my-24 py-6 md:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-card-wrapper relative flex items-center justify-center">
            <motion.div
              className="hero-arrow hero-arrow-left hidden md:flex items-center justify-center absolute -left-8 lg:-left-16 top-1/2 -translate-y-1/2 pointer-events-none"
              animate={{ y: [-6, 0, -6], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <svg
                className="w-4 h-32 lg:h-44 text-cyan-400/80 drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]"
                viewBox="0 0 16 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="8" y1="4" x2="8" y2="126" />
                <path d="M2 118l6 10 6-10" />
              </svg>
            </motion.div>

            <motion.div
              className="hero-arrow hero-arrow-right hidden md:flex items-center justify-center absolute -right-8 lg:-right-16 top-1/2 -translate-y-1/2 pointer-events-none"
              animate={{ y: [6, 0, 6], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              aria-hidden="true"
            >
              <svg
                className="w-4 h-32 lg:h-44 text-cyan-400/80 drop-shadow-[0_0_10px_rgba(6,182,212,0.45)]"
                viewBox="0 0 16 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="8" y1="4" x2="8" y2="126" />
                <path d="M2 118l6 10 6-10" />
              </svg>
            </motion.div>

            <motion.article
              className="hero-card relative w-full min-h-[420px] sm:min-h-0 sm:w-[629px] sm:h-[491px] md:w-[699px] md:h-[434px] lg:w-[639px] lg:h-[440px] rounded-2xl border border-white/30 flex flex-col items-center px-4 sm:px-6 py-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ opacity: 1 }}
              aria-label="Introduction card"
            >
            <div className="hero-intro flex flex-col items-center text-center space-y-5 mb-2">
              <motion.figure
                className="hero-avatar w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-white shadow-2xl flex items-center justify-center bg-gray-100"
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
                className="hero-divider w-16 h-0.5 bg-gradient-to-r from-red-400 to-red-600"
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
              className="hero-actions mt-3 py-6 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
              role="group"
              aria-label="Call to action buttons"
            >
              <motion.button
                className="hero-btn-primary w-full sm:w-auto px-5 py-2 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 font-sans focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                onKeyDown={(e) => handleKeyDown(e, scrollToProjects)}
                aria-label="View my projects portfolio"
                type="button"
              >
                Check out my projects
              </motion.button>
              
              <motion.button
                className="hero-btn-secondary w-full sm:w-auto px-5 py-2 bg-transparent border border-white/60 text-white text-xs font-medium rounded-md hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 font-sans focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                onKeyDown={(e) => handleKeyDown(e, scrollToContact)}
                aria-label="Go to contact section to reach out"
                type="button"
              >
                Get in touch
              </motion.button>
            </motion.div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
