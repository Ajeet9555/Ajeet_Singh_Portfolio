/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FAF8F3',
          surface: '#F7F3EC',
          card: '#FFFFFF',
          border: '#E7E1D8',
          borderAccent: '#E7D2C3',
          heading: '#111111',
          body: '#5F5A54',
          muted: '#817A72',
          label: '#6A625A',
        },
        orange: {
          primary: '#C76B32',
          hover: '#A95322',
          highlight: '#E5A06A',
          soft: '#F8E9DD',
          light: '#FDF3EC',
        },
        darkSurface: {
          bg: '#171512',
          border: '#302B26',
          text: '#FFFFFF',
          muted: '#A9A29A',
          body: '#D8D2CA',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'warm-sm': '0 2px 8px 0 rgba(17, 17, 17, 0.04)',
        'warm-md': '0 4px 20px -2px rgba(17, 17, 17, 0.06)',
        'warm-lg': '0 10px 30px -4px rgba(17, 17, 17, 0.08)',
        'orange-sm': '0 2px 10px 0 rgba(199, 107, 50, 0.15)',
        'orange-md': '0 6px 20px -2px rgba(199, 107, 50, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
