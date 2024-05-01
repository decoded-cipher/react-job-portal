
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>

      <footer className="bg-indigo-700 text-white py-12">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-1/4">
              <h2 className="text-2xl font-bold mb-4">React Jobs</h2>
              <p className="mb-4">Find the perfect React job or list your own to find the perfect React developer for your team</p>
            </div>
            <div className="w-full lg:w-1/4">
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <ul>
                <li className="mb-2">
                  <Link to="#" className="hover:text-indigo-300">Home</Link>
                </li>
                <li className="mb-2">
                  <Link to="#" className="hover:text-indigo-300">Add Job</Link>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/4">
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="mb-2">123 Main St</p>
              <p className="mb-2">Boston, MA 02110</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer