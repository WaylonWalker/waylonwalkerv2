import React, { Component } from 'react'

export default class PageTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            background: 'red'
        }
    }

    handleHover = () => (
        this.setState({ background: 'green' })
    )
    setRed = () => (this.setState({ background: 'red' }))
    render() {
        return (
            <div
                style={{
                    display: 'flex'
                }}
            >
                <p>hi</p>
                <div
                    className='hi'
                    onMouseEnter={this.handleHover}
                    onMouseOut={this.setRed}
                    style={{
                        width: '50%',
                        height: '200px',
                        background: `${this.state.background}`,
                    }}
                />
                <div
                    style={{
                        height: '125px',
                        width: '100%',
                        background: 'pink'
                    }}
                />

            </div >
        )
    }
}
