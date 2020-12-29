import React from 'react'
import { graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
import Repo from '../components/Repo'
import styled from 'styled-components'
// import axios from 'axios'
import { useSpring, animated } from 'react-spring'

const REPOS = [
  'waylonwalker/find-kedro',
  'waylonwalker/kedro-static-viz',
  'waylonwalker/kedro-action',
  'waylonwalker/steel-toes',
]

const About = () => {
  const animationConfig = { config: { friction: 18 }, delay: 800 }
  const animationFromLeft = useSpring({
    to: {
      opacity: 1,
      right: '0px',
    },
    from: {
      opacity: 0,
      right: '-75px',
      position: 'relative',
    },
    ...animationConfig,
  })
  const animationFromLeft2 = useSpring({
    to: {
      opacity: 1,
      right: '0px',
    },
    from: {
      opacity: 0,
      right: '-75px',
      position: 'relative',
    },
    ...animationConfig,
    delay: 2400,
  })
  const animationFromRight = useSpring({
    to: {
      opacity: 1,
      right: '0px',
    },
    from: {
      opacity: 0,
      right: '75px',
      position: 'relative',
    },
    ...animationConfig,
    delay: 1600,
  })
  return (
    <section id="about">
      <Image />
      <div className="about-text">
        <animated.h1 style={{ ...animationFromLeft }}>
          Hello, I am Waylon Walker.
        </animated.h1>

        <animated.p style={{ ...animationFromRight }}>
          {' '}
          I am a Data Scientist from Illinois. I have a passion for learning and
          teaching others.{' '}
        </animated.p>
        <animated.p style={{ ...animationFromLeft2 }}>
          I love what I do, and am constantly honing my craft. You can follow
          along with me, I try to document my journey the best I can by writing
          articles.
        </animated.p>
      </div>
    </section>
  )
}
const IndexStyle = styled.div`
  overflow: hidden;
  h1 {
    margin: auto;
    max-width: 900px;
    text-align: center;
  }
  p {
    margin: auto;
    max-width: 500px;
    padding-top: 1rem;
  }
  #about {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`

const ReposStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin: auto;
`

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    return (
      <Layout>
        <IndexStyle>
          <div id="content" style={{ margin: 'auto' }}>
            <About />
            <section
              style={{
                margin: '2rem auto',
                padding: '5rem 0',
                textAlign: 'center',
                color: 'white',
                background: 'rgba(33, 0, 25, .2)',
                boxShadow: '0 0 2rem rgba(0, 0, 0, .5)',
              }}
            >
              <h2 id="open-source">Open Source</h2>
              <p>
                In my spare time I like to take what I have learned to make
                things easier for others. I maintain {REPOS.length} open source
                packages that you can find below.
              </p>
              <ReposStyle>
                {REPOS.map((r) => (
                  <Repo repo={r} key={r} />
                ))}
              </ReposStyle>
            </section>
            <section
              style={{
                maxWidth: '1800px',
                margin: 'auto',
                textAlign: 'center',
                color: 'white',
              }}
            >
              <h2 id="blog">Blog</h2>
              {/* <ToastContainer /> */}
              <BlogPosts posts={posts} />
            </section>
          </div>
        </IndexStyle>
      </Layout>
    )
  }
}

// export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400, format: PLAIN)
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
                }
              }
              childImageSharp {
                fluid(maxWidth: 1000, maxHeight: 420) {
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
