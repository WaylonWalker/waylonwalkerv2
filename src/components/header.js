// import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      // background: 'linear-gradient(140deg, #EB0D75, #f53d93)',
      marginBottom: '1.45rem',
      maxHeight: '50vh',
      overflow: 'hidden',
      display: 'flex',
      // flexDirection: 'column'
      justifyContent: 'center',

    }}
  >

  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
