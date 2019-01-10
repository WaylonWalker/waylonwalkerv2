import React from 'react'
// import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'



export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    return (
      <Layout>
        <h1>About</h1>
        <Image />
        <h1>Blog</h1>
        <BlogPosts posts={posts} />
      </Layout>

    )
  }
}


// export default IndexPage

export const pageQuery = graphql`
query IndexQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "blog-post" } } }) {
    edges {
      node {
        excerpt(pruneLength: 400)
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

          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}

`
