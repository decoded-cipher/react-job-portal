
import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navbar from '../components/reusable/Navbar'
import Footer from '../components/Footer'

const GeneralLayout = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  )
}

export default GeneralLayout