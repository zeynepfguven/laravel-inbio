/** @type {import('tailwindcss').Config} */


export default {
  content: [
    './*.{html,js}',
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'primary-gradient': 'linear-gradient(145deg, #6a67ce 0%, #fc636b 100%)',
      },
      colors: {
        'background-color': '#1f2937',
        'color1': '#878e99;',
        'line-border-empty': '#d3d3d3',
        'line-border-fill': '#3490dc',
        'titlepink':"#f9004d",
        'main-default': '#F2563A',
        'bg2': "#121415",
        'body-bg':"#212428",
        'lightn': '#c4cfde',
        'shop':"#333",
        'custom-start': '#212428',
        'custom-end': '#16181c',
      },
      fontFamily: {
        secondary: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      translate: {
        '-7': '-7px',
      },
      letterSpacing: {
        tight: '0.05em', 
      },
      padding: {
        'custom-top': '73px',
        'custom-bottom': '68px',
      },
      height: {
        'custom-height': 'calc(100% - 130px)',
      },
      fontWeight: {
        regular: '400', 
      },
      minHeight: {
        '1px': '1px',
      },
      lineHeight: {
        'b1': '1.9',
      },
      width: {
        '35.005': '35.005%',
        'custom': '60.863%',
        'custom-38': '38.469%',
      },
      padding: {
        '14px': '14px',
        '45px': '45px',
      },
      margin: {
        '-15px': '-15px',
        '-1': '-1px',
      },
      maxWidth:{
        'wmain':'1320px',
      },
      transitionDuration: {
        'transform': 'var(--e-transform-transition-duration, .4s)',
      },
      boxShadow: {
        'custom-inner': 'inset 0 4px 6px rgba(0, 0, 0, 0.4)',
        'lg': '0 4px 6px rgba(0, 0, 0, 0.3)',
        'custom-3': '0 10px 15px rgba(0, 0, 0, 0.1)', 
        'custom-1': '10px 10px 19px #1c1e22, -10px -10px 19px #262a2e',
        'custom-2': 'inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225',
        'custom-inset': 'inset 8px 8px 16px rgba(0, 0, 0, 0.4588235294), inset -8px -8px 16px rgba(56, 62, 69, 0.4588235294)',

      },
      keyframes: {

        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },

        'scrollText': {
          '0%, 100%': { opacity: 0, transform: 'translateX(100%)' },
          '10%, 90%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fadeInLeft 0.5s ease-out 0.3s both',

        'scroll-1': 'scrollText 6s linear infinite',
        'scroll-2': 'scrollText 6s linear 2s infinite',
        'scroll-3': 'scrollText 6s linear 4s infinite',
      },
      transitionProperty: {
        'custom': 'background-color, lightn, custom-1',
        'var-transition': '0.4s',
      },
      spacing:{
        'custom-top': '-100px',
        '4px': '4px',
        '1': '1px',
      },
      transitionDuration : {
        '400': '400ms', 
      },
      borderRadius: {
        'custom': '6px',
      },

      animation: {
        'text-reveal': 'textReveal 1s ease-in-out forwards',
      },
      keyframes: {
        textReveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  variants: {
    boxShadow: ['responsive', 'hover', 'focus'],
  },
  plugins: [require('tailwindcss-animate')],
}


