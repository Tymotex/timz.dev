
### Timz.dev Portfolio
A software engineering portfolio site, built with React + Gatsby and Material UI. Deployed <a href="https://www.timz.dev">here</a>.

### Features:
- Projects showcase
  - `src/portfolio-data/projects.js` contains a JS object with details regarding software projects. These are rendered under the Projects window as stylish cards showcasing the technologies used, images, links, tags, markdown blog, etc.
  - `.md` files in `src/portfolio-data/project-descriptions` have pages automatically created under the /blogs route. Eg. src/portfolio-data/MyProject.md creates a page at /blogs/MyProject
- Bio showcase:
  - Work experience summary rendered from fields of the object exported from `src/portfolio-data/bio.js`
  - Interests and hobbies rendered from fields of the object exported from `src/portfolio-data/bio.js`
- Blogs page with masonry grid of styled project cards, dark mode toggle, search bar, sidenav and more
- Contact form compatible with Netlify's integrated email services
- Customisable 'network particles' wallpaper
