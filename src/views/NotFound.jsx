
import React from 'react'
import Helmet from 'react-helmet'

import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFound = () => {
    return (
        <>

            <Helmet>
                <title>404 Not Found</title>
            </Helmet>

            <section className="text-center flex flex-col justify-center items-center h-screen">
                <FaExclamationTriangle className="text-yellow-400 text-9xl mb-10" />
                <h1 className="text-6xl font-bold mb-4">404 Not Found</h1>
                <p className="text-xl mb-4">Sorry, the page you are looking for could not be found.</p>
                <Link to="/" className="text-white text-lg bg-indigo-700 hover:bg-indigo-900 rounded px-4 py-2.5 mt-4">Go back to Home</Link>
            </section>


        </>
    )
}

export default NotFound