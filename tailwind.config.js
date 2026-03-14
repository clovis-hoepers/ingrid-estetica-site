/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#E5DEFF',
          200: '#D6BCFA',
          300: '#9b87f5',
          400: '#7E69AB',
          500: '#6E59A5',
          600: '#5a4690',
          700: '#4a3878',
          800: '#2d2252',
          900: '#1a1133',
        },
        blush: {
          100: '#FFDEE2',
          200: '#fbb6ce',
          300: '#f687b3',
          400: '#D946EF',
        },
        cream: {
          50:  '#fdfcfb',
          100: '#faf7f4',
          200: '#f5ede8',
        },
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up':  'fade-up 0.6s ease-out both',
        'fade-in':  'fade-in 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
