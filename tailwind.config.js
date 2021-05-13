module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing-image': "url('../src/static/images/pexels-katerina-holmes-5905700.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
