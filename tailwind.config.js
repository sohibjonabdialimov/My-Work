/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "1rem !important",
        sm: "2rem !important",
        // lg: "2.25rem",
        // xl: "2.5rem",
        // "2xl": "2.75rem",
      },
    },
    extend: {
      fontSize: {
        23: "23px",
      },
      colors: {
        main_color: "#1B1D20",
        secondary_color: "#758195",
        blue_color: "#1D7AFC"
      },
      backgroundColor: {
        layout_color: "#F0F0F0FF",
        bg_color: "#fff"
      },
      boxShadow: {
        product_shadow: "7px 35px 51px 0px rgba(0, 0, 0, 0.14)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
