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
  const categoryId = `skill-category-${category.title.toLowerCase().replace(/\s+/g, '-')}`
  
  return (
    <article 
      className="skill-category-card glass-card rounded-xl p-4 opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      role="listitem"
      aria-labelledby={categoryId}
    >
      <header className="skill-category-header flex items-center gap-3 mb-5">
        <div 
          className="skill-category-icon-wrapper w-5 h-5 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 
                        flex items-center justify-center text-cyan-400 border border-cyan-500/20"
          aria-hidden="true"
        >
          {category.icon}
        </div>
        <h3 
          id={categoryId}
          className="skill-category-title text-lg font-semibold text-white font-display"
        >
          {category.title}
        </h3>
      </header>

      <ul 
        className="skill-category-skills-grid flex flex-wrap gap-2"
        aria-label={`${category.title} skills`}
        role="list"
      >
        {category.skills.map((skill, index) => (
          <li
            key={skill}
            className="skill-chip"
            style={{ 
              animationDelay: `${delay + (index * 50)}ms`,
            }}
            role="listitem"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default SkillCategory
