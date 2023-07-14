/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        lightBult: "0px 0px 25px 10px rgba(249,255,0,0.4)",
      },
      colors: {
        "red-error": "#ff3333",
        whitish: "#F9F6F0",
        link: {
          dark: "#2081C3",
          light: "#007FFF",
        },
        blackish: "#111218",
        dune: "#EEE4D3",
      },
      fontFamily: {
        heading: ["var(--font-inter)"],
        navbar: ["var(--rubik-font)"],
        main: ["var(--montserrat-font)"],
      },
      keyframes: {
        fly: {
          "0%, 100%": {
            transform: "translateX(0)",
          },
          "5%": {
            transform: "translateX(-10px) translateY(30px)",
          },
          "15%": {
            transform: "translateX(-20px) translateY(-30px)",
          },
          "25%": {
            transform: "translateX(-40px) translateY(10px)",
          },
          "35%": {
            transform: "translateX(-50px) translateY(30px)",
          },
          "45%": {
            transform: "translateX(0) translateY(30px)",
          },
          "55%": {
            transform: "translateX(0) translateY(30px)",
          },
          "65%": {
            transform: "translateX(0) translateY(30px)",
          },
          "75%": {
            transform: "translateX(0) translateX(50px) translateY(30px)",
          },
          "85%": {
            transform: "translateX(0) translateY(30px)",
          },
          "95%": {
            transform: "translateX(0)  translateY(30px)",
          },
        },
        flicker: {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(0.5)",
          },
        },
        "reverse-spin": {
          from: {
            transform: "rotate(360deg)",
          },
          to: {
            transform: "rotate(0deg)",
          },
        },
        lookout: {
          "0%, 100%": {
            transform: " rotateY(0deg)",
          },
          "25%": {
            transform: " rotateY(-20deg)",
          },
          "75%": {
            transform: " rotateY(20deg)",
          },
        },
        walk: {
          "0%, 100%": {
            transform: "translateZ(-25px) translateX(0)",
          },
          "25%": {
            transform: "translateZ(-25px) translateX(400px)",
          },
          "75%": {
            transform: "translateZ(-25px) translateX(700px)",
          },
        },
        wiggle: {
          "0%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        appear: {
          "0%": "opacity-0",
          "100%": "opacity-1",
        },
        pulsar: {
          "0%, 100%": { transform: "scale(0)" },
          "50%": {
            transform: "scale(1.5)",
            opacity: "1",
          },
        },
        blackout: {
          "0%, 2%, 13%, 100%": {
            opacity: 1,
          },
          "1%, 3%, 12%": {
            opacity: 0.2,
          },
        },
        dash: {
          "0% ": {},
          "20%, 100%": {
            transform: "translateX(-120%) rotate(-45deg)",
          },
        },
      },
      dropShadow: {
        dark: "0 1px 1px rgba(0, 0, 0, 0.25)",
        light: "0 1px 2px rgba(255, 255, 255, 0.25)",
      },
      animation: {
        dash: "dash 7s linear infinite",
        "spin-slow": "spin 10s linear infinite",
        "spin-reverse": "reverse-spin linear 10s infinite",
        wiggle: "wiggle 1s ease-in infinite",
        appear: "appear 1s ease-in",
        "pulse-once": "pulsar ease-in 400ms",
        lookout: "lookout  1s infinite",
        "pulse-slow": "pulse 5s infinite",
        blackout: "blackout 3s ease-in",
        flicker: "flicker 300ms infinite",
        fly: "fly 5s linear infinite",
      },
    },
  },

  plugins: [],
};
