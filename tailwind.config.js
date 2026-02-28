/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          bg: '#0a0f1e',
          card: 'rgba(16, 25, 45, 0.7)',
          primary: '#00d2ff',
          secondary: '#3a7bd5',
          accent: '#c9ff00', // 네온 옐로우
          border: 'rgba(0, 210, 255, 0.2)',
        }
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(0, 210, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
