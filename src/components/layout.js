import React from 'react'
// import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

// import Header from './header'
import Nav from './nav'
import LayoutStyles from './styles/LayoutStyles'
import './layout.css'
// import './sass/main.sass'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'twitter:card', content: "summary_large_image" },
            { name: 'description', content: "Waylon Walker's personal website." },
            { name: 'keywords', content: 'Personal Blog' },
          ]}
        >

          <html lang="en" />
        </Helmet>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <LayoutStyles>
          <Nav />
          {children}
        </LayoutStyles>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
