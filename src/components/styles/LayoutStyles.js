import styled from 'styled-components'

// import fonts from '../../../static/fonts.css'

const LayoutStyles = styled.div`
padding: 0;
margin: 0;
background-size: 800px;
min-height: 100vh;
background: rgb(40,44,52);
background: linear-gradient(81deg, rgba(40,44,52,1) 0%, rgba(58,46,61,1) 100%);

section {
    margin-bottom: 5rem;
}

a {
    color: #6F6BAE;
    text-decoration-color: goldenrod;
}

h1 {
    font-size: 4rem;
    font-family: 'Waterlily-Regular';
    color: #6A65CA;
    background: -webkit-linear-gradient(#a7a4e0, #6A65CA);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 4px rgba(0, 0, 0, .3)
}

`

export default LayoutStyles
