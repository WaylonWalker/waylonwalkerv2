import React from 'react'
import { graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'

const paragraphStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '0 1rem',
  lineHeight: '1.8rem',
}

const traitStyle = {
  // display: 'inline-block',
  display: 'flex',
  justifyContent: 'center',
  width: '200px',
  background: '#fafafa',
}

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      traits: ['Husband', 'Father', 'Data Scientist', 'Developer'],
      trait: 0,
    }
  }

  nextTrait = () => {
    if (this.state.trait === this.state.traits.length - 1) {
      this.setState({ trait: 0 })
    } else {
      this.setState({ trait: this.state.trait + 1 })
    }
    setTimeout(this.nextTrait, 1000)
  }

  componentDidMount = () => {
    this.nextTrait()
  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    return (
      <Layout>
        <div id="content" style={{ maxWidth: '1200px', margin: 'auto' }}>
          <section>
            {/* <h1>About</h1>
            <p style={paragraphStyle}>
              I am a{' '}
              <span style={{ display: 'inline-block' }}>
                <span style={traitStyle}>
                  <strong>{this.state.traits[this.state.trait]}</strong>
                </span>
              </span>{' '}
              of 2 energetic Children. They are the ones that get me out of bed
              in the morning. Literally, no one beats <em>Wyatt</em> out of bed.
              He is our crazy, never slowing down son, who his filled with{' '}
              <strong>Love</strong> and <strong>Compassion</strong>. When
              someone is having a bad day, he is the first to notice and try to
              help in every way he can. He is always trying to help{' '}
              <em>Ayla</em> throughout the day. She is our little mommmy, she is{' '}
              <strong>caring</strong> and <strong>Sweet</strong>. She does
              everything with her own style, if that what you call her sas, and
              never goes to bed before all of her babies are asleep first.
              Rhiannon is my motivation. She is <strong>organized</strong>, and{' '}
              <strong>creative</strong>. Whether its organizing our house, or{' '}
              <a href="cuttinscrap.com">cuttinscrap</a>she makes the perfect
              place for everything, and makes sure it looks beautiful.
            </p> */}

            <Image />

            <p style={paragraphStyle} />
          </section>
          <section style={{ maxWidth: '1000px', margin: 'auto', textAlign: 'center', color: 'white' }}>
            <h1>Blog</h1>
            <BlogPosts posts={posts} />
          </section>
        </div>
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
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            status
            description
            cover {
              absolutePath
              childImageSharp {
                fixed(width: 500, height: 210) {
                  ...GatsbyImageSharpFixed
                },
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
