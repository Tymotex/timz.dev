# Dev Portfolio & Blog

<p align="center">
    <img src="https://img.shields.io/github/license/Tymotex/timz.dev" alt="GitHub MIT License" >
    <!-- <img src="https://img.shields.io/github/repo-size/Tymotex/timz.dev" alt="GitHub Repo Size" > -->
    <img src="https://img.shields.io/github/issues/Tymotex/timz.dev" alt="GitHub Issues" >
</p>

<p align="center">
    <a href="https://timz.dev">Deployed Site</a> |
    <a href="https://www.figma.com/file/kSDFLWSycGG4lXjn0seVv3/timz.dev-Blog-Design?node-id=0%3A1">Figma</a> <em>(invite-only)</em> | 
    <a href="https://storybook.timz.dev">Docs (Storybook)</a>
</p>
 
---

![timz.dev homepage screenshot](public/images/portfolio-home.png)

A developer portfolio and blog, built with React, Next.js and TypeScript, using
[MDX](https://mdxjs.com/) for writing blog content and LaTeX for mathematical
typesetting.

Uses [Storybook](https://storybook.js.org/) for live component documentation. 
This project uses a GitHub Actions workflow to automatically build and deploy 
the static assets in `docs/` to GitHub Pages.

## CI/CD
This project uses the following GitHub Actions workflows:
- `lighthouse-audit` &ndash; This runs a web vitals audit using Chrome Lighthouse on the deployed
    instance of the website. It can be configured to run on non-deployed static
    files. See [Lighthouse CI Action](https://github.com/marketplace/actions/lighthouse-ci-action).
- `unit-test` &ndash; This simply invokes `yarn test` in a container and checks no unit tests are
    failing.

# Content Management

To author new blogs, add a `.mdx` file to `content/blogs/${category}` and fill in the
following frontmatter format:

```yaml
---
title: Buffer Overflow Attacks
description: Buffer overflows are when the program tries to write more elements into an array's allocated size.
published: true
date: 2022-06-25
# Optional thumbnail.
thumbnail: /images/thumbnails/cybersecurity.png
# Optional tags to help with categorising blogs.
tags:
    - Cybersecurity
    - Computer Science
    ...
# Optional link to Medium post.
mediumLink: https://...
---
```

> The filename will be used to construct a URL slug.
- `title` gets added into the `<title>` element.
- `description` gets written to `<meta name="description" content="...">`.
- `published` indicates whether a blog is publicly viewable.
- `date` is the time the blog was published.

The script, `scripts/blogs.ts`, is used to traverse and source files from the
local filesystem to discover `.mdx` files. The files could be located
anywhere, such as AWS S3 bucket, but keeping it all these blog files in the
same repo as the project itself is simply more convenient to work with, and you
get version control along with it.

Getting MDX to work with the right plugins and build configurations was a really
challenging task, especially without much relevant documentation or guidance for
it online. Here were some resources I found extremely helpful in building out
this system, adapted to my specific: 
- Josh Comeau's blog, ['How I Built My Blog'](https://www.joshwcomeau.com/blog/how-i-built-my-blog/).
- Peter Lynch's ['Guide to Using Mdx-bundler With Next.js'](https://www.peterlunch.com/blog/mdx-bundler-beginners).
- Basil's ['Using Sass modules with MDX'](https://www.qbasil.dev/blog/mdx-w-scss).
  Sass module support doesn't ship with `mdx-bundler`. This guide pointed me
  `esbuild-sass-plugin` which finally solved frustrating build loader errors.

### Blog Source Syntax

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

## Contact Form

The contact form was built using the [Getform](https://getform.io/) email receipt and delivery service.
I followed [this guide](https://blog.getform.io/building-nextjs-forms-using-getform/) for setting up the form.
The API endpoint string is set inside `constants/external.ts` and need not be secret.

# Issues & Performance

## Challenges

- `mdx-bundler` doesn't have built-in support for Sass modules. As a workaround,
  this project uses a global SCSS file at `src/blog-components/global.scss`.
- ~~Cannot import `next/image` in .mdx files when using `mdx-bundler`. This is 
  really unfortunate because `next/image` contains a lot of image optimisations
  that improve the Core Web Vitals. The current workaround is to have a custom
  component `BlogImage` that provides styling and options to minimise cumulative
  layout shift. Eventually, a script could be set up to run prior to
  `yarn build` that runs an web image optimiser (converting .png to .webp, for
  example) on all image files under `public/`.~~
    - Solved after this `mdx-bundler` issue was raised: https://github.com/kentcdodds/mdx-bundler/issues/80.

## Performance & SEO
I developed this site with SEO in mind for the blog pages, however I
relaxed this requirement for the portfolio pages which need not load 
faster.

To optimise bundle size and/or minimise CPU consider cutting or substituting
away from the following:
- `framer-motion` is only used for page transitions and for polishing UI
  interactions. The main import, `motion` adds about 25kb to the bundle size.
  See [reducing Framer Motion's bundle size](https://www.framer.com/docs/guide-reduce-bundle-size/).
- `tsparticles` and `react-tsparticles` are the main contributors to poorer load 
  performance. These are the main heavyweight dependencies, however they don't
  impact web vitals by a concerning amount (for a portfolio/blog website).

### Caveats
A list of things that helped keep the bundle size lower and improve performance
but which were not clearly documented or obvious.

- Importing icons from `react-icons` with the most deeply qualified paths for correct tree-shaking. See this [issue](https://github.com/react-icons/react-icons/issues/154).
- Reduce fps limit to <= 30 in `tsparticles` options. See this [post](https://stackoverflow.com/questions/59268732/optimise-particles-js-background-to-avoid-high-cpu-usage).
