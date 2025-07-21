/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
     container:{
        center:true,
        padding: '16px'
      },

      extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        gray:  'var(--gray)',
        lightBlue: 'var(--lightBlue)',
        blue:'var(--blue)'
      },

        fontFamily:{
        titleFont: 'var(--titleFont)',
        bodyFont : 'var(--bodyFont)'
      
      }


      },
  },
  plugins: [],
}

