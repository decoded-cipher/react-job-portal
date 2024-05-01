
import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({ loading }) => {

    const cssStyles = {
        display: 'block',
        margin: '100px auto'
    }

    return (
        <>

            <ClipLoader
                color={'#4338CA'}
                loading={loading}
                size={150}
                cssOverride={cssStyles}
            />
            
        </>
    )
}

export default Spinner