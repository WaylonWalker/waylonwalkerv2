import styled from 'styled-components'
import colors from './colors'
import back from '../../images/circuit_bubbles.png'

const NavStyles = styled.ul`
list-style-type: none;
display: flex;
background: linear-gradient(160deg, rgba(0, 0, 0, .15), rgba(0,0,0,.04)), url(${back});
/* margin: 1rem; */
margin: 0;
margin-bottom: 2rem;
padding: 1rem;
position: sticky;
top: 0;
z-index: 999;
box-shadow: 0rem 0rem 2rem ${colors.greys[3]};
a {
    color: ${colors['black']};
    text-decoration: none;
@import url('https://fonts.googleapis.com/css?family=Amiko|Arima+Madurai|Farsan|Lalezar|Mogra|Rakkas|Rasa|Shrikhand|Suez+One|Yatra+One');
    font-family: 'Amiko', sans-serif;
}
/* justify-content: space-around; */

li {
    position: relative;
    padding: .4rem .8rem;
    border-radius: .1rem;
    transition: transform 100ms, box-shadow 100ms;
    background: ${colors.greys[3]};
    box-shadow: .2rem .2rem 1rem ${colors.greys[4]};
    margin: 0 .2rem
}

/* li::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    opacity: 0;
    background: ${colors.greys[8]};
    box-shadow: .2rem .2rem 1rem ${colors.greys[8]};
} */

li:hover {
    /* background: rgba(51, 0, 38, .2); */
    /* ${colors.purple} */
    box-shadow: .1rem .1rem 1.6rem ${colors.greys[4]};

    transform: translate(.2rem, .2rem);
}

a.active {
    color: ${colors['purple'][0]}
}
 
`

export default NavStyles