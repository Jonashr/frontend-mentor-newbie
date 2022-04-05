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
      textColor: {
        'dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'soft-red': 'hsl(14, 88%, 65%)',
      },
      borderColor: {
        'light-grayish-blue': 'hsl(240, 5%, 91%)',
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
        kumbhsans: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
