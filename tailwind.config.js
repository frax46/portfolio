/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        first: "moveVertical 15s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 25s linear infinite",
        fourth: "moveHorizontal 20s ease infinite",
        fifth: "moveInCircle 30s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-25%) translateY(-25%)",
          },
          "50%": {
            transform: "translateX(25%) translateY(25%)",
          },
          "100%": {
            transform: "translateX(-25%) translateY(-25%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg) translate(200px) rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg) translate(200px) rotate(-180deg)",
          },
          "100%": {
            transform: "rotate(360deg) translate(200px) rotate(-360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-25%)",
          },
          "50%": {
            transform: "translateY(25%)",
          },
          "100%": {
            transform: "translateY(-25%)",
          },
        },
      },
      fontFamily: {
        outfit: ["var(--font-outfit)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
} 