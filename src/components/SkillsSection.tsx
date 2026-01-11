'use client'

import React from 'react'
import { motion } from 'framer-motion'
import SharedHeader from './SharedHeader'
import AnimatedBackground from './AnimatedBackground'

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      color: "from-blue-400 to-cyan-400",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Framer Motion", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      color: "from-green-400 to-emerald-400",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 87 },
        { name: "MongoDB", level: 82 }
      ]
    },
    {
      title: "Tools & Technologies",
      color: "from-purple-400 to-pink-400",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "Figma", level: 88 },
        { name: "VS Code", level: 95 }
      ]
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground animated={false} />

      {/* Main Skills Content */}
      <div className="relative z-10 flex-1 px-8 py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Page Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + categoryIndex * 0.2 }}
              >
                <h2 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-8`}>
                  {category.title}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-white/60 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">Always Learning</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Technology evolves rapidly, and I&apos;m committed to staying current with the latest 
              trends and best practices. I regularly participate in online courses, contribute 
              to open-source projects, and build personal projects to expand my skill set.
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-green-400 to-emerald-400 text-white font-medium rounded-lg hover:from-green-500 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection