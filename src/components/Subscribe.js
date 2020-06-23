import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const SubscribeStyle = styled.div`
max-width: 500px;
margin: auto;
margin-bottom: 5rem;
padding: 2rem 5rem 1rem;
background: linear-gradient(81deg, rgba(40,44,52,1) 0%, #3E3846 100%);
box-shadow:
  -8rem -6rem 8rem -6rem rgba(253, 221, 88, .2),
 4rem 0 8rem rgba(88, 82, 185, .3),
 /* 0rem 0rem .5rem rgba(20, 40, 20, .8), */
 0rem 0rem 2rem -1.6rem rgba(255, 215, 70, .8);
 color:#D68FBB;
text-align: center;

a {
    display: block;
    background: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    padding: 1rem;
    border-radius: 5px;
    background: linear-gradient(120deg, hsla(323deg, 100%, 90%, 1) 0%, #D68FBB 50%);
    font-size:1.5rem;
    color: #2B2E37;

}

p {
    margin: 2rem 0 0
}
`
const Subscribe = () => (
    <SubscribeStyle>
        <h3>Join my NewsLetter</h3>
        <p>I write short articles about developing a <strong>successful mindset</strong> for the tech industry once or so per week.</p>
        <p></p>
        <Link to='/newsletter' title='Subscribe to my Newsletter'>Subscribe</Link>
        <p>Someday I hope to announce courses/side projects there as well.</p>
        <p>Unsubscribe at any time</p>
    </SubscribeStyle>
)

export default Subscribe
