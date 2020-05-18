import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const ProfileImageStyle = styled.div`
/* padding: 1rem; */
margin: 3rem;
width: 300px;
border-radius: 50%;
box-shadow:  
  -15rem -2rem 8rem -6rem rgba(253, 221, 88, .09),
  12rem 0 8rem rgba(88, 82, 185, .14),
  0rem 0rem 2rem rgba(0, 0, 0, .4),
  0rem 0rem 5rem rgba(0, 0, 0, .1);
img {
width: 300px;
border-radius: 50%;
margin: auto;
}
`
const Image = () => (
  <ProfileImageStyle>
    <StaticQuery
      query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
      render={data => <Img
        style={{ width: '300px' }}
        fluid={data.placeholderImage.childImageSharp.fluid} />}
      alt='Profile picture of Waylon Walker looking into the distance in front of a red brick building'
    />
  </ProfileImageStyle>
)
export default Image
