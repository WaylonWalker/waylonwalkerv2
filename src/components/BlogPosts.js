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
  margin-top: 1rem;

  align-items: center;
  align-content: center;
  justify-self: center;
  min-height: 100vh;
  /* width: calc(min(1800px, 90vw)); */
  width: calc(min(800px, 90vw));

  input {
    margin-left: 1rem;
  }

  img {
    margin: auto;
}

.post-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.post-wrapper: {
  display: inline-flex;
}

.robots {
  display: None;
  opacity: 0;
  visibility: hidden;
}

form {
  margin: 0;
  padding: 0;
}

`

class BlogPosts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: props.posts,
      filteredPosts: props.posts,
      search: '',
      numPosts: 3,
      incrementBy: 9,
      incrementOffset: 2000,
    }
  }

  componentDidMount = async () => {
    window.addEventListener('scroll', this.handleScroll)
    const url = new URL(window.location.href)
    const search = url.searchParams.get('search')
    if (search !== null) {
      this.setState({search }, () => this.SearchWithFuse())
      const el = document.getElementById('blog')
      // console.log('scrolling')
      el.scrollIntoView()

    }
    // console.log(`base search ${search}`)

  }

  fuseSortFn = (a, b) => {
    return a.score = b.score

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
    // console.log("fusing with plainText\n\n")
    // console.log(`searching for ${this.state.search}`)

    // console.log(this.state.posts)
    const fuse = new Fuse(
      this.state.posts,
      {
        ignoreLocation: true,
        ignoreFieldNorm: true,
        ingludeScore: true,
        threshold: 0.4,
        sortFn: this.fuseSortFn,
        keys: [

          'node.plainText',
          {
            name: 'node.frontmatter.tags',
            weight: 1.2
          },
          {
            name: 'node.frontmatter.title',
            weight: 1.5
          }
        ],
        useExtendedSearch: true
      }
    )
    if (this.state.search === "") {
      this.setState({ filteredPosts: this.state.posts })
    } else {
      this.setState({ filteredPosts: fuse.search(this.state.search).map(i => i.item) })
      // console.log('fuse search')
      // const result = fuse.search(this.state.search)
      // console.log(result)
      // console.log('filtered')
      // console.log(this.state.filteredPosts)
      window.history.pushState({}, null, `?search=${this.state.search}`)
    }
  }

  render() {
    return (

      < BlogPostsStyle >
        <form action="">
          <label htmlFor="search">Search:
            <input type="text" aria-label='search' name="search" value={this.state.search} id="search" onChange={e => this.setSearch(e.target.value)} />
          </label>
        </form>
        <FlipMove className='post-cards'>
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
                  return <div key={post.node.id} className='post-wrapper' style={{ display: 'inline-flex' }}>< BlogPostCard key={post.node.id} post={post['node']} /></div>
                }
                return false
              }
              )
          }
          < div className="robots">
            {
              this.state.posts.map((post, i) =>
                <li key={post.node.id} >
                  <h3 id={`${post.node.frontmatter.title}-robot`}>{post.node.frontmatter.title}</h3>
                  <div className="description">{post.node.frontmatter.description}</div>
                  {
                    post.node.fields.slug === null
                      ? ''
                      : <a href={post.node['fields']['slug']} title={post.node.frontmatter.title}>
                        {post.node.frontmatter.title}
                      </a>
                  }
                </li>)
            }
          </div>
        </FlipMove>
      </ BlogPostsStyle >

    )
  }
}
export default BlogPosts
