import React from 'react'
import Layout from '../components/layout'
import BlogPosts from '../components/BlogPosts'

const TagPage = ({ data, pageContext }) => {
  console.log(pageContext.posts)
  return (
    <Layout
      description={`Waylon Walker's ${pageContext.tag} posts`}
      title={`pageContext.tag} posts`}
      keywords={pageContext.tag}
      url={`https://waylonwalker.com/${pageContext.tag}`}
      // time={post.frontmatter.date}
    >
      <h1>{pageContext.tag}</h1>
      <BlogPosts posts={pageContext.posts} />
    </Layout>
  )
}

export default TagPage
