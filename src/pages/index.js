import React from 'react'
// import { Link } from 'gatsby'
import Image from '../components/image'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>About</h1>
    <Image />
    <h1>Blog</h1>
    <div style={{ height: '70vh' }}></div>
  </Layout>
)

export default IndexPage
