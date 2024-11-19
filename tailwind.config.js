/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // Include the main HTML file
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JavaScript/TypeScript files in the src folder
  ],
  theme: {
    extend: {
      // Customize your theme here
      colors: {
        primary: "#1D4ED8", // Example custom color
        secondary: "#9333EA",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example custom font
      },
    },
  },
  plugins: [

  ],
};
