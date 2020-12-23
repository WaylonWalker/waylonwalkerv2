import React from 'react'
import styled from 'styled-components'
import PostCard from './PostCard'

const PostCardsStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rbga(255, 0, 0, 0.5);
`
const PostCards = ({ data }) => (
  <PostCardsStyle className="postcard">
    {data.slice(0, 6).map((post, index) => (
      <PostCard to={post} key={index} />
    ))}
  </PostCardsStyle>
)

export default PostCards
