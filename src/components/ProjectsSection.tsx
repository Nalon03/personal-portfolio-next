'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SharedHeader from './SharedHeader'
import AnimatedBackground from './AnimatedBackground'

const ProjectsSection: React.FC = () => {
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
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground animated={false} />

      <div className="relative z-10 flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-purple-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <div className="text-4xl text-purple-400">🚀</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-400/20 text-purple-300 text-sm rounded-full border border-purple-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white text-center rounded-lg font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="flex-1 px-4 py-2 border border-white/30 text-white text-center rounded-lg font-medium hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Interested in working together?</h2>
            <p className="text-white/80 mb-8">Let&apos;s discuss your next project and bring your ideas to life.</p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection