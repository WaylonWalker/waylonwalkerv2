/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/do/js/node-apis/
 */

// You can delete this file if you're not using it

const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const similar_posts = (node, posts, index) => {
  // cleanse
  // sort by date
  // filter to similar templateKey
  // slice to current post placing current to back
  //
  //
  const dateSortedPosts = posts
    .filter(post => post.node.frontmatter !== null)
    .filter(post => post.node.frontmatter.date !== null)
    .sort((a, b) => b.node.frontmatter.date - a.node.frontmatter.date)
  const orderedPosts = [...dateSortedPosts.slice(index+1, posts.length), ...dateSortedPosts.slice(0,index)]
    .map(post => post.node)
    .filter(post => post.frontmatter.templateKey == node.frontmatter.templateKey)

  const taggedPosts = (
    node.frontmatter.tags === null 
    ? [] 
    : orderedPosts
      .filter(post => post.frontmatter.status !== null)
      .filter(post => post.frontmatter.status.toLowerCase() === 'published')
      .filter(post => post.frontmatter.tags !== null)
      .filter(post => node.frontmatter.tags.some(r => post.frontmatter.tags.includes(r)))
  )
  const prev = index === 0 ? null : posts[index - 1].node
  const next = index === (posts.length -1 ) ? null : posts[index + 1].node
  const similar_posts = [...new Set([prev, next, ...taggedPosts, ...orderedPosts])].filter(p => p !== null)
  return similar_posts
}

const getHeadings = ({node}) => {
try{
   const DOMParser = require('xmldom').DOMParser
   const doc = new DOMParser().parseFromString(node.html, 'text/html')
   return [...doc.querySelectorAll('h1, h2, h3, h4')]
} catch (err) {
  return []
}
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              tags
              title
              description
              templateKey
              status
              date
              cover {
                childImageSharp {
                  fixed(width: 200, height: 85) {
                    base64
                    width
                    height
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({node}, index) => {
      const id = node.id
      if (
        node.frontmatter.templateKey !== "gratitude"
        && node.frontmatter.templateKey !== null
        && node.fields.status !== false 
        && node.fields.status !== 'false'
      ) {

        const headings = getHeadings(node)

        createPage({
          path: node.fields.slug,
          tags: node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            prev: index === 0 ? null : posts[index - 1].node,
            next: index === (posts.length -1 ) ? null : posts[index + 1].node,
            similarPosts: similar_posts(node, posts, index),
            allPosts: posts,
            headings: headings

          },
        })
      }
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
