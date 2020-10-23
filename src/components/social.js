import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub, FiInstagram, FiRss } from "react-icons/fi";

const SocialStyle = styled.div`

font-size: 1.2rem;
color: #FF66C4;

ul {
    display: flex;
    align-items: center;
    justify-content: center;
    /* max-width: 1200px; */
    margin: 0;
    list-style-type: none;
    display: flex;
    // padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    a {
    color: #FEDD58;
    text-decoration: none;
    font-family: 'Amiko', sans - serif;
    }

    li {
        padding: .3rem;
    }

    li: hover {
        box-shadow: .2rem .2rem .2rem rgba(0, 0, 0, .5);

        transform: translate(.2rem, .2rem);
    }

`


const Social = () => (
    <SocialStyle>
        <ul className="social">
            <li>
                <a href="https://dev.to/waylonwalker">
                    <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Waylon Walker's DEV Profile" height={30} width={30} />
                </a>
            </li>
            <li>
                <a href='https://github.com/waylonwalker'>
                    <FiGithub />
                </a>
            </li>
            <li>
                <a href='https://twitter.com/_waylonwalker'>
                    <FiTwitter />
                </a>
            </li>
            <li>
                <a href='https://instagram.com/_waylonwalker'>
                    <FiInstagram />
                </a>
            </li>
            <li>
                <a href='https://waylonwalker.com/blog/rss.xml'>
                    <FiRss />
                </a>
            </li>
        </ul>
    </SocialStyle>
)

export default Social
