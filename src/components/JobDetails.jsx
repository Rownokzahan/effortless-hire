import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { HiOutlineCurrencyDollar } from "react-icons/hi"
import { GiTie } from 'react-icons/gi'
import { FiPhone } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { RiMapPinLine } from "react-icons/ri"
import { toast } from 'react-hot-toast'

const JobDetails = () => {

    const jobDetail = useLoaderData()
    const { id, job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information, location } = jobDetail

    const handleApplyNow = id => {

        let appliedJobs = []
        const savedJobs = JSON.parse(localStorage.getItem('applied-jobs'))

        if (savedJobs) {           
            if (savedJobs.includes(id)) {
                toast.error('You have already applied for this job!')
                return;
            }

            else {
                appliedJobs = [...savedJobs, id]
                toast.success('Job application successful!')
            }
        }

        else {
            appliedJobs.push(id)
        }

        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
    }

    return (
        <>
            <section className="px-2 md:px-10 lg:px-20 h-40 bg-ui-light text-ui-dark relative flex items-center justify-center" >
                <img className='absolute -top-44 md:-top-[120px] right-0 w-36' src="/images/banner-part1.png" alt="" />
                <img className='absolute bottom-0 left-0 w-36' src="/images/banner-part2.png" alt="" />
                <h2 className='text-3xl font-bold align-middle'>Job Details</h2>
            </section>

            <section className='mx-2 md:mx-10 lg:mx-20 my-32 grid lg:grid-cols-3 gap-10'>
                <div className='text-ui-light-gray text-justify space-y-6 lg:col-span-2'>
                    <p>
                        <span className='font-bold text-ui-dark mr-1'>Job Decription : </span>
                        <br />
                        {job_description}
                    </p>

                    <p>
                        <span className='font-bold text-ui-dark mr-1'>Job Responsibility : </span>
                        <br />
                        {job_responsibility}
                    </p>

                    <p>
                        <span className='font-bold text-ui-dark mr-1'>Job Requirements : </span>
                        <br />
                        {educational_requirements}
                    </p>

                    <p>
                        <span className='font-bold text-ui-dark mr-1'>Experiences : </span>
                        <br />
                        {experiences}
                    </p>
                </div>

                <div className='space-y-6'>

                    <div className='bg-ui-light rounded-md p-6 text-ui-light-gray'>
                        <h3 className='text-xl font-bold text-ui-dark'>Job Details</h3>
                        <hr className='my-4' />

                        <p className='flex items-center mb-2'>
                            <HiOutlineCurrencyDollar className='text-ui-blue text-xl mr-1' />
                            <span className='font-bold text-[#474747] flex items-center mr-1'>Salary : </span>
                            {salary} (Per Month)
                        </p>

                        <p className='flex items-center mb-2'>
                            <GiTie className='text-ui-blue text-xl mr-1' />
                            <span className='font-bold text-[#474747] flex items-center mr-1'>Job Title : </span> {job_title}
                        </p>


                        <h3 className='text-xl font-bold text-ui-dark mt-6'>Contact Information</h3>
                        <hr className='my-4' />

                        <p className='flex items-center mb-2'>
                            <FiPhone className='text-ui-blue text-xl mr-1' />
                            <span className='font-bold text-[#474747] flex items-center mr-1'>Phone : </span>
                            {contact_information.phone}
                        </p>

                        <p className='flex items-center mb-2'>
                            <MdOutlineEmail className='text-ui-blue text-xl mr-1' />
                            <span className='font-bold text-[#474747] flex items-center mr-1'>Email : </span>
                            {contact_information.email}
                        </p>

                        <p className='flex items-center mb-2'>
                            <RiMapPinLine className='text-ui-blue text-xl mr-1' />
                            <span className='font-bold text-[#474747] flex items-center mr-1'>Address: </span> {location}
                        </p>
                    </div>

                    <button onClick={() => handleApplyNow(id)} className="btn-primary w-full">Apply Now</button>
                </div>
            </section>
        </>
    );
};

export default JobDetails;