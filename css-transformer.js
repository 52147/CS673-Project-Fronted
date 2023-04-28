const postcss = require('postcss')
const tailwindcss = require('tailwindcss')

module.exports = {
  process(css) {
    return postcss([tailwindcss])
      .process(css, { from: undefined })
      .then(result => result.css)
  }
}
