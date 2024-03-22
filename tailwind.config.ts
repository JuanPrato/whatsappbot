import type { Config } from "tailwindcss";

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
      },
      animation: {
        wiggle: "wiggle .5s ease-in-out infinite",
        outline: "outline .5s ease-in-out infinite",
      },
      boxShadow: {
        standard: `2px 4px 4px 0px rgba(0,0,0,0.25)`,
      },
    },
  },
  plugins: [],
};
export default config;
