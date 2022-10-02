# Codres Blog

![Coders blog](/public/coders-blog.png)

I've always wanted to create a blog or website where I could record the things I learnt. While looking for the best approach, I found some blogs that detailed the process of building a blog website . Two of those were my favourites. One was written by [Lee Robinson](https://leerob.io/blog/mdx), the other by [Josh W. Comeau](). The blog website was created using Next and MDX. I then set about making one for myself.

## TechStack

### Astro

After a few days of effort, I had to write a lot of code to integrate MDX with NextJS because each package has its own advantages. Later came the release of Astro v1. It enables us to create multipage static sites using our preferred framework. It also has an MDX plugin that vastly simplifies using MDX with astro, which makes my life easier. I've seen a number of libraries emerge on a frequent basis. In order to write blogs utilising the latest frameworks, I thought about having a framework-neutral website.
TechStack

### MDX

Reading the articles where they built a blog website using MDX rather than a CMS had a big impact on me. For me, having custom components in my blog post was a priority, and MDX was the best choice. Since I knew I wouldn't create a tonne of blogs, managing the MDX files was never an issue.

### Framework And Libraries

I used Svelte and React instead of Astro components because they cannot be hydrated on the client side. Compared to React, Svelte is much easier for me. Because of this, I have avoided using React unless I had no other option.

### Open Props

It's challenging for me to create a website layout on my own. So I took advantage of the opinionated design tokens from Adam Grill's Open Properties.

## Future Scope

- Implement post views using Firebase Firestore and SSR.
- Incorporate Sandpack for a live coding environment.
