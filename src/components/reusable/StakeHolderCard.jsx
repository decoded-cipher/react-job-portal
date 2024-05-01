
import React from 'react'
import { Link } from 'react-router-dom'

const StakeHolderCard = (props) => {
    return (
        <>

            <div className={`p-6 rounded-lg shadow-md ${props.styleClass}`}>
                <h2 className="text-2xl font-bold">{props.title}</h2>
                <p className="mt-2 mb-4">
                    {props.description}
                </p>
                <Link to={props.buttonLink} className="inline-block bg-black text-white rounded px-5 py-2 hover:bg-gray-700">
                    {props.buttonText}
                </Link>
            </div>

        </>
    )
}

export default StakeHolderCard