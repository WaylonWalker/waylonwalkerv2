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
        <div id="content" style={{ maxWidth: '1200px', margin: 'auto' }}>
          <section>
            <h1>About</h1>
            <p style={{maxWidth: '800px', margin: '2rem auto'}}>
              I am a <strong>Husband</strong> and <strong>Father</strong> of 2 energetic Children.  They are the ones that get me out of bed in the morning.
              Literally, no one beats <em>Wyatt</em> out of bed.  He is our crazy, never slowing down son, who his filled with <strong>Love</strong> and <strong>Compassion</strong>.  When someone is having a bad day, he is the first to notice and try to help in every way he can.  He is always trying to help <em>Ayla</em> throughout the day.  
           </p>

            <Image />
            <p style={{padding: '2rem', margin: '2rem'}}>

            </p>
          </section>
          <section>
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
