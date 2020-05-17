import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
// import BlogPostCard from '../components/blogPostCard'
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
/* background: #201a34; */
/* background: #1a1c33; */
background: hsla(234, 33%, 15%, 0.66);
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

@media (max-width: 700px) {
  h1 {
    font-size: 2.5rem;
  }
  width: 100%;
  margin: 0rem;
  padding: .3rem;
}

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
  /* font-family: sans-serif; */
  /* color: #6A65CA; */
}

`

// class DevToComments extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { ...props, comments: undefined }
//   }
//   componentDidMount() {
//     fetch(`https://dev.to/api/comments?a_id=${this.state.devto_id}`)
//       .then((response) => {
//         return response.json()
//       })
//       .then((comments) => {
//         if (comments !== undefined) {
//           console.log('comments', comments)
//           this.setState({ comments: comments })
//         }
//       })

//   }
//   render() {
//     return (
//       <>
//         <p>
//           devto article id is {this.state.devto_id}
//         </p>
//         {this.state.comments === undefined
//           ? ''
//           : <div className="comment" dangerouslySetInnerHTML={{ __html: this.state.comments[0].body_html }} />
//         }
//       </>
//     )
//   }
// }

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
      devto_url,
      devto_id,
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
            { name: 'og:description', content: description },
            { name: 'description', content: description },
            { name: 'twitter:title', content: title },
            { name: 'twitter:image', content: 'https://www.waylonwalker.com' + twitterImage },
            { name: 'twitter:description', content: description },
            { name: 'og:image', content: 'https://www.waylonwalker.com' + cover.src },
          ]}

        >
          <title>{title}</title>
        </Helmet>
        <BlogPostWrapper>
          <BlogPostStyles>
            <Img fluid={fluidCover} />
            <h1
              style={{ textAlign: 'right', zIndex: 2 }}
              className="blog title">
              {title}
            </h1>
            <p
              style={{ textAlign: 'right', zIndex: 2 }}>
              {date}
            </p>
            <p
              style={{ textAlign: 'right', zIndex: 2 }}
            >
              This article was also cross posted to
            {
                devto_url === undefined
                  ? 'hi'
                  // console.log('devto_url', devto_url, 'devto_id', devto_id)
                  : <a href={devto_url} > dev.to </a>
              }
              feel free to drop in to give it a ♥ and leave comment.

            </p>
            <p style={{ minHeight: '30px', margin: '0', padding: '0' }}>{description}</p>
            <div ref={(el) => { this.markdownContainer = el }}
              dangerouslySetInnerHTML={{ __html: content }} />

          </BlogPostStyles>
          {/* {devto_id === undefined ? '' : <DevToComments devto_id={devto_id} />}
          {devto_id === undefined ? '' : <p>devtoid = {devto_id}</p>} */}
          <p>
            Check out my other
          <Link to='/blog' style={{ margin: '.2rem' }} >blogs</Link>
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
  devto_url: PropTypes.string,
  devto_id: PropTypes.string
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
        description={post.frontmatter.description}
        // helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        cover={
          post.frontmatter.cover !== null
            ? post.frontmatter.cover.childImageSharp.fixed
            : ''
        }
        fluidCover={
          post.frontmatter.cover !== null
            ? post.frontmatter.cover.childImageSharp.fluid
            : ''
        }
        twitter_cover={twitter_cover}
        date={post.frontmatter.date}
        devto_url={post.frontmatter.devto_url}
        devto_id={post.frontmatter.devto_id}

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
  query NoteByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date
        devto_url
        devto_id
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
