import styled from 'styled-components'
import back from '../../images/circuit_bubbles.jpg'

const LayoutStyles = styled.div`
padding: 0;
margin: 0;
background: url(${back});
background-size: 800px;
min-height: 100vh;

section {
    margin-bottom: 5rem;
}

a {
    color: #333;
    text-decoration-color: goldenrod;
}
`

export default LayoutStyles
