import React, { useState } from 'react';
import JobCategory from './JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const jobCategories = useLoaderData()
    console.log(jobCategories);

    return (
        <>
            {/* Banner section */}
            <section className='flex flex-col md:flex-row gap-8 items-center bg-ui-light px-2 md:px-10 lg:px-20 text-ui-dark'>

                <div className='w-full'>
                    <div className='space-y-4 lg:space-y-8 md:max-w-md'>
                        <h1 className='text-5xl lg:text-7xl font-semibold leading-[1.2em]'>
                            One Step <br />
                            Closer To Your <br />
                            <span className='text-gradient'> Dream Job</span>
                        </h1>
                        <p className='text-ui-light-gray'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>

                        <button className='btn-primary w-max'>Get Started</button>
                    </div>
                </div>

                <div className='w-full'>
                    <img className='lg:w-62 mx-auto md:w-full' src="banner-person.png" alt="" />
                </div>

            </section>

            {/* Job Category */}
            <section className='mx-2 md:mx-10 lg:mx-20 my-32'>

                <h2 className='text-3xl font-bold text-center mb-4'>Job Category List</h2>
                <p className='text-ui-light-gray text-center mb-8'>
                    Explore thousands of job opportunities with all the information you need. Its your future
                </p>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {jobCategories.map(category => <JobCategory key={category.id} category={category} />)}
                </div>

            </section>

        </>

    );
};

export default Home;