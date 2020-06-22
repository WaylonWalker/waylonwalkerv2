import React from 'react'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import PropTypes from 'prop-types'
// import { graphql, Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
// import domtoimage from 'dom-to-image'
import Tip from '../components/Tip'
// import html2canvas from 'html2canvas'
// import pdfmake from 'pdfmake'
// import Img from 'gatsby-image'


const TipTemplate = ({ data }) => {
  const html = data.markdownRemark.html
  const plainText = data.markdownRemark.plainText
  const frontmatter = data.markdownRemark.frontmatter
  const fileAbsolutePath = data.markdownRemark.fileAbsolutePath

  return (
    <Layout include_subscribe={false}>
      <Tip
        frontmatter={frontmatter}
        html={html}
        content={plainText}
        fileAbsolutePath={fileAbsolutePath}
      />
    </Layout>
  )
}

// Tip.propTypes = {
//   data: PropTypes.shape({
//     markdownRemark: PropTypes.object,
//   }),
// }

export {
  TipTemplate
}
export default TipTemplate


export const pageQuery = graphql`
  query TipByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      plainText
      fileAbsolutePath
      frontmatter {
        date
        tags
        afterImage

      }
    }
  }
`
