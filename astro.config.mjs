import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-plugins/remark-reading-time.mjs";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react(), svelte()],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "github-light"
    },
    extendDefaultPlugins: true
  }
});