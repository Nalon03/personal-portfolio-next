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
  
  const BASE_SPEED = 0.5

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      image: "/project2.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website with animations and responsive design",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      image: "/project3.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with interactive charts",
      tech: ["React", "D3.js", "Node.js", "WebSocket"],
      image: "/project4.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Feature-rich social platform with real-time messaging",
      tech: ["Next.js", "GraphQL", "MongoDB", "Redis"],
      image: "/project5.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "AI-powered content generation tool with custom templates",
      tech: ["Python", "FastAPI", "OpenAI", "React"],
      image: "/project6.jpg",
      liveUrl: "#",
      githubUrl: "#"
    },
  ]

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

    const trackWidth = trackRef.current.scrollWidth / 2

    if (positionRef.current >= trackWidth) {
      positionRef.current = 0
    }

    trackRef.current.style.transform = `translateX(-${positionRef.current}px)`

    animationRef.current = requestAnimationFrame(animate)
  }, [isPageVisible])

  // Start animation loop
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
      
      const trackWidth = trackRef.current.scrollWidth / 2
      
      positionRef.current += scrollAmount * 0.5
      
      if (positionRef.current < 0) {
        positionRef.current = trackWidth + positionRef.current
      } else if (positionRef.current >= trackWidth) {
        positionRef.current = positionRef.current - trackWidth
      }
    }

    wrapper.addEventListener('wheel', handleWheel, { passive: false })
    
    return () => {
      wrapper.removeEventListener('wheel', handleWheel)
    }
  }, [isHovered])

  const duplicatedProjects = [...projects, ...projects]

  return (
    <section className="projects-section relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground animated={false} />

      <div className="projects-content relative z-10 flex-1 px-4 sm:px-6 lg:px-20 py-16 md:py-24">
        <div className="projects-container max-w-7xl mx-auto">
          <motion.div
            className="projects-header text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="projects-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display tracking-tight mb-2">
              My <span className="projects-title-accent gradient-text-cyan">Projects</span>
            </h1>
            <div className="projects-divider w-14 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full
              opacity-0 animate-fade-in-delay-2"></div>
          </motion.div>

          <div 
            ref={wrapperRef}
            className="projects-carousel-wrapper relative overflow-hidden w-full rounded-xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute inset-y-0 left-0 w-1.5 z-20 pointer-events-none bg-gradient-to-r from-[#0a2540] to-transparent "></div>
            <div className="absolute inset-y-0 right-0 w-2 z-20 pointer-events-none bg-gradient-to-l from-[#0a2540] to-transparent"></div>
            <div
              ref={trackRef}
              className="projects-carousel-track flex gap-6 py-4"
            >
              {duplicatedProjects.map((project, index) => (
                <div
                  key={`${project.id}-${index}`}
                  className="project-card flex-shrink-0 w-[180px] sm:w-[250px] bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden cursor-pointer
                    transition-[border-color,box-shadow,background-color] duration-300 ease-out
                    hover:border-cyan-400/50 hover:shadow-[0_8px_30px_rgba(6,182,212,0.15)] hover:bg-white/[0.08]"
                  onClick={() => handleCardClick(project.liveUrl)}
                >
                  <div className="project-image h-[110px] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center relative overflow-hidden">
                    <div className="project-icon text-4xl text-cyan-400 transition-transform duration-300 group-hover:scale-110">🚀</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="project-body p-2">
                    <h3 className="project-title text-base font-bold text-white font-display tracking-tight mb-2">{project.title}</h3>
                    <p className="project-description text-xs sm:text-sm text-white/70 leading-relaxed font-sans mb-4 line-clamp-2">{project.description}</p>
                    
                    <div className="project-tech-list flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="project-tech-tag px-2.5 py-1 text-[10px] font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-md font-sans"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="project-tech-tag px-2.5 py-1 text-[10px] font-semibold text-white/50 bg-white/5 border border-white/10 rounded-md font-sans">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    
                    <div className="project-actions flex gap-2.5">
                      <a
                        href={project.liveUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn-demo flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/50 text-cyan-400 text-[11px] font-medium text-center rounded-lg 
                          hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 
                          transition-all duration-300 font-sans"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        onClick={(e) => e.stopPropagation()}
                        className="project-btn-github flex-1 px-4 py-2 bg-white/5 border border-white/20 text-white/80 text-[11px] font-medium text-center rounded-lg 
                          hover:bg-white/10 hover:border-white/40 hover:text-white
                          transition-all duration-300 font-sans"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mb-4">
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
              >
                <path d="M12 2v50M6 46l6 6 6-6" />
              </svg>
            </motion.div>
          </div>

          <motion.div
            className="projects-cta text-center mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="projects-cta-title text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-4">Interested in working together?</h2>
            <p className="projects-cta-text text-sm sm:text-base text-white/80 leading-relaxed font-sans mb-8">Let&apos;s discuss your next project and bring your ideas to life.</p>
            <motion.button
              className="projects-cta-btn px-5 py-2 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 font-sans"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
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