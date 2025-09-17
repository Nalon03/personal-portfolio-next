'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedBackground from './AnimatedBackground'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground />
      
      {/* Central Profile Content - Perfect single page layout */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-120px)] px-8 py-8 gap-12 lg:gap-20 mt-20">
        
        {/* Decorative Box Container - Perfect fit */}
        <motion.div
          className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl border border-white/30 flex items-center justify-center p-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          
          {/* Inner Content Container */}
          <div className="flex flex-col items-center text-center space-y-4 max-w-xs">
            {/* Profile Picture - Centered */}
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white shadow-2xl flex items-center justify-center bg-gray-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image
                src="/proff-profile.jpg"
                alt="Grace Yaa Nalon"
                width={50}
                height={50}
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
            
            {/* "MY NAME IS" Text - Directly below profile picture */}
            <motion.p
              className="text-xs md:text-sm text-white font-light tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              MY NAME IS
            </motion.p>
            
            {/* Main Name - Large and bold */}
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GRACE YAA NALON
            </motion.h1>
            
            {/* Separator Line - Thin white line */}
            <motion.div
              className="w-24 h-0.5 bg-white"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 1, delay: 1.0 }}
            />
            
            {/* Professional Title - Below separator */}
            <motion.div
              className="text-sm md:text-base text-white font-medium tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              FULL-STACK DEVELOPER
            </motion.div>
          </div>
        </motion.div>

        {/* Inspirational Quote Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Quote Icon */}
          <motion.div
            className="w-8 h-8 mb-4 text-cyan-400/80"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote
            className="text-sm md:text-base lg:text-lg text-white/90 font-light leading-relaxed mb-4 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            "Every great developer started with a single line of code and a dream to make a difference."
          </motion.blockquote>

          {/* Quote Attribution */}
          <motion.div
            className="flex flex-col items-center lg:items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="w-12 h-0.5 bg-cyan-400/70 mb-2"></div>
            <p className="text-xs text-white/70 font-medium tracking-wide">
              Welcome to my digital space
            </p>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              className="px-6 py-2 bg-transparent border border-cyan-400/60 text-cyan-400/80 text-sm font-medium rounded-md hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore My Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
    </section>
  )
}

export default Hero
