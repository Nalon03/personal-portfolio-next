'use client'

import React from 'react'
import { SkillCategory } from './about'
import type { SkillCategoryData } from './about'
import AnimatedBackground from './AnimatedBackground'

const skillCategories: SkillCategoryData[] = [
  {
    title: 'Frontend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Tailwind', 'Responsive Design'],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ['C#', '.NET', 'Java', 'Spring Boot','Nest.js', 'REST APIs', 'Authentication', 'SQL Databases'],
  },
  {
    title: 'Tools & DevOps',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'Docker', 'CI/CD basics', 'VS Code', 'IntelliJ', 'Visual Studio'],
  },
  {
    title: 'Soft Engineering Skills',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} 
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    skills: ['Problem solving', 'System thinking', 'Clean architecture', 'Communication', 'Documentation'],
  },
]

const SkillsSection: React.FC = () => {
  return (
    <section 
      className="skills-section relative min-h-screen flex flex-col overflow-hidden about-gradient-bg"
      aria-labelledby="skills-heading"
    >
      <AnimatedBackground animated={false} />

      <div className="skills-bg-decor absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="skills-bg-glow-cyan absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="skills-bg-glow-blue absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="skills-content relative z-10 flex-1 flex items-center justify-center min-h-0 w-full py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="skills-container max-w-5xl mx-auto w-full">
            <header className="skills-header text-center mb-8 sm:mb-10">
              <h1 
                id="skills-heading"
                className="skills-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display 
                           tracking-tight mb-4 opacity-0 animate-fade-in"
                style={{ animationFillMode: 'forwards' }}
              >
                Technical <span className="skills-title-accent gradient-text-cyan">Skills</span>
              </h1>
              
              <div 
                className="skills-divider w-14 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-3 rounded-full
                opacity-0 animate-fade-in-delay-2"
                style={{ animationFillMode: 'forwards' }}
                aria-hidden="true"
                role="presentation"
              />
            </header>

            <div 
              className="skills-grid grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8"
              role="list"
              aria-label="Skill categories"
            >
              {skillCategories.map((category, index) => (
                <SkillCategory 
                  key={category.title} 
                  category={category} 
                  delay={300 + (index * 100)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
