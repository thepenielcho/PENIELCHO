module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin'),
    require('@tailwindcss/typography')
  ],
}
