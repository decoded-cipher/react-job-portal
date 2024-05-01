
import React from 'react'
import StakeHolderCard from './reusable/StakeHolderCard'

const StakeHolders = () => {
    return (
        <>

            <section className="py-12">
                <div className="container-xl lg:container m-auto">
                    <div className="flex w-full justify-center gap-8">

                        <StakeHolderCard
                            title="For Developers"
                            description="Browse our React jobs and start your career today"
                            buttonText="Browse Jobs"
                            buttonLink="/jobs"
                            styleClass="bg-gray-100"
                        />

                        <StakeHolderCard
                            title="For Employers"
                            description="List your job to find the perfect developer for the role"
                            buttonText="Add Job"
                            buttonLink="/add-job"
                            styleClass="bg-indigo-100"
                        />

                    </div>
                </div>
            </section>

        </>
    )
}

export default StakeHolders