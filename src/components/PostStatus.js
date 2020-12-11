import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'

const PostStatusStyle = styled.div`
border-radius: 5px;
display: flex;
justify-content: flex-end;
p {
  color: #232136;
  padding: 0;
  margin: 0;
  margin-right: .5rem;
  border-radius: 5px;
  background: #FF66C4;
  display: inline-block;
}


`
const PostStatus = ({status}) => {
    let statusMessage
    status === undefined
      ? statusMessage = ''
      : status === null
      ? statusMessage = ''
      : status.includes('published')
      ? statusMessage = '🎄 This post has fully grown'
      : status.includes('draft')
      ? statusMessage = '🌱 This post is still growing'
      : statusMessage = ''
  return (
  <PostStatusStyle className='post-status'>
    <p>
      {statusMessage}
    </p>
  </PostStatusStyle>
)
}

export default PostStatus
