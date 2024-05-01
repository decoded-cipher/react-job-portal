import React from 'react'
import { Helmet } from 'react-helmet'

import Hero from '../components/Hero'
import StakeHolders from '../components/StakeHolders'
import JobListing from '../components/JobListing'

const Home = () => {
  return (
    <>

      {/* <Helmet>
        <title>Home Page</title>
      </Helmet> */}

      <Hero />
      <StakeHolders />
      <JobListing />

    </>
  )
}

export default Home