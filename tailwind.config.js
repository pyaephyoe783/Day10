/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  theme: {
     container:{
        center:true,
        padding: '10%'
      },

      extend: {
      colors: {
        black: 'var(--black)',
        white: 'var(--white)',
        gray:  'var(--gray)',
        lightBlue: 'var(--lightBlue)',
        blue:'var(--blue)',
        grayTransparent : 'var(--grayTransparent)'
      },

      keyframes: {
        scaleDown: {
          '0%': { transform: 'scale(1.5)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scaleDown: 'scaleDown 0.6s ease-out',
      },

        fontFamily:{
        titleFont: 'var(--titleFont)',
        bodyFont : 'var(--bodyFont)'
      
      },
       backgroundImage: {
        'heroPattern': "url('./assets/CSS/hero-bg.jpg')",
      }


      },
  },
  plugins: [],
}

