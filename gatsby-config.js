// google analytics tracking id
// UA-113148616-1

const makeDevToContent = (edge) => {

  const frontMatter = `
---
title: ${edge.node.frontmatter.title}
canonical_url: https://waylonwalker.com/blog/${edge.node.fields.slug},
cover_image: ${edge.node.frontmatter.twitter_cover !== null ? edge.node.frontmatter.twitter_cover.relativePath : edge.node.frontmatter.cover !== null ? edge.node.frontmatter.cover.relativePath : ''}
tags: zsh, ohmyzsh, wsl, dotfiles
---
  `
  const body = edge.node.rawMarkdownBody
  return frontMatter + body
}

module.exports = {
  siteMetadata: {
    title: 'Waylon Walker',
    siteUrl: 'https://waylonwalker.com',
    description: "Waylon Walker's personal website"
  },
  plugins: [
    // `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-remark-copy-linked-files',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
                  url: 'https://waylonwalker.com/blog/' + edge.node.fields.slug,
                  guid: 'https://waylonwalker.com/blog/' + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": makeDevToContent(edge) }],
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
                      rawMarkdownBody
                      fields { slug }
                      frontmatter {
                        title
                        date
                        cover {
                          relativePath
                        }
                        twitter_cover {
                          relativePath
                        }
                      }

                    }
                  }
                }
              }
            `,
            output: "/blog-rss-markdown.xml",
            title: "Waylon Walker's Blog Feed in Markdown",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },

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
                  url: 'https://waylonwalker.com/blog/' + edge.node.fields.slug,
                  guid: 'https://waylonwalker.com/blog/' + edge.node.fields.slug,
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
            output: "/blog-rss.xml",
            title: "Waylon Walker's Blog Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            // match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}
