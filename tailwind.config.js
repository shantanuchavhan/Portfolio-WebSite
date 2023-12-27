/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-portfolio": "url('/src/images/wallpaper-portfolio.jpg')",
      },
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
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
