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
        const slug = path.basename(node.fileAbsolutePath, ".md");
        actions.createNodeField({
            node,
            name: 'slug',
            value: slug
        });
    }
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
    // Using src/components/templates/blog.js as the page component:
    const blogTemplatePath = path.resolve("./src/components/templates/blog.js");
    const homePagePath = path.resolve("./src/pages/home.js");

    actions.createPage({
        path: `/home/:targetWindow`,
        matchPath: `/home/:targetWindow`,
        component: homePagePath
    });

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        rawMarkdownBody,
                        id,
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `);
    res.data.allMarkdownRemark.edges.forEach((eachEdge) => {
        const fileName = eachEdge.node.fields.slug.toLowerCase();
        console.log(` → Generating blog route: ${process.env.BASE_URL}/blogs/${fileName}`.magenta.bold);
        actions.createPage({
            component: blogTemplatePath,
            // Generating routes: timz.dev/blogs/<BLOG NAME>
            path: `/blogs/${fileName}`,
            context: {
                slug: eachEdge.node.fields.slug
            }
        });
    })
}

module.exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
    actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                }
            ]
        }
    })
}