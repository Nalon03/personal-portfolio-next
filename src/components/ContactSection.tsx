'use client'

import React from 'react'
import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const ContactSection: React.FC = () => {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "grace.yaa.nalon@email.com",
      link: "mailto:grace.yaa.nalon@email.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "San Francisco, CA",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/grace-yaa-nalon",
      link: "https://linkedin.com/in/grace-yaa-nalon"
    }
  ]

  return (
    <section className="contact-section relative min-h-screen flex flex-col overflow-hidden">
      <AnimatedBackground animated={false} />

      <div className="contact-bg-decor absolute inset-0 overflow-hidden pointer-events-none">
        <div className="contact-bg-glow-cyan absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="contact-bg-glow-blue absolute bottom-40 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="contact-content relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="contact-container max-w-5xl mx-auto">
          <motion.div
            className="contact-header text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="contact-title text-2xl sm:text-2xl lg:text-2xl font-bold text-white font-display tracking-tight mb-2">
              Get In <span className="contact-title-accent gradient-text-cyan">Touch</span>
            </h1>
            <div className="contact-divider w-14 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-3 rounded-full"></div>
          </motion.div>

          <div className="contact-grid grid lg:grid-cols-2 gap-8">
            <motion.div
              className="contact-info-wrapper space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="contact-info-list space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.link}
                    className="contact-info-card flex items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="contact-info-icon text-xl mr-4">{item.icon}</div>
                    <div className="contact-info-details">
                      <h3 className="contact-info-title text-sm font-semibold text-white font-sans">{item.title}</h3>
                      <p className="contact-info-value text-xs sm:text-sm text-white/70 group-hover:text-cyan-400 transition-colors duration-300 font-sans">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="contact-form-wrapper glass-card rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="contact-form-title text-xl sm:text-2xl font-bold text-white font-display tracking-tight mb-6">Send me a message</h2>
              
              <form className="contact-form space-y-5">
                <div className="contact-form-row grid md:grid-cols-2 gap-4">
                  <div className="contact-form-group">
                    <label className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans">Name</label>
                    <input
                      type="text"
                      className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-sans"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans">Email</label>
                    <input
                      type="email"
                      className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-sans"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans">Subject</label>
                  <input
                    type="text"
                    className="contact-form-input w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 font-sans"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="contact-form-group">
                  <label className="contact-form-label block text-white/80 text-xs font-medium mb-2 font-sans">Message</label>
                  <textarea
                    rows={4}
                    className="contact-form-textarea w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none font-sans"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                
                <motion.button
                  type="submit"
                  className="contact-form-btn w-full px-5 py-2.5 bg-transparent border border-cyan-400/80 text-cyan-400 text-xs font-medium rounded-md hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 font-sans"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection