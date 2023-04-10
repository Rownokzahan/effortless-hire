import React from 'react';
import { HiOutlineLocationMarker, HiOutlineCurrencyDollar } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = ({job}) => {

    const { id, company_logo, job_title, company_name, remote_or_onsite, fulltime_or_parttime, location, salary } = job

    return (
        <div className='p-8 rounded-lg border border-gray-300'>
            <img className='w-36 mb-6' src={company_logo} alt="" />
            <h3 className='text-2xl font-bold text-[#474747] '>{ job_title }</h3>
            <h3 className='text-xl text-ui-light-gray'>{company_name}</h3>

            <div className='flex gap-4 items-center'>
                <span className='btn-outline'>{remote_or_onsite}</span>
                <span className='btn-outline'>{fulltime_or_parttime}</span>
            </div>

            <div className='text-ui-light-gray flex flex-col lg:flex-row lg:items-center lg:gap-3 font-semibold'>
                <p className='flex items-center'><HiOutlineLocationMarker className='text-xl mr-1' />{location}</p>
                <p className='flex items-center'><HiOutlineCurrencyDollar className='text-xl mr-1' /> Salary : {salary}</p>
            </div>

            <Link to={`/job/${id}`}><button className='btn-primary mt-4'>View Details</button></Link>
            
        </div>
    );
};

export default Job;