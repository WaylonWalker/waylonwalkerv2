import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
// import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import colors from '../components/styles/colors'

const BlogPostCardStyles = styled.div`
/* background: rgba(51, 0, 38, .04); */
transition: width 250ms ease-in-out,
            color 1000ms linear,
            transform 1000ms linear;
  /* align-self: center; */
&:hover {
  width: calc(min(550px, 100vw));
  .year{
  color: rgba(108, 99, 253, .14);
  transform: rotate(-1.4deg);

  }

}
background: ${colors.greys[1]};
background: #3E3846;
background: linear-gradient(81deg, rgba(40,44,52,1) 0%, #3E3846 100%);
color: white;

overflow: hidden;
// position: relative;

/* background: #330026; */
display: block;
margin: .2rem;
width: calc(min(500px, 95vw));
// width: 95%;
// position: relative;
margin: 2rem auto;
/* padding: 1rem; */
border-radius: 2px;
box-shadow:  -8rem -6rem 8rem -6rem rgba(253, 221, 88, .2), 4rem 0 8rem rgba(88, 82, 185, .3), .2rem .2rem 1rem rgba(0, 0, 0, .2);
overflow: hidden;
// background: rgb(82,81,103);
// background: linear-gradient(97deg, rgba(82,81,103,1) 0%, rgba(62,61,82,1) 100%);
/* @media only screen and (max-width: 500px) {
  width: 95%
} */
img {
  width: 95%;
}

h3 {
  color: rgba(255, 255, 255, .8);
  color: hsla(244, 60%, 70%, .7);
  // text-shadow: 0rem 0rem .4rem rgba(255, 255, 255, .5);
  font-size: 1.75rem;
  text-align: center;
  transform: rotate(-1deg);


}

.year {
  // position: absolute;
  // top: 3rem;
  font-size: 5rem;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-weight: 900;
  /* color: rgba(0,0,0,.1);
  color: rgba(255, 255, 255, .05); */
  color: rgba(108, 99, 253, .1);
  
  text-align: center;
  transform: rotate(.6deg);
}
.month {
  // position: absolute;
  // top: 5rem;
  font-size: 2rem;
  font-family: sans-serif;
  font-weight: 700;
  color: rgba(0,0,0,.5);
  color: rgba(255, 255, 255, .6);
  color: rgba(108, 99, 253, .6);
  text-align: center;
  transform: rotate(2deg);
}
.date {
  margin: 0rem auto;
  padding: 3rem 2rem 2rem;
}
.bottom {
  width: 100%;
  min-height: 6rem;
  position: relative;
  /* border: 1px solid black; */
  background: linear-gradient(97deg, #2A2D34 0%, #3C3745 100%);
  /* background: linear-gradient(81deg, rgba(45,47,54,1) 0%, # 100%); */
  z-index: 99;

}

p {
  transform: rotate(-.7deg);
}

`

const BlogPostCard = ({ post, ...props }) => {
  const dt = new Date(post.frontmatter.date)
  const year = dt.getUTCFullYear()
  const month = dt.toLocaleString('en-us', { month: 'long' })
  const day = dt.getDate()
  const cover = post.frontmatter.cover
  return (

    <BlogPostCardStyles>
      <Link to={post['fields']['slug']} aria-label={`${post['frontmatter']['title']} cover image`} title={`${post['frontmatter']['title']}`}>
        {
          (cover === undefined || cover === null)
            ? ''
            : <Img fluid={cover.childImageSharp.fluid} />
        }
      </Link>
      <div className="date">
        <Link to={post['fields']['slug']} aria-label={`${post['frontmatter']['title']} cover image`} title={`${post['frontmatter']['title']}`}>
          <div className="year">{year}</div>
          <div className="month">{month} {day}</div>
        </Link>
      </div>

      <Link to={post['fields']['slug']} aria-label={`${post['frontmatter']['title']} cover image`} title={`${post['frontmatter']['title']}`}>
        <h3 id={post['frontmatter']['title']}>{post['frontmatter']['title']}</h3>
      </Link>

      {/* <div className="excerpt" dangerouslySetInnerHTML={{ __html: post.excerpt }} /> */}
      <div className="bottom">
        <p>{post.frontmatter.description}</p>

      </div>
    </BlogPostCardStyles >

  )
}

export default BlogPostCard