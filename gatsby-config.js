
// Environment variables: https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/
// When `gatsby develop` is run, process.env.NODE_ENV will have value 'production' and therefore
// use variables declared in the .env.development file.
// Production environment variables are kept in .env.production 
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Metadata and plugin config:
module.exports = {
  siteMetadata: {
    title: 'Tim Zhang',
    author: 'Tim Zhang',
    description: 'Tim Zhang',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
    // Gatsby-source-filesystem + Gatsby-transformer-remark for dynamic .md blog 
    // post page generation.
    // https://stackoverflow.com/questions/57378950/gatsby-markdown-how-to-get-data-from-a-specific-markdown-file-into-a-single-p 
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown`,
    //     path: `${__dirname}/src/blogs/`,       // This is the path of the blogs
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        // This is the path of the project description markdown files
        path: `${__dirname}/src/components/windows/projects-window/project-descriptions/`,       
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    }
  ],
}
