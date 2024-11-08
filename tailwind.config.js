/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, #7E90FE, #7E90FE)",
        'bg-2': "url('./assets/images/bg2.png')",
        'bg-1': "url('./assets/images/bg1.png')",
      },
      colors: {
        'dark': '#757575',
        'dark2': '#474747',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

