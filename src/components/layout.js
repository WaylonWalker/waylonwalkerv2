import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Nav from './nav'
import Subscribe from './Subscribe'
import LayoutStyles from './styles/LayoutStyles'
import './layout.css'

// const description = 'Practicing my craft in public, sharing my experience along the way.  Python, Kedro, JamStack, Gatsby, Data, Automation'

const Layout = ({ children,include_nav = true, include_subscribe = true }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `}
    render={data => (
      <LayoutStyles>
        <Helmet
          title={data.site.siteMetadata.title}
          htmlAttributes={{ lang: 'en' }}
          meta={[
            { name: 'og:type', content: 'article' },
            { name: 'og:title', content: "Waylon Walker's Digital Garden" },
            { name: 'og:article:author', content: 'Waylon Walker' },
            { name: 'og:image', content: 'https://waylonwalker.com/waylon-walker.png' },
            { name: 'og:image:width', content: '1000' },
            { name: 'og:image:height', content: '420' },
            { name: 'og:locale', content: 'en_US' },
            { name: 'og:site_name', content: 'Waylon Walker' },
            { name: 'og:url', content: 'https://waylonwalker.com' },
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'og:description', content: data.site.siteMetadata.description },
            { name: 'twitter:description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: 'python, kedro, datascience, bash, command line, javascript, gatsby' },
            { name: 'twitter:title', content: "Waylon Walker's Digital Garden" },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:site', content: '@_waylonwalker' },
            { name: 'twitter:creator', content: '@_waylonwalker' },
            { name: 'twitter:image', content: 'https://waylonwalker.com/waylon-walker.png' },
            { name: 'monetization', content: '$ilp.uphold.com/MGN2ni2YMXaQ' }
          ]}
        >

          <html lang='en' />
          {/* <link rel='preload' href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" /> */}
          <link href="https://twitter.com/_WaylonWalker" rel="me" />
          <link href="https://github.com/waylonwalker" rel="me" />
          <link href="https://dev.to/waylonwalker" rel="me" />
          <link href="https://www.instagram.com/_waylonwalker/" rel="me" />
          <link href="https://medium.com/@waylonwalker" rel="me" />
          <link href="mailtto:waylon@waylonwalker.com" rel="me" />
          <link href="mailto:quadmx08@gmail.com" rel="me" />
          <link rel="webmention" href="https://webmention.io/waylonwalker.com/webmention" />
          <link rel="pingback" href="https://webmention.io/waylonwalker.com/xmlrpc" />
        </Helmet>

        { include_nav === true
          ? <Nav />
          : ''
        }
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
