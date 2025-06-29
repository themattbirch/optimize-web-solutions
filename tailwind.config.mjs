// tailwind.config.mjs

import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        "accent-primary": "#FF9900",
        "accent-secondary": "#00BFFF",
        "muted-text": "#888888",
      },
      fontFamily: {
        heading: ["Poppins", ...fontFamily.sans],
        body: ["Merriweather", ...fontFamily.serif],
      },
    },
  },
  plugins: [
    forms(), // now that @tailwindcss/forms is installed
  ],
};
