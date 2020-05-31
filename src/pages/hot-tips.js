import React from 'react'
import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HotTips from '../components/HotTips'
// import BlogGallery from '../components/BlogGallery'
// import chroma from 'chroma-js'

const HotTipsStyles = styled.div`
/* width: calc(min(1000px, 95vw));
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
color: #e6ddeb;

h1 {
  text-align: center;
}
p {
  color: whitesmoke;
  padding: 1rem;
  margin: 3rem auto;
  max-width: 500px;
} */

`


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <HotTipsStyles>
          <h1>Hot Tips</h1>
          <HotTips posts={posts} />
        </HotTipsStyles>
      </Layout>
    )
  }
}

export const HotTipsQuery = graphql`
query HotTipsQuery {
  allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { templateKey: { eq: "hot-tip" } } }) {
    edges {
      node {
        html
        id
        fileAbsolutePath
        frontmatter {
        date
        tags
        afterImage
        }
      }
    }
  }
}

`
