import React from 'react'
import NavStyles from './styles/NavStyles'
import Icon from '../components/icon'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Nav = () => (
  <Headroom>
    <NavStyles>
      <ul>

        <Link to='/' activeClassName='active'>
          <Icon />
        </Link>
        <li>
          <Link to='/blog' activeClassName='active'>Blog</Link>
        </li>
        <li>
          <Link to='/notes' activeClassName='active'>Notes</Link>
        </li>
        <li>
          <Link to='/gratitude' activeClassName='active'>gratitude</Link>
        </li>
      </ul>
    </NavStyles >
  </Headroom>
)

export default Nav