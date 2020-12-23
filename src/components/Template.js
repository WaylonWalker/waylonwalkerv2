import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
// import { useSpring, animated } from 'react-spring'

const TemplateStyle = styled.div``
class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {}

  render() {
    return <TemplateStyle className="repo"></TemplateStyle>
  }
}

export default Template
