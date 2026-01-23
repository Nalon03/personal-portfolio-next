'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import Hero from './Hero'
import AboutSection from './AboutSection'
import ProjectsSection from './ProjectsSection'
import SkillsSection from './SkillsSection'
import ContactSection from './ContactSection'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

const ScrollablePortfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Home')
  const [mounted, setMounted] = useState(false)
  const navButtonRefs = useRef<(HTMLButtonElement | null)[]>([])

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].toLowerCase())
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  // Handle keyboard navigation for nav items with arrow key support
  const handleNavKeyDown = useCallback((e: React.KeyboardEvent, index: number) => {
    const { key } = e
    
    // Activate button on Enter or Space
    if (key === 'Enter' || key === ' ') {
      e.preventDefault()
      scrollToSection(navItems[index].toLowerCase())
      return
    }

    // Arrow key navigation between nav items
    let newIndex = index
    
    if (key === 'ArrowRight' || key === 'ArrowDown') {
      e.preventDefault()
      newIndex = index < navItems.length - 1 ? index + 1 : 0
    } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
      e.preventDefault()
      newIndex = index > 0 ? index - 1 : navItems.length - 1
    } else if (key === 'Home') {
      e.preventDefault()
      newIndex = 0
    } else if (key === 'End') {
      e.preventDefault()
      newIndex = navItems.length - 1
    }

    // Focus the new button if index changed
    if (newIndex !== index) {
      navButtonRefs.current[newIndex]?.focus()
    }
  }, [scrollToSection])

  if (!mounted) {
    return (
      <div 
        className="relative" 
        style={{ minHeight: '100vh', background: '#08203A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        role="status"
        aria-label="Loading portfolio content"
      >
        <div style={{ color: 'white' }} aria-live="polite">Loading...</div>
      </div>
    )
  }

  return (
    <div className="relative" style={{ minHeight: '100vh', background: '#08203A' }}>
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 w-full py-6 px-8 bg-black/20 backdrop-blur-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ opacity: 1 }}
        role="banner"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.button
            className="text-xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer focus-ring"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onClick={() => scrollToSection('home')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                scrollToSection('home')
              }
            }}
            style={{ opacity: 1 }}
            aria-label="Grace Yaa Nalon - Go to home section"
            type="button"
            tabIndex={0}
          >
            GYN
          </motion.button>
          
          <motion.nav 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ opacity: 1 }}
            role="navigation"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                ref={(el) => { navButtonRefs.current[index] = el }}
                onClick={() => scrollToSection(item.toLowerCase())}
                onKeyDown={(e) => handleNavKeyDown(e, index)}
                className={`font-medium transition-colors duration-300 relative group focus-ring ${
                  activeSection === item 
                    ? 'text-white' 
                    : 'text-white/80 hover:text-white'
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -2 }}
                aria-label={`Navigate to ${item} section`}
                aria-current={activeSection === item ? 'page' : undefined}
                type="button"
                tabIndex={0}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeLink"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  />
                )}
                {activeSection !== item && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                    whileHover={{ width: "100%" }}
                    aria-hidden="true"
                  />
                )}
              </motion.button>
            ))}
          </motion.nav>
          
          <motion.button
            className="md:hidden text-white p-2 focus-ring"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            aria-label="Open navigation menu"
            aria-expanded="false"
            aria-controls="mobile-navigation"
            type="button"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          aria-hidden="true"
        />
      </motion.header>

      <main id="main-content" role="main">
        <section id="home" aria-label="Introduction">
          <Hero />
        </section>

        <section id="about" aria-label="About me">
          <AboutSection />
        </section>

        <section id="skills" aria-label="Technical skills">
          <SkillsSection />
        </section>

        <section id="projects" aria-label="Portfolio projects">
          <ProjectsSection />
        </section>
        
        <section id="contact" aria-label="Contact information">
          <ContactSection />
        </section>
      </main>
    </div>
  )
}

export default ScrollablePortfolio
