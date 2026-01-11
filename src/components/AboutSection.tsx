'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import SharedHeader from './SharedHeader'
import AnimatedBackground from './AnimatedBackground'

const AboutSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden  ">
      <AnimatedBackground animated={false} />

      <div className="relative z-10 flex-1 my-28 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
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

            <motion.div
              className="space-y-16"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
                  Hello, I&apos;m Grace Yaa Nalon
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  A passionate full-stack developer with a love for creating beautiful, 
                  functional, and user-centered digital experiences. I believe in the power 
                  of technology to solve real-world problems and make a positive impact.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">My Journey</h3>
                <p className="text-white/80 leading-relaxed">
                  My journey into development started with curiosity and a desire to understand 
                  how things work. What began as simple HTML pages has evolved into building 
                  complex applications that serve real users. I&apos;m constantly learning and 
                  adapting to new technologies while maintaining a focus on clean, maintainable code.
                </p>
              </div>


             </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
