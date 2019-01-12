import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import { kebabCase } from 'lodash'
// import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
// import Content, { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'
// import Blazy from 'blazy'

const BlogPostWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const BlogPostStyles = styled.div`
background: rgba(51, 0, 38, .08);
overflow: hidden;
/* background: #330026; */
display: block;
margin: .2rem;
max-width: 800px;
width: 95%;
position: relative;
margin: 2rem 0;
padding: 1rem;
border-radius: 2px;
box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .2);
display: flex;
flex-direction: column;
a {
  color: #333;
  text-decoration-color: #330026;
  text-decoration-color: goldenrod; /* Wyatt chose goldenrod */
}
p>img {
  opacity: .8;
  box-shadow: .2rem .2rem 1rem rgba(51, 0, 38, .4);
  max-width: 400px;
  width: 95%;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
  /* margin: 2rem 200px; */
}

blockquote {
  color: #666;
  border-left: 5px solid goldenrod;
  padding: 0 1rem;
}

hr {
  border-top: 1px solid goldenrod;
  background: none;
  margin: 1rem 2rem

}
`

class BlogPostTemplate extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {
      content,
      // contentComponent,
      description,
      // tags,
      title,
      cover,
      date,
      // helmet,
    } = this.props
    // const PostContent = contentComponent || Content
    // console.log('cover: ', cover)

    return (
      <BlogPostWrapper>
        <BlogPostStyles>
          <h1
            style={{ textAlign: 'right', zIndex: 2 }}
            className="blog title">
            {title}
          </h1>
          <p
            style={{ textAlign: 'right', zIndex: 2 }}>
            {date}
          </p>
          <Img
            style={{
              position: 'absolute',
              top: '0px',
              left: '-0rem',
              // zIndex: '-1',
              opacity: '.6'
            }}
            fixed={cover} />
          <p style={{ minHeight: '100px' }}>{description}</p>
          <div ref={(el) => { this.markdownContainer = el }}
            dangerouslySetInnerHTML={{ __html: content }} />

        </BlogPostStyles>
        <p>
          Check out my other
          <Link to='/blog' > blogs</Link>
        </p>
      </BlogPostWrapper>
    )
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  // helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout description={post.frontmatter.description} title={post.frontmatter.title} keywords={post.frontmatter.tags} time={post.frontmatter.date} url={`https://cuttinscrap.com${post.frontmatter.path}`}>
      <BlogPostTemplate
        content={post.html}
        // contentComponent={HTMLContent}
        // description={post.frontmatter.description}
        // helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover.childImageSharp.fixed}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export {
  BlogPost,
  BlogPostTemplate
}
export default BlogPost


export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        path
        cover {
          absolutePath
          childImageSharp {
            fixed(width: 800, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
         }
 
      }
    }
  }
`
