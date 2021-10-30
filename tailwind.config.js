const colors = require('tailwindcss/colors')
module.exports = {
    content: [
    './public/**/*.html',
    './public/**/*.{js,jsx,ts,tsx,vue}'
  ],
  darkMode: false, // or 'false' or 'class'
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
