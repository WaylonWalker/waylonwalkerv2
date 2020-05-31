import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HotTips from '../components/HotTips'

const HotTipsStyles = styled.div`
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
        plainText
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
