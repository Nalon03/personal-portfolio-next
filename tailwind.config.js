/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.8s ease-out 0.1s forwards',
        'fade-in-delay-2': 'fadeIn 0.8s ease-out 0.2s forwards',
        'fade-in-delay-3': 'fadeIn 0.8s ease-out 0.3s forwards',
        'fade-in-delay-4': 'fadeIn 0.8s ease-out 0.4s forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-up-delay-1': 'slideUp 0.8s ease-out 0.1s forwards',
        'slide-up-delay-2': 'slideUp 0.8s ease-out 0.2s forwards',
        'slide-up-delay-3': 'slideUp 0.8s ease-out 0.3s forwards',
        'slide-up-delay-4': 'slideUp 0.8s ease-out 0.4s forwards',
        'slide-up-delay-5': 'slideUp 0.8s ease-out 0.5s forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out 0.2s forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pop': 'pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'pop-delay': 'pop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s forwards',
        'pop-pulse': 'popPulse 2s ease-in-out infinite',
        'gradient-flow': 'gradientFlow 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scroll-left': 'scrollLeft 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pop: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '70%': { opacity: '1', transform: 'scale(1.1)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        popPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)' },
          '50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.2)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
