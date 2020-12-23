import React from 'react'
// import { graphql } from 'gatsby'
// import Image from '../components/image'
// import Layout from '../components/layout'
// import BlogPosts from '../components/BlogPosts'
import styled from 'styled-components'
import axios from 'axios'
// import { useSpring, animated } from 'react-spring'

const RepoStyle = styled.div`
  a {
    text-decoration: none;
  }
  transition: width 250ms ease-in-out, color 1000ms linear;
  &:hover {
    width: calc(min(550px, 100vw));
  }
  width: calc(min(500px, 95vw));
  background: linear-gradient(81deg, rgba(40, 44, 52, 1) 0%, #3e3846 100%);
  margin: 1rem;
  border-radius: 2px;
  box-shadow: -8rem -6rem 8rem -6rem rgba(253, 221, 88, 0.2),
    4rem 0 8rem rgba(88, 82, 185, 0.3), 0.2rem 0.2rem 1rem rgba(0, 0, 0, 0.2);
  .repo-description {
    margin: 1rem;
    color: #e8e9ea;
  }
  .repo-language {
    color: #daa520;
    margin: 0;
  }
  .repo-header {
    padding-top: 1rem;
    background: linear-gradient(145deg, #2b273d, #18222f, #18222f, #222536);
    display: flex;
    flex-direction: row;
    justify-content: center;
    p {
      padding-left: 0.2rem;
    }
  }
  .repo-stats {
    padding: 1rem 0 0.2rem;
    /* box-shadow: inset 0px 15px 10px -10px #30313E, 0px -10px 10px -2px #30313E; */
    background: linear-gradient(145deg, #2b273d, #18222f, #18222f);
    display: flex;
    justify-content: center;
    .label {
      color: #daa520;
    }
    div {
      margin: 0 1rem;
    }
  }
`
class Repo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      root_api: 'https://api.github.com/repos/',
      repo: props.repo,
      repo_data: '',
    }
  }
  componentDidMount() {
    axios
      .get(this.state.root_api + this.state.repo)
      .then((r) => this.setState({ ...r.data }))
  }

  render() {
    return (
      <RepoStyle className="repo">
        <a
          href={`https://github.com/${this.state.repo}`}
          aria-label={`go to github ${this.state.repo}`}
          title={this.state.repo}
        >
          <div className="repo-header">
            <h2 className="repo-name">{this.state.name}</h2>
            <p className="repo-language">{this.state.language}</p>
          </div>
          <p className="repo-description">{this.state.description}</p>
          <div className="repo-stats">
            <div className="repo-forks">
              {this.state.forks} <span className="label">forks</span>
            </div>
            <div className="repo-stars">
              {this.state.stargazers_count} <span className="label">stars</span>
            </div>
          </div>
        </a>
      </RepoStyle>
    )
  }
}

export default Repo
