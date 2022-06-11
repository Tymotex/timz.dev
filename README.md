# Dev Portfolio & Blog

A developer portfolio and blogging platform where the content writer can
leverage the expressive power of MDX and LaTeX for mathematical typesetting.

This project was built with React, Next.js, Typescript and mdx-bundler.

# Content Management

To author new blogs, add a `.mdx` file to `content/blogs` and fill in the
following frontmatter format:

```
---
title: Learn React in 30 Seconds (Not Clickbait)
description: Whatever is here is passed to 
published: true
date: yyyy-mm-dd
---
```
> The filename will be used to construct a URL slug. Use a meaningful name
  because hitting more keywords improves SEO.
- `title` gets added into the `<title>` element.
- `description` gets written to `<meta name="description" content="...">`.
- `published` indicates whether a blog is publicly viewable.
- `date` is the time the blog was published.

Note that we are using `scripts/blogs.ts` to traverse and source files from the
local filesystem to discover the `.mdx` files. The files could be located
anywhere, such as AWS S3 bucket, but keeping it all these blog files in the
same repo as the project itself is simply more convenient to work with, and you
get version control for free.

Getting MDX to work with the right plugins and build configurations was a really
challenging task, especially without many relevant guidance online. Here were
some resources I found extremely helpful in building out this system, adapted to
my specific: 
- Josh Comeau's blog, ['How I Built My Blog'](https://www.joshwcomeau.com/blog/how-i-built-my-blog/).
- Peter Lynch's ['Guide to Using Mdx-bundler With Next.js'](https://www.peterlunch.com/blog/mdx-bundler-beginners).
- Basil's ['Using Sass modules with MDX'](https://www.qbasil.dev/blog/mdx-w-scss).
  Sass module support doesn't ship with `mdx-bundler`. This guide pointed me
  `esbuild-sass-plugin` which finally solved frustrating build loader errors.

### Supported Syntax

The `.mdx` file can render any of the following:
* Anything considered valid [markdown syntax](https://www.markdownguide.org/cheat-sheet/).
* Syntax-highlighted code blocks started with the markdown character sequence, ```.
    - This relies on the packages: `remark-prism`, `prismjs`, and `@types/remark-prism`.
* Embedded LaTeX expressions. You can write them inline or as a separate block.
    - For example:
        ```md
            This renders an inline LaTeX expression.
            $\alpha$  

            This renders a block-level LaTeX expression.
            $$
                \frac{1}{2}
            $$
        ```
    - This relies on the packages: `remark-math`, `rehype-katex`, `katex`.
    - See the [KaTeX documentation](https://katex.org/docs/supported.html) for a
      list of all LaTeX expressions that are supported.
* Any custom react components available in the project, ie. any JSX. By
  extension, this means that you can use any HTML element you want, directly
  within the `.mdx` source code.
    - For example:
        ```md
            import SampleComponent from 'src/components/SampleComponent';

            This is a sentence that contains *valid markdown* followed by a 
            custom React component.

            <SampleComponent />
        ```
All of this is possible through `mdx-bundler` which is used by the server-side
Node.js script, `scripts/blogs.ts`, to map all the `.mdx` source code to
executable javascript that renders the content.

