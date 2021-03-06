import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub, FiInstagram, FiRss } from 'react-icons/fi'
import { IoMdGitNetwork } from 'react-icons/io'

const SocialStyle = styled.div`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    padding: 0.3rem;
  }

  font-size: 1.2rem;
  color: #ff66c4;
`

const Social = () => (
  <SocialStyle>
    <ul className="social">
      <li>
        <a href="https://dev.to/waylonwalker">
          <img
            src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
            alt="Waylon Walker's DEV Profile"
            height={30}
            width={30}
          />
        </a>
      </li>
      <li>
        <a href="https://github.com/waylonwalker">
          <FiGithub />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/_waylonwalker">
          <FiTwitter />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/_waylonwalker">
          <FiInstagram />
        </a>
      </li>
      <li>
        <a href="https://waylonwalker.com/rss.xml">
          <FiRss />
        </a>
      </li>
      <li>
        <a href="https://waylonwalker.com/sitemap.xml">
          <IoMdGitNetwork />
        </a>
      </li>
    </ul>
  </SocialStyle>
)

export default Social
