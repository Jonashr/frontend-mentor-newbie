module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#fb7413',
        'light-grey': '#959eac',
        'medium-grey': '#7c8798',
        'dark-blue': '#252d37',
        'very-dark-blue': '#121417',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
