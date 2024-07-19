import { fontSize, lineHeight } from "./src/styles/typography";
import { Palette } from "./src/styles/palette.const";
import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/layout/**/*.{ts,tsx,mdx}",
    "./src/pages/**/*.{ts,tsx,mdx}",
    "./src/views/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 5px 40px 0px rgba(0, 0, 0, 0.10)",
        default: "0px 3px 5px 0px rgba(0, 0, 0, 0.10)",
      },
      colors: {
        ...Palette,
        primary: Palette.blue.shade1,
        "transparent-primary": "#0B89CE33",
        bg: "#F6F6F6",
        text: "#696974",
        "text-secondary": Palette.gray.shade8,
        "text-dark": Palette.dark.blue.shade1,
        "text-light": Palette.gray.shade7,
        border: Palette.gray.shade10,
        black: Palette.dark.black,
      },
      fontSize: { ...fontSize },
      lineHeight: { ...lineHeight },
      screens: {
        tablet: "640px",
        // => @media (minWidth: 640px) { ... }

        laptop: "1024px",
        // => @media (minWidth: 1024px) { ... }

        desktop: "1440px",
        // => @media (minWidth: 1440px) { ... }
      },
    },
  },
  safelist: [
    "stack",
    "stack-center",
    "button",
    "button-primary",
    "badge",
    "badge-green",
    "card",
    "card-outline",
  ],
  plugins: [],
};
export default config;
