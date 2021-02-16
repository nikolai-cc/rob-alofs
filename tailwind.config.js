module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html", "./src/*.njk", "./src/*/*.html", "./src/*/*.njk" ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
      serif: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
      display: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
      body: ['Ubuntu', 'system-ui', '-apple-system', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'birds': "url('img/bg.jpg')",
        'pattern': "url('img/bgpattern.jpg')"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
