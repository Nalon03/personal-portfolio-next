'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import AnimatedBackground from './AnimatedBackground'

interface TypewriterTextProps {
  text: string
  speed?: number
  className?: string
  shouldStart: boolean
  onComplete?: () => void
  showStatic?: boolean
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  text, 
  speed = 20, 
  className = '',
  shouldStart,
  onComplete,
  showStatic = false
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    if (showStatic) return
    
    if (!shouldStart) {
      return
    }

    if (shouldStart && !hasStarted) {
      setHasStarted(true)
      indexRef.current = 0
    }
  }, [shouldStart, hasStarted, showStatic])

  useEffect(() => {
    if (showStatic) return
    if (!hasStarted || isComplete) return

    const typeNextChar = () => {
      if (indexRef.current < text.length) {
        indexRef.current++
        setDisplayedText(text.slice(0, indexRef.current))
      } else {
        setIsComplete(true)
        onComplete?.()
      }
    }

    const timeout = setTimeout(typeNextChar, speed)
    return () => clearTimeout(timeout)
  }, [displayedText, hasStarted, isComplete, text, speed, onComplete, showStatic])

  if (showStatic) {
    return <span className={className}>{text}</span>
  }

  if (!hasStarted) return null

  return (
    <span className={className}>
      {displayedText}
      {!isComplete && <span className="typewriter-cursor animate-pulse text-cyan-400">|</span>}
    </span>
  )
}

interface BulletItemProps {
  text: string
  speed: number
  shouldStart: boolean
  onComplete: () => void
  showStatic?: boolean
}

const BulletItem: React.FC<BulletItemProps> = ({ text, speed, shouldStart, onComplete, showStatic = false }) => {
  const [showBullet, setShowBullet] = useState(showStatic)

  useEffect(() => {
    if (shouldStart && !showBullet) {
      setShowBullet(true)
    }
  }, [shouldStart, showBullet])

  return (
    <li className={`bullet-item flex items-start gap-2 min-h-[1.5rem] transition-opacity duration-200 ${showBullet ? 'opacity-100' : 'opacity-0'}`}>
      <span className="bullet-dot w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
      <span>
        <TypewriterText 
          text={text} 
          speed={speed}
          shouldStart={shouldStart}
          onComplete={onComplete}
          showStatic={showStatic}
        />
      </span>
    </li>
  )
}

const aboutContent = {
  intro: "I'm a modern full-stack developer who builds digital experiences that are clean, fast, and stable. I enjoy creating systems that feel effortless for users but are thoughtfully engineered underneath.",
  philosophy: "I value clarity over complexity, structure over shortcuts, and quality over hype.",
}

const typingSpeed = 12

type SequenceStep = 'idle' | 'intro' | 'stackTitle'|'done'

const stepOrder: SequenceStep[] = ['idle', 'intro', 'stackTitle', 'done']

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const hasPlayedRef = useRef(false)
  const [currentStep, setCurrentStep] = useState<SequenceStep>('idle')
  const [animationComplete, setAnimationComplete] = useState(false)

  const goToNextStep = useCallback(() => {
    setCurrentStep(prev => {
      const currentIndex = stepOrder.indexOf(prev)
      if (currentIndex < stepOrder.length - 1) {
        const nextStep = stepOrder[currentIndex + 1]
        if (nextStep === 'done') {
          setAnimationComplete(true)
        }
        return nextStep
      }
      return prev
    })
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayedRef.current) {
            hasPlayedRef.current = true
            setTimeout(() => {
              setCurrentStep('intro')
            }, 500)
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const showStatic = animationComplete

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="about-section relative min-h-screen overflow-hidden"
    >
      <AnimatedBackground animated={false} />

      <div className="about-bg-decor absolute inset-0 overflow-hidden pointer-events-none">
        <div className="about-bg-glow-cyan absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="about-bg-glow-blue absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="about-content relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <header className="about-header text-center mb-8 md:mb-10">
          <h1 
            className="about-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display tracking-tight mb-2 opacity-0 animate-fade-in"
            style={{ animationFillMode: 'forwards' }}
          >
            About <span className="about-title-accent gradient-text-cyan">Me</span>
          </h1>
          <div 
            className="about-divider w-14 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full opacity-0 animate-fade-in-delay-2"
            style={{ animationFillMode: 'forwards' }}
          />
        </header>

        <div 
          className="about-card glass-card rounded-xl p-6 md:p-8 mb-12 opacity-0 animate-slide-up"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          <div className="about-greeting mb-6 text-center">
            <span className="about-badge inline-block px-2.5 py-1 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-3 font-sans">
              Full-Stack Developer
            </span>
            <h2 className="about-name text-xl sm:text-2xl font-bold text-white font-display animate-pop-pulse">
              Hi, I&apos;m Grace Yaa Nalon
            </h2>
          </div>

          <div className="about-intro space-y-5">
            <p className="about-intro-text text-sm sm:text-base text-white/80 leading-relaxed font-sans min-h-[4rem]">
              <TypewriterText 
                text={aboutContent.intro} 
                speed={typingSpeed}
                shouldStart={stepOrder.indexOf(currentStep) >= stepOrder.indexOf('intro')}
                onComplete={goToNextStep}
                showStatic={showStatic}
              />
            </p>
          </div>
        </div>

        <div className="about-section-divider section-divider w-full max-w-md mx-auto mb-4" />

        <div className="about-values text-center">
          <h2 
            className="about-values-title text-xl sm:text-1xl font-bold text-white font-display mb-4 opacity-0 animate-slide-up"
            style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
          >
            What I <span className="about-values-accent gradient-text-cyan">Value</span>
          </h2>

          <div 
            className="about-values-card glass-card rounded-xl p-6 md:p-8 opacity-0 animate-slide-up"
            style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          >
            <div className="about-values-list flex flex-wrap justify-center gap-2 mb-6">
              {['Clarity', 'Predictability', 'Performance', 'Stability'].map((value) => (
                <span 
                  key={value}
                  className="about-value-tag px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-md font-sans"
                >
                  {value}
                </span>
              ))}
            </div>

            <p className="about-values-text text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto font-sans">
              I believe clean engineering is a craft — not a race. I build systems that are 
              maintainable, understandable, and built to last. Every line of code should serve 
              a purpose, and every system should be designed with intention.
            </p>

            <div className="about-values-divider w-10 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
