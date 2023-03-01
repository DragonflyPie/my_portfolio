/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-inter)"],
        navbar: ["var(--rubik-font)"],
        main: ["var(--montserrat-font)"],
      },
      keyframes: {
        // "slide-left": {
        //   "0%": { transform: "translateX(-200px)", opacity: 0 },
        //   "50%": { transform: "translateX(-200px)", opacity: 0 },
        //   "100%": { transform: "translateX(0)", opacity: 1 },
        // },
        // fade: {
        // "0%": { opacity: 1 },
        // "100%": { opacity: 0 },
        // },
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      dropShadow: {
        dark: "0 1px 1px rgba(0, 0, 0, 0.4)",
        light: "0 1px 4px rgba(255, 255, 255, 0.25)",
      },
      animation: {
        // "slide-left": "slide-left 1500ms cubic-bezier(.48,.48,.45,1.11)",
        // fade: "fade 400ms ease-in-out",
        "spin-slow": "spin 10s linear infinite",
        wiggle: "wiggle 1s ease-in infinite",
      },
    },
  },

  plugins: [],
};
