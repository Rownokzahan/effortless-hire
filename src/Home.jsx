import React from 'react';

const Home = () => {
    return (
        <>
            {/* Banner section */}
            <section className='flex flex-col md:flex-row gap-8 items-center bg-ui-light px-2 md:px-10 lg:px-20 pb-10'>

                <div className='w-full'>
                    <div className=' flex flex-col gap-4 md:gap-8 md:max-w-md'>
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
                    <img className='w-62 mx-auto md:w-full' src="banner-person.png" alt="" />
                </div>

            </section>
        </>

    );
};

export default Home;