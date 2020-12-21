import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import WebMention from '../components/WebMention'
import PostCards from '../components/PostCards'
import { oneLineLinks, oneLineLinkCardStyle } from '../components/onelinelink'
import PostStatus from '../components/PostStatus'
import Img from 'gatsby-image'
import { FiTwitter, FiGithub, FiFacebook } from "react-icons/fi";
import { DiHackernews } from "react-icons/di";
import { IoLogoReddit } from "react-icons/io";

const linkify = (el) => (el.innerText.toLowerCase().trim().replace(/\s/g, '-'))

const AddFiLink = (el) => (
  el.innerHTML = `
  ${el.innerHTML}
  <a href='#${linkify(el)}'>
  <svg stroke="currentColor" fill="none" stroke-width="1" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
  </a>
  `
)

// `
//
const BlogPostWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

  @media (max-width: 1500px) {
  overflow: hidden;
  }


.right {
position: relative;
}
.toc {
align-self: flex-start;
justify-self: flex-start;
top: 100px;
position: sticky;


ol {
  padding-top: 0px;
  margin-top: 0px;
}

}
.toc h2 {
font-size: 1rem;
color: rgba(255, 255, 255, .2) !important;
font-weight: 100;
margin: 0;
padding: 0;
text-align: center;
}
.toc ol {
list-style-type: none;
}
.toc a{
text-decoration: none;
}

`


const BlogFlex = styled.div`
display: flex;
flex-wrap: wrap;
// flex-direction: row-reverse;
.right .toc {
  @media (max-width: 1500px) {
    display: none
    }

`



const BlogPostStyles = styled.article`
overflow: hidden;
background: rgba(51, 0, 38, .13);
background: hsla(234, 33%, 15%, 0.66);
display: block;
margin: .2rem;
width: min(95vw, 1000px);
@media (max-width: 650px) {
  width: 100vw;
  width: min(100vw, 1000px);
}
position: relative;
margin: 2rem 0;
padding: 1rem;
padding-bottom: 5rem !important;
border-radius: 2px;
box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .2);
display: flex;
flex-direction: column;
color: whitesmoke;
.u-url {
  color: rgba(255, 255, 255, .8);
  text-decoration: none;
  text-align: right;
  margin-bottom: 2rem;
}


@media (max-width: 1200px) {
  h1 {
    font-size: 2.5rem;
  }
  margin: 0rem;
  padding: 0rem;
  margin: 0rem;

  /* p, pre, ul, li {
    font-size: .7rem;
    font-size: .83rem;
    line-height: 1rem;
  } */


  p {
    padding: 0 .8rem;
  }
  h1 {
    padding: 1rem;

  }
  h2 {
    padding-left: 1rem;
  }
  h3 {
    padding-left: 1.4rem;
  }

  h4, h5, h6{
    padding-left: 1.6rem;
  }

  ul, ol {
    padding: 1.2rem;
  }
}

pre {
  margin-bottom: 1rem;
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

strong {
  color: #D68FBB;
  display: inline-block;
  transform: rotate(-2deg);
}

em {
  color: #6F6BAE;
  display: inline-block;
  transform: rotate(.2deg);
  background: rgba(255, 255, 255,.04);
  padding: .1rem .8rem;

}

p:has(>img) {
  margin: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

p {
  // display: flex;
  /* font-family: 'Amiko'; */
}

h2 {
  margin-top: 5rem;
}

ul {
  border-left: 1px solid #FF66C4;
  padding: .5rem 0 .025rem 3rem;
  margin: 2rem;
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

.tweet {
  display: flex;
  justify-content: flex-end;
  margin: 1rem 0;

}

.tweet a {
  display: inline-block;
  border-radius: 5px;
  padding: .5rem 1rem;
  background: #645FC4;
  color: #FEDD58;
  text-decoration: none;
  vertical-align: center;

}

.share {
  max-width: 800px;
  margin: .8rem auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border: 1px solid #D68FBB;
  background-color: rgba(214, 143, 187, .1);
  border-radius: 5px;
  a {
    padding: .2rem .5rem;
  }
  p {
    margin: 0;
    padding: 0;
    padding-right: .2rem;
  }
  ul {
    li {
      margin: 0;
      padding: 0;
    }
  display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    border: none;
    font-size: 1.3rem;

  }
}

.post-body hr {
  border-top: 2px solid rgba(218, 165, 32, .2);
  margin: 3rem 40% !important;
}

.h-card {
  /* background-color: rgba(255, 255, 255, .2); */
  /* padding: 1rem; */
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 50px;
    border-radius: 50%;
    margin: .2rem;
    display: none;
  }
  ul.social {
    list-style-type: none;
    border: none;
    margin: 0;
    padding: 0;
    li: {
      margin: 0;
      padding: 0;
    }
  }
}

.toc {
  width: min(90vw, 600px);
  margin: auto;
  position:initial;

  li {
    padding: 0;
    margin: 0;
  }

  li.H1, li.H2 {
    padding-top: .8rem;
  }

  li.H3 {
    padding-left: .5rem;
  }

  li.H4 {
    padding-left: 1rem;
  }

  li.H5 {
    padding-left: 1.25rem;
  }

  li.H6 {
    padding-left: 1.5rem;
  }

  font-size: .8rem;
  line-height: 1.1rem;
  @media (min-width: 1500px) {
    display: none
  }
}

.twitter-tweet {
margin: 10px auto;
}

${oneLineLinkCardStyle}

`
// ` fix weird syntax highlighting


class Toc extends React.Component {
  constructor(props) {
    super(props)
    this.state = {headings: undefined}
  }
  componentDidMount() {
  // console.log({headings: [...document.querySelectorAll('h1, h2, h3, h4')]})
  this.setState({headings: [...document.querySelectorAll('h1:not(.no-link),h2:not(.no-link),h3:not(.no-link),h4:not(.no-link),h5:not(.no-link),h6:not(.no-link)')]})
  }
  render() {
  return(
  <div className='toc'>
    <a href='#title'><h2 className='no-link'>toc</h2></a>
    <ol>
      {this.state.headings === undefined
        ? ''
        // : this.state.headings.map( h => <li> <a href={`#${linkify(h)}`} style={{color: `rgba(255, 255, 255, ${(8 - h.nodeName.slice(1)*2)/10 }` }}>{'..'.repeat(h.nodeName.slice(1) - 2)} {h.innerText}</a> </li> )
        : this.state.headings.map( (h, index) => 
          <li key={index} className={h.nodeName}>
            <a href={`#${linkify(h)}`} style={{color: `rgba(255, 255, 255, ${(8 - h.nodeName.slice(1)*2)/10 })` }}>
              {h.innerText}
            </a>
          </li>
        )
      }
    </ol>
    <hr style={{ margin: '1rem 25% ' }} />
  </div>
)}
}

class BlogPostTemplate extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  componentDidMount() {
    [...document.querySelectorAll('h1:not(.no-link),h2:not(.no-link),h3:not(.no-link),h4:not(.no-link),h5:not(.no-link),h6:not(.no-link)')].map(h => h.id = linkify(h));
    [...document.querySelectorAll('h1:not(.no-link),h2:not(.no-link),h3:not(.no-link),h4:not(.no-link),h5:not(.no-link),h6:not(.no-link)')].map(h => h.innerHTML = AddFiLink(h));
    [...document.querySelectorAll('em')].filter(e => e.querySelector('mark') !== null).map(e => e.classList.add('no-highlight'));
    [...document.querySelectorAll('p')].filter(e => e.querySelector('.no-highlight') !== null).map(e => e.classList.add('no-padding'));
    if (window.location.href.slice(-1) === '/') {
      window.history.pushState({}, null, window.location.href.slice(0, -1))
    }
    oneLineLinks()
  }

  render() {
    const {
      content,
      url,
      slug,
      description,
      status,
      title,
      cover,
      sm_img,
      fluidCover,
      date,
      similarPosts,
    } = this.props
    // const PostContent = contentComponent || Content

    const shortTitle = title === null ? '' : encodeURIComponent(title.slice(0, 150))
    const tweetLink = `https://twitter.com/intent/tweet?text=${shortTitle + '%0A%0A@waylonwalker%0A%0A' + url}`
    const hnLink = `https://news.ycombinator.com/submitlink?u=${url}&t=${shortTitle}`
    // const linkedinLink = `https://www.linkedin.com/sharing/share-offsite/?url=${url.split(':').join('%3A').split('/').join('%2F')}`
    // https://www.linkedin.com/shareArticle?mini=true&url=https://dev.to/waylonwalker/what-is-kedro-lob&title=%F0%9F%A4%B7%E2%80%8D%E2%99%80%EF%B8%8F%20What%20is%20Kedro%20(The%20Parts)&summary=kedro%20is%20an%20open-source%20data%20pipeline%20framework.%20%20It%20provides%20guardrails%20to%20set%20your%20project%20up%20right...&source=DEV

    const redditLink = `https://www.reddit.com/submit?url=${url}&title=${shortTitle}`
    const facebookLink = `https://www.facebook.com/sharer.php?u=${url}`
    // const day = new Date(date.replace(/-/g, "/"))

    return (
      <>
        <Helmet
          meta={[
            { property: 'title', name: 'title', content: title + ' | Waylon Walker' },
            { property: 'description', name: 'description', content: description },
            { property: 'status', name: 'status', content: status },
            { property: 'og:title', name: 'og:title', content: title + ' | Waylon Walker' },
            { property: 'og:url', name: 'og:url', content: url },
            { property: 'og:article:published_time', name: 'og:article:published_time', content: date },
            { property: 'og:article:modified_time', name: 'og:article:modified_time', content: date },
            { property: 'og:description', name: 'og:description', content: description },
            { property: 'og:image', name: 'og:image', content: 'https://waylonwalker.com' + cover},
            { property: 'og:sm_image', name: 'og:sm_image', content: 'https://waylonwalker.com' + sm_img},

            { property: 'twitter:title', name: 'twitter:title', content: title + ' | Waylon Walker' },
            { property: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
            { property: 'twitter:image', name: 'twitter:image', content: 'https://waylonwalker.com' + cover},
            { property: 'twitter:description', name: 'twitter:description', content: description },
          ]}

        >
          <title>{title}</title>
          <link rel='canonical' href={url} />
        </Helmet>
        <BlogPostWrapper className='blog-post'>
          <BlogFlex>
          <div className='left'>
          </div>
          <BlogPostStyles className='h-entry'>
            { fluidCover !== null
              ? <Img fluid={fluidCover} className='post-cover-image' />
              : ''
            }
            <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            <h1
              id='title'
              style={{ textAlign: 'right', zIndex: 2, paddingRight: '.2rem'}}
              className="blog title no-link">
              {title}
            </h1>
              <p style={{textAlign: 'right', marginBottom: '2.2rem', paddingLeft: 0}}>
              <a 
                style={{color: 'goldenrod', textDecoration: 'none', }}
                href={`https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages${slug.slice(0, -1)}.md`} alt='edit post url' title='edit this post'
              >
                edit 
                <span role='img' aria-label=''>✏️</span> 
              </a>
            </p>
            </div>
            <PostStatus status={status}/>
            <a className='u-url' href={url}>
              <p>
                <time
                  className='dt-published post-date'
                  dateTime={date}
                  style={{ textAlign: 'right', zIndex: 2 }}>
                  {date}
                </time>
              </p>
            </a>
            <div className='h-card p-author' rel='author'>
              <div className='content'>
                <a className='p-name u-url' href='https://waylonwalker.com/'><span className='p-given-name'>Waylon</span><span className='p-family-name'>Walker</span></a>
                <p calss='p-note'>Learning in Public</p>
                {/* <Social /> */}
              </div>
              <img className='u-photo' alt='author profile' src='https://waylonwalker.com/8bitc.png' />
            </div>

            <div className="share">
              <p>
                <span role='img' aria-label='sharing hands'>🙌</span> Share this post
            </p>
              <ul>
                <li>
                  <a aria-label='tweet' href={tweetLink} className='post-tweet-link'><FiTwitter /></a>
                </li>
                <li>
                  <a aria-label='post on hacker news' href={hnLink} className='post-hn-link'><DiHackernews /></a>
                </li>
                <li>
                  <a aria-label='post on reddit' href={redditLink} className='post-reddit-link'><IoLogoReddit /></a>
                </li>
                <li>
                  <a aria-label='post on facebook' href={facebookLink} className='post-facebook-link'><FiFacebook /></a>
                </li>

              </ul>
            </div>
            <hr style={{ margin: '1rem 25% ' }} />
            <Toc />
            <div className='post-body' ref={(el) => { this.markdownContainer = el }}
              dangerouslySetInnerHTML={{ __html: content }} />
            <hr style={{ margin: '3rem 25% 0' }} />
            <br />
            <p className='post-edit' style={{ display: 'flex', justify: 'center', textAlign: 'center', margin: '3rem auto' }}>
              <span role='img' aria-label=''>👀</span> see an issue, edit this post on <a href={`https://github.com/WaylonWalker/waylonwalkerv2/edit/main/src/pages${slug.slice(0, -1)}.md`} alt='edit post url' title='edit this post'> <FiGithub /> GitHub</a>
            </p>
            <p className='post-tip-message' style={{ display: 'flex', justify: 'center', margin: 'auto', textAlign: 'center', marginBottom: '.5rem' }}>
              If you found value in this post <br />and want to send a tip.
            </p>
            <p class-name='post-tip-link' style={{ display: 'flex', justify: 'center', marginBottom: '4rem' }}>
              <a href="https://www.buymeacoffee.com/bBdtMQO" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', margin: 'auto' }}><img src="https://cdn.buymeacoffee.com/buttons/lato-violet.png" alt="Buy Me A Coffee" style={{ height: '51px', width: '217px', margin: 'auto' }} /></a>
            </p>

            <div className="share">
              <p>
                <span role='img' aria-label='sharing hands'>🙌</span> Share this post
            </p>
              <ul>
                <li>
                  <a aria-label='tweet' href={tweetLink} className='post-tweet-link'><FiTwitter /></a>
                </li>
                <li>
                  <a aria-label='post on hacker news' href={hnLink} className='post-hn-link'><DiHackernews /></a>
                </li>
                <li>
                  <a aria-label='post on reddit' href={redditLink} className='post-reddit-link'><IoLogoReddit /></a>
                </li>
                <li>
                  <a aria-label='post on facebook' href={facebookLink} className='post-facebook-link'><FiFacebook /></a>
                </li>

              </ul>
            </div>

          </BlogPostStyles>
          <div className='right'>
            <Toc />
          </div>
          </BlogFlex>
          {/* <p className='post-cta-all-posts'> */}
          {/*   Check out my other */}
          {/* <Link to='/blog' style={{ margin: '.2rem' }} >blogs</Link> */}
          {/* </p> */}
          <hr/>
          <PostCards data={similarPosts} />
          <hr/>

          <WebMention url={url} />
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
  // status: PropTypes.string,
  title: PropTypes.string,
  // helmet: PropTypes.instanceOf(Helmet),
}

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data

  let covers = post.frontmatter.cover
  const cover = covers?.full?.fixed?.src
  const fluidCover = covers?.full.fluid
  const sm_img = covers?.sm_img?.fixed?.src
  // console.log({fluidCover})


  return (
    <Layout
    description={post.frontmatter.description}
    status={post.frontmatter.status}
    title={post.frontmatter.title}
    keywords={post.frontmatter.tags}
    time={post.frontmatter.date}
    url={`https://waylonwalker.com/${post.fields.slug.replace(/^\/+/, '')}`}
    >
      <BlogPostTemplate
        content={post.html}
        url={`https://waylonwalker.com/${post.fields.slug.replace(/^\/+/, '')}`}
        slug={post.fields.slug}
        description={post.frontmatter.description}
        status={post.frontmatter.status}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        cover={cover }
        sm_img={sm_img}
        fluidCover={ fluidCover }
        date={post.frontmatter.date}
        similarPosts={pageContext.similarPosts}
        allPosts={pageContext.allPosts}
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
        title
        description
        status
        cover {
          absolutePath
          xsm_img: childImageSharp {
              fixed(width: 50) {
                src
                srcWebp
              }
          }
          sm_img: childImageSharp {
              fixed(width: 300) {
                src
                srcWebp
              }
          }
          med_img: childImageSharp {
              fixed(width: 500) {
                src
                srcWebp
              }
          }
          full: childImageSharp {
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
