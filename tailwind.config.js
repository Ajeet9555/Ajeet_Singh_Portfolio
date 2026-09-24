/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0d14',
          card: '#131929',
          cardHover: '#182035',
          border: 'rgba(59, 130, 246, 0.15)',
          borderHover: 'rgba(59, 130, 246, 0.4)',
          accent: '#3b82f6',
          accentPurple: '#8b5cf6',
          textMuted: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 40px -10px rgba(139, 92, 246, 0.4)',
        'glow-purple': '0 0 30px -5px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))' },
          '100%': { opacity: '0.8', filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.7))' },
        }
      }
    },
  },
  plugins: [],
}
