'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'

const ScrollablePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Projects', 'Skills', 'Contact']
      const scrollPosition = window.scrollY + 200 // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].toLowerCase())
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative">
      {/* Fixed Header - Always on top */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 w-full py-6 px-8 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo/Name */}
          <motion.div
            className="text-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => scrollToSection('home')}
          >
            GYN
          </motion.div>
          
          {/* Navigation Menu */}
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 relative group ${
                  activeSection === item 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeLink"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {activeSection !== item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        
        {/* Header Bottom Line */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      </motion.header>

      {/* Home Section - Fixed height, no scrolling */}
      <section id="home" className="h-screen">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="pt-24">
        <AboutSection />
      </section>

      {/* Minimal Separator */}
      <div className="flex justify-center py-0.5">
        <div className="w-16 h-px bg-cyan-400/30"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="pt-24">
        <ProjectsSection />
      </section>

      {/* Minimal Separator */}
      <div className="flex justify-center py-0.5">
        <div className="w-16 h-px bg-cyan-400/30"></div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="pt-24">
        <SkillsSection />
      </section>

      {/* Minimal Separator */}
      <div className="flex justify-center py-0.5">
        <div className="w-16 h-px bg-cyan-400/30"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="pt-24">
        <ContactSection />
      </section>
    </div>
  )
}

export default ScrollablePortfolio
