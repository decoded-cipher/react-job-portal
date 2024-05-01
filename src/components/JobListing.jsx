
import React from 'react'
import { useState, useEffect } from 'react'
import JobCard from './reusable/JobCard'

const JobListing = (props) => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        let apiURL = props.isHome ? '/api/jobs?_limit=3' : '/api/jobs'
        try {
            fetch(apiURL)
                .then(response => response.json())
                .then(data => setJobs(data))
        } catch (error) {
            console.error(error)
        }
    }, [])

    return (
        <>

            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                        {props.isHome ? 'Featured Jobs' : 'All Jobs'}
                    </h2>

                    <div className="flex flex-row flex-wrap justify-center">

                        {jobs.map((job, index) => (
                            <JobCard key={index} job={job} />
                        ))}

                    </div>
                </div>
                
                {props.children}

            </section>

        </>
    )
}

export default JobListing