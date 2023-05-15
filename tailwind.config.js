/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
      screens: {
         s: "400px",
         sm: "650px",
         md: "820px",
         lg: "1200px",
         xl: "1360px",
      },
      colors: {
         white: "#ffffff",
         mypink: "#FF0064",
         myblack: "#000000",
         textSilver: "#2C2C2C",
         bgCardBtns: "#e2e2e2",
         disabledBtnText: "#2C2C2C",
         logo1: "#FF0064",
         logo2: "#5A00E6",
         logoP: "#7B7B7B",
         mysilver: "#8D8D8D",
      },
      fontSize: {
         a: "14px",
         b: "16px",
         c: "20px",
         d: "24px",
         e: "32px",
      },
      extend: {},
   },
   plugins: [],
};
