import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const jobDetail = useLoaderData()
    console.log(jobDetail);

    return (
        <>
            <div className="px-2 md:px-10 lg:px-20 h-40 bg-ui-light text-ui-dark relative flex items-center justify-center" >
                <img className='absolute -top-44 md:-top-[120px] right-0 w-36' src="/images/banner-part1.png" alt="" />
                <img className='absolute bottom-0 left-0 w-36' src="/images/banner-part2.png" alt="" />
                <h2 className='text-3xl font-bold align-middle'>Job Details</h2>                
            </div>    
        </>
    );
};

export default JobDetails;