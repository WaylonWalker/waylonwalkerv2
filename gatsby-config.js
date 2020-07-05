// google analytics tracking id
// UA-113148616-1

module.exports = {
  siteMetadata: {
    title: 'Waylon Walker',
    siteUrl: 'https://waylonwalker.com',
    description: "Practicing my craft in public, sharing my experience along the way.  Python, Kedro, JamStack, Gatsby, Data, Automation"
  },
  plugins: [
    // `gatsby-plugin-sass`,
    // `gatsby-plugin-preact`, <-- seemed buggy in prod
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

    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Space Mono`,
    //         variants: [`400`, `700`]
    //       },
    //     ],
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
          `gatsby-remark-images-zoom`,
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
    `gatsby-transformer-remark-plaintext`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Waylon Walker',
        short_name: 'ww',
        start_url: '/',
        background_color: '#B73CF6',
        theme_color: '#322D39',
        display: 'minimal-ui',
        icon: 'static/8bitcc.png', // This path is relative to the root of the site.
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
                  custom_elements: [{ "content:encoded": edge.node.html + `<hr><br><span role='img' aria-label=''>👀</span> see an issue, edit this post on <a href='https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages${edge.node.fields.slug.slice(0, -1)}.md' alt='edit post url' title='edit this post'>GitHub</a><br><hr><a href="https://www.buymeacoffee.com/bBdtMQO" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-violet.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a><br><hr><p>I have been writing short snippets about my mentality breaking into the tech/data industry in my newsletter, 👇 check it out and lets get the conversation started.</p> <p><a href="https://waylonwalker.com/newsletter"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--uOcrEpdd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://waylonwalker.com/waylon-walker-newsletter.png" alt="Sign up for my Newsletter" loading="lazy"></a></p>` }],
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
