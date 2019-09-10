import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import colors from '../components/styles/colors'

const BlogPostCardStyles = styled.div`
/* background: rgba(51, 0, 38, .04); */
background: ${colors.greys[1]};
overflow: hidden;
position: relative;

/* background: #330026; */
display: block;
margin: .2rem;
max-width: 500px;
width: 95%;
position: relative;
margin: 2rem 0;
padding: 1rem;
border-radius: 2px;
box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, .2);
overflow: hidden;

/* @media only screen and (max-width: 500px) {
  width: 95%
} */
img {
  width: 95%;
}

h3 {
  color: #333;
  /* position: absolute; */
  top: 1rem;
  right: 1rem;
  text-shadow: 0rem 0rem .4rem rgba(255, 255, 255, .5);
  font-size: 1.5rem;
  /* max-width: 300px; */
  /* text-align: right; */
  text-align: center

}

.year {
  position: absolute;
  top: 3rem;
  font-size: 5rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 900;
  color: rgba(0,0,0,.1);
}
.month {
  position: absolute;
  top: 5rem;
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 700;
  color: rgba(0,0,0,.5);


}
`

const BlogPostCard = ({ post, ...props }) => {
  const dt = new Date(post.frontmatter.date)
  const year = dt.getUTCFullYear()
  const month = dt.toLocaleString('en-us', { month: 'long' })
  const day = dt.getDate()
  return (

    <BlogPostCardStyles>
      <Link to={post['fields']['slug']}>
        <Img style={{ opacity: '.6', position: 'relative', top: '-1rem', left: '-1rem' }} fixed={post.frontmatter.cover !== null ? post.frontmatter.cover.childImageSharp.fixed : ''} />
      </Link>

      <Link to={post['fields']['slug']}>
        <h3>{post['frontmatter']['title']}</h3>
      </Link>
      {/* <p>{post['frontmatter']['cover']}</p> */}
      {/* <p style={{
                textAlign: 'right', position: 'absolute', top: '3rem', right: '1rem', textShadow: '0rem 0rem .2rem rgba(255, 255, 255, .5)'
            }}>{month} {day}, {year}</p> */}
      <div className="date">
        <div className="year">{year}</div>
        <div className="month">{month} {day}</div>
      </div>

      <p>{post['excerpt']}</p>
    </BlogPostCardStyles >

  )
}

export default BlogPostCard