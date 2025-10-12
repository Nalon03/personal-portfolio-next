'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import AnimatedBackground from './AnimatedBackground'

const Hero: React.FC = () => {
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem('hasVisited')
    
    if (!hasVisited) {
      // First visit - show welcome
      setShowWelcome(true)
      
      // Set flag that user has visited
      localStorage.setItem('hasVisited', 'true')
      
      // Hide welcome after 5 seconds
      const timer = setTimeout(() => {
        setShowWelcome(false)
      }, 5000) // 5 seconds

      return () => clearTimeout(timer)
    }
  }, [])

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

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />
      
      {/* Welcome Greeting - Shows first, then disappears */}
      {showWelcome && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-center space-y-0.3"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Welcome Laptop Image */}
            <motion.div
              className="w-20 h-20 mx-auto mb-10"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg shadow-lg flex items-center justify-center border border-cyan-400/30">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-cyan-400">
                  <path d="M4 6h16v10H4V6zm2 2v6h12V8H6zm-2-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4zm0 12h16v2H4v-2z"/>
                </svg>
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.div
              className="space-y-15"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <motion.h1
                className="text-8xl md:text-9xl font-black text-white tracking-wider drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
              >
                Welcome
              </motion.h1>
              
              <motion.div
                className="w-1 h-0.025 bg-cyan-400 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: "0.25rem" }}
                transition={{ duration: 1.5, delay: 2.5 }}
              />
              
              <motion.p
                className="text-3xl md:text-4xl text-white font-black tracking-wider drop-shadow-2xl mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.8 }}
              >
                to my digital space
              </motion.p>
            </motion.div>


              {/* Welcome Icon */}
              <motion.div
              className="w-32 h-32 mx-auto mt-32 text-cyan-400/90 drop-shadow-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center space-x-0.1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-0.1 h-0.1 bg-cyan-400/60 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    repeatDelay: 2
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Central Profile Content - Centered layout */}
      <div className="relative z-10 flex items-center justify-center h-[calc(100vh-120px)] px-8 py-8 mt-[13vh] mb-[13vh]">
        
        {/* Decorative Box Container - Reduced height, centered */}
        <motion.div
          className="relative w-[629px] h-[491px] md:w-[699px] md:h-[534px] lg:w-[839px] lg:h-[590px] rounded-2xl border border-white/30 flex flex-col items-center justify-between pt-8 pb-6 px-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          
          {/* Main Profile Content - Top section */}
          <div className="flex flex-col items-center text-center space-y-5 mb-8">
            {/* Profile Picture - Centered */}
            <motion.div
              className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white shadow-2xl flex items-center justify-center bg-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/proff-profile.jpg"
                alt="Grace Yaa Nalon"
                width={85}
                height={85}
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
            
            {/* "MY NAME IS" Text */}
            <motion.p
              className="text-sm text-white font-light tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              MY NAME IS
            </motion.p>
            
            {/* Main Name */}
            <motion.h1
              className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GRACE YAA NALON
            </motion.h1>
            
            {/* Separator Line */}
            <motion.div
              className="w-20 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ duration: 1, delay: 1.0 }}
            />
            
            {/* Professional Title */}
            <motion.div
              className="text-sm text-white font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              FULL-STACK DEVELOPER
            </motion.div>
          </div>

          {/* Quote Section - Bottom section, smaller */}
          <motion.div
            className="flex flex-col items-center text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {/* Quote Icon - Smaller */}
            <motion.div
              className="w-5 h-5 text-cyan-400/80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </motion.div>

            {/* Main Quote - Smaller text */}
            <motion.blockquote
              className="text-xs md:text-sm text-white/90 font-light leading-relaxed italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              "Every great developer started with a single line of code and a dream to make a difference."
            </motion.blockquote>

            {/* Quote Attribution - Smaller */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
            >
              {/* <div className="w-8 h-0.5 bg-cyan-400/70 mb-1"></div> */}
              {/* <p className="text-sm text-white/70 font-medium tracking-wide">
                Welcome to my digital space
              </p> */}
            </motion.div>

            {/* Call to Action Buttons - Clear and visible */}
            <motion.div
              className="mt-3 py-6 flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.2 }}
            >
              <motion.button
                className="px-6 py-2.5 bg-transparent border border-cyan-400/80 text-cyan-400 text-sm font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
              >
                Explore My Work
              </motion.button>
              
              <motion.button
                className="px-6 py-2.5 bg-transparent border border-white/60 text-white text-sm font-medium rounded-md hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  )
}

export default Hero
