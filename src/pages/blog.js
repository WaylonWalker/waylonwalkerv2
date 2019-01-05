import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'
// import BlogGallery from '../components/BlogGallery'
import colors from '../components/styles/colors'

const BlogPostCardStyles = styled.div`
background: rgba(51, 0, 38, .04)
background: ${colors.greys[1]};

/* background: #330026; */
display: block;
margin: .2rem;
width: 500px;
position: relative;
margin: 2rem 0;
padding: 1rem;
border-radius: 2px;
box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .2);

h3 {
  color: #333;
  position: absolute;
  top: 1rem;
  right: 1rem;
  text-shadow: 0rem 0rem .4rem rgba(255, 255, 255, .5)
}
`

const BlogPostCard = ({ post, ...props }) => {
  console.log('post: ', post);
  return (

    <BlogPostCardStyles>
      <Link to={post['fields']['slug']}>
        <Img style={{ opacity: '.6', position: 'relative', top: '-1rem', left: '-1rem' }} fixed={post['frontmatter']['cover']['childImageSharp']['fixed']} />
      </Link>

      <Link to={post['fields']['slug']}>
        <h3>{post['frontmatter']['title']}</h3>
      </Link>
      {/* <p>{post['frontmatter']['cover']}</p> */}
      <p style={{
        textAlign: 'right', position: 'absolute', top: '3rem', right: '1rem', textShadow: '0rem 0rem .2rem rgba(255, 255, 255, .5)'
      }}>{post['frontmatter']['date']}</p>
      <p>{post['excerpt']}</p>
    </BlogPostCardStyles >

  )
}

const BlogPostsStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BlogPosts = ({ posts, ...props }) => (
  <BlogPostsStyle>
    {
      posts.map((post, i) => {
        // console.log('posts: ', posts);

        // console.log('i: ', i, ', post: ', post)
        let status = true
        console.log('post try: ', post['node'])
        try {
          status = post['node']['frontmatter']['status'].toLowerCase() !== 'draft'
          console.log('status:', status)

        } catch (error) {

        }
        if (post && status) {
          return < BlogPostCard key={i} post={post['node']} />
        }
        return false
      }
      )}



  </ BlogPostsStyle>
)


const BlogPageStyles = styled.div`
max-width: 800px;
display: flex;
justify-content: center;
flex-direction: column;
margin: auto;
h1 {
  text - align: center;
}
`


export default class BlogPage extends React.Component {
  render() {
    const { data } = this.props
    // console.log(data.allMarkdownRemark)
    const { edges: posts } = data.allMarkdownRemark
    // console.log(posts)
    // console.log(data.allMarkdownRemark)
    // console.log('posts: ', posts)

    return (
      <Layout>
        <BlogPageStyles>
          <h1>Blog Posts</h1>
          <p>
            I am always learning something, including blogging/writing skills.  I try to share my experiences here. Much of it is random things form my career.

          </p>
          <BlogPosts posts={posts} />
        </BlogPageStyles>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
query BlogQuery {
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
