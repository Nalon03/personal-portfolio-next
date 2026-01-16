'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const aboutTextChunks = [
  "I'm a Full-Stack Developer with 3 years of experience delivering high-quality digital products.",
  "I use strong, battle-tested technologies and build with intention, focusing on quality always.",
  "I ship work that is stable, scalable, and ready for real users—no shortcuts, no over-engineering.",
  "I'm known for clean code, strong problem-solving, and delivering exactly what a project needs.",
  "My goal is simple: be the developer people trust to get it done, and get it done right."
]

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
}

const slideIn = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
}

const DeltaBrainWaveText: React.FC = () => {
  return (
    <div className="about-content-wrapper relative w-full mt-4">
      {aboutTextChunks.map((chunk, idx) => (
        <motion.div
          key={idx}
          className="about-text-line relative"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 + idx * 0.12 }}
        >
          <motion.p
            className="about-text text-sm sm:text-base text-white/90 leading-tight relative z-10"
            animate={{ y: [0, -1, 0] }}
            transition={{ duration: 4 + idx * 0.3, repeat: Infinity, ease: "easeInOut" }}
          >
            {chunk}
          </motion.p>
          
          <div className="delta-wave-container relative h-5 -mt-1">
            <svg
              className="delta-wave-svg w-full h-full"
              viewBox="0 0 1000 20"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id={`waveGrad-${idx}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
                  <stop offset="25%" stopColor="#0ea5e9" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                  <stop offset="75%" stopColor="#0ea5e9" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                </linearGradient>
                <filter id={`glow-${idx}`}>
                  <feGaussianBlur stdDeviation="1" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              
              <motion.path
                className="delta-wave-primary"
                d={`M0,10 Q50,${4 - idx} 100,10 Q150,${16 + idx} 200,10 Q250,${3 - idx} 300,10 Q350,${17 + idx} 400,10 Q450,${4 - idx} 500,10 Q550,${16 + idx} 600,10 Q650,${3 - idx} 700,10 Q750,${17 + idx} 800,10 Q850,${4 - idx} 900,10 Q950,${16 + idx} 1000,10`}
                fill="none"
                stroke={`url(#waveGrad-${idx})`}
                strokeWidth="1.5"
                strokeLinecap="round"
                filter={`url(#glow-${idx})`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  d: [
                    `M0,10 Q50,${4 - idx} 100,10 Q150,${16 + idx} 200,10 Q250,${3 - idx} 300,10 Q350,${17 + idx} 400,10 Q450,${4 - idx} 500,10 Q550,${16 + idx} 600,10 Q650,${3 - idx} 700,10 Q750,${17 + idx} 800,10 Q850,${4 - idx} 900,10 Q950,${16 + idx} 1000,10`,
                    `M0,10 Q50,${16 + idx} 100,10 Q150,${4 - idx} 200,10 Q250,${17 + idx} 300,10 Q350,${3 - idx} 400,10 Q450,${16 + idx} 500,10 Q550,${4 - idx} 600,10 Q650,${17 + idx} 700,10 Q750,${3 - idx} 800,10 Q850,${16 + idx} 900,10 Q950,${4 - idx} 1000,10`,
                    `M0,10 Q50,${4 - idx} 100,10 Q150,${16 + idx} 200,10 Q250,${3 - idx} 300,10 Q350,${17 + idx} 400,10 Q450,${4 - idx} 500,10 Q550,${16 + idx} 600,10 Q650,${3 - idx} 700,10 Q750,${17 + idx} 800,10 Q850,${4 - idx} 900,10 Q950,${16 + idx} 1000,10`
                  ]
                }}
                transition={{
                  pathLength: { duration: 1.2, delay: 0.4 + idx * 0.1 },
                  opacity: { duration: 0.6, delay: 0.4 + idx * 0.1 },
                  d: { duration: 2 + idx * 0.2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
              
              <motion.path
                className="delta-wave-secondary"
                d={`M0,10 Q100,${6 - idx * 0.5} 200,10 Q300,${14 + idx * 0.5} 400,10 Q500,${6 - idx * 0.5} 600,10 Q700,${14 + idx * 0.5} 800,10 Q900,${6 - idx * 0.5} 1000,10`}
                fill="none"
                stroke="#0ea5e9"
                strokeWidth="0.8"
                strokeLinecap="round"
                opacity="0.5"
                animate={{
                  d: [
                    `M0,10 Q100,${6 - idx * 0.5} 200,10 Q300,${14 + idx * 0.5} 400,10 Q500,${6 - idx * 0.5} 600,10 Q700,${14 + idx * 0.5} 800,10 Q900,${6 - idx * 0.5} 1000,10`,
                    `M0,10 Q100,${14 + idx * 0.5} 200,10 Q300,${6 - idx * 0.5} 400,10 Q500,${14 + idx * 0.5} 600,10 Q700,${6 - idx * 0.5} 800,10 Q900,${14 + idx * 0.5} 1000,10`,
                    `M0,10 Q100,${6 - idx * 0.5} 200,10 Q300,${14 + idx * 0.5} 400,10 Q500,${6 - idx * 0.5} 600,10 Q700,${14 + idx * 0.5} 800,10 Q900,${6 - idx * 0.5} 1000,10`
                  ]
                }}
                transition={{ duration: 3 + idx * 0.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

const AboutSection: React.FC = () => {
  return (
    <section className="about-section relative min-h-screen flex flex-col items-center justify-start overflow-visible pt-8 sm:pt-10 md:pt-12 pb-16">
      <AnimatedBackground animated={false} />

      <div className="about-container relative z-10 w-full py-6">
        <div className="about-content max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="about-inner"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="about-header text-center pb-4" variants={slideIn}>
              <h1 className="about-title text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-white">
                About <span className="about-title-highlight bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Me</span>
              </h1>
              <div className="about-title-underline w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full" />
            </motion.div>

            <motion.div className="about-body space-y-8" variants={slideIn}>
              <motion.div
                className="greeting-bubble relative inline-block"
                initial={{ scale: 0, opacity: 0, y: 20 }}
                animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 1], y: [20, -5, 0] }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="greeting-bubble-bg relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl px-6 py-4 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)'
                  }}
                  animate={{
                    boxShadow: [
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)",
                      "0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 30px rgba(6, 182, 212, 0.2)",
                      "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 0 20px rgba(6, 182, 212, 0.1)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div
                    className="greeting-bubble-tail absolute -bottom-2 left-8 w-0 h-0"
                    style={{
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: '8px solid rgba(6, 182, 212, 0.15)'
                    }}
                  />

                  <motion.h2
                    className="greeting-text text-2xl font-bold text-white"
                    animate={{
                      scale: [1, 1.3, 1],
                      textShadow: [
                        "0 0 0px rgba(255, 255, 255, 0)",
                        "0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)",
                        "0 0 0px rgba(255, 255, 255, 0)"
                      ]
                    }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.span
                      className="greeting-hello inline-block"
                      animate={{ color: ["#ffffff", "#06b6d4", "#ffffff"] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
                    >
                      Hello, I&apos;m&nbsp;
                    </motion.span>
                    <motion.span
                      className="greeting-name inline-block"
                      animate={{ color: ["#ffffff", "#3b82f6", "#ffffff"] }}
                      transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 4.2, ease: "easeInOut" }}
                    >
                      Grace Yaa Nalon
                    </motion.span>
                  </motion.h2>
                </motion.div>
              </motion.div>
              
              <DeltaBrainWaveText />
            </motion.div>

            <motion.div className="experience-card max-w-xs pt-8" variants={slideIn}>
              <motion.div
                className="experience-card-inner bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="experience-years text-2xl font-bold text-cyan-400">3+</div>
                <div className="experience-label text-sm text-white/80">Years Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
