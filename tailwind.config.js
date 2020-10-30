/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  future: {
    purgeLayersByDefault: true
  },
  purge: ['./pages/**/*.html', './pages/**/*.vue', './pages/**/*.jsx'],
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/3': '33.33%'
    }
  },
  variants: {
    appearance: ['responsive', 'hover', 'focus', 'visited']
  },
  plugins: []
}
