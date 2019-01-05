import React from 'react'
import NavStyles from './styles/NavStyles'
// import Icon from '../components/icon'
import { Link } from 'gatsby'

const Nav = () => (
  <NavStyles>
    <li>
      <Link to='/' activeClassName='active'>Home</Link>
    </li>
    <li>
      <Link to='/blog' activeClassName='active'>Blog</Link>
    </li>
    <li>
      <Link to='/gratitude' activeClassName='active'>gratitude</Link>
    </li>
  </NavStyles >
)

export default Nav