module.exports = {
  siteMetadata: {
    title: `Eden Chen Music`,
    description: `Pianist`,
    author: `Jade Chen`,
  

    menuLinks: [
      {
        title: "Home",
        link: "/"
      },
      {
        title: "About",
        link: "/about"
      },
      {
        title: "Photos",
        link: "/photos"
      }, 
      {
        title: "Event Gallery",
        link: "/event-gallery"
      },
      {
        title: "News",
        link: "/news"
      },
      {
        title: "Contact",
        link: "/contact"
      },
    ],
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
        name: `Eden Chen Music`,
        short_name: `Eden Chen Music`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
