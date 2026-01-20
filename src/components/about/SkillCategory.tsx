'use client'

import React from 'react'

// Skill category data structure
export interface SkillCategoryData {
  title: string
  icon: React.ReactNode
  skills: string[]
}

interface SkillCategoryProps {
  category: SkillCategoryData
  delay?: number
}

/**
 * SkillCategory Component
 * 
 * Renders a single skill category with an icon, title, and grid of skill chips.
 * Uses CSS-only animations for smooth fade-in effects.
 */
const SkillCategory: React.FC<SkillCategoryProps> = ({ category, delay = 0 }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Category Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
                        flex items-center justify-center text-cyan-400 border border-cyan-500/20">
          {category.icon}
        </div>
        <h3 className="text-lg font-semibold text-white font-display">
          {category.title}
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, index) => (
          <span
            key={skill}
            className="skill-chip"
            style={{ 
              animationDelay: `${delay + (index * 50)}ms`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory
