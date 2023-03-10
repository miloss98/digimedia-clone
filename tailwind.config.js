/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: "#0000FF",
      green: "#00FF00",
      preheader: "#efefef",
      lightGray: "#d3d3d3",
      darkGray: "#a9a9a9",
      orange: "#f68b57",
      pink: "#fa65b1",
      pinkHover: "#ffccff",
      purple: "#7369e3",
      red: "#FF0000",
      twitterBlue: "#1DA1F2",
      linkedIn: "#0072b1",
      github: "#171515",
    },
    fontWeight: {
      thin: "100",
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      "extra-bold": "800",
      black: "900",
    },
  },
  plugins: [],
};
