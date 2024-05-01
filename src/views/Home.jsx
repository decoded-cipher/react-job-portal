import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

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
      <JobListing isHome={true}>

        <section className="m-auto max-w-lg my-10 px-6">
          <Link
            to="jobs"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</Link>
        </section>

      </JobListing>

    </>
  )
}

export default Home