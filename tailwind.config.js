/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: '480px',
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "black",
        secondary: "white",
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #00a6a6 0%, #006769 100%)',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
