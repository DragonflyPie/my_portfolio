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
        navbar: ["var(--caveat-font)"],
        main: ["var(--lobsta-kek)"],
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
      },
      animation: {
        // "slide-left": "slide-left 1500ms cubic-bezier(.48,.48,.45,1.11)",
        // fade: "fade 400ms ease-in-out",
        // "spin-slow": "spin 10s linear infinite",
      },
    },
  },

  plugins: [],
};
