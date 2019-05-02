// google analytics tracking id
// UA-113148616-1

module.exports = {
  siteMetadata: {
    title: 'Waylon Walker',
    siteUrl: 'https://waylonwalker.com'
  },
  plugins: [
    // `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-remark-copy-linked-files',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
        {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-static-images',
          // 'gatsby-remark-social-cards',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            }
          },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["image", "cover", "twitter_cover"],
            },
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Waylon Walker',
        short_name: 'ww',
        start_url: '/',
        background_color: '#B73CF6',
        theme_color: '#330026',
        display: 'minimal-ui',
        icon: 'src/images/W.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-113148616-1",
        exclude: ['/admin/**'],
      }
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
  ],
}
