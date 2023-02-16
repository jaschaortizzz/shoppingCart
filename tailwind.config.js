/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'primary': {
          '100': '#00358C',
          '200': '#002a6f' 
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
