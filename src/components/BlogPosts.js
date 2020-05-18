import React, { Component } from 'react'
import styled from 'styled-components'
import BlogPostCard from '../components/blogPostCard'
import FlipMove from 'react-flip-move'
import Fuse from 'fuse.js'

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

.robots {
  display: None;
  opacity: 0;
  visibility: hidden;
}

`

class BlogPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts,
      filteredPosts: props.posts,
      search: '',
      numPosts: 2,
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

  setSearch = search => this.setState({ search }, () => this.SearchWithFuse())

  SearchWithFuse = () => {
    const fuse = new Fuse(this.state.posts, { keys: ['node.html'] })
    if (this.state.search === "") {
      this.setState({ filteredPosts: this.state.posts })
    } else {
      this.setState({ filteredPosts: fuse.search(this.state.search).map(i => i.item) })
    }
  }

  render() {
    return (

      < BlogPostsStyle >
        <form action="">
          <label htmlFor="search">Search:
            <input type="text" name="search" value={this.state.search} id="search" onChange={e => this.setSearch(e.target.value)} />
          </label>
        </form>
        <FlipMove >
          {
            this.state.filteredPosts
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
              )
          }
          < div className="robots">
            {this.state.posts.map((post, i) => <li><a href={post.node['fields']['slug']} >{post.node.frontmatter.title}</a><h3 id={`${post.node.frontmatter.title}-robot`}>{post.node.frontmatter.title}</h3><div className="description">{post.node.frontmatter.description}</div></li>)}
          </div>
        </FlipMove>
      </ BlogPostsStyle >

    )
  }
}
export default BlogPosts