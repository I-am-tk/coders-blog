import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-plugins/remark-reading-time.mjs";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), react()],
  markdown: {
    drafts: true,
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: "github-light"
    },
    extendDefaultPlugins: true
  }
});