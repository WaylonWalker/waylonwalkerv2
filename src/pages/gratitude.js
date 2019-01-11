import React, { Component } from 'react'
import Layout from '../components/layout'
// import { Link, graphql } from 'gatsby'
import { graphql } from 'gatsby'


function GratitudePost({ node, ...props }) {
  return (
    <div id={node.id}>
      <div dangerouslySetInnerHTML={{ __html: node.html }} ></div>
    </div >

  )
}

export default class gratitude extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // console.log(posts)
    return (
      <Layout>
        <h1 style={{ textAlign: 'center' }}>Gratitude</h1>
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
          {
            posts.map((post, i) => {
              // console.log(post.node)
              return <GratitudePost node={post.node} />
            })
          }
        </div>


      </Layout>
    )
  }
}

export const pageQuery = graphql`
query gratitudeQuery {
  allMarkdownRemark
  (
    filter: {
      frontmatter: {
        templateKey: {
        in: [null]
        }
      }
    }
    sort: {
      fields: [fileAbsolutePath]
      order: DESC
    }
  )
    {
    edges {
      node {
        id
        html
      }
    }
  }
  
}
`
