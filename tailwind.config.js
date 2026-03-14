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
          50:  '#f0ecff',
          100: '#ddd5f9',
          200: '#baaff0',
          300: '#9b87f5',
          400: '#7E69AB',
          500: '#4a3280',   // roxo escuro principal
          600: '#3b2669',
          700: '#2e1d54',
          800: '#1e1238',
          900: '#100a20',
        },
        gold: {
          100: '#fdf3e7',
          200: '#f5e0c0',
          300: '#e8c47a',
          400: '#c9956c',   // rose-gold
          500: '#b07840',
          600: '#8a5e2c',
        },
        blush: {
          50:  '#fff5f7',
          100: '#FFDEE2',
          200: '#fbb6ce',
          300: '#f687b3',
        },
        nude: {
          50:  '#fdfcfb',
          100: '#faf7f4',
          200: '#f5ede8',
          300: '#ecddd5',
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
