/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        backgroundSecondary: "#0F0F0F",
        surface: "#1A1A1A",
        card: "#222222",
        cardLight: "#2A2A2A",
        accentGold: "#C4A067",
        accentGoldLight: "#D4B483",
        text: "#ECE8E1",
        mutedText: "#B8C1BC",
        darkShadow: "rgba(0,0,0,0.5)"
      },
      borderRadius: {
        "lg": "24px",
        "xl": "32px",
        "2xl": "40px"
      },
      boxShadow: {
        "clay": "0 12px 20px var(--tw-shadow-color, rgba(0,0,0,0.25))"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};
