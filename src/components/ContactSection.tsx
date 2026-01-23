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
      icon: "📧",
      title: "Email",
      value: "nalongrace03@gmail.com",
      link: "mailto:nalongrace03@gmail.com",
      ariaLabel: "Send email to nalongrace03@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+233 XX XXX XXXX",
      link: "tel:+233XXXXXXXX",
      ariaLabel: "Call phone number"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Ghana",
      link: "#",
      ariaLabel: "Location: Ghana"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/grace-yaa-nalon",
      link: "https://linkedin.com/in/grace-yaa-nalon",
      ariaLabel: "Visit LinkedIn profile (opens in new tab)"
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
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
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

      <div className="contact-content relative z-10 flex-1 py-16 md:py-24">
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
                className="contact-divider w-14 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"
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
                      className="contact-info-card flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-300 group focus-ring"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      aria-label={item.ariaLabel}
                      target={item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      <div className="contact-info-icon text-xl mr-4" aria-hidden="true" role="img">{item.icon}</div>
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
                      Name <span className="text-cyan-400" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
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
                      Email <span className="text-cyan-400" aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
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
                    Subject <span className="text-cyan-400" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
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
                    Message <span className="text-cyan-400" aria-hidden="true">*</span>
                    <span className="sr-only">(required)</span>
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
                    placeholder="Tell me about your project or just say hello!"
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