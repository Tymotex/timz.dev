# Dev Portfolio & Blog

<p align="center">
    <img src="https://img.shields.io/github/license/Tymotex/timz.dev" alt="GitHub MIT License" >
    <img src="https://img.shields.io/github/repo-size/Tymotex/timz.dev" alt="GitHub Repo Size" >
    <img src="https://img.shields.io/github/issues/Tymotex/timz.dev" alt="GitHub Issues" >
</p>

<p align="center">
    <a href="https://timz.dev">Deployed Site</a> |
    <a href="https://www.figma.com/file/kSDFLWSycGG4lXjn0seVv3/timz.dev-Blog-Design?node-id=0%3A1">Figma</a> <em>(private for now)</em> | 
    <a href="https://tymotex.github.io/timz.dev/">Docs (Storybook)</a>
</p>
 
---

A developer portfolio and blogging platform where the content writer can
leverage the expressive power of MDX and LaTeX for mathematical typesetting.

- Built with React, Next.js, Typescript and mdx-bundler with remark and rehype
  plugins for markdown syntax highlighting and embedded LaTeX.
- Uses Storybook for live component documentation.
    - Sets up custom theming and branding.
    - Jest test integration.
    - Automatically builds and deploys static assets in `docs/` to GitHub Pages.

# CI/CD

This project uses the following GitHub Actions workflows:
- `storybook-deploy` &ndash; This deploys an instance of this project's Storybook documentation website
    to GitHub Pages.
- `lighthouse-audit` &ndash; This runs a web vitals audit using Chrome Lighthouse on the deployed
    instance of the website. It can be configured to run on non-deployed static
    files. See [Lighthouse CI Action](https://github.com/marketplace/actions/lighthouse-ci-action).
- `unit-test` &ndash; This simply invokes `yarn test` in a container and checks no unit tests are
    failing.

# Content Management

To author new blogs, add a `.mdx` file to `content/blogs` and fill in the
following frontmatter format:

```
---
title: Learn React in 30 Seconds (Not Clickbait)
description: React is a popular web framework that...
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

# Performance

I developed this site with SEO and UX in mind for the blog pages, however I
relaxed this requirement for the portfolio pages.

To optimise bundle size and/or minimise CPU consider cutting or substituting
away from the following:
- `framer-motion` is only used for page transitions and for polishing UI
  interactions. The main import, `motion` adds about 25kb to the bundle size.
  See [reduce bundle size](https://www.framer.com/docs/guide-reduce-bundle-size/).
- `tsparticles` and `react-tsparticles` drastically decrease performance. This
  is used as conservatively as possible on the portfolio pages only and will
  not impact the SEO of blog pages. I assumed that the portfolio pages are not
  SEO-critical, however this may not be the case for freelancer portfolios.

### Caveats
A list of things that helped keep the bundle size lower and improve performance
but which were not clearly documented or obvious.

- Import icons from `react-icons` with the most deeply qualified paths for correct tree-shaking. See this [issue](https://github.com/react-icons/react-icons/issues/154). This may not apply anymore.
- Reduce fps limit to <= 30 in `tsparticles` options. See this [post](https://stackoverflow.com/questions/59268732/optimise-particles-js-background-to-avoid-high-cpu-usage).
