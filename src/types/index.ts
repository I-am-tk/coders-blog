import type { MDXInstance } from "astro";

export interface FrontMatter {
  title: string;
  description: string;
  tags?: string[];
  publishedAt: string;
  updatedAt: string | undefined;
}

export interface FrontMatterWithSlug {
  title: string;
  description: string;
  tags?: string[];
  publishedAt: string;
  updatedAt: string | undefined;
  slug: string;
}

export type MDX = MDXInstance<FrontMatter>;
export type MDXWithSlug = MDXInstance<FrontMatterWithSlug>;
export type MDXPathKey = "post" | "project" | "snippet" | "about";

// pathvalue has to end with mdx
export type MDXPathValue = `${string}.mdx`;
