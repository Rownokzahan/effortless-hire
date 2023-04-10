import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJobCard from './AppliedJobCard';

const AppliedJobs = () => {

    const data = useLoaderData()    
    const [appliedJobs, setAppliedJobs] = useState(data)

    return (
        <>
            <section className="px-2 md:px-10 lg:px-20 h-20 md:h-40 bg-ui-light text-ui-dark relative flex items-center justify-center" >
                <img className='absolute -top-44 md:-top-[120px] right-0 w-36' src="/images/banner-part1.png" alt="" />
                <img className='absolute bottom-0 left-0 w-36' src="/images/banner-part2.png" alt="" />
                <h2 className='text-3xl font-bold align-middle'>Applied Jobs</h2>
            </section>

            {
                appliedJobs.length === 0 ?                   
                    <h3 className='text-xl text-center font-bold text-ui-light-gray my-16 md:my-32 mx-2'>You Have Not Applied For Any Jobs Yet!</h3>

                    : <section className='mx-2 md:mx-10 lg:mx-20 my-16 md:my-32'>

                        <div className='flex gap-8 justify-end mb-8'>
                            <button className='bg-ui-light text-ui-purple px-4 py-2 rounded font-semibold shadow border'>Remote</button>
                            <button className='bg-ui-purple text-ui-light px-4 py-2 rounded font-semibold shadow border'>Onsite</button>
                        </div>
                        
                        <div className='space-y-4'>
                            {appliedJobs?.map(job => <AppliedJobCard key={job.id} job={job} />)}
                        </div>
                    </section> 
            }

        </>
    );
};

export default AppliedJobs;