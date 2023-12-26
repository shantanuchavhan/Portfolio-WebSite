/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-portfolio": "url('/src/images/wallpaper-portfolio.jpg')",
      },
    },
  },
  plugins: [
    // Add the custom scrollbar utility class
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none": {
          scrollbarWidth: "none",
          "-ms-overflow-style": "none",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
