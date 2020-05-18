import React from 'react'
import { graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
import styled from 'styled-components'
import axios from 'axios'
import { useSpring, animated } from 'react-spring'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const REPOS = ['waylonwalker/find-kedro', 'waylonwalker/kedro-static-viz', 'waylonwalker/kedro-action']


const About = () => {
  const animationConfig = { config: { friction: 18, }, delay: 800 }
  const animationFromLeft = useSpring({
    to:
    {
      opacity: 1,
      right: '0px'
    },
    from: {
      opacity: 0,
      right: '-75px',
      position: 'relative'
    },
    ...animationConfig
  })
  const animationFromLeft2 = useSpring({
    to:
    {
      opacity: 1,
      right: '0px'
    },
    from: {
      opacity: 0,
      right: '-75px',
      position: 'relative'
    },
    ...animationConfig,
    delay: 2400,
  })
  const animationFromRight = useSpring({
    to:
    {
      opacity: 1,
      right: '0px'
    },
    from: {
      opacity: 0,
      right: '75px',
      position: 'relative'
    },
    ...animationConfig,
    delay: 1600,
  })
  return (

    <section id='about'>
      <Image />
      <div className="about-text">
        <animated.h1 style={{ ...animationFromLeft }} >Hello, I am Waylon Walker.</animated.h1>

        <animated.p style={{ ...animationFromRight }} > I am a Data Scientist from Illinois.  I have a passion for learning and teaching others.  </animated.p>
        <animated.p style={{ ...animationFromLeft2 }}>I love what I do, and am constantly honing my craft.  You can follow along with me, I try to document my journey the best I can by writing articles.</animated.p>

      </div>

    </section >

  )
}
const IndexStyle = styled.div`
h1{
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

const RepoStyle = styled.div`
  a {
    text-decoration: none;
  }
  transition: width 250ms ease-in-out,
              color 1000ms linear;
  &:hover {
    width: calc(min(550px, 100vw));
  }
  width: calc(min(500px, 95vw));
  background: linear-gradient(81deg, rgba(40,44,52,1) 0%, #3E3846 100%);
  margin: 1rem;
  border-radius: 2px;
  box-shadow:  -8rem -6rem 8rem -6rem rgba(253, 221, 88, .2), 4rem 0 8rem rgba(88, 82, 185, .3), .2rem .2rem 1rem rgba(0, 0, 0, .2);
  .description {
    margin: 1rem;
    color: #e8e9ea;
  }
  .language {
    color: #DAA520;
    margin: 0;
  }
  .header {
    padding-top: 1rem;
    background: linear-gradient(145deg, #2b273d, #18222F,  #18222F, #222536);
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {padding-left: .2rem;}
  }
  .stats {
    padding: 1rem 0 .2rem;
    /* box-shadow: inset 0px 15px 10px -10px #30313E, 0px -10px 10px -2px #30313E; */
    background: linear-gradient(145deg, #2b273d,  #18222F,   #18222F);
    display: flex;
    justify-content: center;
    .label {
    color: #DAA520;
    }
    div {
      margin: 0 1rem;
    }
  }
`
class Repo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      root_api: 'https://api.github.com/repos/',
      repo: props.repo,
      repo_data: ''
    }
  }
  componentDidMount() {
    // const script = document.createElement("script");
    // script.src = "https://cdn.jsdelivr.net/github-cards/latest/widget.js";
    // script.async = true;
    // document.body.appendChild(script);
    axios
      .get(this.state.root_api + this.state.repo)
      .then(r => this.setState({ ...r.data }))
    // .then(r => console.log(this.state))
  }

  render() {
    return (
      <RepoStyle>
        <a href={`https://github.com/${this.state.repo}`} aria-label={`go to github ${this.state.repo}`} title={this.state.repo}>
          <div className="header">
            <h2>{this.state.name}</h2>
            <p className="language">{this.state.language}</p>
          </div>
          <p className="description">{this.state.description}</p>
          <div className="stats">
            <div className="forks">{this.state.forks} <span className="label">forks</span></div>
            <div className="stars">{this.state.stargazers_count} <span className="label">stars</span></div>
          </div>
        </a>
      </RepoStyle>
    )
  }
}

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
            <section style={{ margin: 'auto', textAlign: 'center', color: 'white' }}>

              <h2 id="open-source">Open Source</h2>
              <p>In my spare time I like to take what I have learned to make things easier for others.  I maintain {REPOS.length} open source packages that you can find below.</p>
              <ReposStyle>
                {REPOS.map(r => <Repo repo={r} key={r} />)}
              </ReposStyle>

            </section>
            <section style={{ maxWidth: '1000px', margin: 'auto', textAlign: 'center', color: 'white' }}>
              <h2 id='blog'>Blog</h2>
              {/* <ToastContainer /> */}
              <BlogPosts posts={posts} />
            </section>
          </div >
        </IndexStyle>
      </Layout >
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
