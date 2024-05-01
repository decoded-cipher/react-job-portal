
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarker } from 'react-icons/fa';

const JobCard = (props) => {

    const [showDescription, setShowDescription] = useState(false)
    let description = null;

    if (!showDescription) {
        description = props.job.description.slice(0, 100) + '...'
    } else {
        description = props.job.description
    }

    return (
        <>

            <div className="w-full lg:w-1/2 xl:w-1/3 p-4">
                <div className="bg-white rounded-md shadow-md relative">


                    <div className="p-4">
                        <div className="mb-6">
                            <div className="text-gray-600 my-2">{props.job.type}</div>
                            <h3 className="text-xl font-bold">{props.job.title}</h3>
                        </div>

                        <div className="mb-5">
                            {description}
                            <div className="mt-2">
                                <button className="text-indigo-500 hover:underline" onClick={() => setShowDescription((prev) => !prev)}>
                                    {showDescription ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </div>

                        <h3 className="text-indigo-500 mb-2">{props.job.salary}</h3>

                        <div className="border border-gray-100 mb-5"></div>

                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className="text-orange-700 mb-3">
                                <FaMapMarker className='inline text-lg mb-1 mr-1' />
                                {props.job.location}
                            </div>
                            <Link
                                to={`/job/${props.job.id}`}
                                className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded text-center text-sm"
                            >
                                Apply Now
                            </Link>
                        </div>
                    </div>


                </div>
            </div>

        </>
    )
}

export default JobCard