/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'mobile': {
        min: '320px',
        max: '500px'
      },
      'tablet': {
        min: '600px',
        max: '999px'
      },
      'desktop': {
        min: '1000px',
        max: '1400px'
    },
    'windscreen': {
      min: '1400px',
      max: '2000px'
  },
    },
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        rosa: '#DF1CFF',
        white50: 'rgba(255, 255, 255, 0.48)',
        rosa50: 'rgba(255, 255, 255, 0.10)',
        span: '#1EE0E1',
        bordas: '#D9D9D9',
        azulFundo: '#160f4bb9',
        bordaAzul: '#4730FF',
      },
    },
  },
  plugins: [],
}

