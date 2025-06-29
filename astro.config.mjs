// astro.config.mjs

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // This is the key change that enables Static Site Generation (SSG)
  output: "static",

  site: "https://optimizewebsolutions.com",

  integrations: [
    tailwind(),
    react(),
    sitemap(), // Automatically generates a sitemap.xml for SEO
  ],
});