import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2ECC71",
        "primary-dark": "#27AE60",
        accent: "#E67E22",
        "accent-dark": "#D35400",
        text: "#202C38",
        "text-neg": "#ECF0F1",
        light: "#ECF0F1",
        dark: "#202C38",
        danger: colors["red"]["500"],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        outline: {
          "0%, 100%": {
            "outline-color": "#D35400",
          },
          "50%": {
            "outline-color": "#E67E22",
          },
        },
        backgroundColor: {
          "0%, 100%": {
            "background-color": "rgba(211, 84, 0, .1)",
          },
          "50%": {
            "background-color": "rgba(230, 126, 34, .1)",
          },
        },
      },
      animation: {
        wiggle: "wiggle .5s ease-in-out infinite",
        outline: "outline .5s ease-in-out infinite",
        backgroundColor: "backgroundColor 1s ease-in-out infinite",
      },
      boxShadow: {
        standard: `2px 4px 4px 0px rgba(0,0,0,0.25)`,
      },
      dropShadow: {
        button: "0px 0px 8px",
      },
    },
  },
  plugins: [],
};
export default config;
