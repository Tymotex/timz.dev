const path = require('path');
const colours = require('colors');

/**
 * onCreateNode: https://www.gatsbyjs.com/docs/node-apis/#onCreateNode
 * Called when a new node is created. Plugins wishing to extend or transform
 * nodes created by other plugins should implement this API.
 * See the node interface: https://www.gatsbyjs.com/docs/reference/graphql-data-layer/node-interface/
 */
module.exports.onCreateNode = ({ node, actions }) => {
    // For markdown files, add to them the 'slug' field which is basename of the markdown file
    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md');
        actions.createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

const generateAllProjectBlogs = async (graphql, actions) => {
    // Using src/components/templates/blog.js as the page component:
    const blogTemplatePath = path.resolve('./src/components/templates/ProjectBlog.tsx');
    const blogsIndexPath = path.resolve('./src/pages/blogs.js');

    actions.createPage({
        path: `/blogs/:query`,
        matchPath: `/blogs/:query`,
        component: blogsIndexPath,
    });

    // Querying for all markdown files under `portfolio-data/project-descriptions`:
    // Source: https://stackoverflow.com/questions/58016672/gatsby-and-graphql-how-to-filter-allmarkdownremark-by-folder
    const res = await graphql(`
        query {
            allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/(project-descriptions)/"} }) {
                edges {
                    node {
                        excerpt
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    res.data.allMarkdownRemark.edges.forEach(eachEdge => {
        const fileName = eachEdge.node.fields.slug.toLowerCase();
        console.log(
            ` → Generating project blog route: ${process.env.BASE_URL}/blogs/${fileName}`.magenta.bold
        );
        actions.createPage({
            component: blogTemplatePath,
            // Generating routes: timz.dev/blogs/<BLOG NAME>
            path: `/blogs/${fileName}`,
            context: {
                slug: eachEdge.node.fields.slug,
            },
        });
    });
}

const generateAllCybersecBlogs = async (graphql, actions) => {
    // Using src/components/templates/blog.js as the page component:
    const blogTemplatePath = path.resolve('./src/components/templates/CybersecurityBlog.tsx');

    // Querying for all markdown files under `portfolio-data/project-descriptions`:
    // Source: https://stackoverflow.com/questions/58016672/gatsby-and-graphql-how-to-filter-allmarkdownremark-by-folder
    const res = await graphql(`
        query {
            allMarkdownRemark (filter: { fileAbsolutePath: {regex: "/(cybersecurity)/"} }) {
                edges {
                    node {
                        excerpt
                        id
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    res.data.allMarkdownRemark.edges.forEach(eachEdge => {
        const fileName = eachEdge.node.fields.slug.toLowerCase();
        console.log(
            ` → Generating cybersecurity blog route: ${process.env.BASE_URL}/cybersecurity/${fileName}`.blue.bold
        );
        actions.createPage({
            component: blogTemplatePath,
            // Generating routes: timz.dev/cybersecurity/<BLOG NAME>
            path: `/cybersecurity/${fileName}`,
            context: {
                slug: eachEdge.node.fields.slug,
            },
        });
    });
}

const generateHomeWindowPages = async (actions) => {
    const homePagePath = path.resolve('./src/pages/home.js');

    actions.createPage({
        path: `/home/:targetWindow`,
        matchPath: `/home/:targetWindow`,
        component: homePagePath,
    });
}

/**
 * createPages: https://www.gatsbyjs.com/docs/node-apis/#createPages
 * Tell plugins to add pages. This extension point is called only after the initial
 * sourcing and transformation of nodes plus creation of the GraphQL schema are complete
 * so you can query your data in order to create pages.
 *
 * NOTE: see the gatsby-source-filesystem plugin in gatsby-config.js. The graphql query
 * for allMarkdownRemark will fetch .md files in that path specified in the config object
 */
module.exports.createPages = async ({ graphql, actions }) => {
    await generateAllProjectBlogs(graphql, actions);
    await generateAllCybersecBlogs(graphql, actions);
    await generateHomeWindowPages(actions);
};

module.exports.onCreateWebpackConfig = ({ stage, rules, loaders, plugins, actions }) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                },
            ],
        },
    });
};
