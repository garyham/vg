module.exports = {
  content: ['./_site/**/*.html'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
