/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        thai: {
          red: '#990000',
          gold: '#FFD700',
          orange: '#FF6B35',
          green: '#2D5016',
          lightGreen: '#A8D8B9',
          cream: '#000000',
          warmGray: '#8B7355'
        }
      },
      fontFamily: {
        'thai-serif': ['Playfair Display', 'serif'],
        'thai-sans': ['Roboto', 'sans-serif']
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'subtle-float': 'subtle-float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'thai': '0 4px 15px rgba(255, 255, 255, 0.1)',
        'thai-lg': '0 10px 40px rgba(139, 0, 0, 0.2)',
        'gold': '0 4px 20px rgba(255, 215, 0, 0.3)',
        'inner-thai': 'inset 0 0 20px 10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}