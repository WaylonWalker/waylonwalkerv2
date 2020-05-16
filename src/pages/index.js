import React from 'react'
import { graphql } from 'gatsby'
import Image from '../components/image'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'
import styled from 'styled-components'
import axios from 'axios'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


const REPOS = ['waylonwalker/find-kedro', 'waylonwalker/kedro-static-viz', 'waylonwalker/kedro-action']

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
      .then(r => console.log(this.state))
  }

  render() {
    return (
      <RepoStyle>
        <a href={`https://github.com/${this.state.repo}`} aria-label={`go to github ${this.state.repo}`}>
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
const paragraphStyle = {
  maxWidth: '800px',
  margin: '2rem auto',
  padding: '0 1rem',
  lineHeight: '1.8rem',
}

// const traitStyle = {
//   // display: 'inline-block',
//   display: 'flex',
//   justifyContent: 'center',
//   width: '200px',
//   background: '#fafafa',
// }

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // traits: ['Husband', 'Father', 'Data Scientist', 'Developer'],
      // trait: 0,
    }
  }

  // nextTrait = () => {
  //   if (this.state.trait === this.state.traits.length - 1) {
  //     this.setState({ trait: 0 })
  //   } else {
  //     this.setState({ trait: this.state.trait + 1 })
  //   }
  //   setTimeout(this.nextTrait, 1000)
  // }

  // componentDidMount = () => {
  //   this.nextTrait()
  //   // toast('welcome friend')
  // }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    // console.log(data.allMarkdownRemark)
    return (
      <Layout>
        <div id="content" style={{ margin: 'auto' }}>
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
            <h1>Waylon Walker</h1>

            <p style={paragraphStyle} />
          </section>
          <section style={{ margin: 'auto', textAlign: 'center', color: 'white' }}>

            <h2>Open Source</h2>
            <ReposStyle>
              {REPOS.map(r => <Repo repo={r} />)}
            </ReposStyle>

          </section>
          <section style={{ maxWidth: '1000px', margin: 'auto', textAlign: 'center', color: 'white' }}>
            <h2>Blog</h2>
            {/* <Repo repo='waylonwalker/kedro-static-viz' /> */}
            {/* <button onClick={() => toast('hello')}>press me</button> */}
            {/* <ToastContainer /> */}
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
