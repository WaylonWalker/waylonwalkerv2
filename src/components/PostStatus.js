import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'

const PostStatusStyle = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
  span.emoji {
    font-size: 1rem;
  }
  span.message {
    display: none !important;
  }
  p.status-message {
    background: none;
    color: #ff66c4;
    font-size: 0.6rem;
    padding: 0;
    margin: 0;
    margin-right: 0.5rem;
    border-radius: 5px;
    display: inline-block;
    span.message {
      display: none;
    }
  }

  p.status-message:hover {
    span.message {
      display: block;
    }
  }

  p.status-message.bright {
    background: #ff66c4;
    color: #232136;
  }
`

const PostStatus = ({status, tags=[], bright=true}) => {
    // console.log(tags)
    let statusMessage
    status === undefined
      ? statusMessage = 'undefined'
    : status === null
    ? (statusMessage = 'null')
    : tags.join().includes('tip')
    ? (statusMessage = '🔥 Hot Tip')
    : status.includes('published')
    ? (statusMessage =
        '<span class="emoji">🎄</span><span class="message">This post has fully grown</span>')
    : status.includes('draft')
    ? (statusMessage = '🌱 This post is still growing')
    : (statusMessage = 'none')
  return (
    <PostStatusStyle className={`post-status ${bright ? 'bright' : ''}`}>
      <p
        className="status-message"
        dangerouslySetInnerHTML={{ __html: statusMessage }}
      />
    </PostStatusStyle>
  )
}

export default PostStatus
