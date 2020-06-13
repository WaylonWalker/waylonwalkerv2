import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import Img from 'gatsby-image'


const BlogPostWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const BlogPostStyles = styled.div`
background: rgba(51, 0, 38, .13);
background: hsla(234, 33%, 15%, 0.66);
overflow: hidden;
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
}

`

class BlogPostTemplate extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {
      content,
      slug,
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
            { name: 'title', content: title + ' | Waylon Walker' },
            { name: 'description', content: description },
            { name: 'og:title', content: title + ' | Waylon Walker' },
            { name: 'og:url', content: `https://waylonwalker.com${slug}` },
            { name: 'og:article:published_time', content: date },
            { name: 'og:article:modified_time', content: date },
            { name: 'og:description', content: description },
            { name: 'og:image', content: 'https://www.waylonwalker.com' + twitterImage },
            { name: 'twitter:title', content: title + ' | Waylon Walker' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:image', content: 'https://www.waylonwalker.com' + twitterImage },
            { name: 'twitter:description', content: description },
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
                  : <a href={devto_url} > dev.to </a>
              }
              feel free to drop in to give it a ♥ and leave comment.

            </p>
            {/* <p style={{ minHeight: '30px', margin: '0', padding: '0' }}>{description}</p> */}
            <div ref={(el) => { this.markdownContainer = el }}
              dangerouslySetInnerHTML={{ __html: content }} />
            <hr />
            <br />
            <p style={{ paddingLeft: '2rem' }}>
              <span role='img' aria-label=''>👀</span> see an issue, edit this post on <a href={`https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages${slug.slice(0, -1)}.md`} alt='edit post url' title='edit this post'>GitHub</a>
            </p>

          </BlogPostStyles>
          {/* {devto_id === undefined ? '' : <DevToComments devto_id={devto_id} />}
          {devto_id === undefined ? '' : <p>devtoid = {devto_id}</p>} */}
          <p>
            Check out my other
          <Link to='/blog' style={{ margin: '.2rem' }} >blogs</Link>
          </p>
        </BlogPostWrapper >
      </>
    )
  }
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  slug: PropTypes.node.isRequired,
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
    <Layout description={post.frontmatter.description} title={post.frontmatter.title} keywords={post.frontmatter.tags} time={post.frontmatter.date} url={`https://waylonwalker.com${post.frontmatter.path}`}>
      <BlogPostTemplate
        content={post.html}
        slug={post.fields.slug}
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
      markdownRemark(id: {eq: $id }) {
      id
      html
      fields {slug}
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
