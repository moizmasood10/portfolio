/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundColor: {
        'bgcolor' : '#0a192f',
      },
      colors:{
        'c2':'#4d677b',
        'c1':'#1a434d',
        'c3':'#43aa9a',
        'c4' : '#0a192f',
      },
      textColor:{
        't1':'#ccd6f6',
        't2':'#8993b1',
        't3':'#43aa9a',
        't4':'#57636e'
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.c2'), 0 0 20px theme('colors.c1')"
      },
    },
  },
  plugins: [],
}

