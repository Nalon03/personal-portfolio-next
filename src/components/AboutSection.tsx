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
    <span className={className} aria-live="polite" aria-atomic="false">
      {displayedText}
      {!isComplete && <span className="typewriter-cursor animate-pulse text-cyan-400" aria-hidden="true">|</span>}
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
      <span className="bullet-dot w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" aria-hidden="true" />
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
  intro: "As a full‑stack developer, my work centers on creating fast, reliable, and thoughtfully structured products. I’m intentional about every layer, from database flows to the final UI, so teams can ship with confidence and users can interact without friction. My goal is always the same, build systems that work beautifully and stay dependable long after launch.",
}

const typingSpeed = 12

type SequenceStep = 'idle' | 'intro' | 'stackTitle' | 'done'

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
      aria-labelledby="about-heading"
    >
      <AnimatedBackground animated={false} />

      <div className="about-bg-decor absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="about-bg-glow-cyan absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="about-bg-glow-blue absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="about-content relative z-10 w-full py-20 md:py-28">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <header className="about-header text-center mb-12 md:mb-16">
              <h1
                id="about-heading"
                className="about-title text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-display tracking-tight opacity-0 animate-fade-in"
                style={{ animationFillMode: 'forwards' }}
              >
                About <span className="about-title-accent gradient-text-cyan">Me</span>
              </h1>
              <div
                className="about-divider w-16 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-4 rounded-full opacity-0 animate-fade-in-delay-2"
                style={{ animationFillMode: 'forwards' }}
                aria-hidden="true"
                role="presentation"
              />
            </header>

            <article
              className="about-card glass-card rounded-2xl p-10 md:p-14 mb-10 opacity-0 animate-slide-up"
              style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
              aria-label="Personal introduction"
            >
              <div className="about-greeting mb-6 text-center">
                <span 
                  className="about-badge inline-block px-3 py-1.5 text-[10px] sm:text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-4 font-sans tracking-wide uppercase"
                  role="text"
                >
                  Full-Stack Developer
                </span>
                <h2 className="about-name text-xl sm:text-2xl font-bold text-white font-display animate-pop-pulse">
                  Hi, I&apos;m Grace Yaa Nalon
                </h2>
              </div>

              <div className="about-intro">
                <p className="about-intro-text text-sm sm:text-base text-white/80 font-light leading-relaxed font-sans text-center min-h-[5rem]">
                  <TypewriterText
                    text={aboutContent.intro}
                    speed={typingSpeed}
                    shouldStart={stepOrder.indexOf(currentStep) >= stepOrder.indexOf('intro')}
                    onComplete={goToNextStep}
                    showStatic={showStatic}
                  />
                </p>
              </div>
            </article>

            <article className="about-values text-center" aria-labelledby="values-heading">
              <h2
                id="values-heading"
                className="about-values-title text-xl sm:text-2xl font-bold text-white font-display mb-8 opacity-0 animate-slide-up"
                style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
              >
                What I <span className="about-values-accent gradient-text-cyan">Value</span>
              </h2>

              <div
                className="about-values-card glass-card rounded-2xl p-10 md:p-14 opacity-0 animate-slide-up"
                style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
              >
                <ul
                  className="about-values-list flex flex-wrap justify-center gap-3 mb-8"
                  aria-label="Core values"
                  role="list"
                >
                  {['Clarity', 'Predictability', 'Performance', 'Stability'].map((value) => (
                    <li
                      key={value}
                      className="about-value-tag px-3 py-1.5 text-xs font-semibold text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 rounded-lg font-sans transition-all duration-300 hover:bg-cyan-400/20 hover:scale-105"
                      role="listitem"
                    >
                      {value}
                    </li>
                  ))}
                </ul>

                <p className="about-values-text text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl mx-auto font-sans">
                  I see clean engineering as a craft, not a rush. I focus on building systems that people can understand, maintain, and trust over time. For me, every line of code should earn its place, and every part of a system should be there because it actually matters.
                </p>

                <div className="about-values-divider w-12 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-8 rounded-full" aria-hidden="true" role="presentation" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
