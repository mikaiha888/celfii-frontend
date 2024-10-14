/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000", // Rojo
        secondary: "#000000", // Negro
        accent: "#FFFFFF", // Blanco
      },
    },
  },
  plugins: [],
};

