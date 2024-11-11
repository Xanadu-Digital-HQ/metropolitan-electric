/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app.vue", "./pages/**/*.{vue,js}", "./components/**/*.{vue,js}"],
  darkMode: "class",

  theme: {
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.green.500"),
              "&:hover": {
                color: theme("colors.green.600"),
              },
            },
          },
        },
      }),
      screen: {
        xs: "200px",
      },
      fontFamily: {
        noto: ["'Noto Serif'", "nunito", "sans-serif"],
        main: ["Varela Round", "arial", "sans-serif"],
      },
      fontSize: {
        xxs: "10px",
      },
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
        brand: "#101920",
        accent: "#1C6220",
        accentHovered: "#113912",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
