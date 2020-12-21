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
  margin: -3rem auto 2rem;
  width: 150px;
  border-radius: 50%;
  box-shadow: -1rem -1rem 2rem -1.2rem rgba(253, 221, 88, 0.1),
    2rem 0 4rem rgba(88, 82, 185, 0.08), 0rem 0rem 1rem rgba(0, 0, 0, 0.4),
    0rem 0rem 2.5rem rgba(0, 0, 0, 0.1);
  img {
    width: 150px;
    border-radius: 50%;
    margin: auto;
  }
  img:hover {
    transform: rotate(1deg) scale(1.02);
  }
`
const Image = () => (
  <ProfileImageStyle>
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 150) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => (
        <Img
          style={{ width: '150px' }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
      alt="Profile picture of Waylon Walker looking into the distance in front of a red brick building"
    />
  </ProfileImageStyle>
)
export default Image
