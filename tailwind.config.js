module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js, jsx}', './components/**/*.{js, jsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: [
        'Verdana',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    },
    extend: {
      colors: {
        blue: {
          primary: '#1da1f2'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
