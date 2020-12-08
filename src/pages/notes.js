import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
import Helmet from 'react-helmet'
// import BlogGallery from '../components/BlogGallery'
// import chroma from 'chroma-js'

const BlogPageStyles = styled.div`
overflow: hidden;
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
        <Helmet
          meta={[
            { property: 'og:type', name: 'og:type', content: 'website' },
            { property: 'og:title', name: 'og:title', content: "Waylon Walker's Notes Feed" },
            { property: 'twitter:title', name: 'twitter:title', content: "Waylon Walker's Notes Feed" },
            { property: 'og:article:author', name: 'og:article:author', content: 'Waylon Walker' },
            { property: 'og:image', name: 'og:image', content: 'https://waylonwalker.com/waylon-walker.png' },
            { property: 'og:image:width', name: 'og:image:width', content: '1000' },
            { property: 'og:image:height', name: 'og:image:height', content: '420' },
            { property: 'og:url', name: 'og:url', content: 'https://waylonwalker.com/blog' },
            { property: 'description', name: 'description', content: 'A cronological feed of my posts about software development and data science.'},
            { property: 'og:description', name: 'og:description', content: 'A cronological feed of my posts about software development and data science.'},
            { property: 'twitter:description', name: 'twitter:description', content: 'A cronological feed of my posts about software development and data science.'},
            { property: 'keywords', name: 'keywords', content: 'python, kedro, datascience, bash, command line, javascript, gatsby' },
            { property: 'twitter:image', name: 'twitter:image', content: 'https://waylonwalker.com/waylon-walker.png' },
          ]}
          />
        <BlogPageStyles>
          <h1>Notes</h1>
          <p>
            These are less developed ideas of larger topics that may eventually lead to a fully fledged blog post. This gives me a dumping ground to put ideas and continually develop them.
          </p>
          <BlogPosts posts={posts} />
        </BlogPageStyles>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
query NotesQuery {
  allMarkdownRemark(
    sort: { order: DESC, fields: [frontmatter___date] },
    filter: { 
      frontmatter: { templateKey: { eq: "blog-post" }} 
      fields: {slug:{regex: "^/notes/"}} 
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
