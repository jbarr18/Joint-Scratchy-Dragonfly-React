import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Joint Scratchy Dragonfly</title>
        <meta property="og:title" content="Joint Scratchy Dragonfly" />
      </Helmet>
    </div>
  )
}

export default Home
