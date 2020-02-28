import React from 'react'
import Helmet from 'react-helmet'
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
background: rgba(51, 0, 38, .13);
overflow: hidden;
/* background: #330026; */
display: block;
margin: .2rem;
max-width: 1000px;
width: 95%;
position: relative;
margin: 2rem 0;
padding: 1rem;
border-radius: 2px;
box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .2);
display: flex;
flex-direction: column;
color: whitesmoke;

a {
  color: #6F6BAE;
  text-decoration-color: #330026;
  text-decoration-color: goldenrod; /* Wyatt chose goldenrod */
}
p>img {
  /* opacity: .8; */
  box-shadow: .2rem .2rem 1rem rgba(51, 0, 38, .4);
  max-width: 1000px;
  width: 95vw;
  align-self: center;
  justify-self: center;
  align-items: center;
  justify-items: center;
  margin: auto;
}

p:has(>img) {
  margin: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  // display: flex;
  /* margin: auto; */
  font-family: 'Amiko';
}


blockquote {
  color: #777;
  border-left: 2px solid goldenrod;
  font-size: 1rem;
  padding: 1rem 0 1rem .5rem;
  margin: 1.5rem 0;
  
}

hr {
  border-top: 1px solid goldenrod;
  background: none;
  margin: 1rem 2rem

}

h1 {
  margin-top: 5rem;
  font-family: sans-serif;
  color: #6A65CA;
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
      fluidCover,
      date,
      // helmet,
      twitter_cover,
    } = this.props
    // const PostContent = contentComponent || Content

    const twitterImage = twitter_cover !== undefined ? twitter_cover.src : cover.src

    return (
      <>
        <Helmet
          meta={[
            { name: 'og:title', content: title },
            { name: 'og:article:published_time', content: date },
            { name: 'og:article:modified_time', content: date },
            { name: 'twitter:title', content: title },
            { name: 'description', content: description },
            { name: 'twitter:image', content: 'https://www.waylonwalker.com' + twitterImage },
            { name: 'twitter:description', content: description },
            { name: 'og:image', content: cover.src },
          ]}

        />
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
            {fluidCover !== undefined ? <Img fluid={fluidCover} /> : ''}
            <p style={{ minHeight: '100px' }}>{description}</p>
            <p
              style={{ maxWidth: `500px`, margin: `1rem auto`, color: `rbg(100, 100, 120)` }}
            >
              You are reading my notes.  This is a large collection of smaller
              unfinished ideas.  If you find something here that needs to be
              turned into a real post tweet it at
              <a href='https://twitter.com/_WaylonWalker' style={{ padding: '.2rem' }}>@_waylonwalker</a></p>
            <div ref={(el) => { this.markdownContainer = el }}
              dangerouslySetInnerHTML={{ __html: content }} />

          </BlogPostStyles>
          <p>
            Check out my other
          <Link to='/blog' style={{ margin: '.3rem' }}>Notes</Link>
          </p>
        </BlogPostWrapper>
      </>
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
  const twitter_cover = post.frontmatter.twitter_cover !== null ? post.frontmatter.twitter_cover.childImageSharp.fixed : post.frontmatter.cover !== null ? post.frontmatter.cover.childImageSharp.fixed : ''

  return (
    <Layout description={post.frontmatter.description} title={post.frontmatter.title} keywords={post.frontmatter.tags} time={post.frontmatter.date} url={`https://cuttinscrap.com${post.frontmatter.path}`}>
      <BlogPostTemplate
        content={post.html}
        // contentComponent={HTMLContent}
        // description={post.frontmatter.description}
        // helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        cover={post.frontmatter.cover !== null ? post.frontmatter.cover.childImageSharp.fixed : ''}
        twitter_cover={twitter_cover}
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
        date
        title
        description
        # tags
        path
        twitter_cover {
          absolutePath
          childImageSharp {
            fixed(width: 800, height: 418) {
              ...GatsbyImageSharpFixed
            }
          }
         }
        cover {
          absolutePath
          childImageSharp {
            fixed(width: 1000, height: 420) {
              ...GatsbyImageSharpFixed
            },
            fluid(maxWidth: 1000, maxHeight: 420) {
              ...GatsbyImageSharpFluid
            }
          }
         }
 
      }
    }
  }
`
