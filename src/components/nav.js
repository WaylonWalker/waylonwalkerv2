import React from 'react'
import NavStyles from './styles/NavStyles'
import Icon from '../components/icon'
import Social from '../components/social'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'

const Nav = () => (
  <Headroom style={{ zIndex: '9999', height: '96px' }}>
    {/* 96 px reolves cumulative layout shift */}
    <NavStyles>
      <div className="content">
        <ul>
          <li>
            <Link to='/' activeclassname='active' aria-label='home'>
              <Icon />
            </Link>
          </li>
          <li className='btn'>
            <Link to='/blog' activeclassname='active'>Blog</Link>
          </li>
          <li className='btn'>
            <Link to='/notes' activeclassname='active'>Notes</Link>
          </li>
          <li className='btn'>
            <Link to='/gratitude' activeclassname='active'>gratitude</Link>
          </li>
          <li className='btn'>
            <a href='https://emailoctopus.com/lists/b194a4af-9875-11ea-a3d0-06b4694bee2a/forms/subscribe' activeClassName='active'>Newsletter</a>
          </li>
        </ul>
        <Social />
      </div>
    </NavStyles >
  </Headroom>
)

export default Nav
