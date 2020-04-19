import React, { useState, Component } from 'react'
import styled from 'styled-components'
import BlogPostCard from '../components/blogPostCard'
import FlipMove from 'react-flip-move'
// import TrackVisibility from 'react-on-screen';
// import { Link, graphql } from 'gatsby'

// import BlogGallery from '../components/BlogGallery'
const BlogPostsStyle = styled.div`
display: flex;
margin: auto;
flex-direction: column;
justify-content: flex-start;
align-items: center;
align-content: center;
justify-self: center;
min-height: 100vh;
width: calc(min(1000px, 90vw));
input {
  margin-left: 1rem;
}
img {
  margin: auto;
}

`

// const BlogPosts = ({ posts, ...props }) => {
class BlogPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts,
      search: '',
      numPosts: 5,
      incrementBy: 10,
      incrementOffset: 2000,
    }
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.handleScroll)

  }

  incrementMaxEntries = () => {
    this.setState({ numPosts: this.state.numPosts + this.state.incrementBy })
  }
  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - this.state.incrementOffset;
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.incrementMaxEntries()
    }
  }
  // const [search, setSearch] = useState('')
  // const [numPosts, incrementNumPosts] = useState(1)
  // return (
  render() {
    return (

      < BlogPostsStyle >
        <form action="">
          <label htmlFor="search">Search:
            {/* <input type="text" name="search" value={search} id="search" onChange={e => setSearch(e.target.value)} /> */}
          </label>
        </form>
        {/* <TrackVisibility> */}
        <FlipMove>
          {
            this.state.posts
              .filter(post => JSON.stringify(post).replace(/<[^>]*>?/gm, '').includes(this.state.search))
              .slice(0, this.state.numPosts)
              .map((post, i) => {

                let status = true
                try {
                  status = post['node']['frontmatter']['status'].toLowerCase() !== 'draft'

                } catch (error) {

                }
                if (post && status) {
                  return <div key={post.node.id}>< BlogPostCard key={post.node.id} post={post['node']} /></div>
                }
                return false
              }
              )}

        </FlipMove>
      </ BlogPostsStyle >

    )
  }
}
export default BlogPosts