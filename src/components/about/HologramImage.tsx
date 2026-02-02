'use client'

import React from 'react'

/**
 * HologramImage Component
 * 
 * Displays a static pre-rendered 3D hologram image with subtle CSS animations.
 * Uses a placeholder for now - replace with actual 3D render later.
 * 
 * The image shows: "A crystal-clear glass hologram cube floating in soft light, 
 * with glowing blue code lines inside it. Ultra-realistic, sharp, modern."
 */
const HologramImage: React.FC = () => {
  return (
    <div className="hologram-wrapper w-full flex items-center justify-center">
      <div 
        className="hologram-container relative w-full max-w-[500px] lg:max-w-[560px] 
                   aspect-square rounded-2xl overflow-hidden 
                   opacity-0 animate-slide-in-left"
        style={{ animationFillMode: 'forwards' }}
      >
        {/* Glow Effect Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent rounded-2xl" />
        
        {/* Inner Glass Frame */}
        <div className="absolute inset-2 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent" />
        
        {/* Placeholder Image Container */}
        <div className="relative w-full h-full flex items-center justify-center p-8">
          {/* 
            PLACEHOLDER: Replace this with your actual 3D rendered image
            Use: /images/hologram-cube.webp or similar 
          */}
          <div className="relative w-full h-full rounded-xl overflow-hidden 
                          bg-gradient-to-br from-slate-800/50 to-slate-900/80
                          flex items-center justify-center
                          border border-cyan-500/10">
            
            {/* Animated Grid Pattern (placeholder visual) */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" 
                   style={{
                     backgroundImage: `
                       linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                       linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                     `,
                     backgroundSize: '40px 40px',
                   }} 
              />
            </div>

            {/* Floating Cube Visualization (CSS-only placeholder) */}
            <div className="relative animate-float">
              {/* Cube Container */}
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative"
                   style={{ perspective: '600px' }}>
                
                {/* Cube Face - Front */}
                <div className="absolute inset-0 border-2 border-cyan-400/40 rounded-lg
                                bg-gradient-to-br from-cyan-400/10 to-blue-500/5
                                backdrop-blur-sm animate-glow-pulse" />
                
                {/* Code Lines Inside */}
                <div className="absolute inset-4 flex flex-col justify-center gap-2 overflow-hidden">
                  {[...Array(7)].map((_, i) => (
                    <div 
                      key={i}
                      className="h-1.5 rounded-full bg-gradient-to-r from-cyan-400/60 to-transparent"
                      style={{ 
                        width: `${40 + Math.random() * 50}%`,
                        opacity: 0.4 + Math.random() * 0.4,
                        marginLeft: `${Math.random() * 20}%`
                      }}
                    />
                  ))}
                </div>

                {/* Glowing Corners */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400/60 rounded-tl-lg" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-lg" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-lg" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400/60 rounded-br-lg" />
              </div>

              {/* Reflection/Shadow beneath */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-4 
                              bg-cyan-400/20 blur-xl rounded-full" />
            </div>

            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 text-cyan-400/40 text-xs font-mono">
              {'</>'}
            </div>
            <div className="absolute bottom-4 right-4 text-cyan-400/40 text-xs font-mono">
              {'{ }'}
            </div>
          </div>
        </div>

        {/* Subtle Scan Line Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent
                          animate-[scan_4s_ease-in-out_infinite]" 
               style={{
                 animation: 'scan 4s ease-in-out infinite'
               }}
          />
        </div>

        <style jsx>{`
          @keyframes scan {
            0%, 100% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}</style>
      </div>
    </div>
  )
}

export default HologramImage
