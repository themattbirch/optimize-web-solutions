import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind"; // Use the official Astro integration

import react from "@astrojs/react";

export default defineConfig({
  site: "https://optimizewebsolutions.com",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [tailwind(), react()],
});
