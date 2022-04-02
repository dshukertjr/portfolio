module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      backgroundImage: {
        header: "url('/images/work.jpeg')",
        fun: "url('/images/fun.jpeg')",
      },
    },
  },
  plugins: [],
}
