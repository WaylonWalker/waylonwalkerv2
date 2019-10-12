import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
// import BlogGallery from '../components/BlogGallery'
// import chroma from 'chroma-js'

const BlogPageStyles = styled.div`
max-width: 800px;
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
h1 {
  text-align: center;
}
`


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    // console.log(posts)
    // console.log(data.allMarkdownRemark)
    // console.log('posts: ', posts)

    return (
      <Layout>
        <BlogPageStyles>
          <h1>Notes</h1>
          <p>
            These are less developed ideas of larger topics that may eventually lead to a fully fledged blog post.  This gives me a dumping ground to put ideas and continually develop them.
          </p>
          <BlogPosts posts={posts} />
        </BlogPageStyles>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query NotesQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "notes" } } }) {
    edges {
      node {
        excerpt(pruneLength: 400)
        html
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          status
          cover {
            absolutePath
            childImageSharp {
              fixed(width: 500, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }

          date
        }
      }
    }
  }
}

`
