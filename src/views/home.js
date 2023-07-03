import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Mobility Assistant</title>
        <meta property="og:title" content="Senior Mobility Assistant" />
      </Helmet>
    </div>
  )
}

export default Home
