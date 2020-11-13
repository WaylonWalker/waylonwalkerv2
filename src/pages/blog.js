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
width: calc(min(1000px, 95vw));
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
color: #e6ddeb;

h1 {
  /* color: #f9f7fa; */
  text-align: center;
}
p {
  color: whitesmoke;
  padding: 1rem;
  margin: 3rem auto;
  max-width: 500px;
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
          <h1>Blog Posts</h1>
          <p>
            I am always learning something, including blogging/writing skills.  I try to share my experiences here. Much of it is random things form my career.
          </p>
          <BlogPosts posts={posts} />
        </BlogPageStyles>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query BlogQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { 
      frontmatter: { templateKey: { eq: "blog-post" }} 
      fields: {slug:{regex: "^/blog/"}} 
    }
  ) {
    edges {
      node {
        excerpt(pruneLength: 400)
        html
        plainText
        id
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          status
          description
          tags
          cover {
            absolutePath
            childImageSharp {
              fixed(width: 500, height: 210) {
                ...GatsbyImageSharpFixed
              },
              fluid {
                ...GatsbyImageSharpFluid
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
