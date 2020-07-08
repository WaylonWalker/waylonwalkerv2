import React from 'react'
import NavStyles from './styles/NavStyles'
import Icon from '../components/icon'
import Social from '../components/social'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Nav = () => (
  <Headroom style={{ zIndex: '9999' }}>
    <NavStyles>
      <div className="content">
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
          <li className='btn'>
            <Link to='/newsletter' activeClassName='active'>Newsletter</Link>
          </li>
        </ul>
        <Social />
      </div>
    </NavStyles >
  </Headroom>
)

export default Nav
