'use client'

import React, { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const ProjectsSection: React.FC = () => {
  const [isPageVisible, setIsPageVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef(0)
  const currentSpeedRef = useRef(0.5)
  const targetSpeedRef = useRef(0.5)
  const animationRef = useRef<number>()
  const setWidthRef = useRef(0)
  
  const BASE_SPEED = 0.5

  const projects = [
    {
      id: 1,
      title: "Entertainment App",
      description: "Frontend entertainment app built with Angular and integrated with the Movie Database API",
      tech: ["Angular", "Rest API", "Postgres",],
      image: "/entertainements.webp",
      //liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/Entertainment-App"
    },
    {
      id: 2,
      title: "Authentication API",
      description: "Authentication APIs designed with Express.js and integrated with PostgreSQL",
      tech: ["Express.js", "TypeScript", "JWT", "PostgreSQL"],
      image: "/api.webp",
      //liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/AUTHENTICATION-APP"
    },
    {
      id: 3,
      title: "Crypto Trading App",
      description: "Modern crypto app with animations and responsive design",
      tech: ["React", "Framer Motion", "Tailwind CSS"],
      image: "/crypto.webp",
      // liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/crypto-trading-app-react"
    },
    {
      id: 4,
      title: "Blog API",
      description: "Blog APIs designed with Nest.js and integrated with PostgreSQL",
      tech: ["Nest.js", "TypeScript", "JWT", "PostgreSQL"],
      image: "/api2.webp",
      // liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/BLOG-API"
    },
    {
      id: 5,
      title: "Countries App",
      description: "Countries app with detailed information about countries",
      tech: ["Angular", "Rest API", "Postgres",],
      image: "/countries.webp",
      // liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/Countries-App"
    },
    {
      id: 6,
      title: "Todo List App",
      description: "Todo list app with responsive design",
      tech: ["JavaScript", "HTML", "CSS",],
      image: "/todos.png",
      // liveUrl: "#",
      githubUrl: "https://github.com/Nalon03/Todo-List-App"
    },
  ]

  const updateSetWidth = useCallback(() => {
    if (!trackRef.current) return
    const children = trackRef.current.children
    if (children.length < projects.length + 1) return

    const firstItem = children[0] as HTMLElement
    const secondSetFirstItem = children[projects.length] as HTMLElement
    const width = secondSetFirstItem.offsetLeft - firstItem.offsetLeft

    if (width > 0) {
      setWidthRef.current = width
    }
  }, [projects.length])

  const getSingleSetWidth = useCallback(() => {
    if (setWidthRef.current > 0) {
      return setWidthRef.current
    }

    if (!trackRef.current) return 0

    const children = trackRef.current.children
    if (children.length >= projects.length + 1) {
      const firstItem = children[0] as HTMLElement
      const secondSetFirstItem = children[projects.length] as HTMLElement
      const width = secondSetFirstItem.offsetLeft - firstItem.offsetLeft

      if (width > 0) {
        setWidthRef.current = width
        return width
      }
    }

    return trackRef.current.scrollWidth / 3
  }, [projects.length])

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  useEffect(() => {
    updateSetWidth()
    const handleResize = () => updateSetWidth()
    window.addEventListener('resize', handleResize)
    const raf = requestAnimationFrame(updateSetWidth)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(raf)
    }
  }, [updateSetWidth])

  useEffect(() => {
    targetSpeedRef.current = isHovered ? 0 : BASE_SPEED
  }, [isHovered])

  const animate = useCallback(() => {
    if (!trackRef.current || !isPageVisible) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    const easing = 0.05
    currentSpeedRef.current += (targetSpeedRef.current - currentSpeedRef.current) * easing

    positionRef.current += currentSpeedRef.current

    const singleSetWidth = getSingleSetWidth()
    if (!singleSetWidth) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    positionRef.current = positionRef.current % singleSetWidth

    trackRef.current.style.transform = `translateX(-${positionRef.current}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [getSingleSetWidth, isPageVisible])

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate])

  const handleCardClick = (url: string) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return

    const handleWheel = (e: WheelEvent) => {
      if (!trackRef.current || !isHovered) return
      
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      
      if (!isHorizontalScroll) return
      
      e.preventDefault()
      e.stopPropagation()
      
      const scrollAmount = e.deltaX
      
      const singleSetWidth = getSingleSetWidth()
      if (!singleSetWidth) return
      
      positionRef.current += scrollAmount * 0.5
      
      positionRef.current = ((positionRef.current % singleSetWidth) + singleSetWidth) % singleSetWidth
    }

    wrapper.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      wrapper.removeEventListener('wheel', handleWheel)
    }
  }, [getSingleSetWidth, isHovered])

  const headerIndexRef = useRef(0)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        const activeElement = document.activeElement as HTMLElement
        if (activeElement && activeElement.tagName === 'BUTTON') {
          activeElement.blur()
        }
        return
      }
      
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
      
      if (isHovered && trackRef.current) {
        e.preventDefault()
        e.stopPropagation()
        
        const SCROLL_AMOUNT = 150
        const singleSetWidth = getSingleSetWidth()
        if (!singleSetWidth) return
        const direction = e.key === 'ArrowRight' ? 1 : -1
        
        positionRef.current += SCROLL_AMOUNT * direction
        
        positionRef.current = ((positionRef.current % singleSetWidth) + singleSetWidth) % singleSetWidth
        
        trackRef.current.style.transition = 'transform 0.3s ease-out'
        trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
        
        setTimeout(() => {
          if (trackRef.current) {
            trackRef.current.style.transition = ''
          }
        }, 300)
      } else {
        const headerNav = document.querySelector('header nav')
        if (!headerNav) return
        
        const buttons = headerNav.querySelectorAll('button')
        if (buttons.length === 0) return
        
        e.preventDefault()
        e.stopPropagation()
        
        if (e.key === 'ArrowRight') {
          headerIndexRef.current = (headerIndexRef.current + 1) % buttons.length
        } else if (e.key === 'ArrowLeft') {
          headerIndexRef.current = (headerIndexRef.current - 1 + buttons.length) % buttons.length
        }
        
        const targetButton = buttons[headerIndexRef.current] as HTMLButtonElement
        targetButton.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [getSingleSetWidth, isHovered])

  const duplicatedProjects = [...projects, ...projects, ...projects]

  const handleCardKeyDown = (e: React.KeyboardEvent, url: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCardClick(url)
    }
  }

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!trackRef.current) return
    
    const SCROLL_AMOUNT = 300
    const singleSetWidth = getSingleSetWidth()
    if (!singleSetWidth) return
    const scrollDirection = direction === 'right' ? 1 : -1
    
    positionRef.current += SCROLL_AMOUNT * scrollDirection
    
    positionRef.current = ((positionRef.current % singleSetWidth) + singleSetWidth) % singleSetWidth
    
    trackRef.current.style.transition = 'transform 0.4s ease-out'
    trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
    
    setTimeout(() => {
      if (trackRef.current) {
        trackRef.current.style.transition = ''
      }
    }, 400)
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="projects-section relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <AnimatedBackground animated={false} />

      <div className="projects-content relative z-10 flex-1 py-16 md:py-24 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-20">
          <div className="projects-container w-full max-w-[80rem] mx-auto">
            <motion.header
              className="projects-header text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 
                id="projects-heading"
                className="projects-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display tracking-tight mb-2"
              >
                My <span className="projects-title-accent gradient-text-cyan">Projects</span>
              </h1>
              <div 
                className="projects-divider w-14 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-3 rounded-full opacity-0 animate-fade-in-delay-2"
                aria-hidden="true"
                role="presentation"
              />
            </motion.header>

          <div className="projects-carousel-outer relative">
            <motion.button 
              className="left-scroll-indicators absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll projects left"
              type="button"
            >
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-sm hover:border-cyan-400 hover:bg-cyan-500/30 transition-colors duration-200"
                animate={{ 
                  x: [-3, 0, -3],
                  boxShadow: [
                    '0 0 8px rgba(6, 182, 212, 0.3)',
                    '0 0 16px rgba(6, 182, 212, 0.5)',
                    '0 0 8px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.div>
            </motion.button>
            <motion.button 
              className="right-scroll-indicators absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-30 cursor-pointer"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll projects right"
              type="button"
            >
              <motion.div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-sm hover:border-cyan-400 hover:bg-cyan-500/30 transition-colors duration-200"
                animate={{ 
                  x: [3, 0, 3],
                  boxShadow: [
                    '0 0 8px rgba(6, 182, 212, 0.3)',
                    '0 0 16px rgba(6, 182, 212, 0.5)',
                    '0 0 8px rgba(6, 182, 212, 0.3)'
                  ]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="text-cyan-400"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.div>
            </motion.button>

            <div 
              ref={wrapperRef}
              className="projects-carousel-wrapper relative overflow-hidden w-full rounded-xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              role="region"
              aria-label="Projects carousel - hover to pause auto-scroll"
              aria-roledescription="carousel"
            >
              <div className="left-gradient-fade absolute inset-y-0 left-0 w-2 z-20 pointer-events-none bg-gradient-to-r from-[#0a2540] via-[#0a2540]/70 to-transparent" aria-hidden="true" />
              
              <div className="right-gradient-fade absolute inset-y-0 right-0 w-2 z-20 pointer-events-none bg-gradient-to-l from-[#0a2540] via-[#0a2540]/70 to-transparent" aria-hidden="true" />
              
              <div
              ref={trackRef}
              className="projects-carousel-track flex gap-4 sm:gap-6 py-4"
              role="list"
              aria-label="Project cards"
            >
              {duplicatedProjects.map((project, index) => (
                <article
                  key={`${project.id}-${index}`}
                  className="project-card flex flex-col flex-shrink-0 w-[180px] sm:w-[250px] min-h-[320px] sm:min-h-[340px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden cursor-pointer
                    transition-[border-color,box-shadow,background-color] duration-300 ease-out
                    hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] hover:bg-white/[0.08]
                    focus-visible:outline-2 focus-visible:outline-cyan-400 focus-visible:outline-offset-2"
                  // onClick={() => handleCardClick(project.liveUrl)}
                  // onKeyDown={(e) => handleCardKeyDown(e, project.liveUrl)}
                  tabIndex={index < projects.length ? 0 : -1}
                  role="listitem"
                  aria-label={`${project.title} - ${project.description}`}
                >
                  <div 
                    className="project-image h-[96px] sm:h-[110px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden"
                    aria-hidden="true"
                  >
                    {project.image && project.image !== '/' ? (
                      <>
                        <img 
                          src={project.image} 
                          alt="" 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </>
                    ) : (
                      <>
                        <div className="project-icon text-4xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">🚀</div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </>
                    )}
                  </div>
                  
                  <div className="project-body flex flex-col flex-1 p-2 min-h-0">
                    <h3 className="project-title text-base font-bold text-white font-display tracking-tight mb-2">{project.title}</h3>
                    <p className="project-description text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-4 line-clamp-2">{project.description}</p>
                    
                    <ul 
                      className="project-tech-list flex flex-wrap gap-1.5 mb-4"
                      aria-label={`Technologies used in ${project.title}`}
                    >
                      {project.tech.slice(0, 3).map((tech) => (
                        <li
                          key={tech}
                          className="project-tech-tag px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-md font-sans"
                        >
                          {tech}
                        </li>
                      ))}
                      {project.tech.length > 3 && (
                        <li 
                          className="project-tech-tag px-2.5 py-1 text-[9px] sm:text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 rounded-md font-sans"
                          aria-label={`${project.tech.length - 3} more technologies`}
                        >
                          +{project.tech.length - 3}
                        </li>
                      )}
                    </ul>
                    
                    <div className="project-actions flex gap-2.5 mt-auto pt-1 my-3" role="group" aria-label="Project links">
                      {/*<a
                         href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn-demo flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400 text-[10px] sm:text-[11px] font-medium text-center rounded-lg 
                          hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 
                          transition-all duration-300 font-sans focus-ring"
                        aria-label={`View live demo of ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>*/}
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn-github flex-1 px-4 py-2 bg-white/5 border border-white/20 text-white/80 text-[10px] sm:text-[11px] font-medium text-center rounded-lg 
                          hover:bg-white/10 hover:border-white/40 hover:text-white
                          transition-all duration-300 font-sans focus-ring"
                        aria-label={`View ${project.title} source code on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </article>
              ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-4" aria-hidden="true">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="text-cyan-400/70"
            >
              <svg 
                width="24" 
                height="60" 
                viewBox="0 0 24 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2v50M6 46l6 6 6-6" />
              </svg>
            </motion.div>
          </div>

            <motion.aside
              className="projects-cta text-center mt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              aria-label="Call to action"
            >
              <h2 className="projects-cta-title text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-4">Interested in working together?</h2>
              <p className="projects-cta-text text-sm sm:text-base text-white/80 leading-relaxed font-sans mb-8">Let&apos;s discuss your next project and bring your ideas to life.</p>
              <motion.button
                className="projects-cta-btn px-5 py-2 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 font-sans focus-ring"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                aria-label="Go to contact section to get in touch"
                type="button"
              >
                Get In Touch
              </motion.button>
            </motion.aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        .projects-carousel-track {
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          will-change: transform;
        }
      `}</style>
    </section>
  )
}

export default ProjectsSection