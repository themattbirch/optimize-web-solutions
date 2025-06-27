import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  // This tells Tailwind to scan all your Astro and component files for classes.
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      colors: {
        // Our custom brand colors
        background: "#121212",
        "accent-primary": "#FF9900", // Orange
        "accent-secondary": "#00BFFF", // Cyan
        "muted-text": "#888888",
      },
      fontFamily: {
        // Our custom brand fonts
        heading: ["Poppins", ...fontFamily.sans],
        body: ["Merriweather", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
