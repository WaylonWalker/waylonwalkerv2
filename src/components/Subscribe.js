import React from 'react'
import styled from 'styled-components'

const SubscribeStyle = styled.div`
max-width: 500px;
color: rgba(255,255,255,.9);
background: #3E3846;
background: linear-gradient(81deg, rgba(40,44,52,1) 0%, #3E3846 100%);
box-shadow:  -8rem -6rem 8rem -6rem rgba(253, 221, 88, .2), 4rem 0 8rem rgba(88, 82, 185, .3), .2rem .2rem 1rem rgba(0, 0, 0, .2);
border-radius: 12px;
padding: 5rem 0;
margin: 5rem auto;
text-align: center;
/* display: flex; */
form {
    margin: auto;
}
.group {
    display: flex;
    width: 300px;
    margin: .5rem auto;
    label {
        width: 100px;
        padding-right: 1rem;
    }
    input {
        width: 200px;
        padding: .3rem;
    }
}

#subscribe-checkbox-group {
    display: none;
}

button {
    margin: 1rem;
    width: calc(248px + .6rem);
    position: relative;
    left: 3px;
}
`


const Subscribe = () => (
    <SubscribeStyle>
        <h2>Join my Newsletter</h2>
        <form action="https://getform.io/f/ff0f9e01-261c-476b-b0af-b3a9f8cddc90" method="POST">
            <div className="group">
                <label htmlFor="name" >Name: </label>
                <input type="text" name="name" placeholder='Preferred Name' />
            </div>
            <div className="group">
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" placeholder='Email' />
            </div>
            <div className="group" id='subscribe-checkbox-group'>
                <label htmlFor="email">Subscribe: </label>
                <input type='checkbox' id='subscribe-checkbox' name='subscribe' value='subscribe' checked />
            </div>
            <button type="submit">Send</button>
        </form>
    </SubscribeStyle>
)

export default Subscribe