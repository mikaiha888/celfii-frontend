/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        400: "4"
      },
      container: {
        center: true,
      },
      colors: {
        primary: "rgb(220 38 38)",
        secondary: "#000000",
        accent: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgb(220 38 38), 10px, transparent 10px)',
      },
    },
  },
  plugins: [],
};

