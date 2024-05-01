
import React from 'react'
import { Link } from 'react-router-dom'

import JobCard from './reusable/JobCard'

const JobListing = () => {
    return (
        <>

            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        Browse Jobs
                    </h2>

                    
                    {/* 2 column flex grid */}
                    <div className="flex flex-row flex-wrap justify-center">

                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />
                        <JobCard />

                    </div>
                </div>
            </section>

        </>
    )
}

export default JobListing