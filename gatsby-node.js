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
  const slim_similar_posts = similar_posts.map(post => {
    const slim_post = {
      slug: post.fields.slug,
      title: post.frontmatter.title,
      description: post.frontmatter.description === null ? '' : post.frontmatter.description,
      cover: post.frontmatter.cover === null ? '' : post.frontmatter.cover.childImageSharp.fixed
    }
  }
  )

  return slim_similar_posts
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark {
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
              med_img: childImageSharp {
                fixed(width: 500) {
                    base64
                    width
                    height
                    src
                    srcSet
                }
              }
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

    // create pages for draft posts, but dont advertise them
    const allPosts = result.data.allMarkdownRemark.edges
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== 'gratitude')
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== 'slides')
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== null)

    const posts = result.data.allMarkdownRemark.edges
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== 'gratitude')
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== 'slides')
      .filter(post => post?.node?.frontmatter?.frontmatter?.templateKey !== null)
      .filter(post => post?.node?.frontmatter.status !== 'draft')
      .filter(post => post?.node?.fields?.status !== false)
      .filter(post => post?.node?.fields?.status !== null)
      .filter(post => post?.node?.fields?.status !== 'false')
      .filter(post => post?.node?.fields?.date !== null)
      

    const allTags = posts.map(post => post?.node?.frontmatter?.tags).flat()
    const tags = [...new Set(allTags)]
    tags.pop('')
    tags.pop(null)
    const tagCounts = Object.fromEntries(tags.map( tag => [tag, allTags.flat().filter(t => t === tag).length]))
    tags.sort((a,b) => tagCounts[b] - tagCounts[a])
    
    // create meta page
    createPage({
      path: 'meta',
      component: path.resolve(`src/templates/meta.js`),
      context: {
        allPosts: posts,
        tags: tags,
        tagCounts: tagCounts,
      }
    }
    )

    // create tags page
    createPage({
      path: 'tags',
      component: path.resolve(`src/templates/tags.js`),
      context: {
        allPosts: posts,
        tags: tags,
        tagCounts: tagCounts,
      }
    }
    )

    // create tag pages
        tags.forEach((tag, index) => {

          if (tag !== null) {
          createPage({
            path: `tag/${tag}`,
            component: path.resolve(
              `src/templates/tag-page.js`
            ),
            // additional data can be passed via context
            context: {
              tag: tag,
              tags: tags,
              tagCounts: tagCounts,
              posts: posts
              .filter(post => post?.node?.frontmatter?.tags?.includes(tag))
              .sort((a, b) => new Date(b?.node?.frontmatter?.date) - new Date(a?.node?.frontmatter?.date))
            },
          })
        }
        }
      )

    // create posts
    allPosts.forEach(({node}, index) => {
      const id = node.id
      if (
        node.frontmatter.templateKey !== "gratitude"
        && node.frontmatter.templateKey !== "slides"
        && node.frontmatter.templateKey !== null
        && node.fields.status !== false 
        && node.fields.status !== 'false'
      ) {


        createPage({
          path: node.fields.slug,
          tags: node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
            prev: index === 0 ? null : allPosts[index - 1].node,
            next: index === (allPosts.length -1 ) ? null : allPosts[index + 1].node,
            similarPosts: similar_posts(node, allPosts, index),
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
