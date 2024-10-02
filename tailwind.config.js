/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        verte : "#008c28", 
        rouge : "#e90000",
        orange : "#ffb700",
        jaune : "#FAB900",
        gray:"#383838",
        lightGray:"#f7f7f7",
        olive:"#97af9a9c"
      },
      screens:{
        sm:"500px"
      },
      shadaw:{
        custumBoxshadaw:"0 0 10px 0px #0000002e"
      }
    },
  },
  plugins: [],
}
