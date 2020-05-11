// google analytics tracking id
// UA-113148616-1

module.exports = {
  siteMetadata: {
    title: 'Waylon Walker',
    siteUrl: 'https://waylonwalker.com',
    description: "Waylon Walker is a Sr. Data Scientist with a passion for learning and teaching others."
  },
  plugins: [
    // `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    // 'gatsby-remark-copy-linked-files',
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/static`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `/static/images`,
    //     path: `${__dirname}/static/images`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-static-images',
          `gatsby-remark-prismjs`,
          // 'gatsby-remark-social-cards',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields: ["image", "cover", "twitter_cover", "cover_image"],
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
        icon: 'static/W.png', // This path is relative to the root of the site.
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

    // {
    //   resolve: `gatsby-plugin-feed`,
    //   options: {
    //     query: `
    //       {
    //         site {
    //           siteMetadata {
    //             title
    //             description
    //             siteUrl
    //             site_url: siteUrl
    //           }
    //         }
    //       }
    //     `,
    //     feeds: [
    //       {
    //         serialize: ({ query: { site, allMarkdownRemark } }) => {
    //           return allMarkdownRemark.edges.map(edge => {
    //             return Object.assign({}, edge.node.frontmatter, {
    //               description: edge.node.excerpt,
    //               date: edge.node.frontmatter.date,
    //               url: edge.node.frontmatter.short_url,
    //               guid: edge.node.fields.slug + '/tweet_0',
    //               custom_elements: [
    //                 { "content:encoded": edge.node.frontmatter.twitter_announcement },
    //                 { "image": edge.node.frontmatter.twitter_cover === null ? '' : 'https://waylonwalker.com/' + edge.node.frontmatter.twitter_cover.relativePath }
    //               ],
    //             })
    //           })
    //         },
    //         query: `
    //           {
    //             allMarkdownRemark(
    //               sort: { order: DESC, fields: [frontmatter___date] },
    //               filter: { frontmatter: {templateKey: {in: ["blog-post"]},status: {in: ["published"]}, twitter_announcement: {ne: null}} }
    //             ) {
    //               edges {
    //                 node {
    //                   excerpt
    //                   fields { slug }
    //                   frontmatter {
    //                     twitter_announcement
    //                     short_url
    //                     title
    //                     date
    //                     cover {
    //                       relativePath
    //                     }
    //                     twitter_cover {
    //                       id
    //                       relativePath
    //                     }
    //                   }

    //                 }
    //               }
    //             }
    //           }
    //         `,
    //         output: "/blog/tweet_0.xml",
    //         title: "Waylon Walker's Blog announcement tweet schedule",
    //         match: undefined,
    //         // optional configuration to insert feed reference in pages:
    //         // if `string` is used, it will be used to create RegExp and then test if pathname of
    //         // current page satisfied this regular expression;
    //         // if not provided or `undefined`, all pages will have feed reference inserted
    //         // match: "^/blog/",
    //         // optional configuration to specify external rss feed, such as feedburner
    //         // link: "https://feeds.feedburner.com/gatsby/blog",
    //       },
    //     ],
    //   },
    // },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: 'https://waylonwalker.com' + edge.node.fields.slug,
                  guid: 'https://waylonwalker.com' + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: {templateKey: {in: ["blog-post"]},status: {in: ["published"]}} }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                        twitter_cover {
                          relativePath
                        }
                      }

                    }
                  }
                }
              }
            `,
            output: "/blog/rss.xml",
            title: "Waylon Walker's Blog Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}
