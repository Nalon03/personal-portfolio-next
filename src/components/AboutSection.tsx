'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SharedHeader from './SharedHeader'
import AnimatedBackground from './AnimatedBackground'

const AboutSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground animated={false} />

      {/* Main About Content */}
      <div className="relative z-10 flex-1 px-8 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Image and Personal Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Profile Image */}
              <div className="relative">
                <motion.div
                  className="w-64 h-64 mx-auto rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/proff-profile.jpg"
                    alt="Grace Yaa Nalon"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-cyan-400">3+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </motion.div>
                <motion.div
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-sm text-white/80">Projects Completed</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - About Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Introduction */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Hello, I'm Grace Yaa Nalon
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  A passionate full-stack developer with a love for creating beautiful, 
                  functional, and user-centered digital experiences. I believe in the power 
                  of technology to solve real-world problems and make a positive impact.
                </p>
              </div>

              {/* Story */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">My Journey</h3>
                <p className="text-white/80 leading-relaxed">
                  My journey into development started with curiosity and a desire to understand 
                  how things work. What began as simple HTML pages has evolved into building 
                  complex applications that serve real users. I'm constantly learning and 
                  adapting to new technologies while maintaining a focus on clean, maintainable code.
                </p>
              </div>

              {/* Philosophy */}
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-3">My Philosophy</h3>
                <p className="text-white/80 leading-relaxed">
                  I believe great software is built through collaboration, empathy, and attention 
                  to detail. Every line of code should have a purpose, every design decision should 
                  serve the user, and every project should tell a story.
                </p>
              </div>

              {/* Call to Action */}
              <motion.div
                className="pt-4 flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/projects">
                  <motion.button
                    className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </motion.button>
                </Link>
                
                <Link href="/contact">
                  <motion.button
                    className="px-8 py-3 bg-transparent border border-white/60 text-white font-medium rounded-lg hover:bg-white/10 hover:border-white hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get in Touch
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
