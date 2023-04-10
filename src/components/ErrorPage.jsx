import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='flex flex-col justify-center items-center text-center h-screen md:p-16 bg-gray-100 text-gray-900'>

            <h2 className='mb-8 font-extrabold text-7xl md:text-9xl text-gradient'> {status || 404} </h2>

            <p className='text-2xl text-ui-dark font-bold mb-8'>
                {error?.message? error.message : "Page Not Found"}
            </p>

            <Link to='/'>
                <button className='text-ui-blue underline'>Go Back to homepage</button>
            </Link>

        </section>
    )
}

export default ErrorPage