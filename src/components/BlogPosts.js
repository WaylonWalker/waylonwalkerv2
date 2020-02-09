import React, { useState } from 'react'
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

// incrementMaxEntries = () => {
//   this.setState({ maxEntries: this.state.maxEntries + 10 })
// }
// handleScroll = () => {
//   const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
//   const body = document.body;
//   const html = document.documentElement;
//   const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight) - 500;
//   const windowBottom = windowHeight + window.pageYOffset;
//   if (windowBottom >= docHeight) {
//     this.incrementMaxEntries()
//   }
// }
const BlogPosts = ({ posts, ...props }) => {

  const [search, setSearch] = useState('')
  // const [numPosts, incrementNumPosts] = useState(10)
  // console.log(posts)
  return (

    < BlogPostsStyle >
      <form action="">
        <label htmlFor="search">Search:
            <input type="text" name="search" value={search} id="search" onChange={e => setSearch(e.target.value)} />
        </label>
      </form>
      {/* <TrackVisibility> */}
      <FlipMove>
        {
          posts
            .filter(post => JSON.stringify(post).replace(/<[^>]*>?/gm, '').includes(search))
            // .slice(0, numPosts)
            .map((post, i) => {
              // console.log('posts: ', posts);

              // console.log('i: ', i, ', post: ', post)
              let status = true
              // console.log('post try: ', post['node'])
              try {
                status = post['node']['frontmatter']['status'].toLowerCase() !== 'draft'
                // console.log('status:', status)

              } catch (error) {

              }
              if (post && status) {
                return <div key={post.node.id}>< BlogPostCard key={post.node.id} post={post['node']} /></div>
              }
              return false
            }
            )}

      </FlipMove>
      {/* <button onClick={() => incrementNumPosts(numPosts + 10)}>Load More</button> */}
      {/* {({ isVisible }) => isVisible && <div style={{ background: 'red', height: '10rem', width: '100%' }}  >{isVisible}</div>} */}
      {/* <div style={{ background: 'red', height: '10rem', width: '100%' }}  >{isVisible}</div> */}
      {/* </TrackVisibility> */}

    </ BlogPostsStyle >

  )
}
export default BlogPosts