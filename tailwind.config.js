import rtl from 'tailwindcss-rtl';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: '#E91E8C',
          dark: '#C2185B',
          light: '#F8BBD9',
        },
        ink: '#0D0D0D',
        soft: '#F8F8F8',
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        heebo: ['Heebo', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px rgba(233, 30, 140, 0.28)',
        'glow-lg': '0 30px 90px rgba(233, 30, 140, 0.4)',
      },
      backgroundImage: {
        'pink-radial': 'radial-gradient(circle, rgba(233,30,140,0.4) 0%, rgba(233,30,140,0) 65%)',
      },
    },
  },
  plugins: [rtl],
};
