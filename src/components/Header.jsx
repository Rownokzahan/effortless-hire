import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import ActiveLink from './ActiveLink';

const Header = () => {

    const [openNavLink, setOpenNavLink] = useState(false);

    return (
        <nav className='px-2 md:px-10 lg:px-20 py-8 flex flex-col md:flex-row justify-between md:items-center bg-ui-light relative text-gray-800'>
            <Link className='font-bold text-2xl text-ui-dark' to='/'>
                EffortlessHire
            </Link>

            {!openNavLink && <RxHamburgerMenu onClick={() => setOpenNavLink(true)} className='w-6 z-10 h-6 absolute right-8 top-8 md:hidden' />}

            <div className={`menu ${openNavLink ? 'flex' : 'hidden'}`}>
                <RxCross1 onClick={() => setOpenNavLink(false)} className="w-6 h-6 absolute right-2 top-2 md:hidden" />
                <ActiveLink to={'/'}>Home</ActiveLink>
                <ActiveLink to={'/statistics'}>Statistics</ActiveLink>
                <ActiveLink to={'/jobs'}>Applied Jobs</ActiveLink>
                <ActiveLink to={'/blog'}>Blog</ActiveLink>
            </div>

            <button className='btn-primary mt-4 md:mt-0'>Start Applying</button>
        </nav>
    );
};

export default Header;