import React from 'react'
import styled from 'styled-components'
import BlogPostCard from '../components/blogPostCard'
// import { Link, graphql } from 'gatsby'

// import BlogGallery from '../components/BlogGallery'
const BlogPostsStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const BlogPosts = ({ posts, ...props }) => (
    <BlogPostsStyle>
        {
            posts.map((post, i) => {
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
                    return < BlogPostCard key={i} post={post['node']} />
                }
                return false
            }
            )}



    </ BlogPostsStyle>
)

export default BlogPosts