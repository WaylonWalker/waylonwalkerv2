import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
// import { useSpring, animated } from 'react-spring'

const PostCardStyle = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 500px;
max-width: 500px;
background: rgba(0,0,0,.1);
padding: .2rem;
border-radius: 5px;
margin: 1rem;
h2 {

  display: block;
  font-size: 1.2rem;
  margin: auto .2rem;
  width: 100%
}
p {
  font-size: 1rem;
}
.post-cover-image {
width: 200px;
min-width: 200px;
height: 85px;
min-height: 85px;
max-height: 85px;
}
.description {
}

transition: width 1500ms;
transition: max-width 1500ms;


.postcard-content {
  perspective: 600px;
  width: 500px;
  height: 85px;
}

.description {
  overflow: hidden;
  height: 85px;
  max-height: 85px;
}
.flip {
  position: relative;
  height: 100%;
  width: 100%;
  transition: transform 300ms;
  transition-delay: 500ms;
  transform-style: preserve-3d;
  transform-origin: top center;
}

.flip-front, .flip-back {
  position: absolute;
  height: 85px;
  width: 500px;
  backface-visibility: hidden;
  z-index: 5;
}

.postcard-content:hover {
.flip{
transform: rotateX(180deg) translateY(-85px);
  }
}
.flip-front {
display: flex;
}

.flip-back {
transform: rotateX(180deg);
background: #2A2832;

}
.kedro {
color: black;
padding: 0 .2rem;
border: 1px dotted goldenrod;
border-radius: 5px;
}

.python {
color: #FCD242;
border-bottom: 1px solid #3772A4;
}
.pandas {
color: #FCD242;
}

`
const PostCard = ({ to }) => (

  <Link to={to.fields.slug} style={{textDecoration: 'none'}}>
      <PostCardStyle className='postcard'>
         
        <div className='postcard-content'>
          <div className='flip'>
            <div className='flip-front'>
              { to.frontmatter.cover === null
                ? ''
                : <Img fixed={to.frontmatter.cover.childImageSharp.fixed} className='post-cover-image' />
              }
              <h2 
                className='no-link'
              dangerouslySetInnerHTML={{
                __html: to.frontmatter.title
                  .replace('kedro', 'Kedro')
                  .replace('Kedro', '<span class="kedro">Kedro</span>')
                  .replace('python', 'Python')
                  .replace('Python', '<span class="python">Python</span>')
                  .replace('pandas', 'Pandas')
                  .replace('Pandas', '<span class="pandas">Pandas</span>')
                }}
              />
            </div>
            <div className='flip-back'>
              <p className='description'>
                {to.frontmatter.description === null
                  ? ''
                  : to.frontmatter.description.slice(0, 150)
                }
              </p>
            </div>
          </div>
        </div>





      </PostCardStyle>
        </Link>
    )

export default PostCard
