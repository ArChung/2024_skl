/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans TC'],
      'bebas': ['Bebas Neue'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
      screens: {
        md: "100%",
        xl: "1140px"
      }
    },
    extend: {},
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    colors: {
      gold: {
        DEFAULT:'#C49E73',
        1:'#C1877D',
      },  
      linear:{
        1: '#00142C',
        2: '#00637B',
        3: '#00BAB3'
      },
      teal: {
        DEFAULT: '#26A7A1',
        1: '#00BAB3',
        2: '#00637B',
        3: '#2E3746',
      },
      white: {
        DEFAULT: "#fff",
      },
      black: {
        DEFAULT: "#000",
      },
      // blue: {
      //   DEFAULT: "#002258",
      //   light: "#4B99F4",
      //   dark: "#071936",
      // },
      // yellow: {
      //   DEFAULT: "#e7e353",
      // },
      // gray:{
      //   light: '#EDEDED',
      //   DEFAULT: "#828282"
      // },
      // bgGray: {
      //   DEFAULT: "#E6E6E6",
      // },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-textshadow"),
  ],
};
