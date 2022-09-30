import type { MDXInstance } from "astro";

export interface FrontMatter {
  title: string;
  description: string;
  tags?: string[];
  publishedAt: string;
  updatedAt?: string;
  img?: string;
  github?: string;
  live?: string;
}

export interface FrontMatterWithSlug extends FrontMatter {
  slug: string;
}

export type MDX = MDXInstance<FrontMatter>;
export type MDXWithSlug = MDXInstance<FrontMatterWithSlug>;
export type MDXPathKey = "post" | "project" | "snippet" | "about";

// pathvalue has to end with mdx
export type MDXPathValue = `${string}.mdx`;
