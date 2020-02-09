import styled from 'styled-components'
import colors from './colors'
// import back from '../../../static/circuit_bubbles.png'
// background: linear - gradient(160deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .04)), url(${ back });

const NavStyles = styled.nav`
z-index: 9999;
box-shadow: 0rem 0rem 2rem rgba(0,0,0, .4);
/* background: linear - gradient(160deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .04)); */
/* background: #332D3A; */
background: rgb(40,44,52);
background: linear-gradient(81deg, rgba(40,44,52,1) 0%, #332D3A 90%, #392E3D 95%);
ul {
max-width: 1200px;
margin: auto;
list-style-type: none;
display: flex;
/* margin: 1rem; */
/* margin: 0; */
margin-bottom: 2rem;
padding: 1rem;
position: sticky;
top: 0;
z-index: 999;
a {
    /* color: ${colors.greys[2]}; */
  color: #FEDD58;
  /* color: #36ACF1; */
  
    text-decoration: none;
@import url('https://fonts.googleapis.com/css?family=Amiko|Arima+Madurai|Farsan|Lalezar|Mogra|Rakkas|Rasa|Shrikhand|Suez+One|Yatra+One');
font-family: 'Amiko', sans - serif;
}
/* justify-content: space-around; */

li {
    position: relative;
    padding: .4rem .8rem;
    border - radius: .1rem;
    transition: transform 100ms, box - shadow 100ms;
    backround: ${ colors.greys[3]};
    background: rgb(82, 81, 103);
    background: linear-gradient(97deg, rgba(72, 71, 82, 1) 0%, rgba(62, 61, 82, 1) 100%);
    box-shadow: .2rem .2rem .4rem rgba(0, 0, 0, .5);
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

li: hover {
    /* background: rgba(51, 0, 38, .2); */
    /* ${colors.purple} */
    // box-shadow: .1rem .1rem 1.6rem ${colors.greys[4]};
    box - shadow: .2rem .2rem .2rem rgba(0, 0, 0, .5);

    transform: translate(.2rem, .2rem);
}

a.active {
    color: ${ colors['purple'][0]}
}
 
}
`

export default NavStyles