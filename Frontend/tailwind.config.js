/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d3748',
        secondary: '#718096',
        third: '#CBD5E0',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },      
      spacing: {
        128: '32rem',
      },
    },
  },
  variants: {},
  plugins: [
    function ({ addUtilities }) {
      const spinnerKeyframes = {
        '@keyframes bounce': {
          '0%, 100%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1)' },
        },
      };

      const spinnerUtilities = {
        '.spinner': {
          width: '40px',
          height: '40px',
          position: 'relative',
        },
        '.double-bounce1, .double-bounce2': {
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          backgroundColor: '#3498db',
          opacity: '0.6',
          position: 'absolute',
          top: '0',
          left: '0',
          animation: 'bounce 2s infinite ease-in-out',
        },
        '.double-bounce2': {
          animationDelay: '-1s',
        },
      };

      addUtilities(spinnerKeyframes, ['responsive', 'hover']);
      addUtilities(spinnerUtilities, ['responsive', 'hover']);
    },
  ],

}
