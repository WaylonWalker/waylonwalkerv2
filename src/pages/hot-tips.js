import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import HotTips from '../components/HotTips'
import Helmet from 'react-helmet'

const HotTipsStyles = styled.div`
`

export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet
          meta={[
            { property: 'og:type', name: 'og:type', content: 'website' },
            { property: 'og:title', name: 'og:title', content: "Waylon Walker's Feed of Spicy Hot Tips" },
            { property: 'twitter:title', name: 'twitter:title', content: "Waylon Walker's Feed of Spicy Hot Tips" },
            { property: 'og:image', name: 'og:image', content: 'https://waylonwalker.com/waylon-walker.png' },
            { property: 'og:image:width', name: 'og:image:width', content: '1000' },
            { property: 'og:image:height', name: 'og:image:height', content: '420' },
            { property: 'og:url', name: 'og:url', content: 'https://waylonwalker.com/hot-tips' },
            { property: 'description', name: 'description', content: 'Short code tips about served up hot and spicy.'},
            { property: 'og:description', name: 'og:description', content: 'Short code tips about served up hot and spicy.'},
            { property: 'twitter:description', name: 'twitter:description', content: 'Short code tips about served up hot and spicy.'},
            { property: 'keywords', name: 'keywords', content: 'python, kedro, datascience, bash, command line, javascript, gatsby' },
            { property: 'twitter:image', name: 'twitter:image', content: 'https://waylonwalker.com/waylon-walker.png' },
          ]}
          />
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
