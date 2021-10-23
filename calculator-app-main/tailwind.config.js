module.exports = {
  purge: ['./index.html', './src/app.js', './src/calc.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      textColor:{
        skin:{
          'key-base' : 'var(--color-text-key-base)',
          'key-accent-1' : 'var(--color-text-key-1)',
          'key-accent-2' : 'var(--color-text-key-2)',
          screen: 'var(--color-text-screen)',
        },
      },

      backgroundColor:{
        skin:{
          base: 'var(--color-base)',
          screen: 'var(--color-screen)',
          keypad: 'var(--color-keypad)',
          'key-base' : 'var(--color-key-base)',
          'key-accent-1': 'var(--color-key-bg-1)',
          'key-accent-2': 'var(--color-key-bg-2)'
          
        },
      },

      boxShadow:{
        'key-base': '0px 5px var(--color-shadow-key)',
        'key-accent-1': '0px 5px var(--color-key-sd-1)',
        'key-accent-2': '0px 5px var(--color-key-sd-2)',

      },

      fontFamily:{
        Spartan : 'Spartan, sans-serif',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
