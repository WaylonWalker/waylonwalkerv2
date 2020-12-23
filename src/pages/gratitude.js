import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Helmet from 'react-helmet'

const DateStyle = styled.div`
  position: absolute;
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
        <div className="year">{node.date.year} </div>
        <div className="month">
          {node.date.month} {node.date.day}
        </div>
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
      posts[i]['node']['date']['year'] = dt.getYear() + 1900
      posts[i]['node']['date']['month'] = dt.toLocaleString('en-us', {
        month: 'long',
      })
      posts[i]['node']['date']['day'] = ('00' + dt.getDay()).slice(-2)
      return posts
    })

    return (
      <Layout>
        <Helmet
          meta={[
            { property: 'og:type', name: 'og:type', content: 'article' },
            {
              property: 'og:title',
              name: 'og:title',
              content: "Waylon Walker's gratitude journal",
            },
            {
              property: 'twitter:title',
              name: 'twitter:title',
              content: "Waylon Walker's gratitude journal",
            },
            {
              property: 'og:image',
              name: 'og:image',
              content: 'https://waylonwalker.com/waylon-walker.png',
            },
            {
              property: 'og:image:width',
              name: 'og:image:width',
              content: '1000',
            },
            {
              property: 'og:image:height',
              name: 'og:image:height',
              content: '420',
            },
            {
              property: 'og:url',
              name: 'og:url',
              content: 'https://waylonwalker.com/gratitude',
            },
            {
              property: 'description',
              name: 'description',
              content:
                'A series of quick journal entries depicting my gratitude for the day.',
            },
            {
              property: 'og:description',
              name: 'og:description',
              content:
                'A series of quick journal entries depicting my gratitude for the day.',
            },
            {
              property: 'twitter:description',
              name: 'twitter:description',
              content:
                'A series of quick journal entries depicting my gratitude for the day.',
            },
            {
              property: 'keywords',
              name: 'keywords',
              content: 'gratitude, journal',
            },
            {
              property: 'twitter:image',
              name: 'twitter:image',
              content: 'https://waylonwalker.com/waylon-walker.png',
            },
          ]}
        />
        <h1 style={{ textAlign: 'center' }}>Gratitude</h1>
        <div style={{ maxWidth: '800px', margin: 'auto', padding: '1rem' }}>
          {posts.map((post, i) => (
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
      filter: { frontmatter: { templateKey: { in: ["gratitude"] } } }
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
            templateKey
            date
          }
        }
      }
    }
  }
`
