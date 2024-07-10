import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        primary: "#FF2157",
        secondary: "#212121",
        third: "#A5455C",
        button: "#FAFAFA",
        cardPrimary: "#B5002C",
        cardSecondary: "#FF6A8E",
        logout: "#B5002C",
        logoutBack:"rgba(181, 0, 44, 0.25)"
      },
    },
  },
  variants: {
    extend: {
      placeholderColor: ['hover', 'focus'],
    },
  },
  plugins: [],
};
export default config;
