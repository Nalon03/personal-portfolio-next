'use client'

import React, { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
  honeypot: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const ContactSection: React.FC = () => {
  const nameId = useId()
  const emailId = useId()
  const subjectId = useId()
  const messageId = useId()
  const formDescriptionId = useId()

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const contactInfo = [
    {

      title: "Email",
      value: "nalongrace03@gmail.com",
      link: "mailto:nalongrace03@gmail.com",
      ariaLabel: "Send email to nalongrace03@gmail.com"
    },
    {

      title: "Phone",
      value: "+233 2448311783",
      link: "tel:+2332448311783",
      ariaLabel: "Call phone number"
    },
    {

      title: "Location",
      value: "Ghana",
      link: "#",
      ariaLabel: "Location: Ghana"
    },
    {

      title: "LinkedIn",
      value: "linkedin.com/in/nalongrace",
      link: "https://www.linkedin.com/in/nalongrace",
      ariaLabel: "Visit LinkedIn profile (opens in new tab)"
    },
    {

      title: "Github",
      value: "github.com/Nalon03",
      link: "https://github.com/Nalon03",
      ariaLabel: "Visit Github profile (opens in new tab)"
    }
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setStatus({ type: 'loading', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        honeypot: ''
      })

      setTimeout(() => {
        setStatus({ type: 'idle', message: '' })
      }, 5000)
    } catch (error) {
      const friendlyFallback = 'Something went wrong. Please try again later.'
      const message = error instanceof Error ? error.message : friendlyFallback
      const isTechnicalError = /JSON|Unexpected token|SyntaxError|fetch|DOCTYPE|network|Failed to fetch/i.test(message)
      setStatus({
        type: 'error',
        message: isTechnicalError ? friendlyFallback : message
      })
    }
  }

  return (
    <section
      className="contact-section relative min-h-screen flex flex-col overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <AnimatedBackground animated={false} />

      <div className="contact-bg-decor absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="contact-bg-glow-cyan absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="contact-bg-glow-blue absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="contact-content relative z-10 flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="contact-container max-w-5xl mx-auto">
            <motion.header
              className="contact-header text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                id="contact-heading"
                className="contact-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display tracking-tight mb-2"
              >
                Get In <span className="contact-title-accent gradient-text-cyan">Touch</span>
              </h1>
              <div
                className="contact-divider w-14 h-0.5 bg-gradient-to-r from-red-400 to-red-600 mx-auto mt-3 rounded-full"
                aria-hidden="true"
                role="presentation"
              />
            </motion.header>

            <div className="contact-grid grid lg:grid-cols-2 gap-8">
              <motion.aside
                className="contact-info-wrapper space-y-6 w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                aria-label="Contact information"
              >
                <nav
                  className="contact-info-list space-y-4"
                  aria-label="Contact methods"
                >
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={item.title}
                      href={item.link}
                      className="contact-info-card flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-300 group focus-ring"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      aria-label={item.ariaLabel}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <span className="contact-info-icon flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-colors duration-300" aria-hidden="true">
                        {item.title === 'Email' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                        )}
                        {item.title === 'Phone' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        )}
                        {item.title === 'Location' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        )}
                        {item.title === 'LinkedIn' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        )}
                        {item.title === 'Github' && (
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        )}
                      </span>
                      <div className="contact-info-details min-w-0">
                        <h3 className="contact-info-title text-sm font-semibold text-white font-sans">{item.title}</h3>
                        <p className="contact-info-value text-xs sm:text-sm text-white/70 group-hover:text-cyan-400 transition-colors duration-300 font-sans break-words">
                          {item.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </nav>
              </motion.aside>

              <motion.div
                className="contact-form-wrapper glass-card rounded-xl p-6 md:p-8 w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h2
                  id="form-heading"
                  className="contact-form-title text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-2"
                >
                  Send me a message
                </h2>
                <p
                  id={formDescriptionId}
                  className="text-sm text-white/60 mb-6 font-sans"
                >
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                <form
                  className="contact-form space-y-5"
                  onSubmit={handleSubmit}
                  aria-labelledby="form-heading"
                  aria-describedby={formDescriptionId}
                >
                  <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="contact-form-row grid md:grid-cols-2 gap-4">
                    <div className="contact-form-group">
                      <label
                        htmlFor={nameId}
                        className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans"
                      >
                        Name <span className="text-white/50 text-xs font-normal">(required)</span>
                      </label>
                      <input
                        id={nameId}
                        name="name"
                        type="text"
                        required
                        aria-required="true"
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status.type === 'loading'}
                        className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 transition-colors duration-300 font-sans focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="contact-form-group">
                      <label
                        htmlFor={emailId}
                        className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans"
                      >
                        Email <span className="text-white/50 text-xs font-normal">(required)</span>
                      </label>
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        aria-required="true"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status.type === 'loading'}
                        className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 transition-colors duration-300 font-sans focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="contact-form-group">
                    <label
                      htmlFor={subjectId}
                      className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans"
                    >
                      Subject <span className="text-white/50 text-xs font-normal">(required)</span>
                    </label>
                    <input
                      id={subjectId}
                      name="subject"
                      type="text"
                      required
                      aria-required="true"
                      value={formData.subject}
                      onChange={handleInputChange}
                      disabled={status.type === 'loading'}
                      className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 transition-colors duration-300 font-sans focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label
                      htmlFor={messageId}
                      className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans"
                    >
                      Message <span className="text-white/50 text-xs font-normal">(required)</span>
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      rows={4}
                      required
                      aria-required="true"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={status.type === 'loading'}
                      className="contact-form-textarea w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 transition-colors duration-300 resize-none font-sans focus:border-cyan-400/50 focus:outline-none focus:ring-1 focus:ring-cyan-400/50 disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Describe your message here..."
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {status.type === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
                        role="status"
                        aria-live="polite"
                      >
                        <p className="text-emerald-400 text-sm font-sans flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {status.message}
                        </p>
                      </motion.div>
                    )}

                    {status.type === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                        role="alert"
                        aria-live="assertive"
                      >
                        <p className="text-red-400 text-sm font-sans flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {status.message}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="contact-form-btn w-full px-5 py-2.5 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 font-sans focus-ring disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                    whileHover={status.type !== 'loading' ? { scale: 1.02 } : {}}
                    whileTap={status.type !== 'loading' ? { scale: 0.98 } : {}}
                    aria-label={status.type === 'loading' ? 'Sending message...' : 'Submit contact form'}
                  >
                    {status.type === 'loading' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection