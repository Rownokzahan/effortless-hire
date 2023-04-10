import React from 'react';

const JobCategoryCard = ({ category }) => {
    
    const { logo, name, jobs_available } = category

    return (
        <div className='p-8 bg-ui-light rounded-lg'>
            <span className='text-4xl w-max p-2 rounded-lg bg-[#e8e5f9]'>{ logo }</span>
            <div>
                <h3 className='text-xl font-bold mt-8 mb-2 text-[#474747]'>{name}</h3>
                <p className='text-ui-light-gray'>{jobs_available} Jobs Avaiable</p>
            </div>
        </div>
    );
};

export default JobCategoryCard;