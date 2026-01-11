'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface AnimatedBackgroundProps {
  animated?: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ animated = true }) => {
  return (
    // Added min-h-screen here to ensure it covers at least the viewport. 
    // Since it's 'absolute inset-0', it will naturally stretch to cover the full content 
    // height, provided its parent element also expands with the content.
    <div className="absolute inset-0 min-h-screen">
      {/* Background - Animated or Static */}
      {animated ? (
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #08203A 0%, #0a2540 25%, #0c2a46 50%, #0a2540 75%, #08203A 100%)',
              'linear-gradient(135deg, #0a2540 0%, #0c2a46 25%, #0e304c 50%, #0c2a46 75%, #0a2540 100%)',
              'linear-gradient(135deg, #08203A 0%, #0a2540 25%, #0c2a46 50%, #0a2540 75%, #08203A 100%)',
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ) : (
        <div 
          // Removed the restrictive h-[100vh-120px] and margin utilities. 
          // 'absolute inset-0' now correctly forces it to fill the entire container.
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #08203A 0%, #0a2540 25%, #0c2a46 50%, #0a2540 75%, #08203A 100%)'
          }}
        />
      )}
      
      {/* Subtle Coding Pattern - Only in white spaces around rectangle */}
      <div className="absolute inset-0 opacity-30">
        {/* Code-like pattern using CSS */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 1%, transparent 2%),
            linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.1) 1%, transparent 2%),
            linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.05) 0.5%, transparent 1%),
            linear-gradient(-45deg, transparent 0%, rgba(255,255,255,0.05) 0.5%, transparent 1%)
          `,
          backgroundSize: '20px 20px, 20px 20px, 15px 15px, 15px 15px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0'
        }} />
        
        {/* Binary-like dots pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 0.5px, transparent 0.5px),
            radial-gradient(circle at 6px 6px, rgba(255,255,255,0.06) 0.3px, transparent 0.3px),
            radial-gradient(circle at 10px 10px, rgba(255,255,255,0.04) 0.4px, transparent 0.4px)
          `,
          backgroundSize: '12px 12px, 8px 8px, 16px 16px'
        }} />
        
        {/* Circuit-like lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.02) 0.5px, transparent 0.5px),
            linear-gradient(0deg, transparent 0%, rgba(255,255,255,0.02) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 60px 60px, 60px 60px'
        }} />
      </div>
      
    </div>
  )
}

export default AnimatedBackground