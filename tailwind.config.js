module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/images/work.jpeg')",
        'fun': "url('/images/fun.jpeg')",
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
