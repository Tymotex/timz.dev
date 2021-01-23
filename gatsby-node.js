const path = require('path');

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
 */
module.exports.createPages = async ({ graphql, actions }) => {
    const blogTemplatePath = path.resolve("./src/pages/blog.js");
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
        actions.createPage({
            component: blogTemplatePath,
            path: `/blogs/${eachEdge.node.fields.slug}`,
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