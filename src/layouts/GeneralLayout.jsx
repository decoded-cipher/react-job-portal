
import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/reusable/Navbar'
import Footer from '../components/Footer'

const GeneralLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default GeneralLayout