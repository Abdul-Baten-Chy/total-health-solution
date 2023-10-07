/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'head': ['"DM Serif Display"', ' serif'],
      'body': ['"Open Sans"', 'sans-serif'],
    },
  },
  plugins: [require("daisyui")],
}

