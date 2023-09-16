/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        scr500: "500px",
        scr600: "600px",
        scr700: "700px",
        scr800: "800px",
        scr900: "900px",
        scr1000: "1000px",
        scr1100: "1100px",
        scr1150: "1150px",
        scr1200: "1200px",
        scr1250: "1250px",
      },
      maxWidth: {
        w1300: "1300px",
      },
      boxShadow: {
        card1: "0px 0px 4px 0px rgba(67, 71, 85, 0.27), 0px 4px 16px 0px rgba(90, 125, 188, 0.05);",
        card2: "0px 0px 6px 2px rgba(67, 71, 85, 0.27),0px 4px 16px 2px rgba(90, 125, 188, 0.02);",
        card3: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
      },
    },
  },
  plugins: [],
};
