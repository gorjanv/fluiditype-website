module.exports = {
  siteMetadata: {
    title: `Fluditype`,
    description: `Simple and fluent css framework for flexible typgraphy in the web.`,
    author: `Boris Kirov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `fluiditype-css-boilerplate`,
        short_name: `fluiditype`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon-16x16.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
