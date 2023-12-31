/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        xxl: '1440px'
      },
      gridTemplateColumns: {
        'seven': 'repeat(7, 30px)'
      },
    },
  },
  plugins: [],
}

