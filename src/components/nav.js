import React from 'react'
import NavStyles from './styles/NavStyles'
import Icon from '../components/icon'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Nav = () => (
  <Headroom style={{ zIndex: '9999' }}>
    <NavStyles>
      <ul>
        <li>
          <Link to='/' activeClassName='active' aria-label='home'>
            <Icon />
          </Link>
        </li>
        <li className='btn'>
          <Link to='/blog' activeClassName='active'>Blog</Link>
        </li>
        <li className='btn'>
          <Link to='/notes' activeClassName='active'>Notes</Link>
        </li>
        <li className='btn'>
          <Link to='/gratitude' activeClassName='active'>gratitude</Link>
        </li>
      </ul>
    </NavStyles >
  </Headroom>
)

export default Nav