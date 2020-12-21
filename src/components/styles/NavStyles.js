import styled from 'styled-components'
import colors from './colors'
// import back from '../../../static/circuit_bubbles.png'
// background: linear - gradient(160deg, rgba(0, 0, 0, .15), rgba(0, 0, 0, .04)), url(${ back });

const NavStyles = styled.nav`
  z-index: 9999;
  box-shadow: 0rem 0rem 2rem rgba(0, 0, 0, 0.4);
  background: rgb(40, 44, 52);
  background: linear-gradient(
    81deg,
    rgba(40, 44, 52, 1) 0%,
    #332d3a 90%,
    #392e3d 95%
  );
  margin-bottom: 2rem;
  overflow: hidden;
  max-width: 100vw;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    max-width: 800px;
  }

  ul {
    /* max-width: 1200px; */
    margin: 0;
    list-style-type: none;
    display: flex;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 999;

    a {
      color: #fedd58;
      text-decoration: none;
      font-family: 'Amiko', sans - serif;
    }

    li.btn {
      position: relative;
      padding: 0.4rem 0.8rem;
      border-radius: 0.1rem;
      transition: transform 100ms, box - shadow 100ms;
      background: rgb(82, 81, 103);
      background: linear-gradient(
        97deg,
        rgba(72, 71, 82, 1) 0%,
        rgba(62, 61, 82, 1) 100%
      );
      box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.5);
      margin: 0 0.2rem;
    }

    li: hover {
      box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.5);

      transform: translate(0.2rem, 0.2rem);
    }

    a.active {
      color: ${colors['purple'][0]};
    }
  }
`

export default NavStyles
