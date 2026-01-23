'use client'

import React from 'react'

export interface SkillCategoryData {
  title: string
  icon: React.ReactNode
  skills: string[]
}

interface SkillCategoryProps {
  category: SkillCategoryData
  delay?: number
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, delay = 0 }) => {
  return (
    <div 
      className="skill-category-card glass-card rounded-xl p-4 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="skill-category-header flex items-center gap-3 mb-5">
        <div className="skill-category-icon-wrapper w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
                        flex items-center justify-center text-cyan-400 border border-cyan-500/20">
          {category.icon}
        </div>
        <h3 className="skill-category-title text-lg font-semibold text-white font-display">
          {category.title}
        </h3>
      </div>

      <div className="skill-category-skills-grid flex flex-wrap gap-2">
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
