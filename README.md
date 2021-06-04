### Timz.dev Portfolio

A software engineering portfolio site, built with React + Gatsby and Material UI. Deployed <a href="https://www.timz.dev">here</a>.

### Features:

-   Projects showcase
    -   `src/portfolio-data/projects.js` contains a JS object with details regarding software projects. These are rendered under the Projects window as stylish cards showcasing the technologies used, images, links, tags, markdown blog, etc.
    -   `.md` files in `src/portfolio-data/project-descriptions` have pages automatically created under the /blogs route. Eg. src/portfolio-data/MyProject.md creates a page at /blogs/MyProject
-   Bio showcase:
    -   Work experience summary, awards, interests and hobbies rendered from fields of the object exported from `src/portfolio-data/bio.js`
    -   Embedded PDF renderer
    -   Live Spotify feed displayer (using this [project](https://github.com/novatorem/novatorem))
        <img src="https://spotify-display-lyart.vercel.app/api/spotify" alt="Spotify Now Playing">
-   Blogs index page with masonry grid of styled project cards, dark mode toggle, search bar, sidenav and more
    -   Blog show page linked with `.md` files in `src/portfolio-data/project-descriptions`
-   Contact form compatible with Netlify's integrated email services
-   Customisable 'network particles' wallpaper with themes
