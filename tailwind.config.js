/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.pug', // Include Pug files in views directory
    './public/**/*.html', // Include HTML files in public directory
    './src/**/*.js', // Include JavaScript files in src directory (if any)
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['manrope', 'sans-serif']
      }
    }
  },
  plugins: [],
}

