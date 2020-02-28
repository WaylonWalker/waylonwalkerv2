import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './nav'
import Subscribe from './Subscribe'
import LayoutStyles from './styles/LayoutStyles'
import './layout.css'

const Layout = ({ children, include_subscribe = true }) => (
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
      <LayoutStyles>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'og:type', content: 'article' },
            { name: 'og:title', content: 'Waylon Walker' },
            { name: 'og:article:author', content: 'Waylon Walker' },
            { name: 'description', content: "Waylon Walker's personal website." },
            { name: 'keywords', content: 'Personal Blog' },
            { name: 'twitter:creator', content: '@_waylonwalker' },
            { name: 'twitter:card', content: "summary_large_image" },
            { name: 'twitter:site', content: '@_waylonwalker' },
          ]}
        >

          <html lang="en" />
        </Helmet>
        <Nav />
        {children}
        {
          include_subscribe === true
            ? <Subscribe />
            : ''
        }
        <p style={{ margin: '0' }}>.</p>
      </LayoutStyles>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
