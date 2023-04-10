import React from 'react'
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from "react-icons/hi"
import { Link } from 'react-router-dom'

const AppliedJobCard = ({job}) => {

    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job


    return (
        <div className='p-8 rounded-lg border border-gray-300 flex flex-col md:flex-row justify-between items-center'>
            <div className='flex flex-col sm:flex-row gap-8'>

                <div className='bg-[#F4F4F4] flex items-center justify-between rounded-md p-8 md:w-48'>
                    <img className='max-h-16 mix-blend-multiply' src={company_logo} alt='' />
                </div>
                
                <div>
                    <h3 className='text-2xl font-bold text-[#474747] '>{job_title}</h3>
                    <h3 className='text-xl text-ui-light-gray'>{company_name}</h3>

                    <div className='flex gap-4 items-center'>
                        <span className='btn-outline'>{remote_or_onsite}</span>
                        <span className='btn-outline'>{fulltime_or_parttime}</span>
                    </div>

                    <div className='text-ui-light-gray flex flex-col lg:flex-row lg:items-center lg:gap-3 font-semibold'>
                        <p className='flex items-center'><HiOutlineLocationMarker className='text-xl mr-1' />{location}</p>
                        <p className='flex items-center'><HiOutlineCurrencyDollar className='text-xl mr-1' /> Salary : {salary}</p>
                    </div>
                </div>
            </div>

            <Link to={`/job/${id}`}><button className='btn-primary mt-4'>View Details</button></Link>

        </div>
    );
};

export default AppliedJobCard;