import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
// import TheCatHasHat from '../components/styles/fonts/thecathashat-webfont.ttf'
// import TheCatHasHat from '../components/styles/fonts/thecathasahat-webfont.ttf'


const DateStyle = styled.div`
  position: absolute;
  /* margin: 1rem 1rem 1rem auto; */
  top: 1.5rem
  width: 200px;
  right: 1rem;

  .year {
    position: absolute;
    font-size: 5rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 900;
    color: rgba(0,0,0,.1);
  }
  .month {

    position: absolute;
    bottom: -4.8rem;
    font-family: sans-serif;
    font-weight: 700;
    color: rgba(0,0,0,.7);
  }
  .day {
    font-size: 2rem;
    position: absolute;
    left: -1rem;
    font-weight: 700;
    font-family: sans-serif;
  }


`

function GratitudePost({ node, ...props }) {
  return (
    <div
      id={node.id}
      style={{
        background: 'rgba(0, 0, 0, 0.05)',
        padding: '2rem',
        marginTop: '3rem',
        position: 'relative',
      }}
    >
      <h3>{node.frontmatter.title}</h3>
        <DateStyle>
        <div className='year'>{ node.date.year } </div>
        <div className='month'>{node.date.month} {node.date.day}</div>

        </DateStyle>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
    </div>
  )
}

export default class gratitude extends Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    posts.map((post, i) => {
      const dt = new Date(post.node.frontmatter.date)
      posts[i]['node']['date'] = {}
      posts[i]['node']['date']['year'] = dt.getYear()+1900
      posts[i]['node']['date']['month'] = dt.toLocaleString('en-us', { month: 'long' })
      posts[i]['node']['date']['day'] = ("00" + dt.getDay()).slice(-2)
      })

    console.log(posts)

    // console.log(posts)
    return (
      <Layout>
        <h1 style={{ textAlign: 'center' }}>Gratitude</h1>
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
          {posts.map((post, i) => (
            // console.log(post.node)
            <GratitudePost node={post.node} />
          ))}
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query gratitudeQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { in: ["gratitude", ] } } }
      sort: {
        fields: [frontmatter___date, fileAbsolutePath]
        order: [DESC, DESC]
      }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            _PARENT
            templateKey
            path
            date
            status
            description
            category
            tags
            summary
            slug
            coverCredits
            twitterCover
            coverCredit
          }
        }
      }
    }
  }
`
