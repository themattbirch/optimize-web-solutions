// tailwind.config.mjs - The Final "Hover" Palette
import { fontFamily } from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        "accent-primary": "#EA580C", // The rich "hover" orange
        "accent-secondary": "#33658A", // The confident blue
        "muted-text": "#888888",
      },
      fontFamily: {
        heading: ["Poppins", ...fontFamily.sans],
        body: ["Merriweather", ...fontFamily.serif],
      },
    },
  },
  plugins: [
    forms(),
    plugin(function ({ addVariant }) {
      addVariant("scrolled", ".scrolled &"); // For targeting children
      addVariant("scrolled-self", ".scrolled&"); // For targeting the element itself
    }),
  ],
  darkMode: "class",
};
