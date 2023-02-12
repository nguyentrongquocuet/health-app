/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        sans: ['Noto Sans JP', 'sans-serif'],
      },
      zIndex: {
        1: 1,
      },
    },
    colors: {
      light: '#FFFFFF',
      primary: {
        300: '#FFCC21',
        400: '#FF963C',
        500: '#EA6C00',
      },
      secondary: {
        300: '#8FE9D0',
      },
      dark: {
        600: '#2E2E2E',
        500: '#414141',
      },
      gray: {
        400: '#777777',
        500: '#707070',
      },
    },
    fontSize: {
      xs: '0.625rem',
    },
    lineHeight: {
      xs: '0.625rem',
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.app-container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            // maxWidth: '1280px',
            maxWidth: '960px',
          },
          '@screen 2xl': {
            maxWidth: '1440px',
          },
        },
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
      })
    },
    require('@tailwindcss/line-clamp'),
  ],
}
