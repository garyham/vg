module.exports = {
  content: ['./src/**/*.html', './src/**/*.njk', './src/**/*.md'],
  safelist: [],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
