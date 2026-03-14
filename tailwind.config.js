/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:     ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#fdf8f0',
          100: '#f7e8cc',
          200: '#edd4a0',
          300: '#d4a96a',   // warm amber mid
          400: '#b5813a',   // burnt amber text
          500: '#8B5E2C',   // burnt orange escuro principal
          600: '#6e4720',
          700: '#4a2e12',
          800: '#2d1c0a',
          900: '#170e03',
        },
        gold: {
          100: '#fdf8ed',
          200: '#f7e8cc',
          300: '#e8c96a',   // gold brilhante
          400: '#C9960C',   // gold principal
          500: '#a67c00',   // gold escuro
          600: '#7d5d00',
        },
        copper: {
          100: '#fef0e8',
          200: '#f9d5bb',
          300: '#e89c68',
          400: '#CC6633',   // burnt orange
          500: '#a84d20',
          600: '#7c3412',
        },
        nude: {
          50:  '#fdfcfb',
          100: '#faf7f2',
          200: '#f2ebe0',
          300: '#e8ddd0',
          400: '#c9b99a',
        },
      },
      keyframes: {
        'fade-up':  { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'fade-in':  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        'slide-in': { '0%': { opacity: '0', transform: 'translateX(-20px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
      },
      animation: {
        'fade-up':  'fade-up 0.6s ease-out both',
        'fade-in':  'fade-in 0.6s ease-out both',
        'slide-in': 'slide-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
